(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(0),u=t(2),r=t.n(u),a=t(15),i=t.n(a),o=(t(6),t(3)),l=t(4),d=t.n(l),s="/api/persons",f=function(){return d.a.get(s).then((function(e){return e.data}))},j=function(e){return d.a.post(s,e).then((function(e){return e.data}))},b=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},m=function(e){return Object(c.jsxs)("form",{children:["Filter:",Object(c.jsx)("input",{value:e.newFilter,onChange:e.filter})]})},O=function(e){return Object(c.jsxs)("form",{onSubmit:e.addName,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNum,onChange:e.handleNumChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){return Object(c.jsx)("form",{children:Object(c.jsx)("div",{children:e.filter.map((function(n){return Object(c.jsxs)("p",{children:[n.name," ",n.number," ",Object(c.jsx)("button",{onClick:function(){return e.delName(n.name)},children:"Del"})]},n.name)}))})})},g=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},p=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(u.useState)(""),i=Object(o.a)(a,2),l=i[0],d=i[1],s=Object(u.useState)(""),p=Object(o.a)(s,2),v=p[0],w=p[1],N=Object(u.useState)(""),C=Object(o.a)(N,2),S=C[0],F=C[1],y=Object(u.useState)(null),D=Object(o.a)(y,2),T=D[0],k=D[1];Object(u.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var L=t.filter((function(e){return e.name.toLowerCase().includes(S)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(g,{message:T}),Object(c.jsx)(m,{filter:function(e){F(e.target.value)},newFilter:S}),Object(c.jsx)("h2",{children:"Add new"}),Object(c.jsx)(O,{addName:function(e){e.preventDefault();var n={name:l,number:v};t.map((function(e){return e.name})).includes(l)?window.confirm("".concat(l," already exists do you want to change current number to a new number"))&&function(e,n){b(e,n).then((function(n){r(t.map((function(t){return t.id!==e?t:n})))})),k("Changed number of ".concat(n.name)),setTimeout((function(){k(null)}),5e3)}(t.find((function(e){return e.name===l})).id,n):(j(n).then((function(e){r(t.concat(e))})).catch((function(e){k(e.response.data.error)})),k("Added ".concat(l)),setTimeout((function(){k(null)}),5e3));w(""),d("")},newName:l,handleNameChange:function(e){d(e.target.value)},newNum:v,handleNumChange:function(e){w(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(x,{filter:L,delName:function(e){var n=t.find((function(n){return n.name===e}));window.confirm("Delete ".concat(e))&&(h(n.id).catch((function(e){alert("the'".concat(n.name,"' was already deleted from server")),r(t.filter((function(e){return e.id!==t.id})))})),k("Deleted ".concat(e)),setTimeout((function(){k(null)}),5e3))}})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,c=n.getFID,u=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),u(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.d1512858.chunk.js.map