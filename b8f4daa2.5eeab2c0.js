(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(263)),i=(r(264),{id:"index-lesson_6",title:"Domain Models with RedisJSON",sidebar_label:"Domain Models w/ RedisJSON",slug:"/develop/java/redis-and-spring-course/lesson_6"}),s={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6",id:"develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6",isDocsHomePage:!1,title:"Domain Models with RedisJSON",description:"Author: Brian Sam-Bodden",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6.mdx",slug:"/develop/java/redis-and-spring-course/lesson_6",permalink:"/develop/java/redis-and-spring-course/lesson_6",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6.mdx",version:"current",sidebar_label:"Domain Models w/ RedisJSON",sidebar:"docs",previous:{title:"Books, Categories & The Catalog",permalink:"/develop/java/redis-and-spring-course/lesson_5"},next:{title:"Search with RediSearch",permalink:"/develop/java/redis-and-spring-course/lesson_7"}},d=[{value:"Objectives",id:"objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"Carts and Cart Items",id:"carts-and-cart-items",children:[]},{value:"RedisJSON",id:"redisjson",children:[]},{value:"JRedisJSON",id:"jredisjson",children:[]},{value:"The Models",id:"the-models",children:[]},{value:"Purchased Books",id:"purchased-books",children:[]},{value:"The Cart Repository",id:"the-cart-repository",children:[]},{value:"The Cart Service",id:"the-cart-service",children:[]},{value:"Generating Random Carts",id:"generating-random-carts",children:[]}],c={toc:d};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Author: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/bsbodden"}),"Brian Sam-Bodden")),Object(o.b)("h3",{id:"objectives"},"Objectives"),Object(o.b)("p",null,"Add a JSON-backed domain model to Redi2Read using the RedisJSON Redis module."),Object(o.b)("h3",{id:"agenda"},"Agenda"),Object(o.b)("p",null,"In this lesson, you'll learn how to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use JSON documents as extensions of your domain."),Object(o.b)("li",{parentName:"ul"},"Implement a custom Spring Repository to work with JSON documents."),Object(o.b)("li",{parentName:"ul"},"Implement the ",Object(o.b)("inlineCode",{parentName:"li"},"CartController")," using the JRedisJSON client library.\nIf you get stuck:"),Object(o.b)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redis-developer/redi2read/tree/course/milestone-6"}),"https://github.com/redis-developer/redi2read/tree/course/milestone-6"))),Object(o.b)("h3",{id:"carts-and-cart-items"},"Carts and Cart Items"),Object(o.b)("p",null,"We will implement the ",Object(o.b)("inlineCode",{parentName:"p"},"Cart")," and ",Object(o.b)("inlineCode",{parentName:"p"},"CartItem")," models backed by a custom Spring Repository that uses the RedisJSON API via the JRedisJSON client library."),Object(o.b)("p",null,"We will represent a user\u2019s cart as a JSON document containing cart item subdocuments. As you can see in the class diagram, a ",Object(o.b)("inlineCode",{parentName:"p"},"Cart")," has zero or more ",Object(o.b)("inlineCode",{parentName:"p"},"CartItems"),", and it belongs to a ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Carts and Cart Items",src:r(775).default})),Object(o.b)("h3",{id:"redisjson"},"RedisJSON"),Object(o.b)("p",null,"RedisJSON is a Redis module that lets you store, update, and fetch JSON values natively in Redis.\nJSON can be a better fit for modeling complex data in Redis than Hashes because, unlike Hashes,\nJSON values can contain nested arrays and objects."),Object(o.b)("h3",{id:"jredisjson"},"JRedisJSON"),Object(o.b)("p",null,"JRedisJSON (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/RedisJSON/JRedisJSON"}),"https://github.com/RedisJSON/JRedisJSON"),") is a Java client that provides access to RedisJSON's Redis API and provides Java serialization using Google\u2019s GSON library."),Object(o.b)("h4",{id:"adding-jredisjson-as-a-dependency"},"Adding JRedisJSON as a Dependency"),Object(o.b)("p",null,"We will use a SNAPSHOT version of JRedisJSON to take advantage of more advanced JSON manipulation features recently introduced.\nAdd the snapshots-repo to your Maven POM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<repositories>\n  <repository>\n    <id>snapshots-repo</id>\n    <url>https://oss.sonatype.org/content/repositories/snapshots</url>\n  </repository>\n</repositories>\n\nAnd then the JRedisJSON dependency to the dependencies block:\n<dependency>\n  <groupId>com.redislabs</groupId>\n  <artifactId>jrejson</artifactId>\n  <version>1.4.0-SNAPSHOT</version>\n</dependency>\n")),Object(o.b)("h3",{id:"the-models"},"The Models"),Object(o.b)("h4",{id:"the-cartitem-model"},"The CartItem Model"),Object(o.b)("p",null,"We\u2019ll start with the ",Object(o.b)("inlineCode",{parentName:"p"},"CartItem "),"model. It holds information about a ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"Cart"),"; it stores the ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," ISBN (id), price, and quantity added to the cart.\nAdd the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/models/CartItem.java")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.models;\n\nimport lombok.Builder;\nimport lombok.Data;\n\n@Data\n@Builder\npublic class CartItem {\n  private String isbn;\n  private Double price;\n  private Long quantity;\n}\n")),Object(o.b)("h4",{id:"the-cart-model"},"The Cart Model"),Object(o.b)("p",null,"The Cart model contains the ID of the owning User and a set of ",Object(o.b)("inlineCode",{parentName:"p"},"CartItem"),"s. Utility methods exist to return the total number of items in the cart and the total cost.\nAdd the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/models/Cart.java")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"package com.redislabs.edu.redi2read.models;\n\nimport java.util.Set;\n\nimport lombok.Builder;\nimport lombok.Data;\nimport lombok.Singular;\n\n@Data\n@Builder\npublic class Cart {\n  private String id;\n  private String userId;\n\n  @Singular\n  private Set<CartItem> cartItems;\n\n  public Integer count() {\n    return getCartItems().size();\n  }\n\n  public Double getTotal() {\n    return cartItems //\n        .stream() //\n        .mapToDouble(ci -> ci.getPrice() * ci.getQuantity()) //\n        .sum();\n  }\n}\n")),Object(o.b)("h3",{id:"purchased-books"},"Purchased Books"),Object(o.b)("p",null,"After a user checks out, we need to keep track of the books the user now owns. To keep it simple,\nwe will add a ",Object(o.b)("inlineCode",{parentName:"p"},"Set<Book>")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"User")," model annotated with the ",Object(o.b)("inlineCode",{parentName:"p"},"@Reference")," annotation.\nWe\u2019ll also include a utility method that adds books to the user\u2019s collection of books owned.\nMake the changes below to the User model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// ...\n@RedisHash\npublic class User {\n\n  //...\n\n @Reference\n @JsonIdentityReference(alwaysAsId = true)\n private Set<Role> roles = new HashSet<Role>();\n\n public void addRole(Role role) {\n   roles.add(role);\n }\n\n @Reference\n @JsonIdentityReference(alwaysAsId = true)\n private Set<Book> books = new HashSet<Book>();\n\n public void addBook(Book book) {\n   books.add(book);\n }\n\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@Reference")," annotation works for our ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),"s in the context of Redis serialization, but you might have noticed that\nthe roles were being fully serialized into the resulting JSON payload by Jackson.\nWe will add the ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonIdentityReference "),"with the ",Object(o.b)("inlineCode",{parentName:"p"},"alwaysAsId")," parameter set to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", which, given the proper meta-information in the target classes (",Object(o.b)("inlineCode",{parentName:"p"},"Book")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Role"),"), will make Jackson serialize collections of these objects as IDs.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonIdentityInfo")," annotation allows us to set a generator (",Object(o.b)("inlineCode",{parentName:"p"},"ObjectIdGenerator.PropertyGenerator"),") using the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," property to direct how the serialization will happen in the presence of the ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonIdentityReference")," annotation.\nAdd the annotation to the ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," model as shown:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@EqualsAndHashCode(onlyExplicitlyIncluded = true)\n@JsonIdentityInfo(\n        generator = ObjectIdGenerators.PropertyGenerator.class,\n        property = "id")\n@RedisHash\npublic class Book {\n//...\n}\n')),Object(o.b)("p",null,"Similarly, we\u2019ll add the ",Object(o.b)("inlineCode",{parentName:"p"},"@JsonIdentityInfo")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Role")," model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Data\n@Builder\n@JsonIdentityInfo(\n        generator = ObjectIdGenerators.PropertyGenerator.class,\n        property = "id")\n@RedisHash\npublic class Role {\n//...\n}\n')),Object(o.b)("p",null,"Now, when JSON serialization occurs in the REST controllers, the user collection will include the roles as JSON arrays of role IDs. The user collection will also include the newly added collection of books as an array of book IDs."),Object(o.b)("h3",{id:"the-cart-repository"},"The Cart Repository"),Object(o.b)("p",null,"RedisJSON is not yet seamlessly integrated with Spring, but that does not prevent us from using RedisJSON the \u201cSpring Way\u201d. We have provided an implementation of Spring\u2019s CrudRepository so that we can implement our services and controllers.\nAdd the file src/main/java/com/redislabs/edu/redi2read/repositories/CartRepository.java with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.repositories;\n\nimport java.util.List;\nimport java.util.Optional;\nimport java.util.UUID;\nimport java.util.stream.Collectors;\nimport java.util.stream.StreamSupport;\n\nimport com.redislabs.edu.redi2read.models.Cart;\nimport com.redislabs.modules.rejson.JReJSON;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.redis.core.HashOperations;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.data.redis.core.SetOperations;\nimport org.springframework.data.repository.CrudRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic class CartRepository implements CrudRepository<Cart, String> {\n\n  private JReJSON redisJson = new JReJSON();\n  private final static String idPrefix = Cart.class.getName();\n\n  @Autowired\n  private RedisTemplate<String, String> template;\n\n  private SetOperations<String, String> redisSets() {\n    return template.opsForSet();\n  }\n\n  private HashOperations<String, String, String> redisHash() {\n    return template.opsForHash();\n  }\n\n  @Override\n  public <S extends Cart> S save(S cart) {\n    // set cart id\n    if (cart.getId() == null) {\n      cart.setId(UUID.randomUUID().toString());\n    }\n    String key = getKey(cart);\n    redisJson.set(key, cart);\n    redisSets().add(idPrefix, key);\n    redisHash().put("carts-by-user-id-idx", cart.getUserId().toString(), cart.getId().toString());\n\n    return cart;\n  }\n\n  @Override\n  public <S extends Cart> Iterable<S> saveAll(Iterable<S> carts) {\n    return StreamSupport //\n        .stream(carts.spliterator(), false) //\n        .map(cart -> save(cart)) //\n        .collect(Collectors.toList());\n  }\n\n  @Override\n  public Optional<Cart> findById(String id) {\n    Cart cart = redisJson.get(getKey(id), Cart.class);\n    return Optional.ofNullable(cart);\n  }\n\n  @Override\n  public boolean existsById(String id) {\n    return template.hasKey(getKey(id));\n  }\n\n  @Override\n  public Iterable<Cart> findAll() {\n    String[] keys = redisSets().members(idPrefix).stream().toArray(String[]::new);\n    return (Iterable<Cart>) redisJson.mget(Cart.class, keys);\n  }\n\n  @Override\n  public Iterable<Cart> findAllById(Iterable<String> ids) {\n    String[] keys = StreamSupport.stream(ids.spliterator(), false) //\n      .map(id -> getKey(id)).toArray(String[]::new);\n    return (Iterable<Cart>) redisJson.mget(Cart.class, keys);\n  }\n\n  @Override\n  public long count() {\n    return redisSets().size(idPrefix);\n  }\n\n  @Override\n  public void deleteById(String id) {\n    redisJson.del(getKey(id));\n  }\n\n  @Override\n  public void delete(Cart cart) {\n    deleteById(cart.getId());\n  }\n\n  @Override\n  public void deleteAll(Iterable<? extends Cart> carts) {\n    List<String> keys = StreamSupport //\n        .stream(carts.spliterator(), false) //\n        .map(cart -> idPrefix + cart.getId()) //\n        .collect(Collectors.toList());\n    redisSets().getOperations().delete(keys);\n  }\n\n  @Override\n  public void deleteAll() {\n    redisSets().getOperations().delete(redisSets().members(idPrefix));\n  }\n\n  public Optional<Cart> findByUserId(Long id) {\n    String cartId = redisHash().get("carts-by-user-id-idx", id.toString());\n    return (cartId != null) ? findById(cartId) : Optional.empty();\n  }\n\n  public static String getKey(Cart cart) {\n    return String.format("%s:%s", idPrefix, cart.getId());\n  }\n\n  public static String getKey(String id) {\n    return String.format("%s:%s", idPrefix, id);\n  }\n\n}\n')),Object(o.b)("p",null,"As with the ",Object(o.b)("inlineCode",{parentName:"p"},"@RedisHash")," annotated entities, our Carts are maintained with a collection of Redis JSON objects and a Redis Set to maintain the collection of keys."),Object(o.b)("h3",{id:"the-cart-service"},"The Cart Service"),Object(o.b)("p",null,"As Spring applications get more complex, using the repositories directly on your controllers overcomplicates the controllers and diverts from the responsibility to control\nrouting and deal with incoming parameters and outgoing JSON payloads.\nAn approach to keep both models and controllers from getting bloated with business logic (\u201cfat\u201d models and \u201cfat\u201d controllers) is to introduce a business logic service layer.\nWe\u2019ll do so for the cart business logic by introducing the ",Object(o.b)("inlineCode",{parentName:"p"},"CartService"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"CartService")," introduces four cart-related business methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get"),": Finds a cart by id"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"addToCart"),": Adds a cart item to a cart"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"removeFromCart"),": Removes an isbn from the cart\u2019s set of cart items"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"checkout"),": Given a cart ID, adds the contents to the user\u2019s collection of owned books")),Object(o.b)("p",null,"Add the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/services/CartService.java")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.services;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Optional;\nimport java.util.OptionalLong;\nimport java.util.stream.LongStream;\n\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.edu.redi2read.models.Cart;\nimport com.redislabs.edu.redi2read.models.CartItem;\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.edu.redi2read.repositories.CartRepository;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\nimport com.redislabs.modules.rejson.JReJSON;\nimport com.redislabs.modules.rejson.Path;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class CartService {\n\n @Autowired\n private CartRepository cartRepository;\n\n @Autowired\n private BookRepository bookRepository;\n\n @Autowired\n private UserRepository userRepository;\n\n private JReJSON redisJson = new JReJSON();\n\n Path cartItemsPath = Path.of(".cartItems");\n\n public Cart get(String id) {\n   return cartRepository.findById(id).get();\n }\n\n public void addToCart(String id, CartItem item) {\n   Optional<Book> book = bookRepository.findById(item.getIsbn());\n   if (book.isPresent()) {\n     String cartKey = CartRepository.getKey(id);\n     item.setPrice(book.get().getPrice());\n     redisJson.arrAppend(cartKey, cartItemsPath, item);\n   }\n }\n\n public void removeFromCart(String id, String isbn) {\n   Optional<Cart> cartFinder = cartRepository.findById(id);\n   if (cartFinder.isPresent()) {\n     Cart cart = cartFinder.get();\n     String cartKey = CartRepository.getKey(cart.getId());\n     List<CartItem> cartItems = new ArrayList<CartItem>(cart.getCartItems());\n     OptionalLong cartItemIndex =  LongStream.range(0, cartItems.size()).filter(i -> cartItems.get((int) i).getIsbn().equals(isbn)).findFirst();\n     if (cartItemIndex.isPresent()) {\n       redisJson.arrPop(cartKey, CartItem.class, cartItemsPath, cartItemIndex.getAsLong());\n     }\n   }\n }\n\n public void checkout(String id) {\n   Cart cart = cartRepository.findById(id).get();\n   User user = userRepository.findById(cart.getUserId()).get();\n   cart.getCartItems().forEach(cartItem -> {\n     Book book = bookRepository.findById(cartItem.getIsbn()).get();\n     user.addBook(book);\n   });\n   userRepository.save(user);\n   // cartRepository.delete(cart);\n }\n}\n')),Object(o.b)("p",null,"The service implements the ",Object(o.b)("inlineCode",{parentName:"p"},"addToCart")," and ",Object(o.b)("inlineCode",{parentName:"p"},"removeFromCart "),"methods natively at the JSON level using JSONPath syntax to add and remove items from the cart.\nLet\u2019s delve deeper into the implementation of these methods."),Object(o.b)("h4",{id:"adding-items-to-the-cart"},"Adding Items to the cart"),Object(o.b)("p",null,"In the addToCart method:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We search for the cart by ID"),Object(o.b)("li",{parentName:"ul"},"If we find the card, then we search for the book to be added to the cart by ISBN using the ",Object(o.b)("inlineCode",{parentName:"li"},"BookRepository")),Object(o.b)("li",{parentName:"ul"},"If we find the book, we add the book\u2019s current price to the item (we don\u2019t want customers setting their own prices)"),Object(o.b)("li",{parentName:"ul"},"We then use the JSON.ARRAPPEND command to insert the JSON object into the JSON array at the JSONPath expression ",Object(o.b)("inlineCode",{parentName:"li"},'".cartItems"'))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public void addToCart(String id, CartItem item) {\n  Optional<Book> book = bookRepository.findById(item.getIsbn());\n  if (book.isPresent()) {\n    String cartKey = CartRepository.getKey(id);\n    item.setPrice(book.get().getPrice());\n    redisJson.arrAppend(cartKey, cartItemsPath, item);\n  }\n}\n")),Object(o.b)("h4",{id:"removing-items-from-the-cart"},"Removing Items from the cart"),Object(o.b)("p",null,"In the removeFromCart method:\nWe search for the cart by ID."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If we find the cart, we search for the index of the item to be removed in the array of cart items."),Object(o.b)("li",{parentName:"ul"},"If we find the item, we use the JSON.ARRPOP command to remove the item by its index at the JSONPath expression \u201c.cartItems\u201d.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public void removeFromCart(String id, String isbn) {\n  Optional<Cart> cartFinder = cartRepository.findById(id);\n  if (cartFinder.isPresent()) {\n    Cart cart = cartFinder.get();\n    String cartKey = CartRepository.getKey(cart.getId());\n    List<CartItem> cartItems = new ArrayList<CartItem>(cart.getCartItems());\n    OptionalLong cartItemIndex =  LongStream.range(0, cartItems.size()).filter(i -> cartItems.get((int) i).getIsbn().equals(isbn)).findFirst();\n    if (cartItemIndex.isPresent()) {\n      redisJson.arrPop(cartKey, CartItem.class, cartItemsPath, cartItemIndex.getAsLong());\n    }\n  }\n}\n")),Object(o.b)("h3",{id:"generating-random-carts"},"Generating Random Carts"),Object(o.b)("p",null,"We now have all the pieces in place to create a ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," that can generate random carts for our users.\nAs done previously, we will set the number of carts generated using an application property. To do so, add the following to the file ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/resources/application.properties"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"app.numberOfCarts=2500\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CreateCarts")," ",Object(o.b)("inlineCode",{parentName:"p"},"CommandLineRunner")," is shown below. Add it to the boot package."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.boot;\n\nimport java.util.HashSet;\nimport java.util.Random;\nimport java.util.Set;\nimport java.util.stream.IntStream;\n\nimport com.redislabs.edu.redi2read.models.Book;\nimport com.redislabs.edu.redi2read.models.Cart;\nimport com.redislabs.edu.redi2read.models.CartItem;\nimport com.redislabs.edu.redi2read.models.User;\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.edu.redi2read.repositories.CartRepository;\nimport com.redislabs.edu.redi2read.services.CartService;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Component;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(5)\n@Slf4j\npublic class CreateCarts implements CommandLineRunner {\n\n  @Autowired\n  private RedisTemplate<String, String> redisTemplate;\n\n  @Autowired\n  CartRepository cartRepository;\n\n  @Autowired\n  BookRepository bookRepository;\n\n  @Autowired\n  CartService cartService;\n\n  @Value("${app.numberOfCarts}")\n  private Integer numberOfCarts;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (cartRepository.count() == 0) {\n      Random random = new Random();\n\n      // loops for the number of carts to create\n      IntStream.range(0, numberOfCarts).forEach(n -> {\n        // get a random user\n        String userId = redisTemplate.opsForSet()//\n            .randomMember(User.class.getName());\n\n        // make a cart for the user\n        Cart cart = Cart.builder()//\n            .userId(userId) //\n            .build();\n\n        // get between 1 and 7 books\n        Set<Book> books = getRandomBooks(bookRepository, 7);\n\n        // add to cart\n        cart.setCartItems(getCartItemsForBooks(books));\n\n        // save the cart\n        cartRepository.save(cart);\n\n        // randomly checkout carts\n        if (random.nextBoolean()) {\n          cartService.checkout(cart.getId());\n        }\n      });\n\n      log.info(">>>> Created Carts...");\n    }\n  }\n\n  private Set<Book> getRandomBooks(BookRepository bookRepository, int max) {\n    Random random = new Random();\n    int howMany = random.nextInt(max) + 1;\n    Set<Book> books = new HashSet<Book>();\n    IntStream.range(1, howMany).forEach(n -> {\n      String randomBookId = redisTemplate.opsForSet().randomMember(Book.class.getName());\n      books.add(bookRepository.findById(randomBookId).get());\n    });\n\n    return books;\n  }\n\n  private Set<CartItem> getCartItemsForBooks(Set<Book> books) {\n    Set<CartItem> items = new HashSet<CartItem>();\n    books.forEach(book -> {\n      CartItem item = CartItem.builder()//\n          .isbn(book.getId()) //\n          .price(book.getPrice()) //\n          .quantity(1L) //\n          .build();\n      items.add(item);\n    });\n\n    return items;\n  }\n}\n')),Object(o.b)("p",null,"Let\u2019s break down the CreateCarts class:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As with other ",Object(o.b)("inlineCode",{parentName:"li"},"CommandLineRunner"),"s, we check that there are no carts created."),Object(o.b)("li",{parentName:"ul"},"For each cart to be created, we"),Object(o.b)("li",{parentName:"ul"},"Retrieve a random user."),Object(o.b)("li",{parentName:"ul"},"Create a cart for the user."),Object(o.b)("li",{parentName:"ul"},"Retrieve between 1 and 7 books."),Object(o.b)("li",{parentName:"ul"},"Add the cart items to the cart for the retrieved books."),Object(o.b)("li",{parentName:"ul"},"Randomly \u201ccheckout\u201d the cart.")),Object(o.b)("p",null,"There are two private utility methods at the bottom of the class to get a random number of books and to create cart items from a set of books.\nUpon server start (after some CPU cycles) you should see:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"2021-04-04 14:58:08.737  INFO 31459 --- [  restartedMain] c.r.edu.redi2read.boot.CreateCarts       : >>>> Created Carts...\n")),Object(o.b)("p",null,"We can now use the Redis CLI to get a random cart key from the cart set, check the type of one of the keys (ReJSON-RL) and use the JSON.GET command to retrieve the JSON payload:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'127.0.0.1:6379> SRANDMEMBER "com.redislabs.edu.redi2read.models.Cart"\n"com.redislabs.edu.redi2read.models.Cart:dcd6a6c3-59d6-43b4-8750-553d159cdeb8"\n127.0.0.1:6379> TYPE "com.redislabs.edu.redi2read.models.Cart:dcd6a6c3-59d6-43b4-8750-553d159cdeb8"\nReJSON-RL\n127.0.0.1:6379> JSON.GET "com.redislabs.edu.redi2read.models.Cart:dcd6a6c3-59d6-43b4-8750-553d159cdeb8"\n"{\\"id\\":\\"dcd6a6c3-59d6-43b4-8750-553d159cdeb8\\",\\"userId\\":\\"-3356969291827598172\\",\\"cartItems\\":[{\\"isbn\\":\\"1784391093\\",\\"price\\":17.190000000000001,\\"quantity\\":1},{\\"isbn\\":\\"3662433524\\",\\"price\\":59.990000000000002,\\"quantity\\":1}]}"\n')),Object(o.b)("h4",{id:"the-cart-controller"},"The Cart Controller"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CartController")," is mostly a pass-through to the ",Object(o.b)("inlineCode",{parentName:"p"},"CartService")," (as controllers are intended to be)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.redislabs.edu.redi2read.controllers;\n\nimport com.redislabs.edu.redi2read.models.Cart;\nimport com.redislabs.edu.redi2read.models.CartItem;\nimport com.redislabs.edu.redi2read.services.CartService;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.DeleteMapping;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/api/carts")\npublic class CartController {\n\n  @Autowired\n  private CartService cartService;\n\n  @GetMapping("/{id}")\n  public Cart get(@PathVariable("id") String id) {\n    return cartService.get(id);\n  }\n\n  @PostMapping("/{id}")\n  public void addToCart(@PathVariable("id") String id, @RequestBody CartItem item) {\n    cartService.addToCart(id, item);\n  }\n\n  @DeleteMapping("/{id}")\n  public void removeFromCart(@PathVariable("id") String id, @RequestBody String isbn) {\n    cartService.removeFromCart(id, isbn);\n  }\n\n  @PostMapping("/{id}/checkout")\n  public void checkout(@PathVariable("id") String id) {\n    cartService.checkout(id);\n  }\n\n}\n')),Object(o.b)("p",null,"Let\u2019s use curl to request a cart by its ID:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --location --request GET 'http://localhost:8080/api/carts/dcd6a6c3-59d6-43b4-8750-553d159cdeb8'\n")),Object(o.b)("p",null,"Which should return a payload like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "dcd6a6c3-59d6-43b4-8750-553d159cdeb8",\n    "userId": "-3356969291827598172",\n    "cartItems": [\n        {\n            "isbn": "1784391093",\n            "price": 17.19,\n            "quantity": 1\n        },\n        {\n            "isbn": "3662433524",\n            "price": 59.99,\n            "quantity": 1\n        }\n    ],\n    "total": 77.18\n}\n')))}l.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(u,s(s({ref:t},c),{},{components:r})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},264:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(21),a=r(272);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,d=o.absolute,c=void 0!==d&&d;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(s)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},272:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},775:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/carts_and_cartitems-5bdfce86edbdbd1b39cf3756f0b371a1.png"}}]);