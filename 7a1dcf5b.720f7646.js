(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),l=(n(0),n(363)),i={id:"creating-an-index",title:"Creating an Index with Redis OM",sidebar_label:"Creating an Index",slug:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",authors:["steve"]},b={unversionedId:"develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index",id:"develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index",isDocsHomePage:!1,title:"Creating an Index with Redis OM",description:"To unlock some of the nicest functionality of Redis OM, e.g., running searches, matches, aggregations, reductions, mappings, etc... You will need to tell Redis how you want data to be stored and how you want it indexed. One of the features the Redis OM library provides is creating indices that map directly to your objects by declaring the indices as attributes on your class.",source:"@site/docs/develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index.md",slug:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",permalink:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index.md",version:"current",lastUpdatedAt:1648152977,sidebar_label:"Creating an Index",sidebar:"docs",previous:{title:"Add and Retrieve Objects",permalink:"/develop/dotnet/redis-om-dotnet/add-and-retrieve-objects"},next:{title:"Simple Text Queries",permalink:"/develop/dotnet/redis-om-dotnet/simple-text-queries"}},d=[{value:"Field Level Declarations",id:"field-level-declarations",children:[{value:"Id Fields",id:"id-fields",children:[]},{value:"Indexed Fields",id:"indexed-fields",children:[]}]},{value:"Creating The Index",id:"creating-the-index",children:[]}],c={toc:d};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To unlock some of the nicest functionality of Redis OM, e.g., running searches, matches, aggregations, reductions, mappings, etc... You will need to tell Redis how you want data to be stored and how you want it indexed. One of the features the Redis OM library provides is creating indices that map directly to your objects by declaring the indices as attributes on your class."),Object(l.b)("p",null,"Let's start with an example class."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[Document]\npublic partial class Person\n{\n    [RedisIdField]\n    public string Id { get; set; }    \n\n    [Searchable(Sortable = true)]        \n    public string Name { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public GeoLoc? Home { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public GeoLoc? Work { get; set; }\n\n    [Indexed(Sortable = true)]\n    public int? Age { get; set; }\n\n    [Indexed(Sortable = true)]\n    public int? DepartmentNumber { get; set; }\n\n    [Indexed(Sortable = true)]\n    public double? Sales { get; set; }\n\n    [Indexed(Sortable = true)]\n    public double? SalesAdjustment { get; set; }\n\n    [Indexed(Sortable = true)]\n    public long? LastTimeOnline { get; set; }\n    \n    [Indexed(Aggregatable = true)]\n    public string Email { get; set; }\n}\n")),Object(l.b)("p",null,"As shown above, you can declare a class as being indexed with the ",Object(l.b)("inlineCode",{parentName:"p"},"Document")," Attribute. In the ",Object(l.b)("inlineCode",{parentName:"p"},"Document")," attribute, you can set a few fields to help build the index:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"StorageType"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Defines the underlying data structure used to store the object in Redis, options are ",Object(l.b)("inlineCode",{parentName:"td"},"HASH")," and ",Object(l.b)("inlineCode",{parentName:"td"},"JSON"),", Note JSON is only useable with the ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://oss.redis.com/redisjson/"}),"RedisJson module")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HASH"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IndexName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the index"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'$"{SimpleClassName.ToLower()}-idx}')),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Prefixes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The key prefixes for redis to build an index off of"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'new string[]{$"{FullyQualifiedClassName}:"}')),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Language"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Language to use for full-text search indexing"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LanguageField"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the field in which the document stores its Language"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filter"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The filter to use to determine whether a particular item is indexed, e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"@Age>=18")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IdGenerationStrategy"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The strategy used to generate Ids for documents, if left blank it will use a ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/ulid/spec"}),"ULID")," generation strategy"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"UlidGenerationStrategy"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"field-level-declarations"},"Field Level Declarations"),Object(l.b)("h3",{id:"id-fields"},"Id Fields"),Object(l.b)("p",null,"Every class indexed by Redis must contain an Id Field marked with the ",Object(l.b)("inlineCode",{parentName:"p"},"RedisIdField"),"."),Object(l.b)("h3",{id:"indexed-fields"},"Indexed Fields"),Object(l.b)("p",null,"In addition to declaring an Id Field, you can also declare indexed fields, which will let you search for values within those fields afterward. There are two types of Field level attributes."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Indexed - This type of index is valid for fields that are of the type ",Object(l.b)("inlineCode",{parentName:"li"},"string"),", a Numeric type (double/int/float etc. . .), or can be decorated for fields that are of the type ",Object(l.b)("inlineCode",{parentName:"li"},"GeoLoc"),", the exact way that the indexed field is interpreted depends on the indexed type"),Object(l.b)("li",{parentName:"ol"},"Searchable - This type is only valid for ",Object(l.b)("inlineCode",{parentName:"li"},"string")," fields, but this enables full-text search on the decorated fields.")),Object(l.b)("h4",{id:"indexedattribute-properties"},"IndexedAttribute Properties"),Object(l.b)("p",null,"There are properties inside the ",Object(l.b)("inlineCode",{parentName:"p"},"IndexedAttribute")," that let you further customize how things are stored & queried."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PropertyName"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PropertyName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the property to be indexed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the property being indexed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sortable"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether to index the item so it can be sorted on in queries, enables use of ",Object(l.b)("inlineCode",{parentName:"td"},"OrderBy")," & ",Object(l.b)("inlineCode",{parentName:"td"},"OrderByDescending")," -> ",Object(l.b)("inlineCode",{parentName:"td"},"collection.OrderBy(x=>x.Email)")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Normalize"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only applicable for ",Object(l.b)("inlineCode",{parentName:"td"},"string")," type fields Determines whether the text in a field is normalized (sent to lower case) for purposes of sorting"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Separator"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"char")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only applicable for ",Object(l.b)("inlineCode",{parentName:"td"},"string")," type fields Character to use for separating tag field, allows the application of multiple tags fo the same item e.g. ",Object(l.b)("inlineCode",{parentName:"td"},"article.Category = technology,parenting")," is delineated by a ",Object(l.b)("inlineCode",{parentName:"td"},",")," means that ",Object(l.b)("inlineCode",{parentName:"td"},'collection.Where(x=>x.Category == "technology")')," and ",Object(l.b)("inlineCode",{parentName:"td"},'collection.Where(x=>x.Category == "parenting")')," will both match the record"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"`"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"`")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CaseSensitive"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Only applicable for ",Object(l.b)("inlineCode",{parentName:"td"},"string")," type fields - Determines whether case is considered when performing matches on tags"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h4",{id:"searchableattribute-properties"},"SearchableAttribute Properties"),Object(l.b)("p",null,"There are properties for the ",Object(l.b)("inlineCode",{parentName:"p"},"SearchableAttribute")," that let you further customize how the full-text search determines matches"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PropertyName"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PropertyName"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the property to be indexed"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the indexed property"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sortable"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Whether to index the item so it can be sorted on in queries, enables use of ",Object(l.b)("inlineCode",{parentName:"td"},"OrderBy")," & ",Object(l.b)("inlineCode",{parentName:"td"},"OrderByDescending")," -> ",Object(l.b)("inlineCode",{parentName:"td"},"collection.OrderBy(x=>x.Email)")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NoStem"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"bool")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Determines whether to use ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://oss.redis.com/redisearch/Stemming/"}),"stemming"),", in other words adding the stem of the word to the index, setting to true will stop the Redis from indexing the stems of words"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PhoneticMatcher"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The phonetic matcher to use if you'd like the index to use (PhoneticMatching)","[https://oss.redis.com/redisearch/Phonetic_Matching/]"," with the index"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"null"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Weight"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"double")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"determines the importance of the field for checking result accuracy"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"creating-the-index"},"Creating The Index"),Object(l.b)("p",null,"After declaring the index, the creation of the index is pretty straightforward. All you have to do is call ",Object(l.b)("inlineCode",{parentName:"p"},"CreateIndex")," for the decorated type. The library will take care of serializing the provided type into a searchable index. The library does not try to be particularly clever, so if the index already exists it will the creation request will be rejected, and you will have to drop and re-add the index (migrations is a feature that may be added in the future)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"var connection = provider.Connection;\nconnection.CreateIndex(typeof(Person));\n")))}o.isMDXComponent=!0},363:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(n),O=a,u=p["".concat(i,".").concat(O)]||p[O]||s[O]||l;return n?r.a.createElement(u,b(b({ref:t},c),{},{components:n})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var b={};for(var d in t)hasOwnProperty.call(t,d)&&(b[d]=t[d]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);