---
title: Finding Bottlenecks in AI-Driven Workflows
tags:
  - Agile
  - Metrics
publishedDate: 2026-12-30
summary: Brief description
draft: true
---

 A Cumulative Flow Diagram (CFD) exposes bottlenecks in a system by tracking the arrival, departure, and accumulation of work items. CFDs are commonly used to reveal bottlenecks in familiar development steps like _Analysis_, _Development_, or _Testing_. But as AI handles more of our delivery pipeline, how teams use CFDs needs to change.

When AI agents automate product requirements, coding, and testing, what's the CFD tracking? What should the chart show when a single prompt can trigger an entirely new feature that used to take weeks to build?

Before AI, a CFD highlighted the queues between sequential steps. Today, AI collapses those steps into a single, automated workflow. Teams have the capacity to generate near-infinite Work in Progress (WIP), moving the primary friction point to the handoff between autonomous systems and human ones.

With work volume exploding, and activities will collapsing, bottlenecks will not disappear—they will just move. With AI agents handling routine work, humans are left with three distinct challenges:

- Planning, defining, and selecting a massive volume of new work to feed the agent ecosystem.
- Managing, releasing, and making sense of an unprecedented volume of data.
- Operating in a continuous state of highly demanding, non-routine cognitive work.

## Cognitive Load is the New Bottleneck

In the pre-AI era, knowledge work included waiting and routine tasks which offered plenty of breathing room. Developers spent hours updating Jira, sitting in meetings, responding to emails, or waiting on dependencies. These activities were non-value-adding, but they gave people time to rest their brains. This friction provided natural downtime between high-intensity tasks.

When AI automates the routine work, what remains for humans are the more cognitively demanding activities: high-context collaboration and high-judgment decision-making. This work requires deep focus, context switching, , social interaction, and balancing complex trade-offs.

While AI agents have virtually infinite compute capacity, human cognitive load is finite. There is a hard limit to the number of complex decisions a person can make in a day before their quality drops. Removing organizational bottlenecks impacting the flow of work will increasingly require optimizing for cognitive load.

## When Work Items Write Themselves

Historically, agile teams were encouraged to develop incrementally—releasing and gathering feedback on small changes to reduce complexity and increase velocity. CFDs tracked "value-adding work" to keep teams focused on improving the flow of value rather than increasing busy-work.

But today, a user can describe an entire product vision to an AI agent. That agent can autonomously figure out the architecture, generates tasks and an execution plan, distributes the tasks to sub-agents, and writes the code the code without a human ever writing a single Jira ticket.

If the system bottleneck has shifted to human decision making, using CFDs to track user story flow no longer useful. To remain effective diagnostic tools, CFDs must evolve:

- **Show both human-led and AI-assisted activities:** To show where process bottlenecks actually form, CFDs must span both the AI-driven activities, and the activities led by humans across the value stream.
- **Track the cognitively expensive activities that people take part in:** It's not helpful for the diagram to track generic development activities. They must capture the expensive expenditures of cognitive load, such as high-context collaboration and high-judgment decision-making.

Instead of managing the WIP of features or user stories, the task becomes managing the WIP of cognitive load. Use the CFD to diagnose and help protect the team's finite mental bandwidth.

## Tracking Work at the Level of Intent

As these patterns mature, the concept of a User Story as a work container inside Jira probably fades away. Instead, people will interact with work at the level of intent: a bug fix, a new capability, or an enhancement. User stories will return to their original purpose: conversations between people about what users need. It will no longer make sense to think of them as the primary unit of work or design workflow policies around them.

For a CFD to remain useful, its scope must encompass the real system constraint. If the bottleneck lies outside the boundaries of your diagram, the chart won't be much help. In an AI-accelerated world, making local optimizations to development activities will do nothing to improve the overall performance of the system. We have to start mapping and visualizing the cognitive capacity being demanded of people.