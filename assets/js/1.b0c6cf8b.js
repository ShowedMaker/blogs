(window.webpackJsonp=window.webpackJsonp||[]).push([[1,15,18,20,27,30,33,34,36],{374:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return a}));o(160);var n=o(0);function s(){const e=Object(n.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function a(){const e=Object(n.h)(!1);return Object(n.e)(()=>{e.value=!0}),Object(n.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},376:function(e,t,o){},382:function(e,t,o){"use strict";o.r(t);o(7),o(54);var n=o(0),s=o(27),a=o(77),r=o(374),i=Object(n.c)({components:{RecoIcon:a.b},props:{item:{required:!0}},setup(e,t){const o=Object(r.a)(),{item:a}=Object(n.i)(e),i=Object(n.a)(()=>Object(s.d)(a.value.link)),c=Object(n.a)(()=>o.$site.locales?Object.keys(o.$site.locales).some(e=>e===i.value):"/"===i.value);return{link:i,exact:c,isExternal:s.f,isMailto:s.g,isTel:s.h}}}),c=o(1),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=l.exports},383:function(e,t,o){"use strict";o.r(t);var n=o(0),s=Object(n.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),a=(o(384),o(1)),r=Object(a.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},384:function(e,t,o){"use strict";o(376)},385:function(e,t,o){},393:function(e,t,o){},394:function(e,t,o){},399:function(e,t,o){"use strict";o(385)},406:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function s(e){const t=document.querySelector(":root"),o=n[e],s="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(s),t.classList.add(e)}function a(e){if("auto"!==e)return void s(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&s("dark"),o&&s("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();s(e<6||e>=18?"dark":"light")}}},407:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(77),a=o(382),r=o(383),i=Object(n.c)({components:{NavLink:a.default,DropdownTransition:r.default,RecoIcon:s.b},props:{item:{required:!0}},setup(e,t){const o=Object(n.h)(!1);return{open:o,toggle:()=>{o.value=!o.value}}}}),c=(o(399),o(1)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(o,n){return t("li",{key:o.link||n,staticClass:"dropdown-item"},["links"===o.type?t("h4",[e._v(e._s(o.text))]):e._e(),e._v(" "),"links"===o.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(o.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:o}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=l.exports},410:function(e,t,o){},411:function(e,t,o){},412:function(e,t,o){"use strict";o(393)},413:function(e,t,o){"use strict";o(394)},414:function(e,t,o){},426:function(e,t,o){"use strict";o.r(t);o(7),o(23),o(54);var n=o(0),s=o(77),a=o(407),r=o(27),i=o(382),c=o(374),l=Object(n.c)({components:{NavLink:i.default,DropdownLink:a.default,RecoIcon:s.b},setup(e,t){const o=Object(c.a)(),s=Object(n.a)(()=>o.$themeLocaleConfig.nav||o.$themeConfig.nav||[]),a=Object(n.a)(()=>{const e=o.$site.locales||{};if(e&&Object.keys(e).length>1){const t=o.$page.path,n=o.$router.options.routes,a=o.$themeConfig.locales||{},r={text:o.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(s=>{const r=e[s],i=a[s]&&a[s].label||r.lang;let c;return r.lang===o.$lang?c=t:(c=t.replace(o.$localeConfig.path,s),n.some(e=>e.path===c)||(c=s)),{text:i,link:c}})};return[...s.value,r]}const t=o.$themeConfig.blogConfig||{},n=s.value.some(e=>!t.category||e.text===(t.category.text||"分类")),a=s.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!n&&Object.hasOwnProperty.call(t,"category")){const e=t.category,n=o.$categories;s.value.splice(parseInt(e.location||2)-1,0,{items:n.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||o.$recoLocales.category,type:"links",icon:"reco-category"})}if(!a&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;s.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||o.$recoLocales.tag,type:"links",icon:"reco-tag"})}return s.value}),i=Object(n.a)(()=>(o.nav||[]).map(e=>Object.assign(Object(r.j)(e),{items:(e.items||[]).map(r.j)}))),l=Object(n.a)(()=>{const{repo:e}=o.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),u=Object(n.a)(()=>{if(!o.repoLink)return"";if(o.$themeConfig.repoLabel)return o.$themeConfig.repoLabel;const e=o.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let o=0;o<t.length;o++){const n=t[o];if(new RegExp(n,"i").test(e))return n}return"Source"});return{userNav:s,nav:a,userLinks:i,repoLink:l,repoLabel:u}}}),u=(o(412),o(1)),d=Object(u.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=d.exports},428:function(e,t,o){"use strict";o.r(t);var n=o(406),s={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),Object(n.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(n.a)(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},a=(o(413),o(1)),r=Object(a.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,n){return t("li",{key:n,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null);t.default=r.exports},430:function(e,t,o){"use strict";o(410)},431:function(e,t,o){"use strict";o(411)},432:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,s){if(!o(t))return;function a(t){if(s.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,n=t.length;o<n;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(s.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const r="ontouchstart"in document.documentElement?"touchstart":"click";!n(s)&&document.addEventListener(r,a)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const s="ontouchstart"in document.documentElement?"touchstart":"click";!n(o)&&e.__vueClickOutside__&&document.removeEventListener(s,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},433:function(e,t,o){"use strict";o(414)},444:function(e,t,o){},455:function(e,t,o){"use strict";o.r(t);o(22);var n=o(0),s=o(77),a=o(374),r=Object(n.c)({components:{RecoIcon:s.b},setup(e,t){const o=Object(a.a)(),s=Object(n.g)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),r=Object(n.a)(()=>s.focused&&c.value&&c.value.length),i=e=>{for(const t in o.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},c=Object(n.a)(()=>{const e=s.query.trim().toLowerCase();if(!e)return;const{pages:t}=o.$site,n=o.$site.themeConfig.searchMaxSuggestions,a=o.$localePath,r=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,c=[];for(let e=0;e<t.length&&!(c.length>=n);e++){const o=t[e];if(i(o)===a)if(r(o))c.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(c.length>=n);e++){const t=o.headers[e];r(t)&&c.push(Object.assign({},o,{path:o.path+"#"+t.slug,header:t}))}}return c}),l=Object(n.a)(()=>(o.$site.themeConfig.nav||[]).length+(o.$site.repo?1:0)<=2);return{showSuggestions:r,suggestions:c,alignRight:l,onUp:()=>{r.value&&(s.focusIndex>0?s.focusIndex--:s.focusIndex=c.value.length-1)},onDown:()=>{r.value&&(s.focusIndex<c.value.length-1?s.focusIndex++:s.focusIndex=0)},focus:e=>{s.focusIndex=e},unfocus:()=>{s.focusIndex=-1},go:e=>{r.value&&(o.$router.push(c.value[e].path),s.query="",s.focusIndex=0)},...Object(n.i)(s)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),i=(o(430),o(1)),c=Object(i.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(o,n){return t("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[t("a",{attrs:{href:o.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(o.title||o.path))]),e._v(" "),o.header?t("span",{staticClass:"header"},[e._v("> "+e._s(o.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null);t.default=c.exports},456:function(e,t,o){"use strict";o.r(t);var n=o(77),s=o(432),a=o.n(s),r=o(428),i=o(406),c={name:"UserSettings",directives:{"click-outside":a.a},components:{ModePicker:r.default,RecoIcon:n.b,ModuleTransition:n.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(i.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(i.a)(e)})),Object(i.a)(e))},methods:{hideMenu(){this.showMenu=!1}}},l=(o(433),o(1)),u=Object(l.a)(c,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=u.exports},463:function(e,t,o){"use strict";o.r(t);o(431);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.default=s.exports},469:function(e,t,o){"use strict";o(444)},484:function(e,t,o){"use strict";o.r(t);var n=o(0),s=o(455),a=o(463),r=o(426),i=o(456),c=o(374),l=Object(n.c)({components:{SidebarButton:a.default,NavLinks:r.default,SearchBox:s.default,AlgoliaSearchBox:{},Mode:i.default},setup(e,t){const o=Object(c.a)(),s=Object(n.h)(null),a=Object(n.a)(()=>o.$themeLocaleConfig.algolia||o.$themeConfig.algolia||{}),r=Object(n.a)(()=>a.value&&a.value.apiKey&&a.value.indexName);function i(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(n.e)(()=>{const e=parseInt(i(o.$el,"paddingLeft"))+parseInt(i(o.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?s.value=null:s.value=o.$el.offsetWidth-e-(o.$refs.siteName&&o.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)}),{linksWrapMaxWidth:s,algolia:a,isAlgoliaSearch:r,css:i}}}),u=(o(469),o(1)),d=Object(u.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("Mode"),e._v(" "),e.isAlgoliaSearch?t("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?t("SearchBox"):e._e(),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);