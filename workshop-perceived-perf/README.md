# Modern Front-End Performance Strategies and Techniques

How can we make our websites faster if we have no control over the server? Is that even possible?

In this workshop, we’ll learn strategies and techniques for improving _perceived_ load times — how long it _feels_ like it takes to load a page — as well as _actual_ load times, using only front-end techniques including:

*   The skeleton loading pattern
*   Better loading for static assets
*   Lazy loading
*   Service Workers
*   Better build processes
*   and more

We’ll use these techniques to refactor a web app, giving you hands-on experience with your new performance toolkit.

## Schedule

| Time        | Covering                                     |
| ----------- | -------------------------------------------- |
| 10:00–10:15 | Introductions, Overview, and Schedule        |
| 10:15–10:40 | Why Perceived Performance Matters            |
| 10:40–10:50 | Setup and Installation                       |
| 10:50–11:00 | Plan the Lazy Loading Solution               |
| 11:00–12:00 | Implement and Test the Lazy Loading Solution |
| 12:00–13:00 | Lunch                                        |
| 13:00–15:00 | workshop                                     |
| 15:00–15:30 | Break                                        |
| 15:30–17:00 | workshop                                     |

## Outline

### Part 0: Introductions, Overview, Schedule

#### Introductions

Meet the group, find out where they work, what kinds of projects they’re building that will benefit from perceived performance, and what they like most about their job.

We want to get everyone comfortable speaking to each other, sharing ideas, and asking questions.

Group size: ~30

Time: 15 minutes

#### Overview + Show Schedule

Provide an overview of what perceived performance _is_, e.g. front-end tricks to make things seem faster, techniques to improve the loading experience, active waiting vs. passive waiting.

Show the schedule for the day.

Time: 10 minutes

### Part 1: Why Perceived Performance Matters

Give a presentation on why perceived performance is important, how it works, and what we stand to gain by putting it into our apps.

Time: 25 minutes

### Part 2: Setup and Installation

1.  Clone the repo
2.  Install dependencies
3.  Start the app using `yarn develop` or `npm run develop`

Time: 10 minutes

### Part 3: Lazy Loading With the Blur-Up Technique

#### First: Collaboratively plan the solution.

*   Work with the group to reason through how to implement this technique.
*   This is going to be predetermined (because we can’t make up the workshop
    on the fly), but the act of _thinking through_ how to approach perceived perf problems is at least as valuable as implementing this solution.
*   Write up the list of targets (will correspond to steps below).

Time: 15 minutes

#### Next: Actually Build It

1.  Create tiny versions of each image.
    *   30px wide
    *   Compress with https://tinypng.com/
    *   Convert with https://websemantics.uk/tools/image-to-data-uri-converter/
2.  Replace the background images with the tiny data-URI versions.
    *   Yes, this will look like crap. Stay tuned!
3.  Set up an Intersection Observer.
    *   https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    *   Add a script tag to the bottom of the page.
    *   Create a function that watches for images that are on-screen.
4.  Preload the large images when they’re on-screen.
    *   Add the image URL as a data attribute.
    *   Add script to create preloading.
5.  Update the background image when it’s visible.
    *   Add a script to swap the background image for visible images.
    *   Oh no! We’re getting blank images!
6.  Fix the flicker of unloaded image.
    *   Don’t attempt to swap out the image until the image is preloaded.

Time: 60 minutes

### Skeleton Loading Pattern

Load data from https://rickandmortyapi.com in a way that doesn’t feel jumpy-janky.

#### First: Collaboratively Design the Solution

*   Work with the group to reason through how to implement this technique.
*   This is going to be predetermined (because we can’t make up the workshop
    on the fly), but the act of _thinking through_ how to approach perceived perf problems is at least as valuable as implementing this solution.
*   Write up the list of targets (will correspond to steps below).

Time: 15 minutes

### Next: Build the Solution

1.  Show each load when it’s ready.
    *   Stop waiting for all the requests to finish before rendering.
2.  Design a skeleton state for the component.
    *   Use CSS to avoid extra JS overhead.
    *   Add a loading class to the empty components.
3.  Add a subtle animation to make it feel alive.
    *   Make some magic with pseudo-selectors!
4.  Remove the loading class once the image has loaded.

### Service Workers for Offline Support

#### First: Explain and Plan the Solution

*   What are Service Workers?
*   How can we improve perceived performance with them?

#### Next: Build the Solution

1.  Create a Service Worker and register it.
2.  Create an offline page.
3.  Store the required assets on install.
4.  Load cached resources if available.
5.  Cache newly fetched assets.
6.  Redirect to the offline page if an asset is missing.

### Psychology and Loading

*   Active vs. Passive Waiting Time
*   Preload on mousedown
