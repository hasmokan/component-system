/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils'
import button from "@/components/Button";
describe('test ToDoList', done => {
    it('test type', () => {
        const wrapper = shallowMount(button, {
            propsData: {
                type: "primarygold"
            }
        })
        expect(wrapper.find('.emui-button--primarygold').exists()).toBe(true);
    }),
        it('test round', () => {
            const wrapper = shallowMount(button, {
                propsData: {
                    round: "round"
                }
            })
            expect(wrapper.find('.round').exists()).toBe(true);
        })

})






// it('size large',done=>{
//         const wrapper =shallowMount(input,{
//             propsData: {
//                 size: "large"
//               }
//         })
//         expect(wrapper.find('.emui-input__size-large').exists()).toBe(true);
//         done()
//     }),
