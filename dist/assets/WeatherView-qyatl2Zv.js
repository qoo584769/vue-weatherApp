import{u as pe,r as i,c as M,o as H,a as _e,b as he,d as s,e as r,f as e,n as $,F as S,g as F,h as D,t as _,w as R,v as K,i as ge,j as V,k as ae,l as Z,m as P,p as B,q as be,s as I,x as ye}from"./index-uAt5Y-jZ.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as U}from"./axios-CCb-kr4I.js";const we={class:"w-dvw md:w-4/5 text-black"},ke={class:"menu-list w-0 h-0 fixed left-0 bottom-0 m-auto flex z-20 overflow-hidden transition-all duration-700 md:p-5"},Ie={key:0,class:"flex flex-col flex-grow md:flex-row text-white rounded-xl overflow-hidden"},Ce={class:"w-full flex flex-row md:flex-col py-1 bg-[#1f1f1f] shadow absolute bottom-0 left-0 md:relative md:w-20"},$e={class:"flex flex-row w-full justify-around md:space-y-4 md:justify-start md:w-auto md:flex-col text-[#777777] relative overflow-auto"},We={class:"w-full md:w-1/3 bg-[#2d2e30] shadow border-r-2 border-r-[#3e3e3e]"},Ee={class:"mx-4 mt-2 flex text-[#777777]"},Te=["onClick"],Se={key:1,class:"border-b border-[#3e3e3e]"},De=["onClick"],Fe={key:3,class:"h-dvh overflow-y-auto"},Ne=["onClick"],je=["onClick"],Ae={class:"flex flex-col bg-[#2d2e30] h-full md:flex md:flex-1"},Ve={class:"py-2"},Me={class:"text-center my-2"},ze={class:"bg-[#3f3f3f] text-[#ffffff80] text-sm px-2 py-1 rounded-lg"},Le={class:"inline-block px-4 py-2 bg-[#555555] rounded shadow"},Oe={key:0,class:"p-4 shadow bg-[#2D2D2D] flex mb-16 md:mb-0"},Re={key:1,class:"bg-[#1f1f1f] text-white z-20"},He={class:"px-10 py-4 hover:bg-[#777777]"},Be={class:"px-10 py-4 hover:bg-[#777777]"},Je={key:2,class:"fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"},Ke={class:"bg-white p-4 rounded"},Pe={key:3,class:"fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"},Ze={class:"bg-white p-4 rounded"},Ue={key:4,class:"fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"},Ye={class:"bg-white p-4 rounded"},qe={class:""},Ge=["onClick"],Qe={__name:"WebsocketComponent",setup(y){const m=pe(),a=i(!0),l=i(!1),d=i(null),n=i(""),o=i(null),v=i(""),k=i("all"),h=i([{viewName:"全部",viewValue:"all"},{viewName:"好友",viewValue:"friend"},{viewName:"群組",viewValue:"group"}]),b=i([]),c=i([]),u=i(""),W=i(""),E=i(""),w=i(null),T=i([]),z=i(!1),L=i(!1),O=i(!1),j=i("");let x;const J=()=>{const f="wss://python-linebot-eib1.onrender.com";x=new WebSocket(`${f}/${j.value}`),x.addEventListener("message",async t=>{const g=JSON.parse(t.data);switch(g.type){case"history":T.value=g.messages,n.value=g.members,await P(),d.value&&(d.value.scrollTop=d.value.scrollHeight);break;case"message":T.value.push(g),await P(),d.value&&(d.value.scrollTop=d.value.scrollHeight);break;case"invited_to_room":x.send(JSON.stringify({type:"get_lists",user_email:o.value.storedEmail}));break;case"friend_added":c.value.push({friend_id:g.friend_id,friend_email:g.friend_email,friend_name:g.friend_name,friend_room_id:g.friend_room_id}),b.value.push({room_id:g.friend_room_id,room_name:g.friend_name});break;case"friend_removed":c.value=c.value.filter(C=>C.friend_id!==g.friend_id),b.value=b.value.filter(C=>C.room_id!==g.friend_room_id),T.value=null;break;case"list_update":b.value=g.chatLists,c.value=g.friendLists,x.send(JSON.stringify({type:"get_history",user_email:o.value.storedEmail}));break;case"room_created":{const C={room_id:g.room_id,room_name:g.room_name,room_type:g.room_type};G(C);break}}}),x.addEventListener("open",async()=>{await P(),x.send(JSON.stringify({type:"get_lists",user_email:o.value.storedEmail})),console.log(`${o.value.storedEmail} WS連線成功`)}),x.addEventListener("close",()=>{console.log("WS連線已關閉")})},le=()=>{if(u.value.trim()!==""){const f={type:"create_room",room_name:u.value,creator_id:o.value.storedEmail};x.send(JSON.stringify(f)),u.value="",z.value=!1}},ne=()=>{if(W.value.trim()!==""&&w.value.room_id){const f=W.value;x.send(JSON.stringify({type:"add_friend",user_email:o.value.storedEmail,friend_email:f})),W.value="",L.value=!1}},ie=f=>{x.send(JSON.stringify({type:"remove_friend",user_email:o.value.storedEmail,friend_id:f.friend_id,friend_room_id:f.friend_room_id}))},de=()=>{E.value!==""&&w.value&&(x.send(JSON.stringify({type:"invite_to_room",room_id:w.value.room_id,room_name:w.value.room_name,friend_id:E.value.friend_id,friend_name:E.value.friend_name,friend_email:E.value.friend_email,user_name:o.value.storedName})),E.value="",O.value=!1)},G=f=>{f.room_id!==w.value.room_id&&(l.value=!0,x&&(T.value=[],x.close()),j.value=f.room_id,w.value={room_id:f.room_id,room_name:f.room_name,room_type:f.room_type},J())},ue=f=>{if(f.friend_room_id===w.value.room_id){a.value=!0,a.value=!0;return}x&&x.close(),T.value=[],l.value=!0,j.value=f.friend_room_id,w.value={room_id:f.friend_room_id,room_name:f.friend_name,room_type:"friend"},a.value=!0,J()},Q=async()=>{v.value.trim()&&(x.send(JSON.stringify({type:"message",author:o.value.storedName,content:v.value.trim()})),v.value="")},ce=async()=>{localStorage.removeItem("token"),o.value={},m.push({name:"login"})},X=()=>{z.value=!z.value},ee=()=>{L.value=!L.value},te=()=>{O.value=!O.value},me=M(()=>k.value==="all"?b.value:b.value.filter(f=>f.room_type===k.value)),fe=M(()=>T.value?T.value.reduce((f,t)=>{const g=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(t.time)),C=new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",hour:"2-digit",minute:"2-digit",hourCycle:"h24"}).format(new Date(t.time));return f[g]||(f[g]=[]),f[g].push({time:C,author:t.author,content:t.content}),f},{}):[]);return H(()=>{const f=localStorage.getItem("token"),t=localStorage.getItem("userEmail"),g=localStorage.getItem("userName"),C=JSON.parse(localStorage.getItem("room_id"));f&&(o.value={storedToken:f,storedName:g,storedEmail:t},j.value=C.room_id,w.value={room_id:C.room_id,room_name:C.room_name,room_type:"group"},J())}),_e(()=>{x&&x.close()}),(f,t)=>{var C,oe;const g=he("router-link");return s(),r("div",we,[t[19]||(t[19]=e("input",{type:"checkbox",id:"menu"},null,-1)),t[20]||(t[20]=e("label",{for:"menu",class:"line w-10 h-10 cursor-pointer block p-0 fixed bottom-5 z-30 transition-all duration-700"},[e("div",{class:"menu transition-all duration-700"})],-1)),e("div",ke,[o.value?(s(),r("div",Ie,[e("div",Ce,[e("ul",$e,[e("li",{onClick:t[0]||(t[0]=p=>[a.value=!1,l.value=!1]),class:$([{"text-white":!a.value},"flex flex-col items-center justify-center g-gray-200 cursor-pointer"])},t[5]||(t[5]=[e("span",{class:"material-symbols-outlined text-4xl"},"person",-1),e("span",{class:"text-xs"},"好友",-1)]),2),e("li",{onClick:t[1]||(t[1]=p=>[a.value=!0,l.value=!1,w.value={},T.value=[],j.value=""]),class:$([{"text-white":a.value},"flex flex-col items-center justify-center g-gray-200 cursor-pointer"])},t[6]||(t[6]=[e("span",{class:"material-symbols-outlined text-4xl"},"chat",-1),e("span",{class:"text-xs"},"聊天",-1)]),2),e("li",{class:"flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer",onClick:ee},t[7]||(t[7]=[e("span",{class:"material-symbols-outlined text-4xl"}," person_add ",-1),e("span",{class:"text-xs"},"加入好友",-1)])),e("li",{class:"flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer",onClick:X},t[8]||(t[8]=[e("span",{class:"material-symbols-outlined text-4xl"},"chat_add_on",-1),e("span",{class:"text-xs"},"建立群組",-1)])),e("li",{class:"flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer",onClick:ce},t[9]||(t[9]=[e("span",{class:"material-symbols-outlined text-4xl"}," logout ",-1),e("span",{class:"text-xs"}," 登出 ",-1)])),t[10]||(t[10]=e("li",{class:"flex flex-col items-center justify-center g-gray-200 rounded-full cursor-pointer"},[e("label",{for:"menu",class:"line w-10 h-10 cursor-pointer block p-0 ixed relative ottom-5 transition-all duration-700"},[e("div",{class:"menu transition-all duration-700"})]),e("label",{for:"menu",class:"cursor-pointer text-xs"},"關閉")],-1))])]),e("div",We,[a.value?(s(),r("div",{key:0,class:$(["border-b border-[#3e3e3e]",{block:a.value&&!l.value,"hidden md:block":a.value&&l.value}])},[e("ul",Ee,[(s(!0),r(S,null,F(h.value,(p,N)=>(s(),r("li",{class:$(["text-sm mr-2 -mb-[1px] py-1 cursor-pointer",{"border-b border-white text-white":k.value===p.viewValue}]),onClick:A=>k.value=p.viewValue,key:N},_(p.viewName),11,Te))),128))])],2)):D("",!0),a.value?D("",!0):(s(),r("div",Se,t[11]||(t[11]=[e("ul",{class:"mx-4 mt-2 flex text-[#777777]"},[e("li",{class:"text-sm mr-2 border-b border-white text-white -mb-[1px] py-1 cursor-pointer"}," 好友 ")],-1)]))),a.value?(s(),r("div",{key:2,class:$(["h-dvh overflow-y-auto",{block:a.value&&!l.value,"hidden md:block":a.value&&l.value}])},[e("ul",null,[(s(!0),r(S,null,F(me.value,p=>(s(),r("li",{key:p.room_id,class:$(["py-2 px-4 rounded cursor-pointer",{"bg-[#353638]":p.room_id===w.value.room_id}]),onClick:N=>G(p)},_(p.room_name),11,De))),128))])],2)):D("",!0),a.value?D("",!0):(s(),r("div",Fe,[e("ul",null,[(s(!0),r(S,null,F(c.value,p=>(s(),r("li",{key:p.friend_id,class:$([{"bg-[#353638]":p.friend_id===w.value.room_id},"flex justify-between px-4 py-2 rounded cursor-pointer"])},[e("span",{class:"flex-grow",onClick:N=>ue(p)},_(p.friend_name),9,Ne),e("span",{class:"bg-[#FF334B] material-symbols-outlined",onClick:N=>ie(p)}," close ",8,je)],2))),128))])]))]),e("div",Ae,[e("div",{class:$(["px-4 flex items-center justify-between",{"border-b border-[#3e3e3e]":j.value}])},[e("span",Ve,_((C=w.value)==null?void 0:C.room_name),1),((oe=w.value)==null?void 0:oe.room_type)==="group"?(s(),r("button",{key:0,class:"",onClick:te},t[12]||(t[12]=[e("span",{class:"icon-fill material-symbols-outlined align-middle text-3xl text-[#4CC764]"}," group_add ",-1)]))):D("",!0)],2),e("div",{class:"flex-1 p-4 overflow-y-auto",ref_key:"messageContainer",ref:d},[(s(!0),r(S,null,F(fe.value,(p,N)=>(s(),r("div",{key:N,class:""},[e("ul",null,[e("li",Me,[e("span",ze,_(new Intl.DateTimeFormat("zh-TW",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)!==N?`${N}`:"今天"),1)]),(s(!0),r(S,null,F(p,(A,ve)=>(s(),r("li",{key:ve},[e("div",{class:$(["text-sm mb-1",{"text-right":A.author===o.value.storedName}])},_(A.author),3),e("div",{class:$(["mb-2 flex items-end",{"justify-end":A.author===o.value.storedName}])},[e("div",{class:$(["text-xs mr-2",{"order-1 ml-2 mr-0":A.author!==o.value.storedName}])},_(A.time),3),e("div",Le,[e("p",null,_(A.content),1)])],2)]))),128))])]))),128))],512),j.value?(s(),r("div",Oe,[R(e("input",{"onUpdate:modelValue":t[2]||(t[2]=p=>v.value=p),onKeyup:ge(Q,["enter"]),type:"text",placeholder:"輸入訊息",class:"outline-none flex-grow px-3 py-2 rounded bg-[#3f3f3f]"},null,544),[[K,v.value]]),e("button",{onClick:Q,class:"ml-2 p-2 bg-[#4CC764] rounded"},"送出")])):D("",!0)])])):(s(),r("ul",Re,[e("li",He,[V(g,{to:"/logon"},{default:ae(()=>t[13]||(t[13]=[Z("註冊")])),_:1})]),e("li",Be,[V(g,{to:"/login"},{default:ae(()=>t[14]||(t[14]=[Z("登入")])),_:1})]),t[15]||(t[15]=e("li",{class:"px-10 py-4 hover:bg-[#777777]"},[e("label",{for:"menu",class:"cursor-pointer"},"關閉")],-1))])),L.value?(s(),r("div",Je,[e("div",Ke,[t[16]||(t[16]=e("h2",{class:"text-lg font-bold mb-2"},"加入好友",-1)),R(e("input",{"onUpdate:modelValue":t[3]||(t[3]=p=>W.value=p),placeholder:"好友信箱",class:"w-full p-2 border border-gray-300 rounded mb-2 text-black"},null,512),[[K,W.value]]),e("button",{onClick:ne,class:"w-full p-2 bg-blue-500 text-white rounded"},"加入"),e("button",{onClick:ee,class:"w-full mt-2 p-2 bg-red-500 text-white rounded"}," 取消 ")])])):D("",!0),z.value?(s(),r("div",Pe,[e("div",Ze,[t[17]||(t[17]=e("h2",{class:"text-lg font-bold mb-2"},"建立新群組",-1)),R(e("input",{"onUpdate:modelValue":t[4]||(t[4]=p=>u.value=p),placeholder:"新聊天室名稱",class:"w-full p-2 border border-gray-300 rounded mb-2 text-black"},null,512),[[K,u.value]]),e("button",{onClick:le,class:"w-full p-2 bg-green-500 text-white rounded"}," 建立 "),e("button",{onClick:X,class:"w-full mt-2 p-2 bg-red-500 text-white rounded"}," 取消 ")])])):D("",!0),O.value?(s(),r("div",Ue,[e("div",Ye,[t[18]||(t[18]=e("h2",{class:"text-lg font-bold mb-2"},"邀請好友加入群組",-1)),e("ul",qe,[(s(!0),r(S,null,F(c.value,p=>(s(),r("li",{class:"",key:p.friend_id},[e("span",{class:"black cursor-pointer",onClick:N=>E.value=p},_(p.friend_name),9,Ge)]))),128))]),e("button",{onClick:de,class:"w-full p-2 bg-blue-500 text-white rounded"}," 邀請 "),e("button",{onClick:te,class:"w-full mt-2 p-2 bg-red-500 text-white rounded"}," 取消 ")])])):D("",!0)])])}}},Xe=xe(Qe,[["__scopeId","data-v-5018b921"]]),Y=B("currentWeather",()=>{const y="CWA-E6161C67-7694-4D12-B55A-F7EA4D41BE4C",m=i(466920),a=i(null),l=i({day:["bg-[url('@/assets/image/bg-sunny.jpg')]","bg-[url('@/assets/image/bg-cloudy-day.jpg')]","bg-[url('@/assets/image/bg-overcast.jpg')]","bg-[url('@/assets/image/bg-rain.jpg')]","bg-[url('@/assets/image/bg-foggy.jpg')]"],night:["bg-[url('@/assets/image/bg-clear-night.jpg')]","bg-[url('@/assets/image/bg-moon.jpg')]","bg-[url('@/assets/image/bg-overcast.jpg')]","bg-[url('@/assets/image/bg-rain.jpg')]","bg-[url('@/assets/image/bg-foggy.jpg')]"]}),d=h=>h>=6&&h<18?"day":"night",n=(h="晴",b)=>{const c=h.match(/雷|多雲|雨|陰|晴/),u=d(new Date(b).getHours());return!c||c[0]==="晴"?l.value[u][0]:c[0]==="多雲"?l.value[u][1]:c[0]==="陰"?l.value[u][2]:c[0]==="雨"?l.value[u][3]:l.value[u][4]},o=async(h=466920)=>{try{let b="";["C0D660","C0K330","C0M790"].includes(h)?b=`https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${y}&StationId=${h}`:b=`https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${y}&StationId=${h}`;const u=await U.get(b);a.value=u.data.records.Station[0]}catch(b){console.error(b)}},v=M(()=>{var h,b,c,u,W,E,w,T;return[{icon:"water_drop",text:"降雨機率",value:(b=(h=a.value)==null?void 0:h.WeatherElement)==null?void 0:b.Now.Precipitation,unit:"%"},{icon:"humidity_percentage",text:"濕度",value:(u=(c=a.value)==null?void 0:c.WeatherElement)==null?void 0:u.RelativeHumidity,unit:"%"},{icon:"air",text:"風速",value:(E=(W=a.value)==null?void 0:W.WeatherElement)==null?void 0:E.WindSpeed,unit:"m/s"},{icon:"explore",text:"氣壓",value:(T=(w=a.value)==null?void 0:w.WeatherElement)==null?void 0:T.AirPressure,unit:"hPa"}]}),k=M(()=>{var c,u,W,E;const h=(u=(c=a.value)==null?void 0:c.WeatherElement)==null?void 0:u.Weather,b=(E=(W=a.value)==null?void 0:W.ObsTime)==null?void 0:E.DateTime;return n(h,b)});return{stationId:m,weatherData:a,currentDetail:v,currentBackground:k,fetchCurrentWeather:o}}),se=B("hourlyWeather",()=>{const y="CWA-E6161C67-7694-4D12-B55A-F7EA4D41BE4C",m=i("臺北市"),a=i([]),l=i(!1),d=async(o="臺北市")=>{try{l.value=!1;const v=await U.get("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089",{params:{Authorization:y,LocationName:o}});a.value=v.data.records.Locations[0].Location[0],l.value=!0}catch(v){console.error(v)}},n=M(()=>l.value?a.value.WeatherElement.find(v=>v.ElementName==="天氣現象").Time.map((v,k)=>({wx:v,temp:a.value.WeatherElement.find(h=>h.ElementName==="溫度").Time[k]})):{temp:[],wx:[]});return{locationName:m,hourlyForecast:a,fetchHourlyForecast:d,processHourlyForecast:n,isReady:l}}),re=B("weeklyWeather",()=>{const y="CWA-E6161C67-7694-4D12-B55A-F7EA4D41BE4C",m=i("臺北市"),a=i([]),l=i(!1),d=async(o="臺北市")=>{try{l.value=!1;const v=await U.get("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091",{params:{Authorization:y,LocationName:o}});a.value=v.data.records.Locations[0].Location[0],l.value=!0}catch(v){console.error(v)}},n=M(()=>l.value?a.value.WeatherElement.find(v=>v.ElementName==="天氣現象").Time.map((v,k)=>({wx:v,minTemp:a.value.WeatherElement.find(h=>h.ElementName==="最低溫度").Time[k],maxTemp:a.value.WeatherElement.find(h=>h.ElementName==="最高溫度").Time[k]})):{wx:[],minTemp:[],maxTemp:[]});return{locationName:m,weeklyForecast:a,fetchWeeklyForecast:d,processWeeklyForecast:n}}),et={class:"relative mb-10 md:mr-4"},tt=["checked"],ot=["value"],at={__name:"CitySelectionComponent",props:{},setup(y){const m=Y(),a=se(),l=re(),d=i(!1),n=i([{name:"基隆市",stationId:466940,cityId:312605},{name:"臺北市",stationId:466920,cityId:315078},{name:"新北市",stationId:466881,cityId:2515397},{name:"桃園縣",stationId:467050,cityId:3369297},{name:"新竹市",stationId:"C0D660",cityId:313567},{name:"新竹縣",stationId:467571,cityId:3369298},{name:"苗栗縣",stationId:467280,cityId:3369299},{name:"臺中市",stationId:467490,cityId:315040},{name:"彰化縣",stationId:467270,cityId:3369300},{name:"南投縣",stationId:467650,cityId:3369301},{name:"雲林縣",stationId:"C0K330",cityId:3369302},{name:"嘉義市",stationId:467480,cityId:312591},{name:"嘉義縣",stationId:"C0M790",cityId:3369303},{name:"臺南市",stationId:467410,cityId:314999},{name:"高雄市",stationId:467441,cityId:313812},{name:"屏東縣",stationId:467590,cityId:3369304},{name:"臺東縣",stationId:467660,cityId:3369305},{name:"花蓮縣",stationId:466990,cityId:3369306},{name:"宜蘭縣",stationId:467080,cityId:3369296},{name:"澎湖縣",stationId:467350,cityId:3369307},{name:"金門縣",stationId:467110,cityId:2332525},{name:"連江縣",stationId:467990,cityId:2332501}]),o=i(""),v=i(""),k=()=>{const b=n.value.filter(c=>c.name===o.value);v.value=b[0].stationId,m.fetchCurrentWeather(v.value),a.fetchHourlyForecast(o.value),l.fetchWeeklyForecast(o.value),h()},h=()=>{d.value=!d.value};return(b,c)=>(s(),r("div",et,[e("input",{type:"checkbox",name:"",id:"menu_control",checked:d.value,class:"hidden"},null,8,tt),e("label",{class:$(["md:hidde w-10 h-10 overflow-hidden rounded-[10px] backdrop-blur bg-white/[.02] absolute z-10 ight-8 op-8 md:ight-4 md:op-4 after:content-[''] after:w-8 after:h-[2px] after:px-2 after:overflow-hidden after:bg-white/[.7] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:m-auto after:shadow-[0px_-8px_0_rgba(255,255,255,0.7)] before:content-[''] before:w-5 before:h-[2px] before:absolute before:top-0 before:bottom-0 before:left-1 before:m-auto before:bg-white/[.01] before:shadow-[0px_8px_0_rgba(255,255,255,0.7)]",[d.value?" opacity-0":" opacity-100"]]),for:"menu_control",onClick:h},null,2),e("div",{class:$(["order rounded-xl h-12 md:h-10 absolute w-full ight-0 z-10 overflow-hidden flex transition-transform ease-in-out duration-300",[d.value?"translate-y-0":"-translate-y-full"]])},[R(e("select",{name:"",id:"","onUpdate:modelValue":c[0]||(c[0]=u=>o.value=u),class:"appearance-none outline-none px-10 md:px-4 bg-black/[.05] backdrop-blur flex-1 text-sm rounded-lg block w-full p-2.5",onChange:c[1]||(c[1]=u=>k())},[c[2]||(c[2]=e("option",{disabled:"",value:"",class:"bg-gray-700 border-gray-600 text-white"},"請選擇縣市",-1)),(s(!0),r(S,null,F(n.value,u=>(s(),r("option",{key:u.name,value:u.name,class:"appearance-none bg-gray-700 border-gray-600 placeholder-gray-900 text-white"},_(u.name),9,ot))),128))],544),[[be,o.value]])],2)]))}},q=B("weatherIcon",()=>{const y=i({day:["sunny","partly_cloudy_day","cloud","rainy","thunderstorm"],night:["bedtime","partly_cloudy_night","cloud","rainy","thunderstorm"]}),m=l=>l>=6&&l<18?"day":"night";return{getWeatherIcon:(l="1",d)=>{const n=l.match(/雷|多雲|雨|陰|晴/),o=m(new Date(d).getHours());return n?n[0]==="晴"?y.value[o][0]:n[0]==="多雲"?y.value[o][1]:n[0]==="陰"?y.value[o][2]:n[0]==="雨"?y.value[o][3]:y.value[o][4]:parseInt(l)===1?y.value[o][0]:parseInt(l)<=4?y.value[o][1]:parseInt(l)<=7?y.value[o][2]:parseInt(l)<=14?y.value[o][3]:y.value[o][4]}}}),st={class:"text-center space-y-4 pt-5 pb-5"},rt={class:"font-bold text-3xl"},lt={class:"text-6xl flex justify-center items-end"},nt={class:""},it={class:"material-symbols-outlined text-[40px]"},dt={class:"flex justify-center gap-4"},ut={class:"flex gap-1"},ct={class:"text-3xl"},mt={class:"flex gap-1"},ft={class:"text-3xl"},vt={class:"text-2xl"},pt={class:"flex flex-wrap md:rounded-xl md:m-5 overflow-hidden g-slate-400 justify-betwen"},_t={class:"flex gap-1 mb-2"},ht={class:"material-symbols-outlined"},gt={class:""},bt={class:"text-2xl"},yt={class:"text-xs"},xt={__name:"CurrentWeatherComponent",setup(y){const m=Y(),a=q();return H(()=>{m.fetchCurrentWeather()}),(l,d)=>{var n,o,v,k,h,b,c;return s(),r(S,null,[e("div",st,[e("h2",rt,_((n=I(m).weatherData)==null?void 0:n.GeoInfo.CountyName),1),e("div",lt,[e("span",nt,_((o=I(m).weatherData)==null?void 0:o.WeatherElement.AirTemperature)+"°",1),e("span",it,_(I(a).getWeatherIcon((v=I(m).weatherData)==null?void 0:v.WeatherElement.Weather,(k=I(m).weatherData)==null?void 0:k.ObsTime.DateTime)),1)]),e("div",dt,[e("div",ut,[d[0]||(d[0]=e("span",{class:"vertical-text text-sm font-medium"},"最高",-1)),e("h3",ct,_((h=I(m).weatherData)==null?void 0:h.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo.AirTemperature)+"° ",1)]),e("div",mt,[d[1]||(d[1]=e("span",{class:"vertical-text text-sm font-medium"},"最低",-1)),e("h3",ft,_((b=I(m).weatherData)==null?void 0:b.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo.AirTemperature)+"° ",1)])]),e("div",vt,_((c=I(m).weatherData)==null?void 0:c.WeatherElement.Weather),1)]),e("ul",pt,[(s(!0),r(S,null,F(I(m).currentDetail,(u,W)=>(s(),r("li",{class:"flex flex-col justify-center items-center text-white p-4 bg-black/[.05] backdrop-blur w-1/2 border-r border-b even:border-r-0 [&:nth-last-child(2)]:border-b-0 last:border-b-0",key:W},[e("p",_t,[e("span",ht,_(u.icon),1),e("span",gt,_(u.text),1)]),e("span",bt,[Z(_(u.value)+" ",1),e("small",yt,_(u.unit),1)])]))),128))])],64)}}},wt={class:"p-4 bg-black/[.1] backdrop-blur rounded-xl"},kt={key:0,class:""},It={class:"overflow-x-auto"},Ct={class:"flex gap-4 py-2"},$t={class:"time"},Wt={class:""},Et={class:"icon"},Tt={class:"material-symbols-outlined"},St={class:"temprature"},Dt={key:1,class:"text-white"},Ft={__name:"HourlyForecastComponent",setup(y){const m=se(),a=q();return H(()=>{m.fetchHourlyForecast()}),(l,d)=>(s(),r("div",wt,[d[0]||(d[0]=e("div",{class:""},[e("p",{class:"text-white hourly-title border-b pb-1"},"逐三小時天氣預報")],-1)),I(m).isReady?(s(),r("div",kt,[e("div",It,[e("ul",Ct,[(s(!0),r(S,null,F(I(m).processHourlyForecast,(n,o)=>(s(),r("li",{class:"g-slate-500 text-white flex flex-col items-center p-4 min-w-fit",key:o},[e("p",$t,_(new Intl.DateTimeFormat("zh-TW",{weekday:"short"}).format(new Date(n.wx.StartTime))),1),e("p",Wt,_(new Intl.DateTimeFormat("en-US",{hour:"2-digit",hour12:!1}).format(new Date(n.wx.StartTime))),1),e("p",Et,[e("span",Tt,_(I(a).getWeatherIcon(n.wx.ElementValue[0].WeatherCode,n.wx.StartTime)),1)]),e("p",St,_(n.temp.ElementValue[0].Temperature)+"°C",1)]))),128))])])])):(s(),r("div",Dt,"載入中......."))]))}},Nt={class:"bg-black/[.05] g-emerald-500 backdrop-blur p-5 rounded-xl"},jt={class:"text-white"},At={class:"mt-2 p-4"},Vt={key:0,class:"flex items-center justify-between gap-4"},Mt={class:""},zt={class:""},Lt={class:"material-symbols-outlined"},Ot={class:"flex items-center flex-grow gap-3"},Rt={class:""},Ht={class:""},Bt={__name:"WeeklyForecastComponent",setup(y){const m=re(),a=q();return H(()=>{m.fetchWeeklyForecast()}),(l,d)=>(s(),r("div",Nt,[e("div",jt,[d[0]||(d[0]=e("h2",{class:"border-b pb-1"},"未來一周天氣",-1)),e("ul",At,[(s(!0),r(S,null,F(I(m).processWeeklyForecast,(n,o)=>(s(),r("li",{class:"",key:o},[o%2===1?(s(),r("div",Vt,[e("div",Mt,_(new Intl.DateTimeFormat("zh-TW",{weekday:"narrow"}).format(new Date(n.wx.StartTime))),1),e("div",zt,[e("span",Lt,_(I(a).getWeatherIcon(n.wx.ElementValue[0].WeatherCode,n.wx.StartTime)),1)]),e("div",Ot,[e("span",Rt,_(n.minTemp.ElementValue[0].MinTemperature)+"°C",1),e("div",{class:"bg-black w-full h-1",style:ye({background:`linear-gradient(to right, #fff ${n.minTemp.ElementValue[0].MinTemperature/3}%, #2e3192 ${n.minTemp.ElementValue[0].MinTemperature/3}%, #0090fb ${n.maxTemp.ElementValue[0].MaxTemperature*3}%, #fff ${n.maxTemp.ElementValue[0].MaxTemperature*3}%, #fff) 100%`})},null,4),e("span",Ht,_(n.maxTemp.ElementValue[0].MaxTemperature)+"°C",1)])])):D("",!0)]))),128))])])]))}},Jt={class:"container relative mx-auto z-10 rounded-xl h-full bg-all-inherit"},Kt={class:"grid h-full md:grid-rows-1 auto-rows-auto"},Pt={class:"grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-[1fr_2fr]"},Zt={class:"md:overflow-y-auto md:overflow-x-hidden bg-transparent md:m-5 text-white"},Ut={class:"g-slate-400 overflow-x-auto space-y-5 md:p-5 md:m-5"},Qt={__name:"WeatherView",setup(y){const m=Y();return(a,l)=>(s(),r("div",{class:$(["h-full md:h-dvh p-2 md:p-5 z-[-1] bg-cover bg-fixed md:after:h-full after:bg-black/[.5] after:w-full after:absolute after:top-0 after:left-0 after:bg-fixed after:bg-cover after:z-0 after:backdrop-blur",I(m).currentBackground])},[e("div",Jt,[V(Xe),e("div",Kt,[e("div",Pt,[e("div",Zt,[V(at),V(xt)]),e("div",Ut,[V(Ft),V(Bt)])])])])],2))}};export{Qt as default};
