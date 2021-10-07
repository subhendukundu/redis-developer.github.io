(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),i=(r(0),r(263)),s={id:"index-usingrust",title:"How to query Graph data in Redis using Rust",sidebar_label:"RedisGraph and Rust",slug:"/howtos/redisgraph/using-rust"},o={unversionedId:"howtos/redisgraph/using-rust/index-usingrust",id:"howtos/redisgraph/using-rust/index-usingrust",isDocsHomePage:!1,title:"How to query Graph data in Redis using Rust",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-rust/index-usingrust.mdx",slug:"/howtos/redisgraph/using-rust",permalink:"/howtos/redisgraph/using-rust",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-rust/index-usingrust.mdx",version:"current",sidebar_label:"RedisGraph and Rust",sidebar:"docs",previous:{title:"How to query Graph data in Redis using Go",permalink:"/howtos/redisgraph/using-go"},next:{title:"Building Movies database app using RedisGraph and NodeJS",permalink:"/howtos/redisgraph/redisgraphmovies"}},d=[{value:"RedisGraph Rust Client",id:"redisgraph-rust-client",children:[{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",children:[]},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",children:[]},{value:"Step 3. Install Rust",id:"step-3-install-rust",children:[]},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",children:[]},{value:"Step 5. Write a rust program",id:"step-5-write-a-rust-program",children:[]},{value:"Step 6. Run the current local package",id:"step-6-run-the-current-local-package",children:[]},{value:"Step 7. Monitor the Graph query",id:"step-7-monitor-the-graph-query",children:[]},{value:"Step 8. Install RedisInsight",id:"step-8-install-redisinsight",children:[]},{value:"Step 8. Accessing RedisInsight",id:"step-8-accessing-redisinsight",children:[]},{value:"Step 9. Run the Graph Query",id:"step-9-run-the-graph-query",children:[]},{value:"References",id:"references",children:[]}]}],l={toc:d};function c(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),Object(i.b)("h2",{id:"redisgraph-rust-client"},"RedisGraph Rust Client"),Object(i.b)("p",null,"Follow the steps below to get started with RedisGraph with Rust:"),Object(i.b)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," docker run -p 6379:6379 --name redislabs/redismod\n")),Object(i.b)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),Object(i.b)("h3",{id:"step-3-install-rust"},"Step 3. Install Rust"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," brew install rust\n")),Object(i.b)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"  git clone https://github.com/mitsuhiko/redis-rs\n")),Object(i.b)("h3",{id:"step-5-write-a-rust-program"},"Step 5. Write a rust program"),Object(i.b)("p",null,'Copy the below content and save it as "main.rs" under src directory.'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"})," use redis::Client;\n use redisgraph::{Graph, RedisGraphResult};\n\n fn main() -> RedisGraphResult<()> {\n   let client = Client::open(\"redis://127.0.0.1:6379\")?;\n   let mut connection = client.get_connection()?;\n\n   let mut graph = Graph::open(connection, \"MotoGP\".to_string())?;\n\n   // Create six nodes (three riders, three teams) and three relationships between them.\n   graph.mutate(\"CREATE (:Rider {name: 'Valentino Rossi', birth_year: 1979})-[:rides]->(:Team {name: 'Yamaha'}), \\\n       (:Rider {name:'Dani Pedrosa', birth_year: 1985, height: 1.58})-[:rides]->(:Team {name: 'Honda'}), \\\n       (:Rider {name:'Andrea Dovizioso', birth_year: 1986, height: 1.67})-[:rides]->(:Team {name: 'Ducati'})\")?;\n\n   // Get the names and birth years of all riders in team Yamaha.\n   let results: Vec<(String, u32)> = graph.query(\"MATCH (r:Rider)-[:rides]->(t:Team) WHERE t.name = 'Yamaha' RETURN r.name, r.birth_year\")?;\n   // Since we know just one rider in our graph rides for team Yamaha,\n   // we can also write this and only get the first record:\n   let (name, birth_year): (String, u32) = graph.query(\"MATCH (r:Rider)-[:rides]->(t:Team) WHERE t.name = 'Yamaha' RETURN r.name, r.birth_year\")?;\n   // Let's now get all the data about the riders we have.\n   // Be aware of that we only know the height of some riders, and therefore we use an `Option`:\n   let results: Vec<(String, u32, Option<f32>)> = graph.query(\"MATCH (r:Rider) RETURN r.name, r.birth_year, r.height\")?;\n\n   // That was just a demo; we don't need this graph anymore. Let's delete it from the database:\n   //graph.delete()?;\n\n   Ok(())\n\n")),Object(i.b)("h3",{id:"step-6-run-the-current-local-package"},"Step 6. Run the current local package"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{})," cargo run\n")),Object(i.b)("h3",{id:"step-7-monitor-the-graph-query"},"Step 7. Monitor the Graph query"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' 1633515550.109594 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "CREATE (dummy:__DUMMY_LABEL__)" "--compact"\n 1633515550.111727 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "MATCH (dummy:__DUMMY_LABEL__) DELETE dummy" "--compact"\n 1633515550.114948 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "CREATE (:Rider {name: \'Valentino Rossi\', birth_year: 1979})-[:rides]->(:Team {name: \'Yamaha\'}), (:Rider {name:\'Dani Pedrosa\', birth_year: 1985, height: 1.58})-[:rides]->(:Team {name: \'Honda\'}), (:Rider {name:\'Andrea Dovizioso\', birth_year: 1986, height: 1.67})-[:rides]->(:Team {name: \'Ducati\'})" "--compact"\n 1633515550.118380 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "MATCH (r:Rider)-[:rides]->(t:Team) WHERE t.name = \'Yamaha\' RETURN r.name, r.birth_year" "--compact"\n 1633515550.120766 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "MATCH (r:Rider)-[:rides]->(t:Team) WHERE t.name = \'Yamaha\' RETURN r.name, r.birth_year" "--compact"\n 1633515550.122505 [0 172.17.0.1:55114] "GRAPH.QUERY" "MotoGP" "MATCH (r:Rider) RETURN r.name, r.birth_year, r.height" "--compact"\n 1633515550.124045 [0 172.17.0.1:55114] "GRAPH.DELETE" "MotoGP"\n\n')),Object(i.b)("h3",{id:"step-8-install-redisinsight"},"Step 8. Install RedisInsight"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"Follow this link to install RedisInsight"),". For this demo, we will be using RedisInsight Docker container as shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),Object(i.b)("h3",{id:"step-8-accessing-redisinsight"},"Step 8. Accessing RedisInsight"),Object(i.b)("p",null,"Next, point your browser to http://localhost:8001."),Object(i.b)("h3",{id:"step-9-run-the-graph-query"},"Step 9. Run the Graph Query"),Object(i.b)("p",null,"You can use the limit clause to limit the number of records returned by a query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' GRAPH.QUERY "MotoGP" "MATCH (r:Rider) RETURN r.name, r.birth_year, r.height"\n')),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:r(677).default})),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisgraphmovies/"}),"Building Movies database app using RedisGraph and NodeJS")),Object(i.b)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgraph/?_ga=2.186887980.520518125.1606546041-1440690046.1604964523"}),"Quickstart")," tutorial."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/explore/redisinsight/redisgraph"}),"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),c=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,b=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.a.createElement(b,o(o({ref:t},l),{},{components:r})):n.a.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},677:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/redisgraph_redisinsight_rust-1b54626866541bbe89887af3a155584d.png"}}]);