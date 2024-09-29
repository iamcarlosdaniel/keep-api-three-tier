# Keep

![](https://img.shields.io/badge/Release%20-%20v1.0.0-%23007EC6)
<a href="https://github.com/iamcarlosdaniel/Keep/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Keep is released under the MIT license."></a>

![](docs/banner.png)

This API is part of a note-taking application designed with a three-tier architecture. The goal of this application is to provide those who are starting out in software development with a clear understanding of how an application can scale from a three-tier architecture to a microservices-based architecture. I hope you find it very useful.

> If you only wish to download and start the project, go directly to the [Getting Started](#getting-started) section.

## [Three-tier Architecture](https://www.ibm.com/topics/three-tier-architecture)

Three-tier architecture is a well-established software application architecture that organizes applications into three logical and physical computing tiers: the presentation tier, or user interface; the application tier, where data is processed; and the data tier, where application data is stored and managed.

### The three tiers in detail

- #### Presentation tier

  The presentation tier is the user interface and communication layer of the application, where the end user interacts with the application. Its main purpose is to display information to and collect information from the user. This top-level tier can run on a web browser, as desktop application, or a graphical user interface (GUI), for example. Web presentation tiers are developed by using HTML, CSS, and JavaScript. Desktop applications can be written in various languages depending on the platform.

- #### Application tier

  The application tier, also known as the logic tier or middle tier, is the heart of the application. In this tier, information that is collected in the presentation tier is processed - sometimes against other information in the data tier - using business logic, a specific set of business rules. The application tier can also add, delete, or modify data in the data tier.

- #### Data tier

  The data tier, sometimes called database tier, data access tier or back-end, is where the information that is processed by the application is stored and managed. This can be a relational database management system such as PostgreSQL, MySQL, MariaDB, Oracle, Db2, Informix or Microsoft SQL Server, or in a NoSQL Database server such as Cassandra, CouchDB, or MongoDB.

  In a three-tier application, all communication goes through the application tier. The presentation tier and the data tier cannot communicate directly with one another.

- #### Tier versus layer

  In discussions of three-tier architecture, layer is often used interchangeably – and mistakenly – for tier, as in 'presentation layer' or 'business logic layer'.

  They aren't the same. A 'layer' refers to a functional division of the software, but a 'tier' refers to a functional division of the software that runs on infrastructure separate from the other divisions. The Contacts app on your phone, for example, is a three-layer application, but a single-tier application, because all three layers run on your phone.

  The difference is important because layers can't offer the same benefits as tiers.

### Benefits of three-tier architecture

The chief benefit of three-tier architecture is its logical and physical separation of functionality. Each tier can run on a separate operating system and server platform - for example, web server, application server, database server - that best fits its functional requirements. And each tier runs on at least one dedicated server hardware or virtual server, so the services of each tier can be customized and optimized without impacting the other tiers.

Below is the diagram of our system based on a three-tier architecture:

![](docs/three-tier_architecture_diagram.PNG)

In the controller, we will manage everything related to HTTP, which means handling requests and responses from our endpoints. Additionally, we will use a lightweight Express router to direct requests to the corresponding controller.

All business logic will be implemented in the service layer, which will expose certain services (methods) to be used by the controller.

The third layer is the data access layer, where we will interact directly with the database.

You can learn more about the three-tier architecture in this [article from IBM.](https://www.ibm.com/topics/three-tier-architecture)

## Requirements

We are developing an API (Application Programming Interface), so we will categorize the requirements into two sections: functional and non-functional. The functional requirements will cover all the functionalities accessible to developers through our API. In contrast, the non-functional requirements will describe the internal operation and behavior of the API, which will not be directly accessible to developers.

### [Functional Requirements]()

### [Non-functional requirements

## Database

![](docs/entity_relationship_diagram.svg)

## Getting started

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/iamcarlosdaniel/keep-api-three-tier
   ```

2. Navigate to the project directory:

   ```sh
   cd keep-api-three-tier
   ```

3. Install the necessary dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

## License

This project is under the MIT License - Refer to the file [LICENSE](https://github.com/iamcarlosdaniel/Keep/blob/main/LICENSE) for more details.
