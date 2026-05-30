---
title: Finding Bottlenecks in AI-Driven Workflows
stage: seed        # seed | sprout | evergreen
tags:
  - Agile
  - Metrics
publishedDate: 2026-12-30
summary: Brief description
draft: true
---

By tracking the arrival, departure, and accumulation of work items, a Cumulative Flow Diagram (CFD) exposes exactly where a system chokes. When work piles up, activity bands widen and the chart's slope flattens. Historically, CFDs revealed bottlenecks in familiar development steps like _Analysis_, _Development_, or _Testing_. But as artificial intelligence handles more of our delivery pipeline, traditional CFD practices must change.

When AI agents automate product requirements, coding, and testing, what is the CFD actually tracking? How can a chart reflect flow when a single prompt can trigger a bug fix or an entirely new feature that used to take weeks?

Before AI, a CFD highlighted friction between sequential steps. Today, AI can collapse those steps into a single, automated workflow. This gives teams the capacity to generate near-infinite Work in Progress (WIP), moving the primary friction point to the handoff between autonomous systems and humans.

Post-AI, work volume will explode and activities will collapse, but bottlenecks will not disappear—they will just move. As AI agents handle the routine work, humans are left navigating three distinct challenges:

- Planning, defining, and selecting a massive volume of new work to feed the agent ecosystem.
- Managing, releasing, and collecting feedback on an unprecedented volume of outputs.
- Operating in a continuous state of highly demanding, non-routine cognitive work.

## Cognitive Load as the New Constraint

In the pre-AI era, knowledge work included plenty of waiting and routine tasks. Developers spent hours every week updating Jira, sitting in administrative meetings, responding to emails, or waiting on dependencies. While non-value-adding, these activities gave people time to rest their brains. This friction provided natural downtime between high-intensity tasks.

When AI automates this routine work, what remains for humans are the most cognitively demanding activities: **high-context collaboration** and **high-judgment decision-making.**

This work requires intense context switching, deep focus, social interaction, and balancing complex tradeoffs. By eliminating the buffer of routine tasks, AI forces people to spend almost all of their time in high-intensity cognitive zones.

While AI agents have virtually infinite compute capacity, human cognitive load is strictly finite. There is a hard limit to the number of complex decisions a person can process in a single day before their judgment degrades. Removing organizational bottlenecks will increasingly require optimizing for cognitive load.

## When Work Items Write Themselves

Historically, agile teams were encouraged to develop incrementally—releasing and gathering feedback on small changes to reduce complexity and increase velocity. Standard agile guidance recommends that CFDs track this "value-adding work" to ensure teams optimize for tangible user value rather than raw activity.

But today, a user can describe an entire product vision to an AI agent. That agent can autonomously determine the system architecture, generate an execution plan with dozens of individual tasks, distribute them to sub-agents, and develop the code without a human ever writing a single Jira ticket.

If the system bottleneck has shifted to human oversight, tracking mechanical work items is no longer useful. To remain effective diagnostic tools, CFDs must evolve to visualize:

- **A combination of human-led and AI-assisted activities:** The CFD must distinguish between activities driven by AI agents and those led by humans across the value stream to show where process bottlenecks actually form.
- **The cognitively expensive activities that people take part in:** The bands on the diagram can no longer track generic "activity." They must capture meaningful expenditures of cognitive load, such as high-context collaboration and high-judgment decision-making.

Instead of managing the WIP of features or user stories, the task becomes managing the WIP of cognitive load, using the CFD to protect the team's finite mental bandwidth. It will also become critical to track and distinguish the activities outside of AI automation that are becoming the real bottlenecks of work: decision-making processes, approval workflows, and financial cadences.

## Tracking Work at the Level of Intent

As these patterns mature, the concept of a User Story as an artificial container inside Jira will likely disappear. Instead, people will interact with work at the level of direct intent: a bug fix, a new capability, or an enhancement. User stories will return to their original purpose: conversations between people about what users are trying to achieve. It will no longer make sense to create artificial units of work or design workflow policies around them.

For a CFD to remain useful, its scope must encompass the true system constraint. If your bottleneck lies outside the boundaries of your diagram, the chart is useless. In an AI-accelerated world, making local optimizations on a mechanical board will do nothing to improve the overall performance of the system. We have to stop mapping the speed of our tools, and start visualizing the capacity of our minds.