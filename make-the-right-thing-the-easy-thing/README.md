# Make the Right Thing the Easy Thing: How to Design Systems and Processes Teams Actually Follow

## tl;dr for the tl;dr

How can we convince an entire team to follow best practices and keep our codebase healthy? In this talk, learn how Jason and his team are creating and scaling processes to improve code quality while reducing technical debt, knowledge silos, and maintenance costs — and how to use them on your team.

## tl;dr

When we work alone, it’s easy to make sure things come out the way we think is best. But what happens when we need to get an entire team to agree on — and actually _use_ — best practices? What if we have to convince an entire _company_? In this talk, see how Jason Lengstorf and his team are working to create best practices that IBM teams around the world will actually follow, and how this has led to better developer experience, increased velocity, decreased technical debt, higher reliability, and many more improvements. Learn battle-tested strategies and techniques that will benefit companies of any size, helping create teams that are more engaged, more effective, and more cohesive.

## Full Description

When we work alone, it’s easy to make sure things come out the way we think is best. But what happens when we need to get an entire team to agree on — and actually _use_ — best practices? What if we have to convince an entire _company_?

In this talk, we’ll learn how IBM is working to get huge, distributed teams to not only agree on a set of best practices but to actually follow them, leading to:

*   Improved developer experience and engagement
*   Increased velocity
*   Decreased technical debt
*   Fewer knowledge silos
*   Lower maintenance overhead
*   Higher reliability
*   Broad adoption of best practices
*   and many more improvements in team cohesion and quality

Learn battle-tested strategies and techniques that will benefit companies of any size, helping create teams that are more engaged, more effective, and more cohesive.

## Notes

This is a talk about creating solid communication between teams, fostering healthy discussions, and landing on a set of community guidelines that will help developers in all levels of the organization confidently contribute high-quality code that improves the product. This includes techniques like introducing peer reviews, training senior developers to build their team (and not try to heroically build the whole product themselves), introducing automated checks for quality (e.g. static analysis, linting) that make compliance checks impersonal and non-subjective, and learning to communicate the importance of these practices to _everyone_ — especially the executive and managerial stakeholders who can introduce deadline pressure that inadvertently blows up the best laid plans.

## Outline

*   My first day at IBM: no docs, no onboarding — just a Slack channel and "ask \_\_\_\_\_\_\_, he knows everything"
*   Finding the knowledge silos
*   Unraveling years of spaghetti code
*   Realizing that there were almost no tests, no code analysis, and very little code review happening
*   Weeping
*   Deciding to do something about it
*   Choosing the main areas to focus on:
    *   Static code analysis (create a dashboard to show technical debt and common code issues)
    *   Automated style adherence with Prettier to sidestep debates
    *   Linting rules for common problems (e.g. complexity, common antipatterns)
    *   Testing requirements (e.g. coverage requirements for new code, including testing in scope estimation)
    *   Continuous integration tools, automated releases, and other automations to improve consistency
    *   Designing onboarding and team-building efforts to create a culture defined by quality software
    *   Internal education and documentation to make all of the above easier
*   How we created the plan to roll all of this out
*   The roadblocks we hit, and how we overcame (most of) them
*   How we’re working to ensure the culture doesn't backslide
*   How we're communicating the importance of quality-driven software to upper management
*   What's left on our roadmap
*   Resources

# Pitch

This talk is important because we know teams lose a huge amount of time to inefficient processes, and a good deal of frustration for developers comes from the difficulty of stepping into someone else’s code. We’ve made huge strides in improving the developer experience at [COMPANY w/400K EMPLOYEES], and I want to share our winning strategies to make it easier for others.

## Other Notes

NOTE: This ended up being much longer than I intended, but on the bright side, there will be very few mysteries about the content of this talk if it’s selected. 😅

This talk is designed for developers in a mid- to senior-level role and/or managers of developers, but it will be applicable for developers at any level. The goal of this talk is to discuss the human element of software design as it pertains to things that usually suck: testing, style guides, code review, and so on.

The outcome of the talk will be set of questions to ask when starting new projects, assessing team and project health, and setting up workflows and pipelines. The intention is to be broad enough that the concepts will apply to any team, but specific enough that attendees will have specific action steps to take back to their teams.

The problem, as I see it, is that most developers design systems from the standpoint of their current context: "I am thinking about this thing, and because I have all of the information in my head right now, this implementation is clear and brilliant."

Unfortunately, this often leads to problems later on when you have to review that code; the context is lost, so before you can understand the code you wrote, you have to go through and reconstruct your mental model of how the app works.

This is bad enough when it's just OUR code — when it scales up to teams of dozens or hundreds of developers, it becomes increasingly unlikely that someone can reconstruct your mental context without involving you, and that creates knowledge silos and bottlenecks, or — worse — a codebase that no one understands and therefore is unwilling to touch for fear of accidentally breaking something.

(This is what I walked into at [COMPANY]: thousands of developers working on copy-pasta codebases of 1M+ lines of code because no one knew what was old and what wasn't, so they just created new code below and hoped for the best.)

Fortunately, this is a problem that begins to solve itself simply by noticing that it’s a problem. With a few automated tools — for example, static analysis for known problematic patterns, duplication, dead code, and complexity — and a couple team strategies, many of these problems tend to go away.

Where it gets tricky is that people hate change, and they REALLY hate change when someone else tells them they have to do it. So how can we get people to follow the new processes?

This talk will touch on three main pieces of advice, with multiple examples supporting each:

### 1. Make good habits a status symbol in company culture.

Rather than punishing non-compliance, start publicly praising compliance. Make testing part of the deliverables instead of something that we pretend to want, but don't actually do. Making it cultural can start as small as one team or a couple developers making it a priority and promoting/educating others on it. It helps if leadership is supportive, but that's not required. (We had no support in [COMPANY] to make it happen.)

### 2. Automate the stuff that can't be argued.

There shouldn’t need to be a code cop on the team. Things like cyclomatic complexity, known problematic patterns, and other company-wide code style decisions can — and should — be automatically enforced by pull request status checks. Set up a PR-based workflow, _include administrators_ so no one can go around the process, and fail any build that violates things that you’ve decided as a company shouldn’t be allowed.

Protip: don’t get too deep into the weeds on style. Don’t fail builds for Prettier violations. (If you care about code style that much, add a prepush hook to run Prettier and autocommit the changes.)

The goal is to create automations that catch problems, but don’t slow down development.

### 3. Make the Right Thing the Easy Thing™.

When you design software, you should be designing for the least experienced person who will have to use it, but leave it flexible enough for advanced users to do whatever they want. A great example of this is Gatsby.js: out of the box, it Just Works™, but you can customize just about everything it does with plugins and configuration.

By default, your APIs should do the right thing. By default, your code starters should have 100% test coverage. Assume the developers using the code will have no context and give zero shits about the elegance of the code: they have a deadline and they need to build something, and they WILL copy-paste code from the internet if what they need isn’t easy enough to do.
