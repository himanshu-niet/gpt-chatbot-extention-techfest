!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){async function n(e){!function(e){const t=document.createElement("li");t.classList.add("bg-indigo-500","text-white","rounded","p-2","w-fit","self-end","break-words"),t.innerText=e,document.getElementById("dialogue").appendChild(t),document.getElementById("prompt-input").value="",function(){const e=document.createElement("li");e.id="loading-indicator",e.classList.add("bg-gray-500","text-white","rounded","p-2","w-fit","self-start","w-12");const t=document.createElement("img");t.src="./images/loading.svg",e.appendChild(t),document.getElementById("dialogue").appendChild(e)}()}(e);const t=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:e}],temperature:.7,top_p:1,frequency_penalty:0,presence_penalty:0,max_tokens:200,n:1})});return t.ok?(await t.json()).choices[0].message.content:"error"}function o(e){document.getElementById("loading-indicator").remove();const t=document.createElement("li");"error"===e?(t.classList.add("bg-red-500","text-white","rounded","p-2","w-fit","self-start"),t.innerText="Oh no! Something went wrong. Please try again later."):(t.classList.add("bg-gray-500","text-white","rounded","p-2","w-fit","self-start"),t.innerText=e.trim()),document.getElementById("dialogue").appendChild(t),document.getElementById("prompt-input").value=""}window.onload=()=>document.getElementById("prompt-form").addEventListener("submit",e=>{e.preventDefault(),n(document.getElementById("prompt-input").value).then(e=>{o(e)})})}]);