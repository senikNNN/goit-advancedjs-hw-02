import"./assets/styles-B9v-xDsL.js";import{f as p,i}from"./assets/vendor-BbbuE1sJ.js";let l=null,c=null;const n=document.querySelector("[data-start]"),D=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]"),r=document.querySelector("#datetime-picker");n.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(l=t,n.disabled=!1)}};p(r,q);n.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,c=setInterval(()=>{const e=l-new Date;if(e<=0){clearInterval(c),u(0,0,0,0),r.disabled=!1,i.success({title:"Completed",message:"Countdown finished!"});return}const{days:t,hours:o,minutes:s,seconds:d}=g(e);u(t,o,s,d)},1e3)});function g(e){const m=Math.floor(e/864e5),y=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:y,minutes:f,seconds:h}}function a(e){return String(e).padStart(2,"0")}function u(e,t,o,s){D.textContent=e,S.textContent=a(t),b.textContent=a(o),C.textContent=a(s)}
//# sourceMappingURL=1-timer.js.map
