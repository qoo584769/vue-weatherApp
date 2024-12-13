import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import CitySelectionComponent from '../CitySelectionComponent.vue'

describe('CitySelectionComponent.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('selector test', async () => {
    const wrapper = mount(CitySelectionComponent)

    expect(wrapper.vm.cityActive).toEqual('')
    expect(wrapper.vm.cityStationId).toEqual('')
    expect(wrapper.vm.cityId).toEqual('')

    await wrapper.find('select').setValue('新竹市')
    expect(wrapper.find('select').element.value).toBe('新竹市')

    expect(wrapper.vm.cityActive).toBe('新竹市')
    expect(wrapper.vm.cityStationId).toBe('C0D660')
    expect(wrapper.vm.cityId).toBe(313567)
  })
})
