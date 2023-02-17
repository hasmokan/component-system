/**
 * @jest-environment jsdom
 */
 import { shallowMount } from '@vue/test-utils'
 import radio from "@/components/Radio"

 describe('emui-radio',()=>{
    it('props label',done=>{
        const wrapper =shallowMount(radio,{
            propsData:{
                label:'上海'
            }
        })
        expect(wrapper.find('.emui-radio').element.value).toBe('上海');
        done()
    }),
    it('radio disabled true',done=>{
        const wrapper =shallowMount(radio,{
            propsData: {
                disabled:true
              }
        })
        expect(wrapper.find('.emui-radio__disabled--true').exists()).toBe(true);
        done()
    }),
    it('radiogroup vertcial true',done=>{
        const wrapper=shallowMount(radio.item,{
            propsData: {
                vertical:true
              }
            })
        expect(wrapper.find('.is-vertical').exists()).toBe(true);
        done();
      })
 })