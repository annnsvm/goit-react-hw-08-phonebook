"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[201],{201:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i=t(2791),a=t(9434),o=t(9818),c=t(8893),d=t(5518),s=t(168),l=t(3081),u=l.Z.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 14px;\n  color: red;\n  font-weight: 700;\n  margin-top: 30px;\n"]))),p=t(184);function x(n){var e=n.children;return(0,p.jsxs)(u,{role:"alert",children:[(0,p.jsx)("h2",{children:"Oops! \ud83d\ude2b"}),(0,p.jsx)("p",{children:e})]})}var h,f,m,g,v,Z,b,j,w,y,k,z,C,A=t(96),_=l.Z.label(h||(h=(0,s.Z)(["\n  font-size: 20px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),M=l.Z.div(f||(f=(0,s.Z)(["\n  margin: 0 auto;\n  margin-bottom: 30px;\n  margin-top: 30px;\n"]))),S=l.Z.input(m||(m=(0,s.Z)(["\n  border: 5px solid #016bff;\n  margin: 0 auto;\n  border-radius: 5px;\n  height: 30px;\n  width: 420px;\n"]))),F=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.AD);return(0,p.jsx)(M,{children:(0,p.jsxs)(_,{children:["Find contacts by name",(0,p.jsx)(S,{type:"text",value:e,onChange:function(e){return n((0,A.M)(e.currentTarget.value))}})]})})},I=t(9439),V=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},D=l.Z.form(g||(g=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 400px;\n  padding: 15px;\n  background-color: #016bff;\n  border-radius: 15px;\n  margin: 0 auto;\n\n  margin-top: 30px;\n"]))),H=(l.Z.div(v||(v=(0,s.Z)(["\n  position: fixed;\n  background: white;\n  width: 400px;\n  height: auto;\n  padding: 30px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 24rem;\n"]))),l.Z.h2(Z||(Z=(0,s.Z)(["\n  margin-top: 2.5rem;\n  color: #111827;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  line-height: 2.25rem;\n  text-align: center;\n"]))),l.Z.label(b||(b=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 20px;\n  color: white;\n  margin-bottom: 10px;\n"])))),N=l.Z.input(j||(j=(0,s.Z)(["\n  height: 30px;\n"]))),U=(l.Z.button(w||(w=(0,s.Z)(["\n  border: none;\n  background-color: white;\n  width: 100px;\n  height: 30px;\n  margin: 0 auto;\n  margin-top: 30px;\n  border-radius: 3px;\n  color: #016bff;\n  cursor: pointer;\n  :hover,\n  :focus {\n    scale: 1.05;\n  }\n"]))),t(4294)),q=t(2419),L=function(){return(0,p.jsx)(U.Z,{type:"submit",variant:"contained",color:"primary",startIcon:(0,p.jsx)(q.Z,{}),children:"Add contact"})};function B(){var n=(0,a.v9)(o.Af),e=(0,a.I0)(),t=(0,i.useState)(""),r=(0,I.Z)(t,2),d=r[0],s=r[1],l=(0,i.useState)(""),u=(0,I.Z)(l,2),x=u[0],h=u[1],f=V(),m=V();return(0,p.jsxs)(D,{onSubmit:function(t){t.preventDefault();var r={name:d,number:x,id:V()};n.find((function(n){return n.name.toLowerCase().trim()===r.name.toLowerCase().trim()}))?alert("".concat(r.name," is already in contacts.")):(e((0,c.el)(r)),s(""),h(""))},children:[(0,p.jsxs)(H,{htmlFor:f,children:["Name",(0,p.jsx)(N,{type:"text",name:"name",onChange:function(n){s(n.target.value)},value:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:f}),"Number",(0,p.jsx)(N,{type:"tel",name:"number",value:x,onChange:function(n){h(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:m})]}),(0,p.jsx)(L,{})]})}var E=l.Z.ul(y||(y=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: #016bff;\n  border-radius: 15px;\n  padding: 15px;\n  width: 400px;\n  margin: 0 auto;\n"]))),J=l.Z.li(k||(k=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  width: 200px;\n\n  border-radius: 5px;\n  padding: 10px;\n"]))),O=(l.Z.button(z||(z=(0,s.Z)(["\n  border: none;\n  background-color: #016bff;\n\n  height: 30px;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  :hover,\n  :focus {\n    scale: 1.05;\n  }\n"]))),l.Z.h2(C||(C=(0,s.Z)(["\n  font-size: 20px;\n  text-align: center;\n  margin: 30px 0;\n  font-weight: 400;\n"])))),P=t(3400),R=t(7247),T=function(n){var e=n.onClick;return(0,p.jsx)(P.Z,{color:"primary",onClick:e,children:(0,p.jsx)(R.Z,{})})},$=function(){var n=(0,a.I0)(),e=(0,a.v9)(o.f6),t=(0,a.v9)(o.zh),r=(0,a.v9)(o.xU),s=(0,a.v9)(o.Af);return(0,i.useEffect)((function(){n((0,c.yF)())}),[n]),(0,p.jsxs)("section",{children:[(0,p.jsx)(B,{}),s.length<1?(0,p.jsx)(O,{children:"Add your first contact"}):(0,p.jsx)(F,{}),r?(0,p.jsx)(d.Z,{}):(0,p.jsx)(E,{children:e.map((function(e){var t=e.id,r=e.name,i=e.number;return(0,p.jsxs)(J,{children:[r+" : "+i,(0,p.jsx)(T,{type:"button",name:"delete",onClick:function(){return n((0,c._f)(t))}})]},t)}))}),t&&(0,p.jsx)(x,{children:t.message})]})}},2419:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=o},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o}}]);
//# sourceMappingURL=201.3a8b1bee.chunk.js.map