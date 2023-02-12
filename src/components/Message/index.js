// import Vue from 'vue'
// import MyMessage from "@/components/Message/MyMessage";
// let instances=[];
// let count=0;
// let MyMessageComponent=Vue.extend(MyMessage);
// function open(options={}){
//     let id='mymessage_'+count++;
//     options.id=id;
//     options.onClose=function (){

//     }
//     let instance=new MyMessageComponent({
//         el:document.createElement('div'),
//         propsData:options,
//         data:{
//             onClose(id){
//                 onCloseFun(id);
//             }
//         }
//     })

//     document.body.appendChild(instance.$el);
//    let messageTop=680;
//    instances.forEach((item)=>{
//        messageTop += item.$el.offsetHeight+10;
//     });

//    instance.top = messageTop;
//     instance.visible=true;
//     instances.push(instance);
//     return instance;
// }
// function onCloseFun(id){
//     let index=-1;
//     let removeElHeight;
//     for (let i=0;i<instances.length;i++){
//         let _el=instances[i].$el;
//         if (_el.id===id){
//             removeElHeight = _el.offsetHeight;
//             // eslint-disable-next-line no-unused-vars
//             index = i;
//             instances.splice(i,1)
//         }
//         if (instances[i].$el.id==id){
//             instances.splice(i,1)
//         }
//     }
//     for (let i=0;i<instances.length;i++){
//         let _el = instances[i].$el;
//         let _top=parseInt(_el.style.top.replace('px',''));
//         _el.style.top=_top - removeElHeight -10 + 'px';
//     }
// }

// export default {
//     open:(options={})=>{
//         return open(options)
//     },
//     success:(options)=>{
//         let _options=Object.assign({},options,{type:'success'})
//         return open(_options)
// },
//     info:(options)=>{
//         let _options=Object.assign({},options,{type:'info'})
//         return open(_options)
//     },
//     warning:(options)=>{
//         let _options=Object.assign({},options,{type:'warning'})
//         return open(_options)
//     },
//     error:(options)=>{
//         let _options=Object.assign({},options,{type:'error'})
//         return open(_options)
//     }
// }