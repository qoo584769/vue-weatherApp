import{r as d,e as b,f as t,w as n,m,p as x,h as u,k as f,q as g,s as w,b as v,a as y}from"./index-C6YlpVRc.js";const c={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},k={class:"mb-4"},V={class:"mb-4"},q={class:"mb-4"},B={class:"mt-4 text-sm text-gray-700"},U={__name:"RegisterComponent",setup(C){const r=d(""),l=d(""),a=d(""),i=async()=>{try{const s=await y.post("http://127.0.0.1:5000/api/register",{username:r.value,email:a.value,password:l.value});console.log(s.data)}catch(s){console.error(s)}};return(s,e)=>{const p=w("router-link");return v(),b("div",c,[e[9]||(e[9]=t("h2",{class:"text-2xl font-bold mb-4"},"會員註冊",-1)),t("form",{onSubmit:x(i,["prevent"])},[t("div",k,[e[3]||(e[3]=t("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"帳號",-1)),n(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.value=o),type:"text",id:"username",placeholder:"帳號",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[m,r.value]])]),t("div",V,[e[4]||(e[4]=t("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"密碼",-1)),n(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),type:"password",id:"password",placeholder:"密碼",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[m,l.value]])]),t("div",q,[e[5]||(e[5]=t("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"信箱",-1)),n(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>a.value=o),type:"email",id:"email",placeholder:"信箱",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[m,a.value]])]),e[6]||(e[6]=t("button",{type:"submit",class:"w-full bg-blue-500 text-white rounded-md py-2"},"註冊",-1))],32),t("p",B,[e[8]||(e[8]=u(" 已經有帳號了？ ")),f(p,{to:"/login"},{default:g(()=>e[7]||(e[7]=[u("登入")])),_:1})])])}}};export{U as default};
