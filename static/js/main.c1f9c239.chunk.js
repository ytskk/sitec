(this.webpackJsonpsmellshop=this.webpackJsonpsmellshop||[]).push([[0],{20:function(e,a,t){},43:function(e,a,t){e.exports=t.p+"static/media/ny.fe6ab62d.jpg"},46:function(e,a,t){e.exports=t(80)},51:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=(t(51),t(5)),i=t(38),o=t.n(i),m=t(19),u=t.n(m),d=t(18),p=t.n(d),E=t(37),h=t.n(E),N=t(16),g=t.n(N),f=t(7),v=t(34),b=(t(74),function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumSignificantDigits:4}).format(e)}),_=t(3),y=t(35),w=t.n(y),O=t(36),k=t.n(O),j=t(8),T=t.n(j);t(20);String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()};var x=function(e){var a=e.obj,t=[];for(var n in a)t.push(n);return console.log("obj:",a),console.log("noteNames:",t),c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("div",{className:"details__notes",key:t},c.a.createElement("div",{className:"noteGroup__name"},e.capitalize()," notes"),c.a.createElement("ul",{className:"noteGroup__list"},a[e].map((function(e,a){return c.a.createElement("li",{className:"noteGropu__list-el",key:a},"\u2014 ",e)}))))})))},C=t(23),S={cart:{content:[],count:0,sum:0},wishlist:{content:[],count:0}};function R(e){return console.log("***FROM REDUCER:\nid:",e),{type:"ADD_TO_CART",el:e}}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TO_CART":return Object(_.a)(Object(_.a)({},e),{},{cart:{content:[].concat(Object(C.a)(e.cart.content),[a.el]),count:e.cart.count+1,sum:0}});case"REMOVE_FROM_CART":return Object(_.a)(Object(_.a)({},e),{},{cart:{content:e.cart.content.filter((function(e){return e!==a.el})),count:e.cart.count-1}});case"ADD_TO_WISHLIST":return Object(_.a)(Object(_.a)({},e),{},{wishlist:{content:[].concat(Object(C.a)(e.wishlist.content),[a.el]),count:e.wishlist.count+1}});case"REMOVE_FROM_WISHLIST":return Object(_.a)(Object(_.a)({},e),{},{wishlist:{content:e.wishlist.content.filter((function(e){return e!==a.el})),count:e.wishlist.count-1}});default:return e}},I=function(e){var a=e.close,t=e.el,r=Object(f.b)(),l=Object(n.useState)({id:"",brand:"",name:"",type:"",gender:"",img:"",popularity:0,prices:[0],size:[0],selected:0,details:{country:"",scent:"",description:"",notes:{top:[""],base:[""],heart:[""]}}}),i=Object(s.a)(l,2),o=i[0],m=i[1],u=Object(n.useState)(0),d=Object(s.a)(u,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){g.a.get("https://api.npoint.io/737dd8fc91ea7506120e/itemsLong").then((function(e){var a=e.data.find((function(e){return e.id===t}));return console.log("Item rerendered"),m(a)}))}),[]),c.a.createElement("div",{className:"itemInfo"},c.a.createElement("div",{className:"itemInfo__topbar"},c.a.createElement("button",{className:"shareBtn-wrapper info-wrapper"},c.a.createElement(T.a,{icon:k.a,className:"shareBtn"})),c.a.createElement("button",{className:"closeBtn-wrapper info-wrapper",onClick:function(){a()}},c.a.createElement(T.a,{icon:w.a,className:"closeBtn"}))),c.a.createElement("div",{className:"details"},c.a.createElement("section",{className:"details__mainInfo"},c.a.createElement("section",{className:"top"},c.a.createElement("div",{className:"top__left"},c.a.createElement("div",{className:"img__slider"},c.a.createElement("div",{className:"images"},c.a.createElement("img",{className:"overlay__img",style:{height:"".concat(100-5*(o.size.length-p),"%")},src:o.img,alt:"".concat(o.type+" "+o.name+" by "+o.brand+" for "+o.gender)})))),c.a.createElement("div",{className:"top__right"},c.a.createElement("div",{className:"item__brandName"},"".concat(o.brand," ").concat(o.name)),c.a.createElement("div",{className:"itemO__type"},o.type," for ",o.gender),c.a.createElement("div",{className:"itemO__sizes-wrapper"},o.size.map((function(e,a){return c.a.createElement("label",{key:a,className:"overlay__size ".concat(a===p?"overlay__size-selected":""),htmlFor:"".concat(e,"ml"),checked:a===p,onChange:function(){return function(e){E(e),m(Object(_.a)(Object(_.a)({},o),{},{selected:e}))}(a)}},e," ml",c.a.createElement("input",{type:"radio",name:"size",value:a,id:"".concat(e,"ml")}))}))),c.a.createElement("div",{className:"itemO__bottom"},c.a.createElement("div",{className:"item__price"},b(o.prices[o.selected])),c.a.createElement("button",{className:"itemO__addToCart",onClick:function(){var e="".concat(o.id).concat(p);r(R(e))}},"Add to cart")))),c.a.createElement("section",{className:"item__details-wrapper"},c.a.createElement("div",{className:"item__country"},"Country: ",o.details.country),c.a.createElement("div",{className:"item__scent"},"Scent: ",o.details.scent),c.a.createElement("div",{className:"item__description"},o.details.description))),c.a.createElement("section",{className:"details__notes-wrapper"},c.a.createElement(x,{obj:o.details.notes}))))},A=function(){var e=Object(f.b)(),a=Object(f.c)((function(e){return e})),t=Object(n.useState)([]),r=Object(s.a)(t,2),l=r[0],i=r[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),E=d[0],N=d[1],_=Object(n.useState)(!1),y=Object(s.a)(_,2),w=y[0],O=y[1],k=function(){return N(!E)},j=function(){return O(!w)};return console.log("sortByPrice:",E),console.log("sortAsc:",w),console.log("items:",l),console.log("current state:",a.cart),Object(n.useEffect)((function(){g.a.get("https://api.npoint.io/737dd8fc91ea7506120e/itemsShort").then((function(e){return i(e.data)}))}),[]),c.a.createElement("div",{className:"catalogPage"},c.a.createElement("header",{className:"header"},c.a.createElement("p",{className:"pageName"},"Catalog"),c.a.createElement("div",{className:"catalogBtns"},c.a.createElement("div",{className:"sortType toggles"},c.a.createElement("div",{className:"filler ".concat(E?"offset":"")}),c.a.createElement("input",{id:"price",type:"radio",value:"1",name:"sortType",checked:E,onChange:k}),c.a.createElement("label",{htmlFor:"price"},"Price"),c.a.createElement("input",{id:"popularity",type:"radio",value:"2",name:"sortType",checked:!E,onChange:k}),c.a.createElement("label",{htmlFor:"popularity"},"Popularity")),c.a.createElement("div",{className:"sortOrder toggles"},c.a.createElement("div",{className:"filler ".concat(w?"offset":"")}),c.a.createElement("input",{id:"asc",type:"radio",value:"1",name:"sortOrder",checked:w,onChange:j}),c.a.createElement("label",{htmlFor:"asc"},"Ascending"),c.a.createElement("input",{id:"desc",type:"radio",value:"2",name:"sortOrder",checked:!w,onChange:j}),c.a.createElement("label",{htmlFor:"desc"},"Descending")))),c.a.createElement("section",{className:"cartItems"},c.a.createElement("ul",{className:"items-list"},l.sort((function(e,a){return E?w?e.price>a.price?1:e.price<a.price?-1:0:e.price>a.price?-1:e.price<a.price?1:0:w?e.popularity>a.popularity?1:e.popularity<a.popularity?-1:0:e.popularity>a.popularity?-1:e.popularity<a.popularity?1:0})).map((function(t){return c.a.createElement("li",{key:parseInt(t.id,10),className:"item"},c.a.createElement("div",{className:"item__wrapper"},c.a.createElement(v.a,{contentStyle:{maxWidth:"1200px",maxHeight:"800px",height:"90vh",width:"90vw",zIndex:"999"},trigger:c.a.createElement("a",{className:"item__overlay"},c.a.createElement("div",{className:"img__container"},c.a.createElement("img",{src:t.img,alt:"".concat(t.type+" "+t.name+" by "+t.brand+" for "+t.gender)})),c.a.createElement("div",{className:"item__details"},c.a.createElement("div",{className:"item__brand"},t.brand),c.a.createElement("div",{className:"item__name"},t.name))),modal:!0},(function(e){return c.a.createElement(I,{close:e,el:t.id})})),c.a.createElement("div",{className:"item__type"},"".concat(t.type," for ").concat(t.gender)),c.a.createElement("div",{className:"item__bottom"},c.a.createElement("span",{className:"price"},"from",b(t.price)),c.a.createElement("span",{className:"btnGroup"},c.a.createElement("button",{className:"addToCart",onClick:function(){console.log("id:","".concat(t.id).concat(t.selected));var n="".concat(t.id,"0");e(-1!==a.cart.content.indexOf(n)?function(e){return console.log("***FROM REDUCER:\nid:",e),{type:"REMOVE_FROM_CART",el:e}}(n):R(n))}},-1!==a.cart.content.indexOf("".concat(t.id,"0"))?c.a.createElement(h.a,{className:"cartBtn"}):c.a.createElement(o.a,{className:"cartBtn"})),c.a.createElement("button",{className:"toWishlist",onClick:function(){var n="".concat(t.id,"0");e(-1!==a.wishlist.content.indexOf(n)?function(e){return console.log("***FROM REDUCER:\nid:",e),{type:"REMOVE_FROM_WISHLIST",el:e}}(n):function(e){return console.log("***FROM REDUCER:\nid:",e),{type:"ADD_TO_WISHLIST",el:e}}(n))}},-1!==a.wishlist.content.indexOf("".concat(t.id,"0"))?c.a.createElement(p.a,{className:"favorite smallFragileHeart"}):c.a.createElement(u.a,{className:"smallFragileHeart"}))))))})))))},D=t(39),F=t.n(D),L=t(40),M=t.n(L),B=t(41),z=t.n(B),W=t(42),U=t.n(W),H=(t(76),[{id:1,name:"telegram",link:"https://telegram.org",logo:c.a.createElement(T.a,{icon:z.a}),color:"#0088cc"},{id:2,name:"facebook",link:"https://facebook.com",logo:c.a.createElement(T.a,{icon:F.a}),color:"#3b5998"},{id:3,name:"instagram",link:"https://www.instagram.com/",logo:c.a.createElement(T.a,{icon:M.a}),color:"linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"},{id:4,name:"twitter",link:"http://twitter.com",logo:c.a.createElement(T.a,{icon:U.a}),color:"#1da1f2"}]),G=function(){var e=(new Date).toLocaleTimeString("default",{hour:"numeric",minute:"numeric",hour12:!1});setInterval((function(){return l((new Date).toLocaleTimeString("default",{hour:"numeric",minute:"numeric",hour12:!1}))}),3e4),console.log("rerendered");var a=Object(n.useState)(e),t=Object(s.a)(a,2),r=t[0],l=t[1];return c.a.createElement("div",{className:"contactPage"},c.a.createElement("header",{className:"header"},c.a.createElement("p",{className:"pageName"},"Contact")),c.a.createElement("section",{className:"typeOfContact"},c.a.createElement("div",{className:"phoneType typeBox"},c.a.createElement("p",{className:"text"},"We\xa0are ready to\xa0listen to\xa0you:"),c.a.createElement("a",{href:"tel:+79075550133",className:"link tel"},"+7 907 555-01-33")),c.a.createElement("div",{className:"emailType typeBox"},c.a.createElement("p",{className:"text"},"For something beyond words:"),c.a.createElement("a",{href:"mailto:jackson.graham@example.com",className:"link mail"},"jackson.graham@example.com")),c.a.createElement("div",{className:"chatType"},c.a.createElement("div",{className:"chatMessage"},c.a.createElement("div",{className:"preText"},"Or\xa0you can chat\xa0us"),c.a.createElement("div",{className:"currTime"},r)),c.a.createElement("ul",{className:"contactList"},H.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:e.link,style:{background:e.color}},e.logo))}))))))},V=(t(77),[{id:1,name:"Delivery",link:""},{id:2,name:"Payment",link:""},{id:3,name:"FAQ",link:""},{id:4,name:"Personal data processing",link:""}]),Y=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("header",{className:"header"},c.a.createElement("p",{className:"pageName"},"\u2820\u280b\u2815\u2815\u281e\u2811\u2817")),c.a.createElement("div",{className:"footerLinks-wrapper"},c.a.createElement("p",{className:"listName"},"Information"),c.a.createElement("ul",{className:"footerLinks"},V.map((function(e){return c.a.createElement("li",{key:e.id,className:"li"},c.a.createElement("a",{href:e.link,className:"link"},e.name))}))),c.a.createElement("p",{className:"copyright"},"\xa9 Roses, ",(new Date).getFullYear())))},q=function(e){return{backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},J=function(e){var a=e.img,t=e.description,n=e.author,r=e.tag,l=void 0===r?"":r;return c.a.createElement("div",{className:"img__box"},c.a.createElement("div",{className:"img__wrapper"},c.a.createElement("div",{className:"img ".concat(l),style:q(a)})),c.a.createElement("div",{className:"bottom__wrapper"},c.a.createElement("div",{className:"description"},t),c.a.createElement("div",{className:"author"},"Photograph: ",n)))},K=t(43),Q=t.n(K),X=t(44),Z=t.n(X),$=(t(78),[{name:"Home",to:""},{name:"About",to:"aboutPage"},{name:"Catalog",to:"catalogPage"},{name:"Contact",to:"contactPage"}]),ee=function(){Object(f.b)();var e=Object(f.c)((function(e){return e}));return c.a.createElement("nav",{className:"nav-m"},c.a.createElement("div",{className:"logo"},"Roses"),c.a.createElement("div",{className:"nav__buttons"},c.a.createElement("ul",null,$.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("a",{href:"#".concat(e.to)},e.name))})))),c.a.createElement("div",{className:"wishlist-wrapper"},c.a.createElement("button",{className:"wishlist__button",id:"wishlist"},0===e.wishlist.count?c.a.createElement(u.a,{className:"wishlist__button-icon"}):c.a.createElement(p.a,{style:{transform:"scale(".concat(1+(e.wishlist.count-1)/15,")")},className:"wishlist__button-icon wishlist__button-icon-active"})),c.a.createElement("div",{className:"wishlist__label"},c.a.createElement("div",{className:"wishlist__label-text ".concat(e.wishlist.count>0?"wishlist__label-text-hidden":null)},"Wishlist"))),0!==e.cart.count?c.a.createElement("button",{className:"cart__button btn"},"Cart",c.a.createElement("div",{className:"cart__divider"}),c.a.createElement("div",{className:"cart__count-wrapper"},c.a.createElement(Z.a,{className:"cart__count-icon"}),c.a.createElement("div",{className:"cart__count-text"},e.cart.count))):c.a.createElement("button",{className:"cart__button"},"Cart"))},ae=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){r((new Date).toLocaleTimeString("default",{hour:"numeric",minute:"numeric",hour12:!1}))}),[]),console.log("Visited time:",t),c.a.createElement("div",{className:"wrapper"},c.a.createElement(ee,null),c.a.createElement("div",{className:"homePage-wrapper",id:"homePage"},c.a.createElement("div",{className:"homePage"},c.a.createElement("div",{className:"hText"},c.a.createElement("div",{className:"fLine"},"Smell that"),c.a.createElement("div",{className:"sLine"},"Everyone loves!"),c.a.createElement("div",{className:"additLine secondary"},"Hubert Givenchy called perfume a\xa0visiting card. Perfume is\xa0your confidence, style, charisma."),c.a.createElement("a",{href:"#catalogPage",className:"landBtn"},c.a.createElement("div",{className:"landText"},"Explore our catalog"),c.a.createElement("div",{className:"landTime"},t))))),c.a.createElement("div",{className:"aboutPage-wrapper",id:"aboutPage"},c.a.createElement("div",{className:"aboutPage"},c.a.createElement("p",{className:"sectionName"},"About"),c.a.createElement(J,{img:Q.a,tag:"nyImg",description:"Times Square, the home of\xa0Broadway, after the coronavirus outbreak",author:"TAYFUN COSKUN/ANADOLU AGENCY VIA GETTY"}),c.a.createElement("p",{className:"fLineText"},"At\xa0first there was nothing..."),c.a.createElement("div",{className:"aboutText"},c.a.createElement("p",null,"In\xa0this emptiness, we\xa0thought, why not start our own business in\xa0the midst of\xa0an\xa0epidemic, to\xa0prove that even in\xa0such difficult times you can succeed"),c.a.createElement("p",{className:"aboutTextMiddle"},"We\xa0offer the best products at\xa0wholesale prices, making the product available to\xa0everyone."),c.a.createElement("p",{className:"aboutTextStand"},"We\xa0also found the coolest designers to\xa0create unique gift wraps that are perfect for any occasion. Anniversary, birthday, holiday or\xa0just a\xa0day\xa0\u2014 we\xa0will pack everything right."),c.a.createElement("p",{className:"aboutTextMiddle"},"We\xa0realized that it\xa0is\xa0really not that simple."),c.a.createElement("p",{className:"aboutTextStand"},"But nevertheless, after each black stripe is\xa0followed by\xa0a\xa0white")))),c.a.createElement("div",{className:"catalogPage-wrapper",id:"catalogPage"},c.a.createElement(A,null)),c.a.createElement("div",{className:"contactPage-wrapper",id:"contactPage"},c.a.createElement(G,null)),c.a.createElement("footer",{className:"footer-wrapper"},c.a.createElement(Y,null)))},te=t(17),ne=Object(te.b)(P);l.a.render(c.a.createElement(f.a,{store:ne},c.a.createElement(ae,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c1f9c239.chunk.js.map