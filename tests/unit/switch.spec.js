/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import Switch from "@/components/switch";

// 测试是否激活
describe('test ToDoList', () => {
    it('test name', () => {
        const wrapper = shallowMount(Switch, {
            propsData: {
                value: true
            }
        })
        expect(wrapper.find('.is-checked').exists()).toBe(true)

    })
})
