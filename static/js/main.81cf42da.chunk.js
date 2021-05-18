(this["webpackJsonpreact-jobly"]=this["webpackJsonpreact-jobly"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){},180:function(e,t){},182:function(e,t){},195:function(e,t){},197:function(e,t){},225:function(e,t){},227:function(e,t){},228:function(e,t){},233:function(e,t){},235:function(e,t){},254:function(e,t){},266:function(e,t){},269:function(e,t){},286:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(139),s=n.n(a),i=(n(149),n(18)),o=n(7),u=n(11),l=(n(150),c.a.createContext()),j=n(0);var b=function(){var e=Object(r.useContext)(l),t=e.user,n=e.removeUser;return t?Object(j.jsxs)("nav",{className:"NavBar",children:[Object(j.jsx)(u.b,{className:"home",to:"/",children:"Home"}),Object(j.jsxs)("div",{className:"NavBarRight",children:[Object(j.jsx)(u.c,{to:"/companies",children:"Companies"}),Object(j.jsx)(u.c,{to:"/jobs",children:"Jobs"}),Object(j.jsx)(u.c,{to:"/profile",children:"Profile"}),Object(j.jsx)("a",{className:"logout",onClick:function(){n()},children:"Logout"})]})]}):Object(j.jsxs)("nav",{className:"NavBar",children:[Object(j.jsx)(u.b,{className:"home",to:"/",children:"Home"}),Object(j.jsxs)("div",{className:"NavBarRight",children:[Object(j.jsx)(u.c,{to:"/login",children:"Login"}),Object(j.jsx)(u.c,{to:"/register",children:"Register"})]})]})},p=n(5),d=n(4),h=n.n(d),O=n(6),f=n(38),x=n(141),m=n.n(x);var v=function(e){var t=e.defaultData,n=e.formElements,c=e.updateData,a=e.live,s=void 0!==a&&a;t=t||n.reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(f.a)({},t,""))}),{});var u=Object(r.useState)(t),l=Object(o.a)(u,2),b=l[0],p=l[1],d=Object(r.useState)(!0),h=Object(o.a)(d,2),O=h[0],x=h[1],v=Object(r.useCallback)(m.a.debounce(c,800),[c]);function y(e){var t=e.target,n=t.name,r=t.value;p((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(f.a)({},n,r))}))}function g(){x(!Object.values(b).includes(""))}function k(e){var t=e.split("");for(var n in t)t[n].toUpperCase()===t[n]&&(t[n]=" "+t[n]);return t[0].toUpperCase()+t.join("").slice(1)}return Object(r.useEffect)((function(){s&&b!==t&&(g(),O&&v(b))}),[b]),Object(j.jsx)("div",{className:"default-form",children:Object(j.jsxs)("form",{onSubmit:function(e){g(),e&&e.preventDefault(),O&&c(b)},className:"Form",children:[n.map((function(e){return Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",htmlFor:e,children:k(e)}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control",onChange:y,type:"password"===e?"password":"text",name:e,value:b[e]})]},e)})),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"}),!O&&Object(j.jsx)("p",{style:{color:"red"},children:"Not Valid!"})]})})};var y=function(e){var t=e.name,n=e.description,r=(e.logoUrl,e.handle);return Object(j.jsx)("div",{className:"CompanyCard",children:Object(j.jsx)(u.b,{to:"/companies/".concat(r),children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://photoadking.s3.amazonaws.com/photoadking/webp_thumbnail/5e70652c6b5ae_template_image_1584424236.webp",alt:t}),Object(j.jsx)("b",{children:t}),Object(j.jsx)("p",{children:n})]})})})},g=n(142),k=n(143),w=n(144),N=n.n(w),C=Object({NODE_ENV:"production",PUBLIC_URL:"/Jobly-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BASE_URL||"https://jobly-marcus-n-chase.herokuapp.com",S=function(){function e(){Object(g.a)(this,e)}return Object(k.a)(e,null,[{key:"request",value:function(){var t=Object(O.a)(h.a.mark((function t(n){var r,c,a,s,i,o,u=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},c=u.length>2&&void 0!==u[2]?u[2]:"get",console.log("API Call:",n,r,c),a="".concat(C,"/").concat(n),s={Authorization:"Bearer ".concat(e.token)},i="get"===c?r:{},t.prev=6,t.next=9,N()({url:a,method:c,data:r,params:i,headers:s});case 9:return t.abrupt("return",t.sent.data);case 12:throw t.prev=12,t.t0=t.catch(6),console.error("API Error:",t.t0.response),o=t.t0.response.data.error.message,Array.isArray(o)?o:[o];case 17:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getCompany",value:function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.company);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"applyToJob",value:function(){var e=Object(O.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(n),null,"post");case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"unapply",value:function(){var e=Object(O.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t,"/jobs/").concat(n),null,"delete");case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getAllCompanies",value:function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("companies",t);case 2:return n=e.sent,e.abrupt("return",n.companies);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllJobs",value:function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("jobs",t);case 2:return n=e.sent,e.abrupt("return",n.jobs);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(O.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("auth/token",n,"post");case 2:return r=t.sent,e.token=r.token,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("users/".concat(t.username));case 2:return n=e.sent,e.abrupt("return",n.user);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(O.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request("auth/register",n,"post");case 2:return r=t.sent,e.token=r.token,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(O.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.request("users/".concat(n),t,"patch");case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();S.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";var E=S;var A=function(e){var t=e.id,n=e.title,c=e.companyName,a=e.salary,s=e.equity,i=e.apps,o=Object(r.useContext)(l).user;return Object(j.jsxs)("div",{className:"JobCard",children:[Object(j.jsx)("b",{children:n}),Object(j.jsx)("p",{children:c}),Object(j.jsxs)("small",{children:[Object(j.jsxs)("p",{children:["Salary: $",a]}),Object(j.jsxs)("p",{children:["Equity: ",s,"%"]})]}),Object(j.jsx)("button",{onClick:function(e){e.target.classList.contains("btn-danger")?(E.applyToJob(o.username,t),e.target.innerHTML="Applied"):(E.unapply(o.username,t),e.target.innerHTML="Apply"),e.target.classList.toggle("btn-danger")},className:i.has(t)?"btn btn-success":"btn btn-success btn-danger",children:i.has(t)?"Applied":"Apply"})]})};var I=function(e){var t=e.list,n=e.type,c=e.other,a=e.iPerPg,s=void 0===a?20:a,u=Object(r.useState)(1),l=Object(o.a)(u,2),b=l[0],p=l[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"List",children:t.slice((b-1)*s,b*s).map((function(e){return"company"===n?Object(j.jsx)(y,Object(i.a)({},e),e.handle):Object(j.jsx)(A,Object(i.a)(Object(i.a)({},e),{},{apps:c}),e.id)}))}),Object(j.jsxs)("div",{children:[b>1&&Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(){return p((function(e){return e-1}))},children:"Back"}),Object(j.jsxs)("span",{children:["Page ",b]}),20*b<=t.length&&Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(){return p((function(e){return e+1}))},children:"Forward"})]})]})};var U=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(o.a)(a,2),i=s[0],u=s[1],b=Object(r.useContext)(l).user;function p(){return(p=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllJobs(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllJobs();case 2:return t=e.sent,e.next=5,E.getUser(b);case 5:n=e.sent,u(new Set(n.applications)),c(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),Object(j.jsx)("div",{className:"Jobs",children:n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"search-form",children:Object(j.jsx)(v,{updateData:function(e){return p.apply(this,arguments)},formElements:["title","minSalary","hasEquity"],defaultData:{title:"",minSalary:"1000000",hasEquity:!0},live:!0})}),Object(j.jsx)(I,{list:n,other:i,type:"job"})]}):Object(j.jsx)("h1",{style:{color:"orange"},children:"Loading"})})};var D=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];function a(){return(a=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllCompanies(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAllCompanies();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)("div",{className:"Companies",children:n?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"search-form",children:Object(j.jsx)(v,{updateData:function(e){return a.apply(this,arguments)},formElements:["name","minEmployees","maxEmployees"],defaultData:{name:"",minEmployees:"0",maxEmployees:"10000000"},live:!0})}),Object(j.jsx)(I,{list:n,type:"company"})]}):Object(j.jsx)("h1",{style:{color:"orange"},children:"Loading"})})};var J=function(){var e=Object(r.useContext)(l).updateUser;function t(){return(t=Object(O.a)(h.a.mark((function t(n){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.register(n);case 2:r=t.sent,c=r.token,e(c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Register default-content",children:[Object(j.jsx)("h2",{children:"Sign Up"}),Object(j.jsx)(v,{updateData:function(e){return t.apply(this,arguments)},formElements:["username","password","firstName","lastName","email"]})]})};var L=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(o.a)(a,2),i=s[0],u=s[1],b=Object(r.useContext)(l).user;return Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getUser(b);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsx)("div",{children:i?Object(j.jsxs)("div",{className:"Profile default-content",children:[n&&Object(j.jsx)("p",{style:{color:"blue"},children:"updated!"}),Object(j.jsx)("h1",{children:"Profile"}),Object(j.jsx)("b",{children:"Username"}),Object(j.jsx)("p",{children:i.username}),Object(j.jsx)(v,{updateData:function(e){E.update(e,b.username),c(!0)},formElements:["firstName","lastName","email","password"],defaultData:{firstName:i.firstName,lastName:i.lastName,email:i.email,password:""}})]}):Object(j.jsx)("p",{children:"None"})})};var T=function(){var e=Object(r.useContext)(l).updateUser,t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1];function s(){return(s=Object(O.a)(h.a.mark((function t(n){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.login(n);case 3:r=t.sent,c=r.token,e(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(t.t0[0]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"Login default-content",children:[Object(j.jsx)("h2",{children:"Login"}),c&&Object(j.jsx)("div",{class:"alert alert-danger",role:"alert",children:c}),Object(j.jsx)(v,{updateData:function(e){return s.apply(this,arguments)},formElements:["username","password"]})]})};var _=function(){var e=Object(r.useContext)(l).user;return Object(j.jsxs)("div",{className:"Home",children:[Object(j.jsx)("h1",{children:"Jobly"}),Object(j.jsx)("p",{children:"All the jobs in one, convenient place."}),e?Object(j.jsxs)("p",{children:["Welcome Back ",e.username,"!"]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(u.b,{to:"/login",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary",children:"Log In"})}),Object(j.jsx)(u.b,{to:"/register",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary",children:"Register"})})]})]})};var P=function(){var e=Object(p.h)().handle,t=Object(r.useContext)(l).user,n=Object(r.useState)(null),c=Object(o.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(null),u=Object(o.a)(i,2),b=u[0],d=u[1];return Object(r.useEffect)((function(){function n(){return(n=Object(O.a)(h.a.mark((function n(){var r,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.getCompany(e);case 3:r=n.sent,s(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.next=12,E.getUser(t);case 12:c=n.sent,d(new Set(c.applications));case 14:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,e]),b?Object(j.jsx)("div",{children:a?Object(j.jsxs)("div",{className:"CompanyDetails",children:[Object(j.jsx)("h2",{children:a.name}),Object(j.jsx)("p",{children:a.description}),Object(j.jsx)(I,{list:a.jobs,type:"jobs",other:b})]}):Object(j.jsx)("p",{children:"Company does not exist"})}):Object(j.jsx)("div",{children:"Loading"})};var R=function(){var e=Object(r.useContext)(l).user;return Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/login",children:Object(j.jsx)(T,{})}),Object(j.jsx)(p.b,{path:"/register",children:Object(j.jsx)(J,{})}),Object(j.jsx)(p.b,{path:"/companies/:handle",children:function(){return e?Object(j.jsx)(P,{}):Object(j.jsx)(p.a,{to:"/"})}}),Object(j.jsx)(p.b,{path:"/companies",children:function(){return e?Object(j.jsx)(D,{}):Object(j.jsx)(p.a,{to:"/"})}}),Object(j.jsx)(p.b,{path:"/jobs",children:function(){return e?Object(j.jsx)(U,{}):Object(j.jsx)(p.a,{to:"/"})}}),Object(j.jsx)(p.b,{path:"/profile",children:function(){return e?Object(j.jsx)(L,{}):Object(j.jsx)(p.a,{to:"/"})}}),Object(j.jsx)(p.b,{path:"/",children:Object(j.jsx)(_,{})})]})},q=n(73),F=n.n(q);n(286);var B=function(){return Object(j.jsx)(u.b,{style:{textDecoration:"none"},to:"/",children:Object(j.jsx)("div",{style:{justifyContent:"center",flexDirection:"column",display:"flex",height:"100vh",backgroundColor:"#059669"},children:Object(j.jsx)("h1",{style:{fontSize:"90px",color:"white"},children:"Jobly"})})})};var H=function(){var e=Object(p.g)(),t=localStorage.getItem("token"),n=Object(r.useState)(t?Object(i.a)({token:t},F.a.decode(t)):null),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(j.jsx)("div",{className:"JoblyApp",children:Object(j.jsx)(l.Provider,{value:{user:a,removeUser:function(){s(null),e.push("/"),localStorage.clear()},updateUser:function(t){s(Object(i.a)({token:t},F.a.decode(t))),e.push("/"),localStorage.setItem("token",t)}},children:Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{path:"/enter",children:Object(j.jsx)(B,{})}),Object(j.jsxs)(p.b,{children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"JoblyContent",children:Object(j.jsx)(R,{})})]})]})})})};var z=function(){return Object(j.jsx)(u.a,{basename:"/Jobly-frontend",children:Object(j.jsx)(H,{})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),M()}},[[287,1,2]]]);
//# sourceMappingURL=main.81cf42da.chunk.js.map