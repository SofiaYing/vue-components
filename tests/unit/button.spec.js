import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'
import { expect } from 'chai'
import Vue from 'vue'

describe('Button.vue', () => {
  it('存在着',()=>{
    expect(Button).to.exist
    expect(1).to.exist
  })
  it('可以设置icon',()=>{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData:{
        icon: 'search'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-search')
    vm.$destroy()
  })
})