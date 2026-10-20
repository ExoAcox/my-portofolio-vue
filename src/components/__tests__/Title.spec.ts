import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Title from '../Title.vue'

describe('Title', () => {
  it('renders properly', () => {
    const wrapper = mount(Title, { slots: { default: 'ABOUT' } })
    expect(wrapper.text()).toContain('ABOUT')
  })

  it('has sticky class by default', () => {
    const wrapper = mount(Title, { slots: { default: 'TEST' } })
    expect(wrapper.find('div').classes()).toContain('sticky')
  })
})
