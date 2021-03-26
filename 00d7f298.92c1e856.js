(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,o){"use strict";var a=o(0),n=o.n(a),r=o(162),i=o(171);o(163),o(55);t.a=function(e){var t=n.a.useState(!1),o=t[0],a=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!o)}})))),o&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:i.a},e.children)))}},237:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},65:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return d}));var a=o(3),n=o(7),r=(o(0),o(162)),i=(o(164),{id:"index-herokunodejs",title:"Redis on Heroku using NodeJS",sidebar_label:"How to build NodeJS based application on Heroku using Redis",slug:"/howtos/herokunodejs"}),s={unversionedId:"howtos/herokunodejs/index-herokunodejs",id:"howtos/herokunodejs/index-herokunodejs",isDocsHomePage:!1,title:"Redis on Heroku using NodeJS",description:"Step 1. Preparing the Heroku environment",source:"@site/docs/howtos/herokunodejs/index-herokunodejs.mdx",slug:"/howtos/herokunodejs",permalink:"/howtos/herokunodejs",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/herokunodejs/index-herokunodejs.mdx",version:"current",sidebar_label:"How to build NodeJS based application on Heroku using Redis"},p=[{value:"Step 1. Preparing the Heroku environment",id:"step-1-preparing-the-heroku-environment",children:[]},{value:"Step 2. Prepare the app",id:"step-2-prepare-the-app",children:[]},{value:"Step 3. Deploy the app",id:"step-3-deploy-the-app",children:[]},{value:"Step 4. Deploy your code",id:"step-4-deploy-your-code",children:[]},{value:"Step 5. Accessing the application",id:"step-5-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:p};function d(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"step-1-preparing-the-heroku-environment"},"Step 1. Preparing the Heroku environment"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../create/heroku"}),"Follow the link")," to setup Redis database on Heroku"),Object(r.b)("h3",{id:"step-2-prepare-the-app"},"Step 2. Prepare the app"),Object(r.b)("p",null,"In this step, you will prepare a sample application that\u2019s ready to be deployed to Heroku."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs\n$ cd basic-redis-rate-limiting-demo-nodejs\n\n")),Object(r.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),Object(r.b)("h3",{id:"step-3-deploy-the-app"},"Step 3. Deploy the app"),Object(r.b)("p",null,"It is recommended to use Redis Enterprise Cloud Page for creating the database as it allows you to add Redis modules of your choice. Also, it provides you freedom to choose Cloud other than AWS for creating the database."),Object(r.b)("p",null,"In this step you will deploy the app to Heroku.\nCreate an app on Heroku, which prepares Heroku to receive your source code."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"heroku create\nCreating app... done, \u2b22 rocky-lowlands-06306\nhttps://rocky-lowlands-06306.herokuapp.com/ | https://git.heroku.com/rocky-lowlands-06306.git\n")),Object(r.b)("p",null,"When you create an app, a git remote (called heroku) is also created and associated with your local git repository."),Object(r.b)("h3",{id:"step-4-deploy-your-code"},"Step 4. Deploy your code"),Object(r.b)("p",null,"Heroku generates a random name (in this case pure-mesa-54685) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git push heroku\n")),Object(r.b)("p",null,"Wait for few seconds and you will see the below messages being displayed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"remote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://rocky-lowlands-06306.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/rocky-lowlands-06306.git\n * [new branch]      main -> main\n\n")),Object(r.b)("h3",{id:"step-5-accessing-the-application"},"Step 5. Accessing the application"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://rocky-lowlands-06306.herokuapp.com/"}),"https://rocky-lowlands-06306.herokuapp.com/"),"   to see your application"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:o(237).default})),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}d.isMDXComponent=!0}}]);