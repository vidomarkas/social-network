(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2p9Z5",dialogsItems:"Dialogs_dialogsItems__2CNbo",active:"Dialogs_active__2RBmN"}},296:function(e,a,t){"use strict";t.r(a);var n=t(108),s=t(0),i=t.n(s),o=t(293),r=t.n(o),l=function(e){return i.a.createElement("div",{style:{border:"1px solid red"}},i.a.createElement("p",null,e.message),i.a.createElement("span",null,"Likes:",e.likesCount))},c=t(19),u=function(e){return i.a.createElement("div",{className:r.a.dialog+" "+r.a.active},i.a.createElement(c.b,{to:"/dialogs/".concat(e.id)},e.name))},m=t(131),d=t(132),g=t(85),b=t(66),p=Object(g.a)(160),f=Object(d.a)({form:"dialogsAddMesageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(m.a,{validate:[g.b,p],component:b.b,placeholder:"Enter your message",name:"newMessageBody"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),E=t(35),v=t(36),h=t(38),k=t(37),j=t(10),y=t(16),O=function(e){return{isAuth:e.auth.isAuthenticated}},D=t(9);a.default=Object(D.d)(Object(y.b)((function(e){return{dialogsData:e.dialogsPage.dialogsData,messagesData:e.dialogsPage.messagesData,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{sendMessage:function(a){return e(Object(n.b)(a))}}})),(function(e){var a=function(a){Object(h.a)(n,a);var t=Object(k.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(j.a,{to:"/login"})}}]),n}(i.a.Component);return Object(y.b)(O)(a)}))((function(e){return i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogsItems},e.dialogsData.map((function(e){return i.a.createElement(u,{name:e.name,id:e.id,key:e.id})}))),i.a.createElement("div",{className:r.a.messages},e.messagesData.map((function(e){return i.a.createElement(l,{message:e.message,likesCount:e.likesCount,key:e.id})})),i.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))}))}}]);
//# sourceMappingURL=3.e4ad5de2.chunk.js.map