(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(0),l=Object(a.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}})},,,,,,function(e,n,t){"use strict";var a=t(0),l=t.n(a),c=t(7),r=t.n(c);t(38);n.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},function(e,n,t){"use strict";var a=t(0),l=t.n(a);t(41);n.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},,,,,,function(e,n,t){e.exports=t(42)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(7),r=t.n(c),o=(t(29),t(1)),u=t(8),i=t(10),s=(t(30),function(e){return l.a.createElement("header",{className:"main-header"},e.children)}),m=t(11),E=(t(31),function(e){var n=Object(a.useContext)(m.a);return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(u.c,{to:"/",exact:!0},"DASHBOARD")),n.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/myplaces"},"MY PLACES")),n.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/places"},"PLACES")),!n.isLoggedIn&&l.a.createElement("li",null,l.a.createElement(u.c,{to:"/auth"},"LOGIN")),n.isLoggedIn&&l.a.createElement("li",null,l.a.createElement("button",{onClick:n.logout},"LOGOUT")))}),d=t(44),f=(t(37),function(e){var n=l.a.createElement(d.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return r.a.createPortal(n,document.getElementById("drawer-hook"))}),h=t(17),g=(t(39),function(e){var n=Object(a.useState)(!1),t=Object(i.a)(n,2),c=t[0],r=t[1],o=function(){r(!1)};return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(h.a,{onClick:o}),l.a.createElement(f,{show:c,onClick:o},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(E,null))),l.a.createElement(s,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__"},l.a.createElement(u.b,{to:"/"},"Apartment Likes ")),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(E,null))))}),p=t(12),b=t.n(p),v=t(16),k=t(18),O=l.a.lazy((function(){return t.e(3).then(t.bind(null,62))})),C=l.a.lazy((function(){return t.e(4).then(t.bind(null,63))})),N=l.a.lazy((function(){return Promise.all([t.e(7),t.e(6)]).then(t.bind(null,64))})),j=l.a.lazy((function(){return t.e(5).then(t.bind(null,65))})),x=function(){var e,n=function(){var e=Object(a.useState)(null),n=Object(i.a)(e,2),t=n[0],l=n[1],c=Object(a.useCallback)((function(e){e&&e.user&&l(e.user)}),[]),r=Object(a.useCallback)(Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:5000/api","/logout"),{method:"POST",mode:"cors",credentials:"include"});case 2:l(null);case 3:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){fetch("".concat("http://localhost:5000/api","/user"),{mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){l(e.user)}))}),[]),{login:c,logout:r,user:t}}(),t=n.user,c=n.login,r=n.logout;return console.log("App",t),e=t?l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(N,null)),l.a.createElement(o.b,{path:"/places",exact:!0},l.a.createElement(C,null)),l.a.createElement(o.b,{path:"/myplaces",exact:!0},l.a.createElement(j,null)),l.a.createElement(o.a,{to:"/"})):l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(N,null)),l.a.createElement(o.b,{path:"/auth"},l.a.createElement(O,null)),l.a.createElement(o.a,{to:"/auth"})),l.a.createElement(m.a.Provider,{value:{isLoggedIn:t,login:c,logout:r}},l.a.createElement(u.a,null,l.a.createElement(g,null),l.a.createElement("main",null,l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"center"},l.a.createElement(k.a,null))},e))))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.dfda5bc5.chunk.js.map