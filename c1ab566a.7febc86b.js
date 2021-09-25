(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(246)),i=(t(247),{id:"index-lesson_5",title:"Books, Categories & The Catalog",sidebar_label:"Books, Categories & The Catalog",slug:"/develop/java/redis-and-spring-course/lesson_5"}),s={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5",id:"develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5",isDocsHomePage:!1,title:"Books, Categories & The Catalog",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5.mdx",slug:"/develop/java/redis-and-spring-course/lesson_5",permalink:"/develop/java/redis-and-spring-course/lesson_5",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5.mdx",version:"current",sidebar_label:"Books, Categories & The Catalog",sidebar:"docs",previous:{title:"User/Roles & Secondary Indexes",permalink:"/develop/java/redis-and-spring-course/lesson_4"},next:{title:"Domain Models with RedisJSON",permalink:"/develop/java/redis-and-spring-course/lesson_6"}},l=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Books, Categories, and Book Ratings",id:"books-categories-and-book-ratings",children:[]},{value:"The Category Repository",id:"the-category-repository",children:[]},{value:"The Book Model",id:"the-book-model",children:[]},{value:"The Book Repository",id:"the-book-repository",children:[]},{value:"The Book Rating Repository",id:"the-book-rating-repository",children:[]},{value:"Loading Books",id:"loading-books",children:[]},{value:"Book Controller",id:"book-controller",children:[]},{value:"Get all Books",id:"get-all-books",children:[]},{value:"Get a book by ISBN",id:"get-a-book-by-isbn",children:[]},{value:"Get all Categories",id:"get-all-categories",children:[]},{value:"Generate Book Ratings",id:"generate-book-ratings",children:[]},{value:"Implementing Pagination with All Books",id:"implementing-pagination-with-all-books",children:[]}],p={toc:l};function d(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,i,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Author: ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(r.b)("h3",{id:"objectives"},"Objectives"),Object(r.b)("p",null,"Create the Book-Category-Book-Ratings domain, load and transform JSON data, and implement the Books API."),Object(r.b)("h3",{id:"agenda"},"Agenda"),Object(r.b)("p",null,"In this lesson, students will learn:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How to load JSON data using Jackson"),Object(r.b)("li",{parentName:"ul"},"How to create and work with secondary indexes"),Object(r.b)("li",{parentName:"ul"},"How to use the repositories with a REST controller\nIf you get stuck:"),Object(r.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/redis-developer/redi2read/tree/course/milestone-5"}),"https://github.com/redis-developer/redi2read/tree/course/milestone-5"))),Object(r.b)("h3",{id:"books-categories-and-book-ratings"},"Books, Categories, and Book Ratings"),Object(r.b)("p",null,"This lesson will start by fleshing out the Book, Category, and BookRating models with their respective Spring Repositories."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Books, Categories, and Book Ratings",src:t(704).default})),Object(r.b)("h4",{id:"the-category-model"},"The Category Model"),Object(r.b)("p",null,"We\u2019ll start with the ",Object(r.b)("inlineCode",{parentName:"p"},"Category"),". A ",Object(r.b)("inlineCode",{parentName:"p"},"Book")," belongs to one or more categories. The ",Object(r.b)("inlineCode",{parentName:"p"},"Category")," has a name that we will derive from the JSON data\nfiles in ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/data/books"),". As we\u2019ve done previously, we will map the class to a Redis Hash.\nAdd the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/models/Category.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.models;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.redis.core.RedisHash;\n\nimport lombok.Builder;\nimport lombok.Data;\n\n@Data\n@Builder\n@RedisHash\npublic class Category {\n  @Id\n  private String id;\n  private String name;\n}\n")),Object(r.b)("h3",{id:"the-category-repository"},"The Category Repository"),Object(r.b)("p",null,"The corresponding repository extends Spring\u2019s CrudRepository. Add the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories/CategoryRepository.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.Category;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface CategoryRepository extends CrudRepository<Category, String> {\n}\n")),Object(r.b)("h3",{id:"the-book-model"},"The Book Model"),Object(r.b)("p",null,"The Book model maps directly to the JSON payload in the *.json files in ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/data/books"),".\nFor example, the JSON object shown below came from the the file redis_0.json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'{\n   "pageCount": 228,\n   "thumbnail": "http://books.google.com/books/content?id=NsseEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n   "price": 9.95,\n   "subtitle": "Explore Redis - Its Architecture, Data Structures and Modules like Search, JSON, AI, Graph, Timeseries (English Edition)",\n   "description": "Complete reference guide to Redis KEY FEATURES \u25cf Complete coverage of Redis Modules.",\n   "language": "en",\n   "currency": "USD",\n   "id": "8194837766",\n   "title": "Redis(r) Deep Dive",\n   "infoLink": "https://play.google.com/store/books/details?id=NsseEAAAQBAJ&source=gbs_api",\n   "authors": ["Suyog Dilip Kale", "Chinmay Kulkarni"]\n },\n...\n}\n')),Object(r.b)("p",null,'The category name is extracted from the file name as "redis". The same applies to any book from the files: ',Object(r.b)("inlineCode",{parentName:"p"},"redis_0.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"redis_1.json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"redis_2.json"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"redis_3.json"),".\nThe Book class contains a ",Object(r.b)("inlineCode",{parentName:"p"},"Set<Category>")," which will for now contain the single category extracted from the filename. The ",Object(r.b)("inlineCode",{parentName:"p"},"Set<String>"),' for authors gets mapped from the "authors" JSON array in the payload.\nAdd the file ',Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories/Book.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.models;\n\nimport java.util.HashSet;\nimport java.util.Set;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.annotation.Reference;\nimport org.springframework.data.redis.core.RedisHash;\n\nimport lombok.Data;\nimport lombok.EqualsAndHashCode;\n\n@Data\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\n@RedisHash\npublic class Book {\n\n  @Id\n  @EqualsAndHashCode.Include\n  private String id;\n\n  private String title;\n  private String subtitle;\n  private String description;\n  private String language;\n  private Long pageCount;\n  private String thumbnail;\n  private Double price;\n  private String currency;\n  private String infoLink;\n\n  private Set<String> authors;\n\n  @Reference\n  private Set<Category> categories = new HashSet<Category>();\n\n  public void addCategory(Category category) {\n    categories.add(category);\n  }\n}\n")),Object(r.b)("h3",{id:"the-book-repository"},"The Book Repository"),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"BookRepository")," we introduce the usage of the ",Object(r.b)("inlineCode",{parentName:"p"},"PaginationAndSortingRepository"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"PaginationAndSortingRepository")," extends the ",Object(r.b)("inlineCode",{parentName:"p"},"CrudRepository")," interface\nand adds additional methods to ease paginated access to entities.\nWe will learn more about the usage of the ",Object(r.b)("inlineCode",{parentName:"p"},"PagingAndSortingRepository")," when we implement the ",Object(r.b)("inlineCode",{parentName:"p"},"BookController"),".\nAdd the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories/BookRepository.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.Book;\n\nimport org.springframework.data.repository.PagingAndSortingRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface BookRepository extends PagingAndSortingRepository<Book, String> {\n}\n")),Object(r.b)("h4",{id:"the-bookrating-model"},"The BookRating Model"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"BookRating")," model represents a rating of a book by a user. We implement a traditional 5 star rating system as a many-to-many relationship.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"BookRating")," model plays a role equivalent to that of a joining table or bridging table in a relational model.\n",Object(r.b)("inlineCode",{parentName:"p"},"BookRating")," sits between the two other entities of a many-to-many relationship. Its purpose is to store a record for each of the combinations\nof these other two entities (Book and User).\nWe keep the links to the Book and User models using the ",Object(r.b)("inlineCode",{parentName:"p"},"@Reference")," annotation (the equivalent of having foreign keys in a relational database)\nAdd the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/models/BookRating.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.models;\n\nimport javax.validation.constraints.NotNull;\n\nimport org.springframework.data.annotation.Id;\nimport org.springframework.data.annotation.Reference;\nimport org.springframework.data.redis.core.RedisHash;\n\nimport lombok.Builder;\nimport lombok.Data;\n\n@Data\n@Builder\n@RedisHash\npublic class BookRating {\n  @Id\n  private String id;\n\n  @NotNull\n  @Reference\n  private User user;\n\n  @NotNull\n  @Reference\n  private Book book;\n\n  @NotNull\n  private Integer rating;\n}\n")),Object(r.b)("h3",{id:"the-book-rating-repository"},"The Book Rating Repository"),Object(r.b)("p",null,"The corresponding Repository simply extends Spring\u2019s CrudRepository. Add the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/repositories/BookRatingRepository.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.repositories;\n\nimport com.redislabs.edu.redi2read.models.BookRating;\n\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface BookRatingRepository extends CrudRepository<BookRating, String> {\n}\n")),Object(r.b)("h3",{id:"loading-books"},"Loading Books"),Object(r.b)("p",null,"Now that we have our models and repositories defined, let\u2019s load the books from the provided JSON data in the ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/data/books")," directory.\nWe\u2019ll create a ",Object(r.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," to iterate over every .json file in the ",Object(r.b)("inlineCode",{parentName:"p"},"data/books")," directory.  We will map the content of each file to a Book object using Jackson.\nWe'll create a category using the characters in the filename up to the last underscore. If there is no category with that name already, we will create one.\nThe category is then added to the set of categories for the book.\nAdd the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot/CreateBooks.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport java.io.File;\nimport java.io.FileInputStream;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.edu.redi2read.models.Category;\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.edu.redi2read.repositories.CategoryRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(3)\n@Slf4j\npublic class CreateBooks implements CommandLineRunner {\n  @Autowired\n  private BookRepository bookRepository;\n\n  @Autowired\n  private CategoryRepository categoryRepository;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (bookRepository.count() == 0) {\n    ObjectMapper mapper = new ObjectMapper();\n    TypeReference<List<Book>> typeReference = new TypeReference<List<Book>>() {\n    };\n\n    List<File> files = //\n        Files.list(Paths.get(getClass().getResource("/data/books").toURI())) //\n            .filter(Files::isRegularFile) //\n            .filter(path -> path.toString().endsWith(".json")) //\n            .map(java.nio.file.Path::toFile) //\n            .collect(Collectors.toList());\n\n    Map<String, Category> categories = new HashMap<String, Category>();\n\n    files.forEach(file -> {\n          try {\n            log.info(">>>> Processing Book File: " + file.getPath());\n            String categoryName = file.getName().substring(0, file.getName().lastIndexOf("_"));\n            log.info(">>>> Category: " + categoryName);\n\n            Category category;\n            if (!categories.containsKey(categoryName)) {\n            category = Category.builder().name(categoryName).build();\n            categoryRepository.save(category);\n            categories.put(categoryName, category);\n            } else {\n            category = categories.get(categoryName);\n            }\n\n            InputStream inputStream = new FileInputStream(file);\n            List<Book> books = mapper.readValue(inputStream, typeReference);\n            books.stream().forEach((book) -> {\n            book.addCategory(category);\n            bookRepository.save(book);\n            });\n            log.info(">>>> " + books.size() + " Books Saved!");\n          } catch (IOException e) {\n            log.info("Unable to import books: " + e.getMessage());\n          }\n    });\n\n    log.info(">>>> Loaded Book Data and Created books...");\n    }\n  }\n}\n')),Object(r.b)("p",null,"There's a lot to unpack here, so let\u2019s take it from the top:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As done previously, we only execute if there are no books in the repository."),Object(r.b)("li",{parentName:"ul"},"We use Jackson ",Object(r.b)("inlineCode",{parentName:"li"},"ObjectMapper")," and a ",Object(r.b)("inlineCode",{parentName:"li"},"TypeReference "),"to perform the mapping."),Object(r.b)("li",{parentName:"ul"},"We collect the paths of all the files with the .json extension in the target directory."),Object(r.b)("li",{parentName:"ul"},"We create a ",Object(r.b)("inlineCode",{parentName:"li"},"Map")," of ",Object(r.b)("inlineCode",{parentName:"li"},"String"),"s to ",Object(r.b)("inlineCode",{parentName:"li"},"Category "),"objects to collect the categories as we process\nthe files and quickly determine whether we have already created a category."),Object(r.b)("li",{parentName:"ul"},"For each book, we assign the category and save it to Redis.")),Object(r.b)("h3",{id:"book-controller"},"Book Controller"),Object(r.b)("p",null,"Now we can implement the initial version of the ",Object(r.b)("inlineCode",{parentName:"p"},"BookController"),": our Bookstore Catalog API. This first version of the ",Object(r.b)("inlineCode",{parentName:"p"},"BookController"),"\nwill have three endpoints:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Get all books"),Object(r.b)("li",{parentName:"ul"},"Get a book by ISBN (id)"),Object(r.b)("li",{parentName:"ul"},"Get all categories\nAdd the file ",Object(r.b)("inlineCode",{parentName:"li"},"src/main/java/com/redislabs/edu/redi2read/controllers/BookController.java")," with the following contents:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.controllers;\n\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.edu.redi2read.models.Category;\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.edu.redi2read.repositories.CategoryRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/api/books")\npublic class BookController {\n  @Autowired\n  private BookRepository bookRepository;\n\n  @Autowired\n  private CategoryRepository categoryRepository;\n\n  @GetMapping\n  public Iterable<Book> all() {\n    return bookRepository.findAll();\n  }\n\n  @GetMapping("/categories")\n  public Iterable<Category> getCategories() {\n    return categoryRepository.findAll();\n  }\n\n  @GetMapping("/{isbn}")\n  public Book get(@PathVariable("isbn") String isbn) {\n    return bookRepository.findById(isbn).get();\n  }\n}\n')),Object(r.b)("h3",{id:"get-all-books"},"Get all Books"),Object(r.b)("p",null,"To get all books, we issue a GET request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/"),". This endpoint is implemented in the all method, which calls the BookRepository findAll method. Using curl:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/'\n")),Object(r.b)("p",null,"The result is an array of JSON objects containing the books:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "id": "1783980117",\n        "title": "RESTful Java Web Services Security",\n        "subtitle": null,\n        "description": "A sequential and easy-to-follow guide which allows you to understand the concepts related to securing web apps/services quickly and efficiently, since each topic is explained and described with the help of an example and in a step-by-step manner, helping you to easily implement the examples in your own projects. This book is intended for web application developers who use RESTful web services to power their websites. Prior knowledge of RESTful is not mandatory, but would be advisable.",\n        "language": "en",\n        "pageCount": 144,\n        "thumbnail": "http://books.google.com/books/content?id=Dh8ZBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n        "price": 11.99,\n        "currency": "USD",\n        "infoLink": "https://play.google.com/store/books/details?id=Dh8ZBAAAQBAJ&source=gbs_api",\n        "authors": [\n            "Andr\xe9s Salazar C.",\n            "Ren\xe9 Enr\xedquez"\n        ],\n        "categories": [\n            {\n                "id": "f2ada1e2-7c18-4d90-bfe7-e321b650c0a3",\n                "name": "redis"\n            }\n        ]\n    },\n...\n]\n')),Object(r.b)("h3",{id:"get-a-book-by-isbn"},"Get a book by ISBN"),Object(r.b)("p",null,"To get a specific book, we issue a GET request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/{isbn}"),". This endpoint is implemented in the get method, which calls the BookRepository findById method. Using curl:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/1680503545'\n")),Object(r.b)("p",null,"The result is a JSON object containing the book:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "1680503545",\n    "title": "Functional Programming in Java",\n    "subtitle": "Harnessing the Power Of Java 8 Lambda Expressions",\n    "description": "Intermediate level, for programmers fairly familiar with Java, but new to the functional style of programming and lambda expressions. Get ready to program in a whole new way. ...",\n    "language": "en",\n    "pageCount": 196,\n    "thumbnail": "http://books.google.com/books/content?id=_g5QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n    "price": 28.99,\n    "currency": "USD",\n    "infoLink": "https://play.google.com/store/books/details?id=_g5QDwAAQBAJ&source=gbs_api",\n    "authors": [\n        "Venkat Subramaniam"\n    ],\n    "categories": [\n        {\n            "id": "9d5c025e-bf38-4b50-a971-17e0b7408385",\n            "name": "java"\n        }\n    ]\n}\n')),Object(r.b)("h3",{id:"get-all-categories"},"Get all Categories"),Object(r.b)("p",null,"To get all categories, we issue a GET request to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:8080/api/books/categories"),". It\u2019s implemented in the ",Object(r.b)("inlineCode",{parentName:"p"},"getCategories")," method, which calls the ",Object(r.b)("inlineCode",{parentName:"p"},"CategoriesRepository")," ",Object(r.b)("inlineCode",{parentName:"p"},"findAll")," method. Using curl:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/categories'\n")),Object(r.b)("p",null,"The result is an array of JSON objects containing the categories:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "id": "2fd916fe-7ff8-44c7-9f86-ca388565256c",\n        "name": "mongodb"\n    },\n    {\n        "id": "9615a135-7472-48fc-b8ac-a5516a2c8b22",\n        "name": "dynamodb"\n    },\n    {\n        "id": "f2ada1e2-7c18-4d90-bfe7-e321b650c0a3",\n        "name": "redis"\n    },\n    {\n        "id": "08fc8148-d924-4d2e-af7e-f5fe6f2861f0",\n        "name": "elixir"\n    },\n    {\n        "id": "b6a0b57b-ebb8-4d98-9352-8236256dbc27",\n        "name": "microservices"\n    },\n    {\n        "id": "7821fd6a-ec94-4ac6-8089-a480a7c7f2ee",\n        "name": "elastic_search"\n    },\n    {\n        "id": "f2be1bc3-1700-45f5-a300-2c4cf2f90583",\n        "name": "hbase"\n    },\n    {\n        "id": "31c8ea64-cad2-40d9-b0f6-30b8ea6fcbfb",\n        "name": "reactjs"\n    },\n    {\n        "id": "5e527af7-93a1-4c00-8f20-f89e89a213e8",\n        "name": "apache_spark"\n    },\n    {\n        "id": "9d5c025e-bf38-4b50-a971-17e0b7408385",\n        "name": "java"\n    },\n    {\n        "id": "bcb2a01c-9b0a-4846-b1be-670168b5d768",\n        "name": "clojure"\n    },\n    {\n        "id": "aba53bb9-7cfa-4b65-8900-8c7e857311c6",\n        "name": "couchbase"\n    },\n    {\n        "id": "bd1b2877-1564-4def-b3f7-18871165ff10",\n        "name": "riak"\n    },\n    {\n        "id": "47d9a769-bbc2-4068-b27f-2b800bec1565",\n        "name": "kotlin"\n    },\n    {\n        "id": "400c8f5a-953b-4b8b-b21d-045535d8084d",\n        "name": "nosql_big_data"\n    },\n    {\n        "id": "06bc25ff-f2ab-481b-a4d9-819552dea0e0",\n        "name": "javascript"\n    }\n]\n')),Object(r.b)("h3",{id:"generate-book-ratings"},"Generate Book Ratings"),Object(r.b)("p",null,"Next, we will create a random set of book ratings. Later in the course, we\u2019ll use these for an example. Following the same recipe we used to seed Redis with a ",Object(r.b)("inlineCode",{parentName:"p"},"CommandLineRunner"),", add the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/boot/CreateBookRatings.java")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport java.util.Random;\nimport java.util.stream.IntStream;\n\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.edu.redi2read.models.BookRating;\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.BookRatingRepository;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(4)\n@Slf4j\npublic class CreateBookRatings implements CommandLineRunner {\n\n  @Value("${app.numberOfRatings}")\n  private Integer numberOfRatings;\n\n  @Value("${app.ratingStars}")\n  private Integer ratingStars;\n\n  @Autowired\n  private RedisTemplate<String, String> redisTemplate;\n\n  @Autowired\n  private BookRatingRepository bookRatingRepo;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (bookRatingRepo.count() == 0) {\n    Random random = new Random();\n    IntStream.range(0, numberOfRatings).forEach(n -> {\n          String bookId = redisTemplate.opsForSet().randomMember(Book.class.getName());\n          String userId = redisTemplate.opsForSet().randomMember(User.class.getName());\n          int stars = random.nextInt(ratingStars) + 1;\n\n          User user = new User();\n          user.setId(userId);\n\n          Book book = new Book();\n          book.setId(bookId);\n\n          BookRating rating = BookRating.builder() //\n            .user(user) //\n            .book(book) //\n            .rating(stars).build();\n          bookRatingRepo.save(rating);\n    });\n\n    log.info(">>>> BookRating created...");\n    }\n  }\n}\n')),Object(r.b)("p",null,"This ",Object(r.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," creates a configurable number of random ratings for a random set of books and users. We use ",Object(r.b)("inlineCode",{parentName:"p"},"RedisTemplate.opsForSet().randomMember()")," to request a random ID from the set of users and books.\nThen we choose a random integer between 1 and the total number of stars in our rating system to create the rating.\nThis class introduces the use of the ",Object(r.b)("inlineCode",{parentName:"p"},"@Value")," annotation, which will grab the property inside the String param ",Object(r.b)("inlineCode",{parentName:"p"},"${foo}")," from the application\u2019s property file.\nIn the file ",Object(r.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties")," add the following values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"app.numberOfRatings=5000\napp.ratingStars=5\n")),Object(r.b)("h3",{id:"implementing-pagination-with-all-books"},"Implementing Pagination with All Books"),Object(r.b)("p",null,"Pagination is helpful when we have a large dataset and want to present it to the user in smaller chunks. As we learned earlier in the lesson, the ",Object(r.b)("inlineCode",{parentName:"p"},"BookRepository "),"extends the ",Object(r.b)("inlineCode",{parentName:"p"},"PagingAndSortingRepository"),", which is built on top of the ",Object(r.b)("inlineCode",{parentName:"p"},"CrudRepository"),".\nIn this section, we will refactor the ",Object(r.b)("inlineCode",{parentName:"p"},"BookController")," all method to work with the pagination features of the ",Object(r.b)("inlineCode",{parentName:"p"},"PagingAndSortingRepository"),". Replace the previously created all method with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'  @GetMapping\n  public ResponseEntity<Map<String, Object>> all( //\n    @RequestParam(defaultValue = "0") Integer page, //\n    @RequestParam(defaultValue = "10") Integer size //\n  ) {\n    Pageable paging = PageRequest.of(page, size);\n    Page<Book> pagedResult = bookRepository.findAll(paging);\n    List<Book> books = pagedResult.hasContent() ? pagedResult.getContent() : Collections.emptyList();\n\n    Map<String, Object> response = new HashMap<>();\n    response.put("books", books);\n    response.put("page", pagedResult.getNumber());\n    response.put("pages", pagedResult.getTotalPages());\n    response.put("total", pagedResult.getTotalElements());\n\n    return new ResponseEntity<>(response, new HttpHeaders(), HttpStatus.OK);\n  }\n')),Object(r.b)("p",null,"Let\u2019s break down the refactoring:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We want to control the method return value so we\u2019ll use a ",Object(r.b)("inlineCode",{parentName:"li"},"ResponseEntity"),", which is an extension of ",Object(r.b)("inlineCode",{parentName:"li"},"HttpEntity")," and gives us control over the HTTP status code, headers, and body."),Object(r.b)("li",{parentName:"ul"},"For the return type, we wrap a ",Object(r.b)("inlineCode",{parentName:"li"},"Map<String,Object>")," to return the collection of books as well as pagination data."),Object(r.b)("li",{parentName:"ul"},"We\u2019ve added two request parameters (HTTP query params) of type integer for the page number being retrieved and the size of the page.\nThe page number defaults to 0 and the size of the page defaults to 10."),Object(r.b)("li",{parentName:"ul"},"In the body of the method, we use the ",Object(r.b)("inlineCode",{parentName:"li"},"Pageable")," and ",Object(r.b)("inlineCode",{parentName:"li"},"PageRequest")," abstractions to construct the paging request."),Object(r.b)("li",{parentName:"ul"},"We get a ",Object(r.b)("inlineCode",{parentName:"li"},"Page<Book>")," result by invoking the ",Object(r.b)("inlineCode",{parentName:"li"},"findAll")," method, passing the ",Object(r.b)("inlineCode",{parentName:"li"},"Pageable")," paging request."),Object(r.b)("li",{parentName:"ul"},"If the returned page contains any items, we add them to the response object. Otherwise, we add an empty list."),Object(r.b)("li",{parentName:"ul"},"The response is constructed by instantiating a Map and adding the books, current page, total number of pages, and total number of books."),Object(r.b)("li",{parentName:"ul"},"Finally we package the response map into a ",Object(r.b)("inlineCode",{parentName:"li"},"ResponseEntity"),".")),Object(r.b)("p",null,"Let\u2019s fire up a pagination request with curl as shown next:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/books/?size=25&page=2'\n")),Object(r.b)("p",null,"Passing a page size of 25 and requesting page number 2, we get the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "total": 2403,\n    "books": [\n        {\n            "id": "1786469960",\n            "title": "Data Visualization with D3 4.x Cookbook",\n            "subtitle": null,\n            "description": "Discover over 65 recipes to help you create breathtaking data visualizations using the latest features of D3...",\n            "language": "en",\n            "pageCount": 370,\n            "thumbnail": "http://books.google.com/books/content?id=DVQoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n            "price": 22.39,\n            "currency": "USD",\n            "infoLink": "https://play.google.com/store/books/details?id=DVQoDwAAQBAJ&source=gbs_api",\n            "authors": [\n                "Nick Zhu"\n            ],\n            "categories": [\n                {\n                    "id": "f2ada1e2-7c18-4d90-bfe7-e321b650c0a3",\n                    "name": "redis"\n                }\n            ]\n        },\n        {\n            "id": "111871735X",\n            "title": "Android Programming",\n            "subtitle": "Pushing the Limits",\n            "description": "Unleash the power of the Android OS and build the kinds ofbrilliant, innovative apps users love to use ...",\n            "language": "en",\n            "pageCount": 432,\n            "thumbnail": "http://books.google.com/books/content?id=SUWPAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",\n            "price": 30.0,\n            "currency": "USD",\n            "infoLink": "https://play.google.com/store/books/details?id=SUWPAQAAQBAJ&source=gbs_api",\n            "authors": [\n                "Erik Hellman"\n            ],\n            "categories": [\n                {\n                    "id": "47d9a769-bbc2-4068-b27f-2b800bec1565",\n                    "name": "kotlin"\n                }\n            ]\n        },\n')))}d.isMDXComponent=!0},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=o,m=c["".concat(i,".").concat(g)]||c[g]||b[g]||r;return t?a.a.createElement(m,s(s({ref:n},p),{},{components:t})):a.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},247:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var o=t(21),a=t(255);function r(){var e=Object(o.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,l=r.absolute,p=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return p?e+d:d}(r,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},255:function(e,n,t){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!o(e)}t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return a}))},704:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/books_categories_ratings-369817623cf488d2890d8869486cc275.png"}}]);