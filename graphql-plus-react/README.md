# How we improved loading performance by 3,100% without touching the back-end: a GraphQL + React love story.

## tl;dr

Can you make a page with 30+ second API responses feel fast? Our team had to figure it out. By combining performance-centered React techniques with GraphQL’s data fetching model, we made a 3,100% improvement in the UI’s loading time. In this talk, you’ll learn how we did it — and how you can, too.

## Full Abstract

How can you make a page _feel_ fast when the API it relies on for data takes 30 seconds or longer to respond? Jason Lengstorf and his team inherited the slowest page in their product and found themselves facing this seemingly impossible task.

**By combining the best of React and GraphQL, they were able to improve the UI’s loading time by 3,100% — all without touching the back-end code.**

In this talk, you’ll learn the techniques they used, including how to:

* **Defer data loading** to prevent API responses from blocking the UI render
* Deliver an explorable user interface _before_ the data has arrived
* Use client-side caching to **make repeat visits feel instantaneous**
* Organize all of it in a way that’s scalable, maintainable, and easy to replicate across the rest of the product

You’ll take home battle-tested strategies that will improve the loading times of products of any scale — all _without ever needing to touch server code_.
