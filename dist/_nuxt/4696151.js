(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(t,e,n){"use strict";n(47),n(34),n(142),n(31),n(107),n(202),n(13),n(51),n(28),n(102),n(145),n(37);var o=n(151),r=n(30),c=n(153),d=function(t){return t.split(/[\n\s,]+/).filter((function(t){return!!t.replace(/[^0-9]/g,"").length})).map((function(t){return parseInt(t.replace(/[^0-9]/g,""))}))},l=function(t){return t.filter((function(e,n){return t.indexOf(e)==n})).sort((function(a,b){return a-b}))},m=function(t,e){return t.filter((function(t){return t==e})).length},x=function(t,e){var n=l(t);if(e>0){for(var o=0,i=0;i<e;i++)o+=m(t,n[i]);return m(t,n[e])+o}return m(t,n[0])},f=function(t,e){return m(t,e)/t.length},h=function(t,e){var n=l(t);if(e>0){for(var o=0,i=0;i<e;i++)o+=f(t,n[i]);return f(t,n[e])+o}return f(t,n[0])},w=function(t){return t.reduce((function(a,b){return a+b}),0)/t.length},y=function(t){var e=Object(c.a)(t).sort((function(a,b){return a-b})),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2},v=function(t){var e,n={};t.forEach((function(t){t in n||(n[t]=0),n[t]++}));var o=0;return Object.entries(n).forEach((function(t){var n=Object(r.a)(t,2),c=n[0],d=n[1];d>o&&(e=parseInt(c),o=parseInt(d.toString()))})),e};e.a=function(t,e){Object(o.a)(t),e("cleanDataSet",d),e("orderedDataset",l),e("absoluteFrecuency",m),e("relativeFrecuency",f),e("accAbsoluteFrecuency",x),e("accRelativeFrecuency",h),e("arithmeticMean",w),e("arithmeticMedian",y),e("arithmeticMode",v)}},154:function(t,e,n){"use strict";var o=n(21),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavBar"),this._v(" "),e("div",{staticClass:"py-2"},[e("div",{staticClass:"container mx-auto"},[e("Nuxt",{staticClass:"animate__animated animate__fadeIn"})],1)])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:n(204).default})},155:function(t,e,n){n(156),t.exports=n(157)},195:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("38dfa7e4",content,!0,{sourceMap:!1})},196:function(t,e,n){(e=n(70)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-b-2{border-bottom-width:2px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-wrap{flex-wrap:wrap}.content-center{align-content:center}.justify-between{justify-content:space-between}.h-64{height:16rem}.text-lg{font-size:1.125rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.overflow-x-auto{overflow-x:auto}.p-2{padding:.5rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.static{position:static}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-left{text-align:left}.text-center{text-align:center}.text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}.text-blue-600{--text-opacity:1;color:#3182ce;color:rgba(49,130,206,var(--text-opacity))}.hover\\:text-gray-700:hover{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.whitespace-no-wrap{white-space:nowrap}.w-full{width:100%}.z-0{z-index:0}.z-10{z-index:10}.gap-2{grid-gap:.5rem;gap:.5rem}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.btn-primary{--bg-opacity:1;background-color:#4299e1;background-color:rgba(66,153,225,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);padding:.5rem 1rem;text-align:center}.btn-primary:hover{--bg-opacity:1;background-color:#2c5282;background-color:rgba(44,82,130,var(--bg-opacity))}.btn-primary:focus{outline:2px solid transparent;outline-offset:2px}.textarea{border-width:1px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border-radius:.25rem;--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));width:100%;padding:.5rem}.textarea:focus{outline:2px solid transparent;outline-offset:2px;--border-opacity:1;border-color:#a0aec0;border-color:rgba(160,174,192,var(--border-opacity))}.table{table-layout:auto;width:100%;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.table tfoot,.table thead{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.table tbody tr:hover{--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}.table td{padding:.5rem 1rem;border-width:1px}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-wrap{flex-wrap:wrap}.md\\:whitespace-normal{white-space:normal}.md\\:w-auto{width:auto}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},197:function(t,e,n){"use strict";var o=n(74);n.n(o).a},198:function(t,e,n){(e=n(70)(!1)).push([t.i,".nav-link[data-v-454ed41a]{margin-left:.5rem;margin-right:.5rem;font-size:1.125rem;border-bottom-width:2px;border-color:transparent}.nav-link[data-v-454ed41a]:hover{--text-opacity:1;color:#553c9a;color:rgba(85,60,154,var(--text-opacity))}.github-link[data-v-454ed41a]{--text-opacity:1;color:#3182ce;color:rgba(49,130,206,var(--text-opacity));margin-left:.5rem;margin-right:.5rem;font-size:1.125rem}.github-link[data-v-454ed41a]:hover{--text-opacity:1;color:#2c5282;color:rgba(44,82,130,var(--text-opacity))}.nuxt-link-exact-active.nav-link[data-v-454ed41a]{--text-opacity:1;color:#553c9a;color:rgba(85,60,154,var(--text-opacity))}@media (min-width:768px){.nav-link[data-v-454ed41a]:hover,.nuxt-link-exact-active.nav-link[data-v-454ed41a]{--border-opacity:1;border-color:#9f7aea;border-color:rgba(159,122,234,var(--border-opacity))}}",""]),t.exports=e},204:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{openMenu:!1}}},r=(n(197),n(21)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 shadow animate__animated animate__fadeInDown animate__faster"},[n("div",{staticClass:"flex justify-between container mx-auto flex-wrap animate__animated animate__fadeInDown z-10"},[n("div",{staticClass:"flex"},[n("nuxt-link",{staticClass:"flex",attrs:{to:"/"}},[n("img",{staticClass:"w-18",attrs:{src:"icon.svg",alt:"Ícono de la aplicación"}}),t._v(" "),n("div",{staticClass:"flex flex-wrap content-center"},[n("span",{staticClass:"text-2xl ml-2"},[t._v("Estadística")])])])],1),t._v(" "),n("div",{staticClass:"md:hidden text-3xl text-black hover:text-gray-700 z-10"},[t.openMenu?t._e():n("i",{staticClass:"fas fa-bars cursor-pointer",on:{click:function(e){t.openMenu=!t.openMenu}}}),t._v(" "),t.openMenu?n("i",{staticClass:"fas fa-times cursor-pointer",on:{click:function(e){t.openMenu=!t.openMenu}}}):t._e()]),t._v(" "),n("div",{staticClass:"block w-full md:w-auto md:flex md:flex-wrap content-center animate__animated animate__fadeIn z-0",class:{hidden:!t.openMenu}},[n("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/"}},[t._v("Datos no agrupados")]),t._v(" "),n("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/grouped"}},[t._v("Datos agrupados")]),t._v(" "),n("nuxt-link",{staticClass:"block text-center my-2 nav-link",attrs:{to:"/linealRegression"}},[t._v("Regresión lineal")]),t._v(" "),t._m(0)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"block text-center my-2 github-link",attrs:{href:"https://github.com/eduardodevop/estadistica",target:"_blank"}},[e("i",{staticClass:"fab fa-github"}),this._v(" Github\n        ")])}],!1,null,"454ed41a",null);e.default=component.exports},74:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("503df3fa",content,!0,{sourceMap:!1})}},[[155,5,1,6]]]);