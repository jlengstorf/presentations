# Beyond Static With Gatsby & Apollo

## Elevator Pitch

For most of us, “static sites” only work for simple sites, like personal blogs. But static sites can do so much more! In this talk, learn how Gatsby & Apollo help you build apps that combine the performance and workflow benefits of static sites with the flexibility and power of server-driven sites.

## Full Abstract

For most of us, the phrase “static site” makes us think of blogs and sales pages. Most of us might say, “It’s fine for small sites to be static, but they can’t handle ‘serious’ applications.”

Most of us, it turns out, are mistaken.

In this talk, learn how combining Gatsby with Apollo allows you to build apps that are:

-   Screaming fast because performance is baked in
-   Cheap to host because no servers are required
-   Built on a modern stack with React and GraphQL
-   Capable of pulling in data from your CMS, API, flat files, and beyond
-   Fully capable web apps with support for auth, ecommerce, and more

By the end of this talk, you’ll see multiple real-world examples of how Gatsby & Apollo give you the speed and workflow benefits of static sites with all the flexibility of dynamic apps. You’ll have a clear picture of the incredible potential of this hybrid app stack to go far beyond the limits of traditional static sites.

## Outline

-   Web Development Is Different Now
    -   Show NYT evolution slide
-   Meet the Content Mesh
    -   Separate content and data sources are combined into a single experience
-   This is extremely powerful
    -   Manage data in the best place for it
    -   No need to find one-size-fits-all solutions
    -   No need to hack solutions into existing platforms
    -   Use the best-in-class solution for _each thing_, not _all things_
-   This can make things... complex
    -   Client requests go from browser to CDN to load balancer to server to DB and back again (https://youtu.be/KinskoYXSHM?t=4280)
-   This can make things... expensive
    -   Servers get _really_ expensive as apps scale
    -   Usually requires full-time engineers to manage
-   This can make things... slow
    -   Show GIF of horrible loading experience on news site
-   Performance is no longer optional
    -   < 3s load on mobile or lose 53% of visitors (http://bit.ly/2RAYLXo)
    -   1 second slowdown for Amazon means $1.6B in lost annual sales (http://bit.ly/2RudBP6)
-   Performance requires a few things:
    -   PRPL Pattern
    -   Image optimization
    -   Use Service Workers
    -   Eliminate unused code
    -   Serve static assets
-   Static assets eliminate round trips

1. Web dev is more complicated these days
2. Content comes from lots of different places
3. Lots of APIs can make websites complex, hard to maintain, and slow

-   content mesh (GraphQL + plugin ecosystem)
-   developer experience and user experience aligned
-   performance baked in

This is all great, but my app is _dynamic_. I can't use a _static_ site generator.

No problem! Gatsby's not a static site generator!

static assets !== static apps

### 0. What am I going to tell you?

You can get _much_ better performance and developer experience out of your dynamic apps if you serve them as entirely static asset bundles, especially if you use Gatsby to do it.

### 1. What are things like right now?

Building websites is different today than it used to be. The old way was to use a monolithic CMS for the entire website. If you had a mostly bloggish site, maybe you'd set up WordPress; mostly ecommerce, maybe you'd set up Magento. If the site needed to do other things, you'd have to bolt on that extra functionality to your CMS using plugins, custom dev, or other kludgy means.

Today, we have specialized SaaS solutions for everything: Shopify for ecommerce, Stripe for payments, myriad headless CMS options, and countless other single-purpose SaaS platforms. We don't shove all of these into a monolithic CMS anymore; we use APIs to stitch together all these services into our various UIs.

### 2. What sucks about that?

The ability to use data from lots of different back-ends is a huge boon for content creators (e.g. writers, marketers, clients, sales teams). However, it's a _huge_ pain in the ass for developers: managing a large number of API calls, handling the business logic to combine and display it, dealing with network inconsistencies, and on top of all that trying to make it performant is not a trivial task.

And that's just the data layer. We still have to, y'know, _build the UI_ after we do all that.

### 3. Why does it suck?

-   Lots of HTTP requests slow the page down
-   Async is hard: how do you start showing data without a broken UI and without waiting for your slowest call?
    -   Promise.all waits for everything
    -   async/await makes calls sequential
-   UIs become tightly coupled to back-ends if you're not careful
-   It introduces lots of challenges around state management, etc. to keep data consistent throughout the UI

### 4. How can we make it better?

There are two things we want to improve in this scenario: performance and data management.

For data management, GraphQL solves this problem in an elegant, scalable way.

For performance, we need to do a lot (PRPL, image optimization, etc.), but most of all we should deliver entirely static assets.

### 5. Why is that better?

GraphQL lets us put all data into a centralized data layer that's self-documenting, strongly typed, and easy to reason about. The UI has a clean layer of separation from data, in a way that makes it easy for developers of all skill levels to understand and maintain.

Static assets allow us to massively simplify deployment complexity, reduce devops costs, and eliminate an entire class of performance problems. Early bind data, deploy the whole site to a CDN, and head to lunch.

Gatsby does all of this out of the box. We Make the Right Thing the Easy Thing so the laziest, shortcuttiest, under-the-gunniest decisions result in the best possible outcome for the end user. Start at 💯 so all you have to do is keep it healthy.

### But what about dynamic data?

"But isn’t Gatsby a _static_ site generator? My site has _dynamic_ data!"

static assets !== static apps

Gatsby sites rehydrate into fully functional React apps, so you can do anything in a Gatsby site that you would do in a React site.

For example, you can use apollo-boost and make async GraphQL calls. You can hook up axios and go nuts with REST API calls. You can set up Auth0 and put routes behind authentication.

### 6. How can you start?

### 7. What did I just tell you?
