import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'

import AppButton from './AppButton.vue'

import { APP_BUTTON } from '../contants/AppButtonVariants'

const NuxtLinkStub = {
  name: 'NuxtLink',
  template: '<a><slot /></a>',
}

describe('App button', () => {
  let wrapper
  let defaultParams

  beforeEach(() => {
    defaultParams = {
      props: {
        href: 'abc',
        variant: 'primary',
      },
      global: {
        stubs: {
          NuxtLink: NuxtLinkStub,
        },
      },
    }
    wrapper = mount(AppButton, defaultParams)
  })

  it('Should render NuxtLink When href is provided', () => {
    expect(wrapper.findComponent({ name: 'NuxtLink' }).exists()).toBe(true)
  })

  it('Should render button When href is not provided', async () => {
    await wrapper.setProps({ href: undefined })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  describe('Variants', () => {
    it('applies primary variant style by default', () => {
      expect(wrapper.attributes('class')).toContain(APP_BUTTON.VARIANTS.PRIMARY)
    })

    it('applies secondary variant styles when specified', async () => {
      await wrapper.setProps({ variant: 'secondary' })

      expect(wrapper.attributes('class')).toContain(
        APP_BUTTON.VARIANTS.SECONDARY,
      )
    })

    it('merges additional classes correctly', () => {
      wrapper = mount(AppButton, {
        ...defaultParams,
        attrs: {
          class: 'additional-class',
        },
      })

      expect(wrapper.attributes('class')).toContain('additional-class')
    })
  })
})
