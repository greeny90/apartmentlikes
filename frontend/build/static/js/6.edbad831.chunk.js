(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{45:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8);a(47);t.a=function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(12),r=a.n(n),c=a(16),o=a(10),s=a(0),l=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(s.useState)(),u=Object(o.a)(l,2),i=u[0],d=u[1],p=Object(s.useRef)([]),m=Object(s.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,c,o,s,l,u,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"GET",c=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:{},n(!0),s=new AbortController,p.current.push(s),e.prev=6,e.next=9,fetch(t,{method:a,body:c,headers:o,signal:s.signal,mode:"cors",credentials:"include"});case 9:return l=e.sent,e.next=12,l.json();case 12:if(u=e.sent,p.current=p.current.filter((function(e){return e!==s})),l.ok){e.next=16;break}throw new Error(u.message);case 16:return n(!1),e.abrupt("return",u);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(s.useEffect)((function(){return function(){p.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:i,sendRequest:m,clearError:function(){d(null)}}}},50:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(44),l=a(17),u=(a(48),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return o.a.createPortal(t,document.getElementById("modal-hook"))}),i=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(l.a,{onClick:e.onCancel}),r.a.createElement(s.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(u,e)))},d=a(45);t.a=function(e){return r.a.createElement(i,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(d.a,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))}},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(46),o=a(16),s=a(10),l=a(0),u=a.n(l),i=a(49),d=a(57);a(59);function p(e){var t=e.columns,a=e.data,n=Object(d.useTable)({columns:t,data:a}),r=n.getTableProps,c=n.getTableBodyProps,o=n.headerGroups,s=n.rows,l=n.prepareRow;return u.a.createElement("table",Object.assign({},r(),{className:"table table-bordered table-condensed table-responsive",style:{display:"table"}}),u.a.createElement("thead",null,o.map((function(e){return u.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e,t){return u.a.createElement("th",{key:t},e.render("Header"))})))}))),u.a.createElement("tbody",c(),s.map((function(e,t){return l(e),u.a.createElement("tr",Object.assign({},e.getRowProps(),{key:t}),e.cells.map((function(e,a){return u.a.createElement("td",Object.assign({},e.getCellProps(),{key:10*t+a}),e.render("Cell"))})))}))))}var m=a(45),f=a(50),b=a(18);a(60),t.default=function(){var e=Object(i.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,d=e.clearError,v=Object(l.useState)(),h=Object(s.a)(v,2),E=h[0],g=h[1],O=u.a.useMemo((function(){return[{Header:"Front Image",accessor:"images",Cell:function(e){var t=e.cell.value;return t&&t.length>0?u.a.createElement("img",{className:"img-fluid img-rounded",width:200,src:t[0]}):null}},{Header:"Name",accessor:"result-title"},{Header:"Price",accessor:"result-price"},{Header:"Date",accessor:"date",Cell:function(e){var t=e.cell.value;return new Date(t).toLocaleDateString()}},{Header:"Unit Size",accessor:"housing"}]}),[]),y=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("".concat("http://localhost:5000/api","/entries?page=1"));case 3:t=e.sent,g(Object(c.a)(Object(c.a)({},E),{},{places:t,page:1})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){y()}),[]);var j=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat("http://localhost:5000/api","/entries?page=").concat(t),E.order&&(a+="&order=".concat(E.order)),E.sortBy&&(a+="&sortBy=".concat(E.sortBy)),e.next=6,n(a);case 6:o=e.sent,g(Object(c.a)(Object(c.a)({},E),{},{places:o,page:t})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(E.page+1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(E.page-1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,E.sortBy){e.next=3;break}return e.abrupt("return");case 3:return o="".concat("http://localhost:5000/api","/entries?page=").concat(E.page,"&sortBy=").concat(E.sortBy,"&order=").concat(a),e.prev=4,e.next=7,n(o);case 7:s=e.sent,g(Object(c.a)(Object(c.a)({},E),{},{places:s,order:a})),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,o="".concat("http://localhost:5000/api","/entries?page=").concat(E.page,"&sortBy=").concat(a),E.order&&(o+="&order=".concat(E.order)),e.prev=3,e.next=6,n(o);case 6:s=e.sent,g(Object(c.a)(Object(c.a)({},E),{},{places:s,sortBy:a})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),B=E&&E.places?E.places:null;return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{error:a,onClear:d}),u.a.createElement("div",{class:"sort-by"},u.a.createElement("label",{for:"sortBy"},"Sort By:"),u.a.createElement("select",{onChange:C,name:"sortBy",id:"sortBy"},u.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),u.a.createElement("option",{value:"price"},"Price"),u.a.createElement("option",{value:"date"},"Date")),u.a.createElement("label",{for:"order"},"Order"),u.a.createElement("select",{onChange:x,name:"order",id:"order"},u.a.createElement("option",{disabled:!0,selected:!0,value:!0}," -- select an option -- "),u.a.createElement("option",{value:"1"},"Ascending"),u.a.createElement("option",{value:"-1"},"Descending"))),t&&u.a.createElement("div",{className:"center"},u.a.createElement(b.a,null)),!t&&B&&u.a.createElement(p,{columns:O,data:B}),!t&&B&&u.a.createElement("div",null,E.page>1&&u.a.createElement(m.a,{onClick:w},"Back"),u.a.createElement(m.a,{onClick:k},"Next")))}}}]);
//# sourceMappingURL=6.edbad831.chunk.js.map