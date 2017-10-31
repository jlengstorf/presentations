# GraphQL @ Massive Scale: Using GraphQL as the Glue in a µ-Service Architecture

GraphQL offers some huge advantages for large teams, including:

-   A central location for data access
-   Automatic documentation
-   Parallel development (front- and back-end teams can work in tandem with
    data mocking)

But can GraphQL handle the development workflow of large teams?

This was what we set out to learn at IBM Cloud. We knew GraphQL had a lot of promise, but we needed to know:

-   Who “owns” the GraphQL µ-service?
-   How can teams make independent changes to the data for their services?
-   Can one bad commit from one team take down the entire service for everyone?
-   Doesn’t an extra layer make it harder to trace errors?

In this talk, we’ll take a look at IBM Cloud’s journey to putting GraphQL in production, unifying dozens of REST APIs into a single, explorable data layer. Learn how we solved the problem of 30+ teams needing to edit a central GraphQL µ-service, drove adoption of a new technology in an historically slow-moving culture, and created a developer experience that was so pleasant to use that teams _asked_ to get involved.

While the lessons we learned were in the context of working on large teams, developers on teams of any size — even a team of one — can use these strategies to make server-side GraphQL much more manageable at any scale.

-   [Slides](https://git.io/vFvei)
