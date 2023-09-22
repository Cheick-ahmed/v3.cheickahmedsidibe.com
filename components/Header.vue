<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

let headerRef = ref(null)
let avatarRef = ref(null)
let isInitial = ref(true)

const router = useRouter()
let isHomePage = ref(router.currentRoute.value.path === '/')

function clamp(number, a, b) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return Math.min(Math.max(number, min), max)
}

let downDelay = avatarRef.value?.offsetTop ?? 0
let upDelay = 64

const setProperty = (property, value) => {
    document.documentElement.style.setProperty(property, value)
}

const updateHeaderStyles = () => {
    let { top, height } = headerRef.value.getBoundingClientRect()
    let downDelay = avatarRef.value?.offsetTop ?? 0

    let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
    )

    if (isInitial.value) {
        setProperty('--header-position', 'sticky')
    }

    setProperty('--content-offset', `${downDelay}px`)

    if (isInitial.value || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
    } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
    } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
    }
}

const updateAvatarStyles = () => {
    if (!isHomePage.value) {
        return
    }

    downDelay = avatarRef.value?.offsetTop ?? 0

    let fromScale = 1
    let toScale = 36 / 64
    let fromX = 0
    let toX = 2 / 16

    let scrollY = downDelay - window.scrollY

    let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
    scale = clamp(scale, fromScale, toScale)

    let x = (scrollY * (fromX - toX)) / downDelay + toX
    x = clamp(x, fromX, toX)

    setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
    )

    let borderScale = 1 / (toScale / scale)
    let borderX = (-toX + x) * borderScale
    let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

    setProperty('--avatar-border-transform', borderTransform)
    setProperty('--avatar-border-opacity', scale === toScale ? 1 : 0)
}

const updateStyles = () => {
    if ((headerRef.value !== null && avatarRef.value !== null)) {
        updateHeaderStyles()
        updateAvatarStyles()
        isInitial.value = false
    }
}

watch(() => router.currentRoute.value.path, (newPath) => {
    isHomePage.value = newPath === '/'
    if (avatarRef.value) {
        downDelay = avatarRef.value.offsetTop
    }
    updateStyles()
}, { immediate: true })

onMounted(() => {
    updateStyles()

    setProperty('--header-top', `0px`)
    setProperty('--avatar-top', `0px`)
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateStyles, { passive: true })
    window.removeEventListener('resize', updateStyles)
})

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

useHead({
    script: [{ innerHTML: modeScript }]
})
</script>



<template>
    <header class="pointer-events-none relative z-50 flex flex-col"
        :style="{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }">
        <template v-if="isHomePage">
            <div class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" ref="avatarRef"></div>
            <Container class="top-0 order-last -mb-3 pt-3" :style="{ position: 'var(--header-position)' }">
                <div class="relative">
                    <AvatarContainer class="absolute left-0 top-3 origin-left transition-opacity"
                        :style="{ opacity: 'var(--avatar-border-opacity, 0)', transform: 'var(--avatar-border-transform)' }" />
                    <Avatar class="block h-16 w-16 origin-left" large
                        :style="{ transform: 'var(--avatar-image-transform)' }" />
                </div>
            </Container>
        </template>

        <div class="top-0 z-10 pt-6" :style="{ position: 'var(--header-position)' }" ref="headerRef">
            <Container>
                <div class="relative flex gap-4">
                    <div class="flex flex-1">
                        <AvatarContainer v-if="!isHomePage">
                            <Avatar />
                        </AvatarContainer>
                    </div>
                    <div class="flex flex-1 justify-end md:justify-center">
                        <MobileNavigation class="pointer-events-auto md:hidden" />
                        <DesktopNavigation class="pointer-events-auto hidden md:block" />
                    </div>
                    <div class="flex justify-end md:flex-1 space-x-3">
                        <div class="pointer-events-auto">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </header>
    <div v-if="isHomePage" :style="{ height: 'var(--content-offset)' }" />
</template>
