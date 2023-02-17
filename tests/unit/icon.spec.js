/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import Icon from "@/components/Icon";

// import { shallowMount } from '@vue/test-utils'
// import dialog from "@/components/dialog";
describe('test ToDoList', () => {
    it('test name', () => {
        const wrapper = shallowMount(Icon, {
            propsData: {
                width: "100px",
                height: "100px"
            }
        })
        expect(wrapper.find('.emui-icon').exists()).toBe(true)

    })
})
