/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import Link from "@/components/Link/link";

// 测试是否激活
describe('test ToDoList', () => {
    it('test type', () => {
        const wrapper = shallowMount(Link, {
            propsData: {
                type: 'default',
                disabled: true
            }
        })
        expect(wrapper.find('.emui-link--default').exists()).toBe(true)
        expect(wrapper.find('.disabled').exists()).toBe(true)

    })

})
