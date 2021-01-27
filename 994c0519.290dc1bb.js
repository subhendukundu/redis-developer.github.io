(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return r?n.a.createElement(f,s(s({ref:t},d),{},{components:r})):n.a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},123:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var a=r(22),n=r(132);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,d=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(s)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return d?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},132:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(121)),o=(r(123),{id:"index-explore",title:"Explore Data",sidebar_label:"Explore",slug:"/explore/"}),s={unversionedId:"explore/index-explore",id:"explore/index-explore",isDocsHomePage:!1,title:"Explore Data",description:"RedisInsight provides an intuitive and efficient GUI for Redis, allowing you to interact with your databases and manage your data\u2014with built-in support for most popular Redis modules. It provides tools to analyze the memory, profile the performance of your database usage, and guide you toward better Redis usage.",source:"@site/docs/explore/index-explore.mdx",slug:"/explore/",permalink:"/explore/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/index-explore.mdx",version:"current",sidebar_label:"Explore",sidebar:"docs",previous:{title:"Go and Redis",permalink:"/develop/golang/"}},c=[{value:"RedisInsight in Action",id:"redisinsight-in-action",children:[]},{value:"Adding a Redis Database",id:"adding-a-redis-database",children:[]},{value:"More",id:"more",children:[]}],d={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisInsight provides an intuitive and efficient GUI for Redis, allowing you to interact with your databases and manage your data\u2014with built-in support for most popular Redis modules. It provides tools to analyze the memory, profile the performance of your database usage, and guide you toward better Redis usage."),Object(i.b)("h3",{id:"redisinsight-in-action"},"RedisInsight in Action"),Object(i.b)("div",{class:"text--center"},Object(i.b)("iframe",{width:"672",height:"378",src:"https://www.youtube.com/embed/HBC3OSYOgj0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("hr",null),Object(i.b)("h3",{id:"adding-a-redis-database"},"Adding a Redis Database"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/add-instance/#add-a-standalone-redis-database"}),"Standalone Redis"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-cluster-database"}),"Redis cluster"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-sentinel-database"}),"Redis Sentinel"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-database-that-uses-tls"}),"Redis with TLS authentication"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/add-instance/#connecting-to-elasticache"}),"Elasticache"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.redislabs.com/latest/ri/using-redisinsight/auto-discover-databases/"}),"Automatically Discovering Databases")))),Object(i.b)("h3",{id:"more"},"More"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.redislabs.com/latest/ri/"}),"Official RedisInsight Documentation"))))}l.isMDXComponent=!0}}]);