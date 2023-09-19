"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7920],{51473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r=a(67294),n=a(52263),c=a(84522),s=a(35742),l=a(39960),o=a(95999),u=a(88824),m=a(86010),h=a(76775),i=a(10412);const d=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=i.Z.canUseDOM?new URLSearchParams(t.search):null,c=(null==r?void 0:r.get("q"))||"",s=(null==r?void 0:r.get("ctx"))||"",l=(null==r?void 0:r.get("version"))||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:c,searchContext:s,searchVersion:l,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var p=a(90022),g=a(98202),f=a(82539),y=a(10726),E=a(91073),S=a(80311),v=a(73926),C=a(61029);const w="searchContextInput_mXoe",x="searchQueryInput_CFBF",I="searchResultItem_U687",P="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",b="searchQueryColumn_q7nx",R="searchContextColumn_oWAF";function k(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,searchContext:c,searchVersion:l,updateSearchPath:h,updateSearchContext:i}=d(),[f,y]=(0,r.useState)(a),[E,v]=(0,r.useState)(),[I,P]=(0,r.useState)(),_=`${e}${l}`,k=(0,r.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{P(e)})):P(void 0))}),[f,E]);const Z=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(_,c);v((()=>(0,g.v)(e,t,100)))}()}),[c,_]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,k)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,k),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.Z)("col",{[b]:Array.isArray(C.Kc),"col--9":Array.isArray(C.Kc),"col--12":!Array.isArray(C.Kc)})},r.createElement("input",{type:"search",name:"q",className:x,"aria-label":"Search",onChange:Z,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(C.Kc)?r.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",R)},r.createElement("select",{name:"search-context",className:w,id:"context-selector",value:c,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},C.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),C.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.Z,null)),I&&(I.length>0?r.createElement("p",null,t(I.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:I.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,I&&I.map((e=>r.createElement(N,{key:e.document.i,searchResult:e}))))))}function N(e){let{searchResult:{document:t,type:a,page:n,tokens:c,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(C.vc&&c.length>0){const e=new URLSearchParams;for(const t of c)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:I},r.createElement("h2",null,r.createElement(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.C)(h,c):(0,y.o)(h,(0,E.m)(s,"t"),c,100)}})),m.length>0&&r.createElement("p",{className:P},(0,v.e)(m)),u&&r.createElement("p",{className:_,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,E.m)(s,"t"),c,100)}}))}const Z=function(){return r.createElement(c.Z,null,r.createElement(k,null))}}}]);