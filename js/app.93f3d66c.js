(()=>{"use strict";var e={676:(e,t,s)=>{var r=s(751),a=s(641),o=s(953),n=s(445),l=s(335);const i=(0,n.nY)("keyStore",{state:()=>({key:null}),actions:{async getKey(){try{const e=await l.A.get("https://66a3b48344aa6370458236cc.mockapi.io/api/key");this.key=e.data[0].key}catch(e){throw console.error("Error fetching key:",e),e}}}}),u={id:"app",class:"text-center"},c={key:0},d={__name:"App",setup(e){const t=i(),s=(0,o.KR)(null),r=async()=>{try{await t.getKey(),s.value=t.key}catch(e){console.error("Error fetching setup data:",e)}};return(0,a.sV)((()=>{r()})),(e,t)=>{const r=(0,a.g2)("router-view"),o=(0,a.g2)("Loader");return(0,a.uX)(),(0,a.CE)("div",u,[s.value?((0,a.uX)(),(0,a.CE)("div",c,[(0,a.bF)(r)])):((0,a.uX)(),(0,a.Wv)(o,{key:1}))])}}},g=d,p=g;var v=s(220),y=s(33);const h=(0,n.nY)("questionsStore",{state:()=>({questions:[],selectedQuestions:[],userAnswers:[]}),actions:{setSelectedQuestions(e){this.selectedQuestions=e},setUserAnswers(e){this.userAnswers=e},async getQuestions(){const e=i();try{const t=await l.A.get("https://quizapi.io/api/v1/questions",{headers:{"X-Api-Key":e.key,"Content-Type":"application/json"}});this.questions=t.data}catch(t){console.error("Error fetching categories:",t)}}}}),b=(0,a.Lk)("h1",{class:"text-4xl font-bold text-gray-800 m-12"},"Questions",-1),k={key:0,class:"min-h-screen bg-gray-100 p-6"},f={class:"bg-white p-8 py-14 rounded-lg shadow-lg"},w={class:"flex justify-between"},m={class:"mb-4 font-semibold"},x={class:"space-y-4"},_=["value"],L={class:"mt-4 flex justify-center"},E={class:"flex items-center font-semibold px-2.5"},C=["disabled"],X=["disabled"],q={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"},R={__name:"Questions",props:{category:{type:String,required:!0}},setup(e){const t=e,s=h(),n=(0,o.KR)([]),l=(0,o.KR)(0),i=(0,o.KR)([]),u=(0,v.rd)(),c=async e=>{try{n.value=s.questions.filter((e=>e.correct_answer)).filter((t=>t.category===e)).map((e=>({question:e.question,answers:e.answers,correct_answer:e.correct_answer}))),s.setSelectedQuestions(n.value)}catch(t){console.error("Error fetching setup data:",t)}},d=()=>{l.value>0&&l.value--},g=()=>{l.value<n.value.length-1&&l.value++},p=()=>{u.push({name:"Results"}),s.setUserAnswers(i.value)};return(0,a.sV)((()=>{c(t.category)})),(e,t)=>{const s=(0,a.g2)("router-link"),o=(0,a.g2)("Loader");return(0,a.uX)(),(0,a.CE)(a.FK,null,[b,n.value.length?((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",f,[(0,a.Lk)("div",w,[(0,a.Lk)("p",m,(0,y.v_)(n.value[l.value].question),1)]),(0,a.Lk)("div",x,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(Object.entries(n.value[l.value].answers).filter((([e,t])=>t)),(([e,s],o)=>((0,a.uX)(),(0,a.CE)("label",{key:o,class:"flex items-center space-x-2"},[(0,a.bo)((0,a.Lk)("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>i.value[l.value]=e),value:e,class:"form-radio"},null,8,_),[[r.XL,i.value[l.value]]]),(0,a.Lk)("span",null,(0,y.v_)(s),1)])))),128))]),(0,a.Lk)("div",L,[l.value>0?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:d,class:"w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"}," Previous ")):(0,a.Q3)("",!0),(0,a.Lk)("h1",E,(0,y.v_)(l.value+1)+"/"+(0,y.v_)(n.value.length),1),l.value<n.value.length-1?((0,a.uX)(),(0,a.CE)("button",{key:1,onClick:g,disabled:!i.value[l.value],class:"w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"}," Next ",8,C)):((0,a.uX)(),(0,a.CE)("button",{key:2,disabled:!i.value[l.value],onClick:p,class:"w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"}," Show Results ",8,X))])]),(0,a.Lk)("div",q,[(0,a.bF)(s,{to:{name:"categories"},class:"text-lg font-semibold text-gray-800 bg-white p-6 rounded-lg shadow hover:bg-gray-200 transition"},{default:(0,a.k6)((()=>[(0,a.eW)((0,y.v_)(n.value.length?"Exit Quiz":"No questions please go back to categories"),1)])),_:1})])])):((0,a.uX)(),(0,a.Wv)(o,{key:1}))],64)}}},O=R,Q=O,j={key:0},K=(0,a.Lk)("h1",{class:"text-4xl font-bold text-gray-800 m-12"},"Categories",-1),S={class:"flex justify-center items-center bg-gray-100 p-14"},A={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4"},F={class:"text-lg font-semibold text-gray-800"},W={__name:"Categories",setup(e){const t=h(),s=(0,o.KR)([]),r=async()=>{try{s.value=[...new Set(t.questions.map((e=>e.category)).filter((e=>e)))]}catch(e){console.error("Error fetching setup data:",e)}};return(0,a.sV)((async()=>{await t.getQuestions(),await r()})),(e,t)=>{const r=(0,a.g2)("router-link"),o=(0,a.g2)("Loader");return s.value.length?((0,a.uX)(),(0,a.CE)("div",j,[K,(0,a.Lk)("div",S,[(0,a.Lk)("div",A,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.value,(e=>((0,a.uX)(),(0,a.Wv)(r,{key:e.id,to:{name:"Questions",params:{category:e}},class:"bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"},{default:(0,a.k6)((()=>[(0,a.Lk)("p",F,(0,y.v_)(e),1)])),_:2},1032,["to"])))),128))])])])):((0,a.uX)(),(0,a.Wv)(o,{key:1}))}}},z=W,P=z,T=(0,a.Lk)("h1",{class:"text-4xl font-bold text-gray-800 m-12"},"Results",-1),V={key:0,class:"min-h-screen bg-gray-100 p-6"},Y={class:"bg-white p-6 rounded-lg shadow-lg mb-6"},I={class:"text-lg font-semibold"},U={class:"bg-white p-6 rounded-lg shadow-lg"},M={class:"font-semibold"},N={key:0,class:"text-blue-500"},B={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4"},D={__name:"Results",setup(e){const t=h(),s=t.selectedQuestions,r=t.userAnswers,n=(0,a.EW)((()=>s.filter(((e,t)=>r[t]===e.correct_answer)).length)),l=(0,a.EW)((()=>0===s.length?0:(n.value/s.length*100).toFixed(2)));return(e,t)=>{const n=(0,a.g2)("router-link"),i=(0,a.g2)("Loader");return(0,a.uX)(),(0,a.CE)(a.FK,null,[T,(0,o.R1)(s).length>0&&(0,o.R1)(r).length>0?((0,a.uX)(),(0,a.CE)("div",V,[(0,a.Lk)("div",Y,[(0,a.Lk)("p",I,"Your score: "+(0,y.v_)(l.value)+"%",1)]),(0,a.Lk)("div",U,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,o.R1)(s),((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"mb-4"},[(0,a.Lk)("p",M,(0,y.v_)(e.question),1),(0,a.Lk)("p",{class:(0,y.C4)({"text-green-500":(0,o.R1)(r)[t]===e.correct_answer,"text-red-500":(0,o.R1)(r)[t]!==e.correct_answer})}," Your answer: "+(0,y.v_)(e.answers[(0,o.R1)(r)[t]]),3),(0,o.R1)(r)[t]!==e.correct_answer?((0,a.uX)(),(0,a.CE)("p",N," Correct answer: "+(0,y.v_)(e.answers[e.correct_answer]),1)):(0,a.Q3)("",!0)])))),128))]),(0,a.Lk)("div",B,[(0,a.bF)(n,{to:{name:"categories"},class:"text-lg font-semibold text-gray-800 bg-white p-6 rounded-lg shadow hover:bg-gray-200 transition"},{default:(0,a.k6)((()=>[(0,a.eW)(" Back to categories ")])),_:1})])])):((0,a.uX)(),(0,a.Wv)(i,{key:1}))],64)}}},G=D,H=G,J=[{path:"/",name:"categories",component:P},{path:"/questions/:category",name:"Questions",component:Q,props:!0},{path:"/results",name:"Results",component:H}],Z=(0,v.aE)({history:(0,v.LA)("/quizapp/"),routes:J}),$=Z,ee=s.p+"img/loading.5f7d5988.gif",te={id:"loading"},se=(0,a.Lk)("img",{class:"img",src:ee,alt:"loading..."},null,-1),re=[se];function ae(e,t,s,r,o,n){return(0,a.uX)(),(0,a.CE)("div",te,re)}const oe={name:"Loading"};var ne=s(262);const le=(0,ne.A)(oe,[["render",ae]]),ie=le,ue=(0,r.Ef)(p),ce=(0,n.Ey)();ue.use(ce),ue.use($),ue.mount("#app"),ue.component("Loader",ie)}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,(()=>{var e=[];s.O=(t,r,a,o)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],l=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](r[i])))?r.splice(i--,1):(l=!1,o<n&&(n=o));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{s.p="/quizapp/"})(),(()=>{var e={524:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,l,i]=r,u=0;if(n.some((t=>0!==e[t]))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(i)var c=i(s)}for(t&&t(r);u<n.length;u++)o=n[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},r=self["webpackChunkquizapp"]=self["webpackChunkquizapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=s.O(void 0,[504],(()=>s(676)));r=s.O(r)})();
//# sourceMappingURL=app.93f3d66c.js.map