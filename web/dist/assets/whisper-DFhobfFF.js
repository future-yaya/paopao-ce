import{a0 as b,_ as B}from"./index-v3l9hw1O.js";import{d as C,H as p,e as N,q as U,w as s,j as a,k as n,A as _,x as i}from"./@vue-CQsYufSu.js";import{S as V,I as z,T as I,b as R,e as S,i as T}from"./naive-ui-DNcWoFGl.js";const W={class:"whisper-wrap"},$={class:"whisper-line"},j={class:"whisper-line send-wrap"},q=C({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(r,{emit:u}){const d=r,o=p(""),t=p(!1),m=u,c=()=>{m("success")},h=()=>{t.value=!0,b({user_id:d.user.id,content:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",c()}).catch(e=>{t.value=!1})};return(e,l)=>{const w=V,f=z,g=I,v=R,x=S,y=T;return N(),U(y,{show:e.show,"onUpdate:show":c,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",W,[n(g,{"show-icon":!1},{default:s(()=>[_(" 即将发送私信给: "),n(f,{style:{"max-width":"100%"}},{default:s(()=>[n(w,{type:"success"},{default:s(()=>[_(i(e.user.nickname)+"@"+i(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",$,[n(v,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":l[0]||(l[0]=k=>o.value=k),maxlength:"200","show-count":""},null,8,["value"])]),a("div",j,[n(x,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:h},{default:s(()=>[_(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}}),M=B(q,[["__scopeId","data-v-0cbfe47c"]]);export{M as _};