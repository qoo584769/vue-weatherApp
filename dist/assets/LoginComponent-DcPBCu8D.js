import{r as l,e as p,f as t,w as n,m as d,p as b,b as w,x,a as m}from"./index-gkcA8eG5.js";const c={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},f={class:"mb-4"},g={class:"mb-4"},k={__name:"LoginComponent",setup(v){const o=l(""),r=l(""),u=x(),i=async()=>{try{const a=await m.post("http://127.0.0.1:5000/api/login",{username:o.value,password:r.value}),{token:e}=a.data;localStorage.setItem("token",e);const s=await m.get(`http://127.0.0.1:5000/api/member/${o.value}`);localStorage.setItem("userName",s.data.username),u.push({name:"home"})}catch(a){console.error("登入失敗:",a)}};return(a,e)=>(w(),p("div",c,[e[5]||(e[5]=t("h2",{class:"text-2xl font-bold mb-4"},"會員登入",-1)),t("form",{onSubmit:b(i,["prevent"])},[t("div",f,[e[2]||(e[2]=t("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"使用者名稱",-1)),n(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),type:"text",id:"username",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[d,o.value]])]),t("div",g,[e[3]||(e[3]=t("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"密碼",-1)),n(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),type:"password",id:"password",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[d,r.value]])]),e[4]||(e[4]=t("button",{type:"submit",class:"w-full bg-blue-500 text-white rounded-md py-2"},"登入",-1))],32)]))}};export{k as default};