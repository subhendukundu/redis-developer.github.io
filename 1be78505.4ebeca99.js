(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(120),c=t(22),o=t(26),i=t(127),s=t(3),m=t(7),u=t(121),b=t(123),d=t(125),f=t(136),h=t(137),v=t(161),E=t(124),p=t(131),g=(t(139),function(e){return l.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}),k=t(138),_=t(78),O=t.n(_),j=t(122);var N=function e(a,t){return"link"===a.type?Object(b.isSamePath)(a.href,t):"category"===a.type&&a.items.some((function(a){return e(a,t)}))};function C(e){var a,t,r,c=e.item,o=e.onItemClick,i=e.collapsible,b=e.activePath,d=Object(m.a)(e,["item","onItemClick","collapsible","activePath"]),f=c.items,h=c.label,v=N(c,b),E=(t=v,r=Object(n.useRef)(t),Object(n.useEffect)((function(){r.current=t}),[t]),r.current),p=Object(n.useState)((function(){return!!i&&(!v&&c.collapsed)})),g=p[0],k=p[1],_=Object(n.useRef)(null),j=Object(n.useState)(void 0),C=j[0],y=j[1],S=function(e){var a;void 0===e&&(e=!0),y(e?(null===(a=_.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){v&&!E&&g&&k(!1)}),[v,E,g]);var I=Object(n.useCallback)((function(e){e.preventDefault(),C||S(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===f.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":g}),key:h},l.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(a={"menu__link--sublist":i,"menu__link--active":i&&v},a[O.a.menuLinkText]=!i,a)),onClick:i?I:void 0,href:i?"#!":void 0},d),h),l.a.createElement("ul",{className:"menu__list",ref:_,style:{height:C},onTransitionEnd:function(){g||S(!1)}},f.map((function(e){return l.a.createElement(w,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:i,activePath:b})}))))}function y(e){var a=e.item,t=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(m.a)(e,["item","onItemClick","activePath","collapsible"])),c=a.href,o=a.label,i=N(a,n);return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(E.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:c},Object(p.a)(c)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),o))}function w(e){switch(e.item.type){case"category":return l.a.createElement(C,e);case"link":default:return l.a.createElement(y,e)}}var S=function(e){var a,t,r=e.path,c=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,m=e.isHidden,E=Object(n.useState)(!1),p=E[0],_=E[1],N=Object(b.useThemeConfig)(),C=N.navbar.hideOnScroll,y=N.hideableSidebar,S=Object(d.a)().isAnnouncementBarClosed,I=Object(v.a)().scrollY;Object(f.a)(p);var T=Object(h.a)();return Object(n.useEffect)((function(){T===h.b.desktop&&_(!1)}),[T]),l.a.createElement("div",{className:Object(u.a)(O.a.sidebar,(a={},a[O.a.sidebarWithHideableNavbar]=C,a[O.a.sidebarHidden]=m,a))},C&&l.a.createElement("div",{className:"sidebar-logo"},l.a.createElement("a",{href:Object(j.a)("/")},l.a.createElement("img",{src:Object(j.a)("/img/logo-1-dark.png"),tabIndex:-1}))),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,(t={"menu--show":p},t[O.a.menuWithAnnouncementBar]=!S&&0===I,t))},l.a.createElement("button",{"aria-label":p?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){_(!p)}},p?l.a.createElement("span",{className:Object(u.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},c.map((function(e){return l.a.createElement(w,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),_(!1)},collapsible:i,activePath:r})})))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:s},l.a.createElement(g,{className:O.a.collapseSidebarButtonIcon})))},I=t(130),T=t(157),x=t(149),M=t(79),L=t.n(M);function F(e){var a,t,o,s,m=e.currentDocRoute,d=e.versionMetadata,f=e.children,h=Object(c.default)(),v=h.siteConfig,E=h.isClient,p=d.pluginId,k=d.permalinkToSidebar,_=d.docsSidebars,O=d.version,j=k[m.path],N=_[j],C=Object(n.useState)(!1),y=C[0],w=C[1],T=Object(n.useState)(!1),x=T[0],M=T[1],F=Object(n.useCallback)((function(){x&&M(!1),w(!y)}),[x]);return l.a.createElement(i.a,{key:E,searchMetadatas:{version:O,tag:Object(b.docVersionSearchTag)(p,O)}},l.a.createElement("div",{className:L.a.docPage},N&&l.a.createElement("div",{className:Object(u.a)(L.a.docSidebarContainer,(a={},a[L.a.docSidebarContainerHidden]=y,a)),onTransitionEnd:function(e){e.currentTarget.classList.contains(L.a.docSidebarContainer)&&y&&M(!0)},role:"complementary"},l.a.createElement(S,{key:j,sidebar:N,path:m.path,sidebarCollapsible:null===(t=null===(o=v.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===t||t,onCollapse:F,isHidden:x}),x&&l.a.createElement("div",{className:L.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:F,onClick:F},l.a.createElement(g,null))),l.a.createElement("main",{className:L.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",L.a.docItemWrapper,(s={},s[L.a.docItemWrapperEnhanced]=y,s))},l.a.createElement(r.a,{components:I.a},f)))))}a.default=function(e){var a=e.route.routes,t=e.versionMetadata,n=e.location,r=a.find((function(e){return Object(x.matchPath)(n.pathname,e)}));return r?l.a.createElement(F,{currentDocRoute:r,versionMetadata:t},Object(o.a)(a)):l.a.createElement(T.default,e)}},127:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(121),c=t(140),o=t(123),i=t(125),s=(t(56),t(3)),m=t(7),u=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"13",height:"13",xmlns:"http://www.w3.org/2000/svg"},n),l.a.createElement("path",{d:"M11.807 12.578a.744.744 0 00.547-.224.744.744 0 00.224-.547.698.698 0 00-.234-.537L7.383 6.29l4.96-4.981a.698.698 0 00.235-.538.744.744 0 00-.224-.546.744.744 0 00-.547-.225.698.698 0 00-.537.234L6.29 5.195 1.308.235A.698.698 0 00.77 0a.744.744 0 00-.546.225A.744.744 0 000 .77c0 .215.078.394.234.538l4.961 4.98-4.96 4.98a.698.698 0 00-.235.538c0 .214.075.397.225.547.15.15.332.224.546.224a.698.698 0 00.538-.234l4.98-4.98 4.98 4.98a.698.698 0 00.538.234z",fill:t,fillRule:"nonzero"}))};var b=function(){var e,a=Object(i.a)(),t=a.isAnnouncementBarClosed,n=a.closeAnnouncementBar,c=Object(o.useThemeConfig)().announcementBar;if(!c)return null;var s=c.content,m=(c.backgroundColor,c.textColor,c.isCloseable);return!s||m&&t?null:l.a.createElement("div",{className:"announcementBar",role:"banner"},l.a.createElement("div",{className:Object(r.a)("announcementBarContent",(e={},e.announcementBarCloseable=m,e)),dangerouslySetInnerHTML:{__html:s}}),m?l.a.createElement("button",{type:"button",className:"announcementBarClose",onClick:n,"aria-label":"Close"},l.a.createElement(u,{color:"#FFFFFF"})):null)},d=t(147),f=t(141),h=t(129),v=t(142),E=t(136),p=t(137),g=t(148),k=t(139),_=(t(138),t(57)),O=t.n(_),j=function(e){var a=e.color,t=void 0===a?"#161F31":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"24",height:"18",xmlns:"http://www.w3.org/2000/svg"},n),l.a.createElement("g",{stroke:t,strokeWidth:"1.65",fill:"none",fillRule:"evenodd",strokeDasharray:"4.4",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{d:"M1 16.95h24.2M1 9.25h24.2M1 1.55h24.2"})))},N="right";var C=function(){var e,a,t=Object(o.useThemeConfig)(),c=t.navbar,i=c.items,m=c.hideOnScroll,u=c.style,b=t.colorMode.disableSwitch,_=Object(n.useState)(!1),C=_[0],y=_[1],w=Object(n.useState)(!1),S=w[0],I=w[1],T=Object(h.a)(),x=T.isDarkTheme,M=T.setLightTheme,L=T.setDarkTheme,F=Object(v.a)(m),B=F.navbarRef,H=F.isNavbarVisible;Object(E.a)(C);var D=Object(n.useCallback)((function(){y(!0)}),[y]),P=Object(n.useCallback)((function(){y(!1)}),[y]),A=Object(n.useCallback)((function(e){return e.target.checked?L():M()}),[M,L]),R=Object(p.a)();Object(n.useEffect)((function(){R===p.b.desktop&&y(!1)}),[R]);var U=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(i),W=U.leftItems,z=U.rightItems;return l.a.createElement("nav",{ref:B,className:Object(r.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":C},e[O.a.navbarHideable]=m,e[O.a.navbarHidden]=!H,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=i&&0!==i.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},l.a.createElement(j,{color:"#FFFFFF"})),l.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(r.a)("navbar__title",(a={},a[O.a.hideLogoText]=S,a))}),W.map((function(e,a){return l.a.createElement(g.a,Object(s.a)({},e,{key:a}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},z.map((function(e,a){return l.a.createElement(g.a,Object(s.a)({},e,{key:a}))})),!b&&l.a.createElement(f.a,{className:O.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:x,onChange:A}),l.a.createElement(d.a,{handleSearchBarToggle:I,isSearchBarExpanded:S}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(k.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:P}),!b&&C&&l.a.createElement(f.a,{"aria-label":"Dark mode toggle in sidebar",checked:x,onChange:A})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},i.map((function(e,a){return l.a.createElement(g.a,Object(s.a)({mobile:!0},e,{onClick:P,key:a}))})))))))},y=t(124),w=t(122),S=t(58),I=t.n(S),T=function(e){var a=e.color,t=void 0===a?"#465282":a,n=Object(m.a)(e,["color"]);return l.a.createElement("svg",Object(s.a)({width:"785",height:"158",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},n),l.a.createElement("defs",null,l.a.createElement("path",{d:"M786.344 392.459c-41.822 22.164-258.313 110.84-305.056 135.477-46.742 24.637-72.163 23.812-108.246 6.57-36.082-17.24-267.334-111.664-309.156-131.377-41.822-19.713-42.642-33.657-1.64-49.271C103.25 338.265 332.86 247.94 381.243 229.875c48.383-18.065 65.604-18.065 106.605-2.473 41.003 15.614 256.674 100.996 297.676 115.785 41.002 14.791 42.642 27.912.82 49.273v-.001z",id:"a"}),l.a.createElement("mask",{id:"b",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"785",height:"331",fill:"#fff"},l.a.createElement("use",{xlinkHref:"#a"}))),l.a.createElement("use",{mask:"url(#b)",xlinkHref:"#a",transform:"translate(-32 -216)",stroke:t,strokeWidth:"4",fill:"none",fillRule:"evenodd",strokeDasharray:"3.637"}))};function x(e){var a=e.to,t=e.href,n=e.label,r=e.prependBaseUrlToHref,c=Object(m.a)(e,["to","href","label","prependBaseUrlToHref"]),o=Object(w.a)(a),i=Object(w.a)(t,{forcePrependBaseUrl:!0});return l.a.createElement(y.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?i:t}:{to:o},c),n)}var M=function(e){var a=e.url,t=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:t,src:a})};var L=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,c=void 0===n?[]:n,i=a.logo,s=void 0===i?{}:i,m=Object(w.a)(s.src);return e?l.a.createElement("footer",{className:Object(r.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},l.a.createElement(T,{className:"shape"}),l.a.createElement("img",{src:Object(w.a)("/img/code-2.png"),className:"code",alt:""}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},s&&s.src&&l.a.createElement("div",null,s.href?l.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:I.a.footerLogoLink},l.a.createElement(M,{alt:s.alt,url:m})):l.a.createElement(M,{alt:s.alt,url:m}))),l.a.createElement("div",{className:"col col--9"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},c.map((function(e,a){return l.a.createElement("div",{key:a,className:"col col--4 footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(x,e))}))):null)}))))),t?l.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)):null},F=t(146),B=t(23),H=t(22),D=t(143);function P(e){var a=Object(H.default)(),t=a.siteConfig,n=a.i18n.currentLocale,r=t.favicon,c=t.themeConfig,i=c.image,m=c.metadatas,u=t.url,b=e.title,d=e.description,f=e.image,h=e.keywords,v=e.permalink,E=e.searchMetadatas,p=Object(o.useTitleFormatter)(b),g=f||i,k=Object(w.a)(g,{absolute:!0}),_=Object(w.a)(r),O=n.split("-")[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,l.a.createElement("html",{lang:O}),p&&l.a.createElement("title",null,p),p&&l.a.createElement("meta",{property:"og:title",content:p}),r&&l.a.createElement("link",{rel:"shortcut icon",href:_}),d&&l.a.createElement("meta",{name:"description",content:d}),d&&l.a.createElement("meta",{property:"og:description",content:d}),h&&h.length&&l.a.createElement("meta",{name:"keywords",content:h.join(",")}),g&&l.a.createElement("meta",{property:"og:image",content:k}),g&&l.a.createElement("meta",{name:"twitter:image",content:k}),g&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),v&&l.a.createElement("meta",{property:"og:url",content:u+v}),v&&l.a.createElement("link",{rel:"canonical",href:u+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;500;600;700&display=swap",rel:"stylesheet"})),l.a.createElement(D.a,Object(s.a)({tag:o.DEFAULT_SEARCH_TAG,locale:n},E)),l.a.createElement(B.a,null,m.map((function(e,a){return l.a.createElement("meta",Object(s.a)({key:"metadata_"+a},e))}))))}var A=t(144);t(59);a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName;return Object(A.a)(),l.a.createElement(F.a,null,l.a.createElement(P,e),l.a.createElement(c.a,null),l.a.createElement(b,null),l.a.createElement(C,null),l.a.createElement("div",{className:Object(r.a)("main-wrapper",n)},a),!t&&l.a.createElement(L,null))}},157:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(127);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);