---
status: "seed"
title: The Power of Predictable Delivery
publishedDate: 2023-08-05
updatedDate: 2023-08-05
slug: the-power-of-predictable-delivery
tags:
  - Agile
  - Dependencies
  - flow
  - predictability
---
With most of the Agile teams I've been exposed to, I've noticed that they spend easily over a hundred person-hours every month on practices like updating plans, reporting metrics, estimating, and sharing status updates. To them, these are some of the core practices that make them Agile.

In general, as a way to be less judgemental, for every practice I see teams performing, I always try to understand the job they're filling. What problem is this practice trying to solve?

In the case of all the status updates, metrics, and plans I see teams generating weekly, we can list some ideas like "Understand performance," "Keep management informed," and "Identify risks," but the ultimate question they are concerned with answering is "When will it be done?"

Teams estimate work, report metrics, and share updates and plans to create confidence about when their work will get delivered. They all aim to build confidence about delivery. However, none address the conditions needed for predictable delivery, and they all consider predictable delivery a team concern. But teams can't predictably deliver work in a system that's out of control.

In other words, practices like estimates, weekly metrics and reports, and status updates are low-quality activities trying to make up for the lack of predictable delivery.

So let's explore why predictability is important, what it looks like, and what hurts it.

## Why Predictability is Important

Just like agility, whether a team is predictable or not is a property of a system and something we can observe. It's not a mindset an individual holds in their head or a set of practices to follow.

A system is predictable when it is...

Behaving in a way that is expected

[Merriam-Webster](https://www.merriam-webster.com/dictionary/predictable)

Capable of being predicted: able to be known, seen, or declared in advance

[Merriam-Webster](https://www.merriam-webster.com/dictionary/predictable)

Acting or happening in a way that is expected

[Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english/predictable)

But it's not enough for teams or systems to work in expected ways. It's more important that they can predictably meet their commitments to customers or other teams.

It's not valuable to customers or helpful to other teams if a team behaves consistently but is consistently late. The value of predictability is how it improves the interactions between different parties.

### Predictable Delivery is a Trust Builder

When teams deliver what they say they will, when they say they will, they demonstrate it's safe for others to place their trust in them.

Teams with trust can do things teams without it can't. And teams that deliver predictably can build the kind of trust teams without it can't.

When predictable teams that have the trust of their customers or managers commit to start working on something, there's confidence in their answer about when delivery will happen.

In organizations with that kind of trust and predictable delivery, unnecessary processes like status updates and weekly metrics go away.

### Better Predictability Enables Better Decision Making

Healthier interactions, more trust, and better information about delivery lead to better decision-making. Predictable systems let managers make optimal decisions that otherwise would not be possible.

"When is the optimal time to start this work?"

"When is the right time to prepare our marketing and sales activities to support this new feature?"

"How much more information do we need to make a decision?"

"Of these three options, which should we choose?"

Predictable delivery also leads to removing the expensive behaviours teams in unstable systems employ to try to make guarantees on delivery:

Adding buffer time and need to start projects earlier

Cutting scope late in a project and creating the need for extra releases.

Adding additional people to try and create sufficient capacity or protect against delays

Teams crunching at the end of projects to get everything ready or deal with unexpected quality problems

Instead of focusing so much time and money on ensuring a successful delivery through their system, teams with predictable delivery can focus more on optimizing the value their systems produce.

## What Does Predictability Look Like?

One challenge in shifting the conversation from speed to predictability is figuring out what to look for. The ask to teams shouldn't be for them to start reporting consistently high throughput metrics. That's just the same as telling teams to go faster, leading to the same unintended side effects.

If someone was to show me a team and ask me, "Is this team predictable?" Here's what I might look at:

**Due-date completion rate/on-time percentage**: This metric is the percentage of work items delivered on or before the dates committed to by the team.

**Cycle-time distribution**: The lead time (the time it takes to complete a work item from start to finish) of the team's completed work, shown as a lead time curve. We want to pay attention to the height, length, and size of how long the tail of the curve is.

**Flow**: Work items should consistently move through the different activities in a team's kanban system. The team's work should flow smoothly through the system without interruption. The number of items entering the board matches the number of items leaving the board. 

**Work item age**: The age of the cards in the kanban system (how long they've been in progress) is stable. 

**Backlog size and age**: The team's backlog (the list of work items waiting to start) should be limited. Teams should have just enough options to start working on something new quickly and efficiently as needed. But there should be only a few weeks (or maybe months) worth of work waiting to start.

**Deployment frequency**: The team makes regular deployments to production. Progress is visible and measurable, based on working software that delivers value to customers.

## What Hurts Predictability

### Dependencies Hurt Predictability

I don't think you can forecast or actually understand the performance of an organization unless you get a grip on dependencies between multiple teams.

Troy Magennis

Dependencies reveal more teams and interactions between teams that need to be healthy for predictable delivery to happen. Aside from the teams themselves, the interactions between teams have their own health that needs to be paid attention to.

![](../../assets/2023/08/image-2.png)The teams and the interactions between the teams need to be healthy for smooth flow.

Dependencies increase the number of teams and the number of interactions work needs to flow through smoothly, which is what makes dependencies such a risk for predictable delivery.

The two options for dealing with dependencies are removing the dependencies, making the chain shorter, or managing the dependencies and helping work flow through the chain more smoothly.

But bringing dependencies under control is also a challenge. Take all the delivery-related challenges teams typically struggle with and the effort required to bring them all up to a level of maturity where a piece of work can smoothly flow across multiple handoffs without delay.

This visual, inspired by Troy Magennis, helps to show just what a significant impact dependencies between multiple teams have on delivery.

![](../../assets/2023/08/image.png)Each dependency halves the chances of you delivering on time. (Learn more at [Impact of Multiple Team Dependencies in Software Development](https://observablehq.com/@troymagennis/impact-of-multiple-team-dependencies-in-software-developm))

### Overburdening, Poor Code Health and Technical Debt Hurt Predictability

Usually, I wouldn't group these categories together, but they are all related in the context of predictability. Operating in an environment that pays little attention to the overburdening of people or the health of your code means your current pace, as consistent as it may be in the short term, is not sustainable and ultimately not predictable.

Overburdening happens when a team is under stress to deliver more work than they have the capacity for, either because of the volume of work or because they lack the tools, training or support.

The unpredictability of poor code health and technical debt comes from the fact that the cost to change the system increases over time.

![](../../assets/2023/08/image-3.png)Systems can't be predictable if development costs increase uncontrollably

### High WIP & Large Queues Hurt Predictability

Our real problem is periods of inactivity, not slow activities.

Don Reinersten, The Principles of Product Development Flow

Work in progress is the amount of work committed and started by the team but not completed.

Queues are the places in your workflow where work items are waiting to be picked up and worked on.

When teams start work faster than they finish, work in progress goes up. When work in progress goes up, predictability goes down.

High WIP causes predictability to drop because as WIP increases, lead times don't just get longer; they get longer and more variable.

Nothing kills predictability like high WIP and large queues.

If you have a piece of work you need to feed into a high WIP system, the only chance you have of ensuring predictability is for everyone to treat your work item as a "Golden Ticket," where they drop whatever it is they're working on and work on the "Golden Ticket" instead.

Thankfully, dealing with high WIP and large queues is much easier than dealing with dependencies, at least on paper. The answer is to control and limit queue sizes.

Eject work that is currently sitting in queues

Reject new work from entering the system until queues come under control

Place a limit on how much work can sit in a queue

## Conclusion

To deliver more predictably, the way teams work and the way teams interact needs to change.

Predictable delivery is a goal that helps teams build trust, make better decisions, and reduce waste. Focusing on creating predictable teams and systems also has a big customer focus, as predictable teams can deliver value to customers more reliably and optimally.

Like agility, predictability isn't a process or framework you can install. Predictability is an emergent property of other things you do.

To become more predictable, teams need to focus on improving their flow, reducing the impact and risk of dependencies, and working sustainably concerning code health and the people in the system.
