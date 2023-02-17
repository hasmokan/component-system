/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import dialog from "@/components/dialog";
describe('test ToDoList', done => {
    it('test title', () => {
        const wrapper = shallowMount(dialog, {
            propsData: {
                title: "emui hello world"
            }
        })
        expect(wrapper.html()).toContain('emui hello world')
    })

})
