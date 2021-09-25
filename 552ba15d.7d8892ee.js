(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(246)),i=(t(247),{id:"index-lesson_4",title:"User/Roles & Secondary Indexes",sidebar_label:"User Roles & Secondary Indexes",slug:"/develop/java/redis-and-spring-course/lesson_4"}),s={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4",id:"develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4",isDocsHomePage:!1,title:"User/Roles & Secondary Indexes",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4.mdx",slug:"/develop/java/redis-and-spring-course/lesson_4",permalink:"/develop/java/redis-and-spring-course/lesson_4",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4.mdx",version:"current",sidebar_label:"User Roles & Secondary Indexes",sidebar:"docs",previous:{title:"Object Mapping & Redis Repositories",permalink:"/develop/java/redis-and-spring-course/lesson_3"},next:{title:"Books, Categories & The Catalog",permalink:"/develop/java/redis-and-spring-course/lesson_5"}},l=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Loading Users",id:"loading-users",children:[]},{value:"User Repository",id:"user-repository",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Password Encoding",id:"password-encoding",children:[]},{value:"Secondary Indexes: Finding Roles by Name",id:"secondary-indexes-finding-roles-by-name",children:[]},{value:"CreateUsers CommandLineRunner",id:"createusers-commandlinerunner",children:[]},{value:"Exploring the loaded Users",id:"exploring-the-loaded-users",children:[]},{value:"Building the Redi2Read API",id:"building-the-redi2read-api",children:[]}],d={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Author: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(o.b)("h3",{id:"objectives"},"Objectives"),Object(o.b)("p",null,"To finish creating the user-role domain, load and transform JSON data, and begin crafting the Redi2Read API."),Object(o.b)("h3",{id:"agenda"},"Agenda"),Object(o.b)("p",null,"In this lesson, you'll learn:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to load JSON data using Jackson."),Object(o.b)("li",{parentName:"ul"},"How to create and work with secondary indexes"),Object(o.b)("li",{parentName:"ul"},"How to use the repositories with a REST controller.")),Object(o.b)("p",null,"If you get stuck:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redis-developer/redi2read/tree/course/milestone-4"}),"https://github.com/redis-developer/redi2read/tree/course/milestone-4"))),Object(o.b)("h3",{id:"loading-users"},"Loading Users"),Object(o.b)("p",null,"Now that we\u2019ve created the Roles let\u2019s load the ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"s from the provided JSON data in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/data/users/users.json"),".\nThe file contains an array of JSON user objects as shown below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "password": "9yNvIO4GLBdboI",\n  "name": "Georgia Spencer",\n  "id": -5035019007718357598,\n  "email": "georgia.spencer@example.com"\n}\n')),Object(o.b)("p",null,"The JSON fields map exactly to the JavaBean names for our User POJO properties."),Object(o.b)("h3",{id:"user-repository"},"User Repository"),Object(o.b)("p",null,"First, we\u2019ll create the ",Object(o.b)("inlineCode",{parentName:"p"},"UserRepository"),"; just like we did with the ",Object(o.b)("inlineCode",{parentName:"p"},"RoleRepository"),", we\u2019ll extend ",Object(o.b)("inlineCode",{parentName:"p"},"CrudRepository"),".\nUnder the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories")," let's create the ",Object(o.b)("inlineCode",{parentName:"p"},"UserRepository")," interface as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.User;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface UserRepository extends CrudRepository<User, String> {\n  User findFirstByEmail(String email);\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"findFirstByEmail")," method takes advantage of the index we previously created on the email field of the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," model.\nThe Spring Repository will provide an implementation of the finder method at runtime.\nWe will use this finder when we tackle our application's security."),Object(o.b)("p",null,"Let\u2019s create another ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," under the boot package to load the users. We\u2019ll follow a similar recipe for the Roles,\nexcept that we will load the JSON data from disk and use Jackson (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FasterXML/jackson"}),"https://github.com/FasterXML/jackson"),"),\none of the most popular Java JSON libraries."),Object(o.b)("p",null,"The recipe to load the user goes as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an input stream from the user\u2019s JSON data file"),Object(o.b)("li",{parentName:"ol"},"Using Jackson, read the input stream into a collection of users"),Object(o.b)("li",{parentName:"ol"},"For each user:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Encode the plain text password"),Object(o.b)("li",{parentName:"ul"},"Add the customer role")),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Based on the loading recipe above, there are two things our application can\u2019t currently do that it needs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A way to encode plain text user password"),Object(o.b)("li",{parentName:"ul"},"A way to find a role by name")),Object(o.b)("h3",{id:"password-encoding"},"Password Encoding"),Object(o.b)("p",null,"Our implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"PasswordEncoder")," will use the ",Object(o.b)("inlineCode",{parentName:"p"},"BCrypt")," strong hashing function. In the ",Object(o.b)("inlineCode",{parentName:"p"},"Redi2readApplication")," class add:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Bean\npublic BCryptPasswordEncoder passwordEncoder() {\n  return new BCryptPasswordEncoder();\n}\n")),Object(o.b)("p",null,"With the corresponding import:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\n")),Object(o.b)("h3",{id:"secondary-indexes-finding-roles-by-name"},"Secondary Indexes: Finding Roles by Name"),Object(o.b)("p",null,"As we learned in the previous lesson, the ",Object(o.b)("inlineCode",{parentName:"p"},"@Indexed")," annotation can be used to create a secondary index. Secondary indexes enable lookup operations based on native Redis structures.\nThe index is maintained on every save/update of an indexed object.\nTo add a secondary index to the ",Object(o.b)("inlineCode",{parentName:"p"},"Role")," model, we\u2019ll simply add the ",Object(o.b)("inlineCode",{parentName:"p"},"@Indexed")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Data\n@Builder\n@RedisHash\npublic class Role {\n  @Id\n  private String id;\n\n  @Indexed\n  private String name;\n}\n")),Object(o.b)("p",null,"Don\u2019t forget to add the corresponding import:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import org.springframework.data.redis.core.index.Indexed;\n")),Object(o.b)("p",null,"Now when a new ",Object(o.b)("inlineCode",{parentName:"p"},"Role")," instance is created, with ID as ",Object(o.b)("inlineCode",{parentName:"p"},'"abc-123"')," and role as ",Object(o.b)("inlineCode",{parentName:"p"},'"superuser"'),", Spring Data Redis will do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create the ",Object(o.b)("inlineCode",{parentName:"li"},'"by name"')," index: Created as a Redis Set with the key ",Object(o.b)("inlineCode",{parentName:"li"},"com.redislabs.edu.redi2read.models.Role:name:superuser")," containing one entry; the id of the indexed object ",Object(o.b)("inlineCode",{parentName:"li"},'"abc-123"')),Object(o.b)("li",{parentName:"ol"},"A list of indexes for the ",Object(o.b)("inlineCode",{parentName:"li"},"Role"),' "superuser": Create a Redis Set with the key ',Object(o.b)("inlineCode",{parentName:"li"},'"com.redislabs.edu.redi2read.models.Role:abc-123:idx"'),"\ncontaining one entry; the key of the index ",Object(o.b)("inlineCode",{parentName:"li"},'"com.redislabs.edu.redi2read.models.Role:name:superuser"'))),Object(o.b)("p",null,"Unfortunately, to index the already created Roles, we\u2019ll need to either retrieve them and resave them or recreate them.\nSince we already have automated the seeding of the Roles and we haven\u2019t yet created any associated objects,\nwe can simply delete them using the Redis CLI and the DEL command and restart the server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> KEYS com.redislabs.edu.redi2read.models.Role*\n1) "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464"\n2) "com.redislabs.edu.redi2read.models.Role:9d383baf-35a0-4d20-8296-eedc4bea134a"\n3) "com.redislabs.edu.redi2read.models.Role"\n127.0.0.1:6379> DEL "com.redislabs.edu.redi2read.models.Role:c4219654-0b79-4ee6-b928-cb75909c4464" "com.redislabs.edu.redi2read.models.Role:9d383baf-35a0-4d20-8296-eedc4bea134a" "com.redislabs.edu.redi2read.models.Role"\n(integer) 3\n127.0.0.1:6379>\n')),Object(o.b)("p",null,"The DEL command takes one or more keys. We\u2019ll pass the three current keys for the Role hashes and the Role key set."),Object(o.b)("p",null,"With the secondary index on the name for roles created, we can add a finder method to the ",Object(o.b)("inlineCode",{parentName:"p"},"RoleRepository"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"@Repository\npublic interface RoleRepository extends CrudRepository<Role, String> {\n  Role findFirstByName(String role);\n}\n")),Object(o.b)("h3",{id:"createusers-commandlinerunner"},"CreateUsers CommandLineRunner"),Object(o.b)("p",null,"Under the ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot "),"let's create the ",Object(o.b)("inlineCode",{parentName:"p"},"CreateUsers.java")," file with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.util.List;\n\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.redislabs.edu.redi2read.models.Role;\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.RoleRepository;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(2)\n@Slf4j\npublic class CreateUsers implements CommandLineRunner {\n\n  @Autowired\n  private RoleRepository roleRepository;\n\n  @Autowired\n  private UserRepository userRepository;\n\n  @Autowired\n  private BCryptPasswordEncoder passwordEncoder;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (userRepository.count() == 0) {\n      // load the roles\n      Role admin = roleRepository.findFirstByname("admin");\n      Role customer = roleRepository.findFirstByname("customer");\n\n      try {\n        // create a Jackson object mapper\n        ObjectMapper mapper = new ObjectMapper();\n        // create a type definition to convert the array of JSON into a List of Users\n        TypeReference<List<User>> typeReference = new TypeReference<List<User>>() {\n        };\n        // make the JSON data available as an input stream\n        InputStream inputStream = getClass().getResourceAsStream("/data/users/users.json");\n        // convert the JSON to objects\n        List<User> users = mapper.readValue(inputStream, typeReference);\n\n        users.stream().forEach((user) -> {\n          user.setPassword(passwordEncoder.encode(user.getPassword()));\n          user.addRole(customer);\n          userRepository.save(user);\n        });\n        log.info(">>>> " + users.size() + " Users Saved!");\n      } catch (IOException e) {\n        log.info(">>>> Unable to import users: " + e.getMessage());\n      }\n\n      User adminUser = new User();\n      adminUser.setName("Adminus Admistradore");\n      adminUser.setEmail("admin@example.com");\n      adminUser.setPassword(passwordEncoder.encode("Reindeer Flotilla"));//\n      adminUser.addRole(admin);\n\n      userRepository.save(adminUser);\n      log.info(">>>> Loaded User Data and Created users...");\n    }\n  }\n}\n')),Object(o.b)("p",null,"Let\u2019s break it down:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At the top, we use the ",Object(o.b)("inlineCode",{parentName:"li"},"@Autowired")," annotation to inject the ",Object(o.b)("inlineCode",{parentName:"li"},"RoleRepository"),", the ",Object(o.b)("inlineCode",{parentName:"li"},"UserRepository"),", and the ",Object(o.b)("inlineCode",{parentName:"li"},"BCryptPasswordEncoder"),"."),Object(o.b)("li",{parentName:"ul"},"As with the ",Object(o.b)("inlineCode",{parentName:"li"},"CreateRoles")," ",Object(o.b)("inlineCode",{parentName:"li"},"CommandLineRunner"),", we only execute the logic if there are no database users."),Object(o.b)("li",{parentName:"ul"},"We then load the admin and customer roles by using the Repository custom finder method ",Object(o.b)("inlineCode",{parentName:"li"},"findFirstByName"),"."),Object(o.b)("li",{parentName:"ul"},"To process the JSON, we create a Jackson ObjectMapper and a TypeReference, which will serve as a recipe for serializing the JSON into Java objects."),Object(o.b)("li",{parentName:"ul"},"Using the ",Object(o.b)("inlineCode",{parentName:"li"},"getResourceAsStream")," from the ",Object(o.b)("inlineCode",{parentName:"li"},"Class")," object, we load the JSON file from the resources directory"),Object(o.b)("li",{parentName:"ul"},"Then we use the ",Object(o.b)("inlineCode",{parentName:"li"},"ObjectMapper")," to convert the incoming input stream into a ",Object(o.b)("inlineCode",{parentName:"li"},"List")," of ",Object(o.b)("inlineCode",{parentName:"li"},"User")," objects"),Object(o.b)("li",{parentName:"ul"},"For each user, we encode the password and add the customer role"),Object(o.b)("li",{parentName:"ul"},"Near the end of the file, we create a single user with the admin role, which we will use in a later Lesson")),Object(o.b)("p",null,"On application restart, we should now see:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"2021-04-03 10:05:04.222  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.Redi2readApplication   : Started Redi2readApplication in 2.192 seconds (JVM running for 2.584)\n2021-04-03 10:05:04.539  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateRoles       : >>>> Created admin and customer roles...\n2021-04-03 10:06:27.292  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateUsers       : >>>> 1000 Users Saved!\n2021-04-03 10:06:27.373  INFO 40386 --- [  restartedMain] c.r.edu.redi2read.boot.CreateUsers       : >>>> Loaded User Data and Created users...\n")),Object(o.b)("h3",{id:"exploring-the-loaded-users"},"Exploring the loaded Users"),Object(o.b)("p",null,"If you were watching the Redis CLI in MONITOR mode you probably saw a barrage of the Redis commands executing for the 1001 users we\u2019ve just created.\nLet\u2019s use the CLI to explore the data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> KEYS "com.redislabs.edu.redi2read.models.User"\n1) "com.redislabs.edu.redi2read.models.User"\n127.0.0.1:6379> TYPE "com.redislabs.edu.redi2read.models.User"\nset\n127.0.0.1:6379> SCARD "com.redislabs.edu.redi2read.models.User"\n(integer) 1001\n127.0.0.1:6379> SRANDMEMBER "com.redislabs.edu.redi2read.models.User"\n"-1848761758049653394"\n127.0.0.1:6379> HGETALL "com.redislabs.edu.redi2read.models.User:-1848761758049653394"\n 1) "id"\n 2) "-1848761758049653394"\n 3) "_class"\n 4) "com.redislabs.edu.redi2read.models.User"\n 5) "roles.[0]"\n 6) "com.redislabs.edu.redi2read.models.Role:a9f9609f-c173-4f48-a82d-ca88b0d62d0b"\n 7) "name"\n 8) "Janice Garza"\n 9) "email"\n10) "janice.garza@example.com"\n11) "password"\n12) "$2a$10$/UHTESWIqcl6HZmGpWSUHexNymIgM7rzOsWc4tcgqh6W5OVO4O46."\n')),Object(o.b)("p",null,"We now have a Redis Set holding the collection of user keys for the Redis Hashes containing user instances.\nWe use the SCARD command to get the set\u2019s cardinality (1001, the 1000 users from the JSON plus the admin user).\nUsing the SRANDMEMBER command, we can pull a random member from a ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),". We then use that and the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," Hashes prefix to retrieve the data for a random User hash.\nA few things to point out:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user\u2019s set of roles are stored using indexed hash fields (",Object(o.b)("inlineCode",{parentName:"li"},"roles.[0], roles.[1]"),", etc.) with a value being the key for a given role.\nThis is the result of annotating the Java Set of Role using ",Object(o.b)("inlineCode",{parentName:"li"},"@Reference")),Object(o.b)("li",{parentName:"ul"},"The password field is hashed correctly.")),Object(o.b)("h3",{id:"building-the-redi2read-api"},"Building the Redi2Read API"),Object(o.b)("p",null,"Now that we have ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"s and ",Object(o.b)("inlineCode",{parentName:"p"},"Role"),"s, let\u2019s create an ",Object(o.b)("inlineCode",{parentName:"p"},"UserController")," to expose some user management functionality."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.controllers;\n\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n\n  @Autowired\n  private UserRepository userRepository;\n\n  @GetMapping\n  public Iterable<User> all() {\n    return userRepository.findAll();\n  }\n}\n')),Object(o.b)("p",null,"We can now issue a GET request to retrieve all users:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ curl --location --request GET 'http://localhost:8080/api/users/'\n")),Object(o.b)("p",null,"The output should be an array of JSON object like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n   {\n       "id": "-1180251602608130769",\n       "name": "Denise Powell",\n       "email": "denise.powell@example.com",\n       "password": "$2a$10$pMJjQ2bFAUGlBTX9cHsx/uGrbbl3JZmmiR.vG5xaVwQodQyLaj52a",\n       "passwordConfirm": null,\n       "roles": [\n           {\n               "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n               "name": "customer"\n           }\n       ]\n   },\n...\n]\n')),Object(o.b)("p",null,"Let\u2019s be good RESTful citizens and filter out the ",Object(o.b)("inlineCode",{parentName:"p"},"password")," and ",Object(o.b)("inlineCode",{parentName:"p"},"passwordConfirm")," fields on the way out.\nTo accomplish this we take advantage of the fact the Jackson is the default serializer in Spring Web which\nmean we can annotate the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," class with the ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonIgnoreProperties")," only allowing setters\n(so that we can load the data) but hiding the getters during serialization as shown next:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'@JsonIgnoreProperties(value = { "password", "passwordConfirm" }, allowSetters = true)\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\n@ToString(onlyExplicitlyIncluded = true)\n@Data\n@RedisHash\npublic class User {\n...\n}\n')),Object(o.b)("p",null,"With the import statement:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import com.fasterxml.jackson.annotation.JsonIgnoreProperties;\n")),Object(o.b)("p",null,"Issuing the request again should reflect the changes on the JSON response:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "id": "-1180251602608130769",\n        "name": "Denise Powell",\n        "email": "denise.powell@example.com",\n        "roles": [\n            {\n                "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n                "name": "customer"\n            }\n        ]\n    },\n...\n]\n')),Object(o.b)("p",null,"Let\u2019s add one more method to our ",Object(o.b)("inlineCode",{parentName:"p"},"UserController"),". We\u2019ll add the ability to retrieve a user by its email address,\nwhich will take advantage of the secondary index on email in the User object.\nWe\u2019ll implement it as a filter on the GET root endpoint of the controller:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),' @GetMapping\n public Iterable<User> all(@RequestParam(defaultValue = "") String email) {\n   if (email.isEmpty()) {\n     return userRepository.findAll();\n   } else {\n     Optional<User> user = Optional.ofNullable(userRepository.findFirstByEmail(email));\n     return user.isPresent() ? List.of(user.get()) : Collections.emptyList();\n   }\n }\n')),Object(o.b)("p",null,"We use a request parameter for the email, and if it is present, we invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"findFirstByEmail")," finder.\nWe wrap the result in a list to match the result type of the method. We use Optional to handle a null\nresult from the finder.\nAnd don\u2019t forget your imports:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import java.util.Collections;\nimport java.util.List;\nimport java.util.Optional;\nimport org.springframework.web.bind.annotation.RequestParam;\n")),Object(o.b)("p",null,"Invoking the endpoint with curl:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/users/?email=donald.gibson@example.com'\n")),Object(o.b)("p",null,"Returns the expected result:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "id": "-1266125356844480724",\n        "name": "Donald Gibson",\n        "email": "donald.gibson@example.com",\n        "roles": [\n            {\n                "id": "a9f9609f-c173-4f48-a82d-ca88b0d62d0b",\n                "name": "customer"\n            }\n        ]\n    }\n]\n')))}c.isMDXComponent=!0},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return t?a.a.createElement(m,s(s({ref:n},d),{},{components:t})):a.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},247:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(21),a=t(255);function o(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,d=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+c:c}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},255:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);