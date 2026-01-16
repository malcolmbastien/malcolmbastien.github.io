---
stage: seed
title: Revisiting the Guidance on Cross-functional Teams
publishedDate: 2023-05-16
tags:
  - Agile
  - EventStorming
  - Team Topologies
---
Like most things with Agile, the idea that teams should be "cross-functional" gets shared almost like an eternal truth, but it's an old idea that deserves a deeper look. I will explore different perspectives on cross-functional teams and the Three Amigos model, what benefits they're supposed to provide, and their gaps. I will also review how streamed-aligned teams might address some of the challenges that organizations with cross-functional teams still struggle with.

## Defining of Cross-functional Teams

First, let's review how "cross-functional teams" are defined and what problems they are supposed to solve. Let's look at some definitions:

> Another common characteristic of Agile teams is that they are cross-functional teams. It places a focus on generalizing specialists who can contribute to several domains instead of just their own. The idea is to cross-skill people on a single team with the purpose of eliminating hand-offs and dependencies. 
>
> What Is an Agile Team? Structure and Principles (kanbanize.com)

> Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint.
>
> [Scrum Guide | Scrum Guides](https://scrumguides.org/scrum-guide.html#scrum-team)

> It means that those teams are cross-functional. Those teams don't have to have specific roles involved so much as that when you get the team together, you make sure that you have all the right skill sets on the team.
>
> [What is Agile? | Agile 101 | Agile Alliance](https://www.agilealliance.org/agile101/)

> We typically think about teams as groups of people who have similar jobs – the marketing team, the IT department, the sales division. A cross-functional team, however, brings together people with different kinds of expertise or from different departments in your organization.
>
> A cross-functional team may have members from different seniority levels. It might also have special decision-making power. For example, the team presents its plan on a project directly to the CEO instead of running it through the usual approval process. - 
>
> [How to Build a Cross-Functional Team | The Workstream (atlassian.com)](https://www.atlassian.com/work-management/project-collaboration/cross-functional-teams)

> A **cross-functional team**, also known as a **multidisciplinary team** or **interdisciplinary team**, is a group of people with different functional expertise working toward a common goal.
>
> [Cross-functional team - Wikipedia](https://en.wikipedia.org/wiki/Cross-functional_team)

The way I explain cross-functional teams is that they propose it's more effective to put all the people needed to develop a piece of software together instead of breaking the work out across multiple teams. The idea is that teams with all the required skills in one place share information more quickly and benefit from increased collaboration, expedited feedback from testing, and reduced hand-offs and time spent waiting for other teams.

These definitions are helpful enough if you need some basic guidance on how to build building an Agile team, but what it doesn't do is help if your goals are to create a fast flow of business outcomes or shorten the time from hypothesis to user feedback.

## The Three Amigos

When I think back to all of the cross-functional agile teams I've worked with, they've all shared the same focus on three core roles or skills: Business Analyst, Developer, and Tester. I don't know if it's because those were the roles they had before their teams became "Agile" or if they took guidance from another source, but what it reminded me of was this model called The Three Amigos described in Jeff Patton's book, User Story Mapping.

![](../../assets/2023/05/image_1684187191362_0.png)
*Deep-Dive in Story Workshops - Jeff Patton, User Story Mapping*

> The group will work through the details and agree on specific acceptance-criteria for the story: It's out of this conversation that we'll have our best estimate of how long it will take to build and test the software.
>
> Jeff Patton, User Story Mapping

The Three Amigos is not uncommon, and much like cross-functional teams, the model can be found referenced in multiple places:

> Three amigos refers to the primary perspectives to examine an increment of work before, during, and after development.  Those perspectives are:
>
> - Business – What problem are we trying to solve?
> - Development – How might we build a solution to solve that problem?
> - Testing – What about this, what could possibly happen?
>
> [What are the Three Amigos in Agile? | Agile Alliance](https://www.agilealliance.org/glossary/three-amigos/)

> So, a Product Owner, a Developer, and a Tester ~~walk into a bar~~ sit down to talk about something that the system under development should do.  The Product Owner describes the user story.  The Developer and Tester ask questions (and make suggestions) until they think they can answer the basic question, "How will I know that this story has been accomplished?"
>
> No matter how or when it's done, these three amigos (to borrow a term from my friends at Nationwide) must agree on this basic criteria or things will go wrong.
>
> George Dinwiddie, [If you don't automate acceptance tests?](https://blog.gdinwiddie.com/2009/06/17/if-you-dont-automate-acceptance-tests/)

There's also the suggestion that the Three Amigos is an optimal model of "just enough collaboration" because having the whole team discuss a piece of work is wasteful, which I'm not sure is always accurate or the proper perspective to take when trying to be more agile.

> The concept of three amigos intends to balance between no collaboration between people with different perspectives and involving an entire team in discussing all the details of every increment of work.
>
> What are the Three Amigos in Agile? | Agile Alliance

Taking it all in, The Three Amigos model describes a recommended set of perspectives to participate in the "What should we build and how should we test it?" conversation that happens before a team picks up a new feature. However, it's important to note that The Three Amigos does not describe a team model.

## Cross-functional Gaps

Cross-functional teams and The Three Amigos model help describe how teams can optimize their performance during discovery or development by having a particular set of skills within a team. However, if we start taking a broader perspective on delivering value, then the guidance on cross-functional teams begins to fall short:

- The Three Amigos model is limited and might not adequately equip a team for all the concerns required to tackle complex problems when they start new work.
- A cross-functional team might need to collaborate with other groups to develop or deliver software, including other development teams or support functions like infrastructure, security, and compliance. Because the guidance for cross-functional teams is to bring needed skills together, the results can be mammoth teams with poor-quality interactions across the organization.
- Cross-functional teams might not be up to the task of organizations asking them to achieve business objectives instead of just releasing new features.
- Cross-functional teams can over-emphasize perspectives focused on developing new software and not include others relating to deployment and operations that need to be considered in complicated environments.
- Cross-functional teams are team-focused and don't provide organizations with a way to think about value streams, so they commonly still struggle with dependencies and poor performance.

## What Are Stream-aligned Teams?

The book Team Topologies defines a different kind of cross-functional team called a stream-aligned team. Stream-aligned teams own a single stream of work and have all of the capabilities necessary for the end-to-end delivery of new features to customers. 

Here's how Team Topologies defines stream-aligned teams:

> **Stream-aligned.** These are cross-functional teams whose purpose is to deliver a product or service to external customers via end-to-end ownership of the lifecycle, from ideation to operations.
>
> [Organization Dynamics with Team Topologies](https://teamtopologies.com/all-mini-books/mini-book-organization-dynamics-with-team-topologies)

> "we must . . . ensure delivery teams are cross-functional, with all the skills necessary to design, develop, test, deploy, and operate the system on the same team."
>
> Matthew Skelton and Manuel Pais, Team Topologies

> Generally speaking, each stream-aligned team will require a set of capabilities in order to progress work from its initial (requirements) exploration stages to production.
>
> Matthew Skelton and Manuel Pais, Team Topologies

Stream-aligned teams are cross-functional but differ from the traditional definitions of cross-functional teams by aligning themselves and focusing on one specific stream of work and all the activities needed to deliver value to customers.

Typically, an entire value stream would include too many concerns and domains for one team to manage on their own, but Team Topologies defines some practices and a set of patterns where internal services are provided by other specialized teams for the stream-aligned teams to leverage. The three other supporting team types: Complicated-subsystem, Enabling, and Platform teams all exist to reduce the burden on Stream-aligned teams.

The older definitions of cross-functional teams before Team Topologies focused more on the people and skills needed in a team. Since the book's release, the industry has taken a broader, whole value-stream perspective to cross-functional teams.

## Where to Start

### User Needs Mapping

Rather than starting with an idea for a feature and needing a team to build it, creating a stream-aligned team begins with understanding your business's users and the services it offers. User Needs Mapping is a good technique that can help you start. User Needs Mapping is a rudimentary version of a Wardley Map without the evolution axis. 

![](../../assets/2023/05/image-4.png)
*[Exploring team and service boundaries with User Needs Mapping](https://teamtopologies.com/key-concepts-content/exploring-team-and-service-boundaries-with-user-needs-mapping)*

The User Needs Mapping process:

> 1. Create a list of customers/users
> 2. Identify user needs
> 3. Identify what capability/component/service is required to meet the user need
> 4. Overlay potential team boundaries using the Team Topologies shapes
> 5. Annotate the map with questions about suspect dependencies
> 6. Discuss how the dependencies might be broken and capture your thoughts of other ways to organize the dependencies
> 7. Repeat steps 1 to 5 as necessary until you identify potential team boundaries that "feel" right
> 
> Exploring team and service boundaries with User Needs Mapping — Team Topologies

### EventStorming

Another way to look at the end-to-end value stream of how work gets designed, developed and delivered is by using a value stream map or an [EventStorming](https://www.eventstorming.com/) model. In 2022 I experimented a lot with using EventStorming as a tool for teams to model their workflows, dubbed "[FlowStorming](https://miro.com/miroverse/flowstorming-workshop/)." Doing a Flow-based EventStorming activity can be a great way to:

- Map the end-to-end value stream
- Define team boundaries
- Identify hand-offs and dependencies
- Identify potential candidates for platforms
- Spot current hotspots or bottlenecks

![](../../assets/2023/05/image-3.png)
*[FlowStorming Miro Template](https://miro.com/miroverse/flowstorming-workshop/)*

## Conclusion

This post included a lot of quotes, but I hope that collecting different perspectives on cross-functional teams and reviewing their potential gaps will help people be less prescriptive when designing their teams and take a more systems view of their organizations.

Cross-functional teams will always be necessary, but it's limiting if "Developer + Analyst + Tester" is the only option you have to approach team design. Team Topologies, User Needs Mapping, and EventStorming/FlowStorming are all useful tools to help you create a richer view of your organization's value streams and design teams that align with those streams.
