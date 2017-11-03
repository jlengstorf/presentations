# Rescuing Legacy UIs: How IBM Is Putting Performance First

Imagine a codebase that loads Dojo, Polymer, jQuery, Angular, _and_ React. Now imagine that you’re responsible for making it _fast_. This is the situation Jason Lengstorf and his team were up against on the IBM Cloud console.

In this talk, Jason will share how his team has improved perceived performance by over 30⨉ in some cases, and brought actual load times down by as much as 250% — using GraphQL, Service Workers, resource preloading, and more — all while shifting the front-end culture at IBM toward performance.

---

Photo idea: St. Bernard rescuing a person

- Get rid of the crap
- Use skeleton components instead of loading spinners
- Use GraphQL for data access
- Serve static assets
- Lazy load anything non-essential
- Use Service Workers
- Pay attention (webpack analyze)
- Measure (use performance marks)

