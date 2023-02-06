## `Rest API With Database`


### ` What is a REST API?`

#### `Overview`

      A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to
      the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for
      representational state transfer and was created by computer scientist Roy Fielding.
      

##### `What's an API?`
```Node
An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as
a contract between an information provider and an information user—establishing the content required from the consumer (the call)
and the content required by the producer (the response). For example, the API design for a weather service could specify that 
the user supply a zip code and that the producer reply with a 2-part answer, the first being the high temperature, and the second
being the low.  

In other words, if you want to interact with a computer or system to retrieve information or perform a function, an API helps you
communicate what you want to that system so it can understand and fulfill the request. 

You can think of an API as a mediator between the users or clients and the resources or web services they want to get. It’s also a
way for an organization to share resources and information while maintaining security, control, and authentication—determining who
gets access to what. 

Another advantage of an API is that you don’t have to know the specifics of caching—how your resource is retrieved or where it comes
from.
```

#### `REST`

```Node
REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or
endpoint.
This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, 
XLT, Python,
PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as
well as
readable by both humans and machines. 

Something else to keep in mind: Headers and parameters are also important in the HTTP methods of a RESTful API HTTP request, as 
they contain 
important identifier information as to the request's metadata, authorization, uniform resource identifier (URI), caching, cookies,
and more. 
There are request headers and response headers, each with their own HTTP connection information and status codes.

In order for an API to be considered RESTful, it has to conform to these criteria:


A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP.

Stateless client-server communication, meaning no client information is stored between get requests and each request is separate
and unconnected.Cacheable data that streamlines client-server interactions.A uniform interface between components so that information
is transferred in a standard form. This requires that:resources requested are identifiable and separate from the representations sent 
to the client.resources can be manipulated by the client via the representation they receive because the representation contains enough  
information to do so.self-descriptive messages returned to the client have enough information to describe how the client should process  
it.hypertext/hypermedia is available, meaning that after accessing a resource the client should be able to use hyperlinks to find all 
other currently available actions they can take.A layered system that organizes each type of server (those responsible for security,
load-balancing, etc.) involved the retrieval of requested information into hierarchies, invisible to the client.Code-on-demand (optional): 
the ability to send executable code from the server to the client when requested, extending client functionality. Though the REST API has
these criteria to conform to, it is still considered easier to use than a prescribed protocol like SOAP (Simple Object Access Protocol), 
which has specific requirements like XML messaging, and built-in security and transaction compliance that make it slower and heavier. 

In contrast, REST is a set of guidelines that can be implemented as needed, making REST APIs faster and more lightweight, with increased 
scalablity—perfect for Internet of Things (IoT) and mobile app development. 
```



</br>

<div align="center">

##### ` All rights reserved by Sajib Bhattacharjee @2023 `

### `Created By-->`

**`-Sajib Bhattacharjee`**

**`Dedicated for 💕"Zahan" 💕`**

> > > >  ### Thanks A Lot For Visiting...!!!  

</div>
