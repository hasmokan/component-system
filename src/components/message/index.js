import Vue from 'vue'
import MyMessage from "./index";
let instances=[];
let instance;
let MyMessageComponent=Vue.extend(MyMessage);
function open(options={}){
    instance=new MyMessageComponent({
        el:document.createElement('div'),
        propsData:options,
    });
    document.body.appendChild(instance.$el);

    let messageTop=20;
    instances.forEach((item)=>{
        messageTop+=item.$el.offsetHeight+10;
    });
    instance.top=messageTop;
    instance.visible=true;
    instances.push(instance);
    return instance;

}
export default {
    open:(options={})=>{
        return open(options);
    },
    success:(options)=>{
        let _options=Object.assign({},options,{type:'success'});
        return open(_options);
    },
    fail:(options)=>{
        let _options=Object.assign({},options,{type:'fail'});
        return open(_options);
    },
    warning:(options)=>{
        let _options=Object.assign({},options,{type:'warning'});
        return open(_options);
    },
    info:(options)=>{
        let _options=Object.assign({},options,{type:'info'});
        return open(_options);
    },
}