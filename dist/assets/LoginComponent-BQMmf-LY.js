import{r as n,e as b,f as t,w as d,v as m,A as c,j as g,k as w,b as f,d as x,l as v,u as y,q as i}from"./index-CKkl44Dk.js";const k={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},_={class:"mb-4"},S={class:"mb-4"},I={__name:"LoginComponent",setup(N){const s=n(""),r=n(""),u=y(),p=async()=>{const l="https://python-linebot-eib1.onrender.com";try{const e=await i.post(`${l}/api/login`,{email:s.value,password:r.value}),{token:a}=e.data;localStorage.setItem("token",a);const o=await i.get(`${l}/api/user/${s.value}`);console.log(o),localStorage.setItem("userEmail",o.data.email),localStorage.setItem("userName",o.data.username),localStorage.setItem("room_id",JSON.stringify({room_id:o.data.rooms[0].room_id,room_name:o.data.rooms[0].room_name})),a&&u.push({name:"weather"})}catch(e){console.error("登入失敗:",e)}};return(l,e)=>{const a=f("router-link");return x(),b("div",k,[e[6]||(e[6]=t("h2",{class:"text-2xl font-bold mb-4"},"會員登入",-1)),t("form",{onSubmit:c(p,["prevent"])},[t("div",_,[e[2]||(e[2]=t("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"信箱",-1)),d(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),type:"text",id:"email",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[m,s.value]])]),t("div",S,[e[3]||(e[3]=t("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"密碼",-1)),d(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),type:"password",id:"password",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"},null,512),[[m,r.value]])]),e[4]||(e[4]=t("button",{type:"submit",class:"w-full bg-blue-500 text-white rounded-md py-2"},"登入",-1))],32),g(a,{to:"/"},{default:w(()=>e[5]||(e[5]=[v("回首頁")])),_:1})])}}};export{I as default};
