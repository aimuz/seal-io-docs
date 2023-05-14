"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2191],{1687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>x,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var s=a(87462),l=(a(67294),a(3905)),i=a(26389),n=a(94891),m=(a(75190),a(47507)),r=a(24310),p=a(63303),o=(a(75035),a(85162));const u={id:"secret-collection-delete",title:"Delete secrets",description:"Delete secrets",sidebar_label:"Delete secrets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Secrets"],operationId:"Secret.CollectionDelete",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string"}},title:"model.SecretQueryInput.json"}}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},204:{description:"No Content",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:204},statusText:{type:"string",default:"No Content"},message:{type:"string"}},required:["status","statusText"]}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:400},statusText:{type:"string",default:"Bad Request"},message:{type:"string"}},required:["status","statusText"]}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:401},statusText:{type:"string",default:"Unauthorized"},message:{type:"string"}},required:["status","statusText"]}}}},403:{description:"Forbidden",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:403},statusText:{type:"string",default:"Forbidden"},message:{type:"string"}},required:["status","statusText"]}}}},404:{description:"Not Found",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:404},statusText:{type:"string",default:"Not Found"},message:{type:"string"}},required:["status","statusText"]}}}},405:{description:"Method Not Allowed",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:405},statusText:{type:"string",default:"Method Not Allowed"},message:{type:"string"}},required:["status","statusText"]}}}},406:{description:"Not Acceptable",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:406},statusText:{type:"string",default:"Not Acceptable"},message:{type:"string"}},required:["status","statusText"]}}}},408:{description:"Request Timeout",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:408},statusText:{type:"string",default:"Request Timeout"},message:{type:"string"}},required:["status","statusText"]}}}},409:{description:"Conflict",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:409},statusText:{type:"string",default:"Conflict"},message:{type:"string"}},required:["status","statusText"]}}}},410:{description:"Gone",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:410},statusText:{type:"string",default:"Gone"},message:{type:"string"}},required:["status","statusText"]}}}},422:{description:"Unprocessable Entity",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:422},statusText:{type:"string",default:"Unprocessable Entity"},message:{type:"string"}},required:["status","statusText"]}}}},428:{description:"Precondition Required",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:428},statusText:{type:"string",default:"Precondition Required"},message:{type:"string"}},required:["status","statusText"]}}}},429:{description:"Too Many Requests",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:429},statusText:{type:"string",default:"Too Many Requests"},message:{type:"string"}},required:["status","statusText"]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:500},statusText:{type:"string",default:"Internal Server Error"},message:{type:"string"}},required:["status","statusText"]}}}},502:{description:"Bad Gateway",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:502},statusText:{type:"string",default:"Bad Gateway"},message:{type:"string"}},required:["status","statusText"]}}}},503:{description:"Service Unavailable",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:503},statusText:{type:"string",default:"Service Unavailable"},message:{type:"string"}},required:["status","statusText"]}}}}},security:[{bearerAuth:[]},{cookieAuth:[]}],description:"Delete secrets",method:"delete",path:"/secrets",servers:[{url:"/v1"}],securitySchemes:{bearerAuth:{type:"http",in:"header",scheme:"bearer",bearerFormat:"JWT"},cookieAuth:{type:"apiKey",name:"seal_session",in:"cookie"}},jsonRequestBodyExample:[{id:"string"}],info:{title:"Seal APIs",description:"API to manage resources of Seal",version:"v1"},postman:{name:"Delete secrets",description:{type:"text/plain"},url:{path:["secrets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"delete api-method",info_path:"openapi/seal-apis",custom_edit_url:null},c=void 0,d={unversionedId:"openapi/secret-collection-delete",id:"openapi/secret-collection-delete",title:"Delete secrets",description:"Delete secrets",source:"@site/docs/openapi/secret-collection-delete.api.mdx",sourceDirName:"openapi",slug:"/openapi/secret-collection-delete",permalink:"/docs/openapi/secret-collection-delete",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"secret-collection-delete",title:"Delete secrets",description:"Delete secrets",sidebar_label:"Delete secrets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Secrets"],operationId:"Secret.CollectionDelete",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"string"}},title:"model.SecretQueryInput.json"}}}},required:!0},responses:{200:{content:{"application/json":{schema:{type:"object"}}}},204:{description:"No Content",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:204},statusText:{type:"string",default:"No Content"},message:{type:"string"}},required:["status","statusText"]}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:400},statusText:{type:"string",default:"Bad Request"},message:{type:"string"}},required:["status","statusText"]}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:401},statusText:{type:"string",default:"Unauthorized"},message:{type:"string"}},required:["status","statusText"]}}}},403:{description:"Forbidden",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:403},statusText:{type:"string",default:"Forbidden"},message:{type:"string"}},required:["status","statusText"]}}}},404:{description:"Not Found",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:404},statusText:{type:"string",default:"Not Found"},message:{type:"string"}},required:["status","statusText"]}}}},405:{description:"Method Not Allowed",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:405},statusText:{type:"string",default:"Method Not Allowed"},message:{type:"string"}},required:["status","statusText"]}}}},406:{description:"Not Acceptable",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:406},statusText:{type:"string",default:"Not Acceptable"},message:{type:"string"}},required:["status","statusText"]}}}},408:{description:"Request Timeout",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:408},statusText:{type:"string",default:"Request Timeout"},message:{type:"string"}},required:["status","statusText"]}}}},409:{description:"Conflict",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:409},statusText:{type:"string",default:"Conflict"},message:{type:"string"}},required:["status","statusText"]}}}},410:{description:"Gone",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:410},statusText:{type:"string",default:"Gone"},message:{type:"string"}},required:["status","statusText"]}}}},422:{description:"Unprocessable Entity",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:422},statusText:{type:"string",default:"Unprocessable Entity"},message:{type:"string"}},required:["status","statusText"]}}}},428:{description:"Precondition Required",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:428},statusText:{type:"string",default:"Precondition Required"},message:{type:"string"}},required:["status","statusText"]}}}},429:{description:"Too Many Requests",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:429},statusText:{type:"string",default:"Too Many Requests"},message:{type:"string"}},required:["status","statusText"]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:500},statusText:{type:"string",default:"Internal Server Error"},message:{type:"string"}},required:["status","statusText"]}}}},502:{description:"Bad Gateway",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:502},statusText:{type:"string",default:"Bad Gateway"},message:{type:"string"}},required:["status","statusText"]}}}},503:{description:"Service Unavailable",content:{"application/json":{schema:{type:"object",properties:{status:{type:"integer",default:503},statusText:{type:"string",default:"Service Unavailable"},message:{type:"string"}},required:["status","statusText"]}}}}},security:[{bearerAuth:[]},{cookieAuth:[]}],description:"Delete secrets",method:"delete",path:"/secrets",servers:[{url:"/v1"}],securitySchemes:{bearerAuth:{type:"http",in:"header",scheme:"bearer",bearerFormat:"JWT"},cookieAuth:{type:"apiKey",name:"seal_session",in:"cookie"}},jsonRequestBodyExample:[{id:"string"}],info:{title:"Seal APIs",description:"API to manage resources of Seal",version:"v1"},postman:{name:"Delete secrets",description:{type:"text/plain"},url:{path:["secrets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"bearer",bearer:[{type:"any",value:"<Bearer Token>",key:"token"}]}}},sidebar_class_name:"delete api-method",info_path:"openapi/seal-apis",custom_edit_url:null},sidebar:"openapi",previous:{title:"Create a secret",permalink:"/docs/openapi/secret-create"},next:{title:"Update a secret",permalink:"/docs/openapi/secret-update"}},y={},g=[{value:"Delete secrets",id:"delete-secrets",level:2}],T={toc:g};function x(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"delete-secrets"},"Delete secrets"),(0,l.kt)("p",null,"Delete secrets"),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(r.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,l.kt)("p",null,"object"))))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"No Content")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:204},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"No Content"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 204,\n  "statusText": "No Content",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:400},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Bad Request"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 400,\n  "statusText": "Bad Request",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:401},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Unauthorized"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 401,\n  "statusText": "Unauthorized",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:403},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Forbidden"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 403,\n  "statusText": "Forbidden",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Not Found")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:404},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Not Found"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 404,\n  "statusText": "Not Found",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Method Not Allowed")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:405},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Method Not Allowed"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 405,\n  "statusText": "Method Not Allowed",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Not Acceptable")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:406},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Not Acceptable"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 406,\n  "statusText": "Not Acceptable",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"408",value:"408",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request Timeout")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:408},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Request Timeout"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 408,\n  "statusText": "Request Timeout",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Conflict")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:409},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Conflict"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 409,\n  "statusText": "Conflict",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"410",value:"410",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Gone")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:410},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Gone"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 410,\n  "statusText": "Gone",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unprocessable Entity")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:422},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Unprocessable Entity"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 422,\n  "statusText": "Unprocessable Entity",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"428",value:"428",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Precondition Required")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:428},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Precondition Required"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 428,\n  "statusText": "Precondition Required",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:429},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Too Many Requests"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 429,\n  "statusText": "Too Many Requests",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:500},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Internal Server Error"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 500,\n  "statusText": "Internal Server Error",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"502",value:"502",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Gateway")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:502},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Bad Gateway"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 502,\n  "statusText": "Bad Gateway",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Service Unavailable")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"status",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",default:503},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"statusText",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"Service Unavailable"},mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(m.Z,{responseExample:'{\n  "status": 503,\n  "statusText": "Service Unavailable",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);