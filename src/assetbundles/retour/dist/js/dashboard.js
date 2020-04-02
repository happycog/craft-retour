/*!
 * @project        Retour
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Thu, Apr 2, 2020 4:28 PM ET
 * @release        af2ce5319d5358204596e46ac82809d56e7feadd [develop]
 * @copyright      Copyright (c) 2020 nystudio107
 *
 */!function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={1:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([79,0]),a()}({5:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){return t.loadPage(e)}}})]}))]:[t._l(t.windowSize,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){return t.loadPage(t.windowStart+e-1)}}})]}))],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};n._withStripped=!0;var s={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),r=Object(i.a)(s,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue";var o={mixins:[r.exports]},l=Object(i.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/retour/src/vue/VuetablePagination.vue";e.a=l.exports},6:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;var s={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-gray-600"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),r=Object(i.a)(s,void 0,void 0,!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue";var o={mixins:[r.exports]},l=Object(i.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue";e.a=l.exports},7:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-gray-600"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};n._withStripped=!0;var s={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},i=a(0),r=Object(i.a)(s,n,[],!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetableFilterBar.vue";e.a=r.exports},79:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(9),r=a.n(i),o=function(){var t=this.$createElement;return(this._self._c||t)("main")};o._withStripped=!0;var l=a(30),c=a.n(l);s.a.use(c.a);var u={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout((function(){t.$confetti.stop()}),5e3)},methods:{}},d=a(0),f=Object(d.a)(u,o,[],!1,null,null,null);f.options.__file="src/assetbundles/retour/src/vue/Confetti.vue";var p=f.exports,h=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};h._withStripped=!0;var v=a(4),g=a.n(v),b=a(31),m=a.n(b),_=a(10),P=a.n(_),x=a(11),C=a.n(x),w=a(12);function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){m()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O,k=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.error(t)}))},T={components:{apexcharts:a.n(w).a},props:{title:String,subTitle:String,range:String,siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},methods:{getSeriesData:(O=P()(g.a.mark((function t(){var e,a=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=C.a.create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),t.next=3,k(e,"",{range:this.range,siteId:this.siteId},(function(t){var e;if(Object.assign({},a.chartOptions),void 0!==t[0]){var n=Math.round((e=[t[0].data],e.map((function(t){return Math.max.apply(null,t)})))[0]+1.5);a.chartOptions=S({},a.chartOptions,{},{yaxis:{min:0,max:n},xaxis:{categories:t[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:t[0].labels}),a.series=t}}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return O.apply(this,arguments)})},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.refreshIntervalSecs&&setInterval((function(){t.getSeriesData()}),1e3*this.refreshIntervalSecs)},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:[],yaxis:{min:0,max:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},I=Object(d.a)(T,h,[],!1,null,null,null);I.options.__file="src/assetbundles/retour/src/vue/DashboardChart.vue";var $=I.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.numSelected,expression:"numSelected !== 0"}]},[a("form",{attrs:{method:"post","accept-charset":"UTF-8"}},[a("input",{attrs:{type:"hidden",name:t.csrfTokenName},domProps:{value:t.csrfTokenValue}}),t._v(" "),t._l(t.selectedIds,(function(t){return a("input",{attrs:{type:"hidden",name:"statisticIds[]"},domProps:{value:t}})})),t._v(" "),a("label",{staticClass:"text-gray-600"},[t._v(t._s(t.numSelected)+" statistic"),1!==t.numSelected?a("span",[t._v("s")]):t._e(),t._v(":")]),t._v(" "),t._m(0)],2)]),t._v(" "),a("vuetable-filter-bar",{directives:[{name:"show",rawName:"v-show",value:0===t.numSelected,expression:"numSelected === 0"}]}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("div",{staticClass:"left floated left pl-3 pt-3 text-gray-600"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.retourHandled,expression:"retourHandled"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"retour-handled-",name:"retourHandled"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.retourHandled=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"all",selected:""}},[t._v("All")]),t._v(" "),a("option",{attrs:{value:"handled"}},[t._v("Handled")]),t._v(" "),a("option",{attrs:{value:"nothandled"}},[t._v("Not Handled")])])])]),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":t.apiUrl,"per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};F._withStripped=!0;var j=[{name:"__checkbox",titleClass:"center aligned",dataClass:"center aligned"},{name:"__component:file-not-found-url",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"remoteIp",sortField:"remoteIp",title:"Remote IP",titleClass:"center",dataClass:"center",callback:"ipFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"handledByRetour",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}],D=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"go",attrs:{href:this.rowData.redirectSrcUrl,title:this.linkTitle}},[this._v(this._s(this.rowData.redirectSrcUrl))])])};D._withStripped=!0;var E={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkTitle:function(){var t="";return t+="User Agent: "+this.rowData.userAgent+"\n\n",t+="Message: "+this.rowData.exceptionMessage+"\n\n",t+="File Path: "+this.rowData.exceptionFilePath+"\n\n",t+="Line No.: "+this.rowData.exceptionFileLine}}},L=Object(d.a)(E,D,[],!1,null,null,null);L.options.__file="src/assetbundles/retour/src/vue/FileNotFoundUrl.vue";var N=L.exports,H=a(13),U=a(5),M=a(6),R=a(7);s.a.component("file-not-found-url",N);var V={components:{vuetable:H.a,"vuetable-pagination":U.a,"vuetable-pagination-info":M.a,"vuetable-filter-bar":R.a},props:{siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-dashboard",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:j,numSelected:0,selectedIds:[],retourHandled:"all"}},computed:{csrfTokenName:function(){return window.Craft.csrfTokenName},csrfTokenValue:function(){return window.Craft.csrfTokenValue}},watch:{retourHandled:function(t){this.moreParams={siteId:this.siteId},"all"!==t&&(this.moreParams={siteId:this.siteId,handled:t}),this.$events.fire("refresh-table",this.$refs.vuetable)}},mounted:function(){var t=this;this.$events.$on("filter-set",(function(e){return t.onFilterSet(e)})),this.$events.$on("filter-reset",(function(e){return t.onFilterReset()})),this.$refs.vuetable.$on("vuetable:checkbox-toggled",(function(e,a){return t.onCheckboxToggled(e,a)})),this.$refs.vuetable.$on("vuetable:checkbox-toggled-all",(function(e){return t.onCheckboxToggled(e,null)})),this.refreshIntervalSecs&&setInterval((function(){void 0!==t.$refs.pagination&&t.$refs.pagination.isOnFirstPage&&void 0!==t.$refs.vuetable&&t.$refs.vuetable.refresh()}),1e3*this.refreshIntervalSecs)},methods:{onFilterSet:function(t){this.moreParams={siteId:this.siteId,filter:t},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},onCheckboxToggled:function(t,e){this.numSelected=0,this.selectedIds=[],void 0!==this.$refs.vuetable&&void 0!==this.$refs.vuetable.selectedTo&&(this.numSelected=this.$refs.vuetable.selectedTo.length,this.selectedIds=this.$refs.vuetable.selectedTo)},urlFormatter:function(t){return""===t?"":'\n            <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},ipFormatter:function(t){return""===t?"":'\n            <a class="go" href="https://whatismyipaddress.com/ip/'.concat(t,'" title="Lookup ').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},boolFormatter:function(t){return 1==t?'\n            <span style="color: green;">&#x2714;</span>\n            ':'\n            <span style="color: red;">&#x2716;</span>\n            '},addUrlFormatter:function(t){return""===t?"":'\n            <a class="add icon" href="'.concat(t,'" title="Add"></a>\n            ')}}},B=Object(d.a)(V,F,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btngroup inline"},[e("div",{staticClass:"btn menubtn",attrs:{"data-icon":"settings"}}),this._v(" "),e("div",{staticClass:"menu",attrs:{"data-align":"right"}},[e("ul",[e("li",[e("a",{staticClass:"formsubmit",attrs:{"data-action":"retour/statistics/delete-statistics"}},[this._v("Delete")])])])])])}],!1,null,null,null);B.options.__file="src/assetbundles/retour/src/vue/DashboardTable.vue";var A=B.exports;s.a.use(r.a);new s.a({el:"#cp-nav-content",components:{confetti:p,"dashboard-chart":$,"dashboard-table":A},data:{},methods:{onTableRefresh:function(t){s.a.nextTick((function(){return t.refresh()}))}},mounted:function(){var t=this;this.$events.$on("refresh-table",(function(e){return t.onTableRefresh(e)}))}})}});
//# sourceMappingURL=dashboard.js.map