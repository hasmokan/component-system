/**
 * @jest-environment jsdom
 */
 import { shallowMount } from '@vue/test-utils'
 import checkbox from "@/components/CheckBox"

 describe('emui-checkbox',()=>{
    it('disabled true',done=>{
        const wrapper=shallowMount(checkbox,{
            propsData:{
                disabled:true
            }
        })
        expect(wrapper.find('.label-disabled').exists()).toBe(true);
        done();
    }),
    it('radiogroup vertcial true',done=>{
        const wrapper=shallowMount(checkbox.item,{
            propsData: {
                vertical:true
              }
            })
        expect(wrapper.find('.is-vertical').exists()).toBe(true);
        done();
      })
 })