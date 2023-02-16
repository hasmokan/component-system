/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import input from "@/components/Input";

describe('emui-input',()=>{
    it('size large',done=>{
        const wrapper =shallowMount(input,{
            propsData: {
                size: "large"
              }
        })
        expect(wrapper.find('.emui-input__size-large').exists()).toBe(true);
        done()
    }),
    it('disabled true',done=>{
        const wrapper =shallowMount(input,{
            propsData: {
                disabled:true
              }
        })
        expect(wrapper.find('.emui-input__disabled-true').exists()).toBe(true);
        done()
    })

})