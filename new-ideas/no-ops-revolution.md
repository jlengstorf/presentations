# The No-Ops Revolution

### How to Get All the Power and Flexibility of a Global Server Network With None of the Cost or Complexity

Scaling is one of the most challenging problems companies face today, but new tools are available now that significantly reduce the effort required to deploy, manage, and scale web apps. Learn how your company can save tens of thousands of dollars AND deliver faster, more reliable apps starting now.

## Full Abstract

Building and scaling modern web apps can be overwhelming, to put it mildly. Deploying a web app is no longer as simple as dropping a folder into our FTP client — to run a high-performance global app, we need to consider:

*   Content delivery networks
*   Global load balancing
*   Server redundancy and failover
*   Continuous deployment and integration
*   Performance and error profiling
*   Security vulnerabilities
*   And so much more

But here's the thing: for a large number of companies, all of this hassle can be _completely_ circumvented by using the right tools. Tools that make deployment so easy that it's virtually a non-issue. Tools that handle bundling, code splitting, prefetching, server-side rendering, data fetching, turning your app into a Progressive Web App, and all the complicated compiler configuration.

In this talk, learn how improving your modern, low-effort DevOps workflows can give you back thousands of hours and millions of dollars — not to mention avoiding many pitfalls and frustrations — so you can focus on delivering great products.

### < 600 characters version:

Deploying modern web apps is _hard_. A high-performance app means CDNs, global load balancing, continuous deployment/integration, and _so much more_. The complexity merits a dedicated team, and for companies struggling to grow that’s not possible. So what can we do?

A new generation of tools completely removes many DevOps challenges. Leveraging these tools, we get back thousands of hours and millions of dollars — while avoiding many pitfalls and frustrations — so we can focus on building great products.

In this talk, learn how companies of any size can leverage these tools starting today.

## Details and Goals

This talk has three main goals:

1.  **Expose the audience to the concept of NoOps/LowOps as an alternative to managing complex deployment pipelines.** This includes tools like Netlify and Now that make deployment feel magical, frameworks like Gatsby.js and Next.js that handle the really hard parts of managing performance, and others that make it cheap (or even free) to completely remove the entire DevOps process.

2.  **Explain the trade-offs of using a NoOps/LowOps workflow.** Yes, it's convenient, but these tools are opinionated. What flexibility is lost by using these tools? How does that stack up against the gains? Let's make sure no one thinks this is a silver bullet but can measure it against their current situation to ensure they're making the best choice _for their situation_.

3.  **Show real results and migration paths.** How easy is it to start using these tools? How big is the impact going to be? Let's show some real data here.

This talk will be most relevant to teams that are struggling with cumbersome, expensive, frustrating, or otherwise unwieldy DevOps pipelines. It'll be especially useful to teams that are mostly front-end devs trying to manage a bunch of back-end processes.

The goal will be to leave the audience with new knowledge about their options, hope for a world where they don't spend hours and piles of money wrestling with servers, and action steps to start experimenting with a LowOps/NoOps workflow in their own projects and companies.

## Why I’m Qualified to Give This Talk

Up until recently, I worked as a front-end architect on IBM Cloud (formerly Bluemix), where I helped design workflows and processes to keep a team of ~700 developers productive and engaged. We implemented a React + GraphQL workflow with a mostly automated deployment process that saved _hours_ of frustration for developers each month, boosted the overall quality of our product (in some extreme cases we saw pages get over 30x faster), and increased the happiness and confidence of our team.

I just joined Gatsby.js, a ridiculously performant static site generator, to help bring these improved NoOps workflows to as many developers as possible.

I _really_ care about this stuff, and I really enjoy sharing what works and what doesn't. I've got experience deploying these workflows at the largest scale possible, and with designing systems that are broad enough to meet the needs of the open source community.

## Thoughts, Notes, Ideas

**What problem is this solving?**

Building modern web apps is extremely complicated:

*   More app logic is moving to the front-end
    *   Larger bundle sizes
    *   More business logic and complexity
    *   So many tools!
*   The build process is getting _really_ hard to follow
    *   Compilers
    *   Code splitting!
    *   Tree shaking!
    *   What the heck is a WASM?
    *   Webpack, Rollup, Prepack, Parcel, PANIC
    *   Babel
*   And back-ends aren't much better:
    *   Global load-balancing
    *   Redundancy and failover
    *   Sticky sessions
    *   Orchestration
    *   Also it needs to be fast
*   Plus, y'know, devops
    *   Build, test, analyze
    *   Scan for security vulnerabilities
    *   Staging and production environments
    *   Red/Black or Blue/Green?
    *   Continuous integration/deployment
    *   Uptime monitoring and healthchecks
    *   Performance and error profiling

For many companies, this presents both a rock and a hard place: getting these pieces in place requires specialized engineers, and specialized engineers aren't cheap. But _without_ setting this up properly, the company is going to struggle to scale. Often times this leads to an inexperienced team making educated guesses and hoping for the best — not exactly the most bulletproof way to scale a business.

**How is this talk helping to solve the problem?**

With the rise of powerful front-end frameworks like Angular, React, and Vue, we've seen more and more of the complexity of modern apps move into the front-end. This gave rise to the concept of single page apps (SPAs), which allowed full-featured web apps to be hosted in places like GitHub Pages or Amazon S3.

However, this brought a new challenge: tons of front-end code introduced slow download times, performance problems, and general bloat that was previously contained on the server.

CDNs are part of the solution: they allow us to put the files closer to our users with great caching. But that doesn't help people who are loading our apps for the first time over a slow connection, and it doesn't make it any faster to actually run all that JavaScript on a lower-end mobile phone.

Tools like Webpack, Rollup, and Prepack can help eliminate unused code and split up the bundles into smaller pieces, but getting that configuration right is challenging, and the target is always moving — you almost need a full-time "bundling engineer" to keep up with it.

And all of this is before we get into the cost and hassle of actually deploying and managing all of this.

But here's the thing: for a large number of companies, all of this hassle can be _completely_ circumvented by using the right tools. Tools like Netlify and Now make deployment so easy that it's virtually a non-issue. Tools like Gatsby.js and Next.js handle bundling, code splitting, prefetching, server-side rendering, data fetching, turning your app into a Progressive Web App, and all the complicated compiler configuration.

**Why is this valuable?**

Unless you're a huge company that can afford to dedicate full-time resources to the devops process — and even if you _are_ a huge company — spending time and money on devops is probably not the best use of your resources. And when you can leverage the collective knowledge of the entire open source community to solve your devops problems, _why wouldn't you want to take advantage of that?_

By leveraging existing tools, you can buy back thousands of hours and millions of dollars — not to mention avoiding many pitfalls and frustrations — so you can focus on delivering great products.
