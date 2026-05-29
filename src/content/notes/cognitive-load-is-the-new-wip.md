---
title: Cognitive Load Is the New WIP
stage: seed        # seed | sprout | evergreen
tags:
  - Agile
  - Metrics
publishedDate: 2026-12-30
summary: Brief description
draft: true
---

By visualizing the arrival, departure, and accumulation of work items over time, a Cumulative Flow Diagram (CFD) exposes where bottlenecks live within a system. When work piles up, the bands widen and the slope flattens. Historically, these graphs revealed the bottlenecks in activities like _Analysis_, _Development_, or _Testing_.

But as artificial intelligence integrates its way into more and more team delivery pipelines, current CFD practices need to be reevaluated.

When product requirements, coding, and testing are automated and delegated to AI agents what work is the CFD really tracking? How does the chart reflect flow when a single prompt can trigger a bug fix or a completely new feature that would have taken weeks to build? Before AI, CFDs began typically tracked work between analysis, development and testing. Today, it is possible for all those steps to be collapsed into a single, instantaneous event.

With AI agents, teams hypothetically possess the capacity to generate a near-infinite amount of Work in Process (WIP). This creates the potential for huge friction points where those autonomous systems are handed off to a human to manage.

Bottlenecks in CFDs form when work gets stuck and starts to build-up in in one activity while it ways for the next, slower activity. Post-AI, there's the potential for the volume of work to explode and for development activities to collapse, but that won't eliminate bottlenecks, the bottlenecks will just move elsewhere in the system. As AI-augmented development teams and AI agents become more popular, simpler tasks will be automated away, and people will be left navigating three distinct challenges:

- Planning, defining and selecting a massive volume of new work to feed the agent ecosystem.
- Managing, releasing, and collecting feedback on an unprecedented volume of outputs.
- Operating in a continuous state of highly demanding, non-routine cognitive work.

## Cognitive Load as the New Constraint

In the pre-AI era, knowledge work included a significant amount of simple, routine tasks. Developers spent hours every week updating Jira, sitting in meetings, responding to emails, or waiting on dependencies. While non-value-adding, these activities gave people time to rest their brains. These administrative frictions provided people with downtime between the more demanding, high-intensity aspects of development.

When AI automates these routine and administrative work, what remains for humans are two highly cognitively demanding categories of work: **high-context collaboration** and **high-judgment decision-making.**

This work demands more intense context switching, deep focus, social interaction, and the balancing of complex tradeoffs. By eliminating the buffer of routine tasks, AI forces people to spend longer in high-intensity cognitive zones.

Removing organizational bottlenecks will increasingly require looking past the speed at which works happens, and start requiring optimizing for human cognitive load. While AI agents have potentially infinite compute capacity, human cognitive load is finite. There is a hard limit to the number of complex activities and high-judgment decisions a person can process in a single day.

## When Work Items Write Themselves/What to Track When Execution Is Free

Historically, agile teams broke down large requirements into discrete user stories to reduce complexity and improve velocity. Today, a user can describe an entire product to an AI agent. That agent can autonomously determine the system architecture, generate an execution plan with dozens of individual tasks, distribute them to sub-agents, and develop the code without a human ever needing to write a single Jira ticket.

Traditional agile guidance states that CFDs should track "value-adding work" to avoid optimizing a system for the wrong goals. The items captured on a board should represent real, tangible value to the user.

As the size of work items become less important, and the volume of work items explode, one ideas is to move away from tracking "work" or "effort" and instead track "value." The problem, however, is that value is always a guess; the estimated value of a feature and its realized value are rarely the same. Value is also not instantly generated the moment a feature is deployed. It takes time—sometimes months or years—to for returns to be realized.

If the system bottleneck has shifted to where humans must manage high volumes of work and protect their finite cognitive bandwidth, what should we actually be tracking?

I can imagine that to be effective tools in the future, CFDs must evolve to somehow track and visualize:

- A combined blend of human-led and AI-assisted activities.
- The cognitively expensive activities that people take part in

## Conclusion

As these patterns mature, the concept of a User Story as an artificial container for capturing requirements inside Jira will likely disappear. Instead, people will spend their time interacting with work at the level of direct intent: A bug fix, a new capabilities, or an enhancement. User stories will live on in a form closer to their original purpose: as conversations between people about what users are trying to achieve. But it will no longer make sense to track them or design workflows around them.

For a CFD to remain useful, the scope of the diagram must encompass the actual constraint of the system. If the system bottleneck lives outside of the scope of the diagram then the CFD serves no purpose. In these cases, any local optimizations made within the CFD's scope will fail to improve the overall performance of the system.