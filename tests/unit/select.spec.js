/**
 * @jest-environment jsdom
 */
 import { shallowMount } from '@vue/test-utils'
 import select from "@/components/Select"
 describe('emui-select',()=>{
    it('select showoption',async ()=>{
        const wrapper=shallowMount(select,{
            data(){
                return {
                    isShowoption: false
                }
            }
        })
        await wrapper.find('.iconfont').trigger('click');
        expect(wrapper.vm.isShowoption).toBe(true)
    })
 })