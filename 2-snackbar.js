import"./assets/styles-B9v-xDsL.js";import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",o=>{o.preventDefault();const t=Number(s.elements.delay.value),m=s.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{m==="fulfilled"?e(t):r(t)},t)}).then(e=>{i.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight",timeout:3e3})}).catch(e=>{i.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight",timeout:3e3})})});
//# sourceMappingURL=2-snackbar.js.map
