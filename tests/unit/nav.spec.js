/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import Nav from "@/components/Nav";

// 测试是否激活
describe('test ToDoList', () => {
    it('test name', () => {
        const wrapper = shallowMount(Nav, {
            propsData: {
                vertical: true
            }
        })
        expect(wrapper.find('.vertical').exists()).toBe(true)

    })
})
