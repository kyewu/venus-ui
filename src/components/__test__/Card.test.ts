import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card.vue', () => {
  it('computed函数是否存在', () => {
    expect(computed).toBeDefined();
  })

  it('test default title of the card', () => {
    const wrapper = shallowMount(Card, {
      props: {
        title: 'test',
        subTitle: 'test subtitle',
        titleClass: 'p-4'
      }
    })
    expect(wrapper.text()).toMatch('test')
    expect(wrapper.text()).toMatch('test subtitle')
    expect(wrapper.find('.title-wrapper').classes()).toContain('p-4')
  })

  it('test icon', () => {
    const wrapper = shallowMount(Card, {
      props: {
        icon: 'i-mdi-account'
      }
    })
    expect(wrapper.html().match(/i-mdi-account/))
    console.log(wrapper.html())
  })
});
