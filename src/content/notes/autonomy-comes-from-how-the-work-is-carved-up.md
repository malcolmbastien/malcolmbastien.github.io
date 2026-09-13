---
title: Autonomy Comes From How the Work Is Carved Up
tags:
  - Agile
  - Kanban
  - Organizational-Design
publishedDate: 2026-09-28
summary: Teams can't be handed autonomy. It comes out of where the boundaries sit, where decisions live, what gets specified, and which supporting practices you leave in place
draft: true
---

Ask a leadership team what it did to make the organization more agile and you will usually get a list of things it gave to the teams. Training, a delivery tool, a set of squads, autonomy. Three of those can be given to a team. The fourth cannot, which is why it never arrives.

A team I worked with had been told it owned its delivery. The board was clean, the standups ran, and the retrospectives produced actions people actually did. Every significant change still waited on an architecture group two levels away that met on Thursdays. Nobody in that team felt micromanaged, and nobody felt autonomous either. They had stopped raising it, because the message from above was that the topic was settled.

The same gap shows up in organizations that have spent years and real money on a transformation. Structures get redrawn, roles get renamed, ceremonies get installed, and a team still cannot change how it works without permission from someone who does not do the work. What the organization bought, at considerable cost, was the vocabulary.

This is where descaling the work earns its place as a strategy. The goal stays where it always was, which is business agility and value reaching customers sooner and more reliably. The strategy is to keep removing constraints from the system until teams can act on their own decisions, and to keep asking which constraints the work actually needs. Agility arrives as a result of that pressure, and it does not arrive as a result of anything you install.

> [!IMPORTANT]
> Agility is the goal. Descaling the work is the strategy. Autonomy is what a team has when the boundaries, the decision rights, the specification, and the supporting practices all point the same way. Every one of those is a design decision, and none of them can be announced.

## The Goal Is Agility. Descaling Is the Strategy

Transformation programs are additive by nature. A planning layer goes in because dependencies were invisible. A governance board goes in because work was starting that nobody had funded. A dependency forum goes in because three teams kept discovering each other late. Each addition answers a real problem, and each one outlives the problem that justified it.

The effect compounds. Teams spend their time coordinating the consequences of the last round of additions, and the next round exists to coordinate that. Meanwhile the organization reports progress on all of it. A transformation plan, by construction, contains only additions.

Descaling runs the other way. Smaller teams, smaller increments, fewer dependencies, fewer handoffs, fewer approvals, fewer meetings that exist to manage the handoffs. Jonathan Smart's version of this is the line worth stealing: if you want to scale agile, don't. Continuously descale the work, because descaling the work is scaling agility.

The test for any change on the table is whether it adds something teams have to comply with or removes something they have to work around. Both get proposed with good intentions, and only the second one moves agility. Run a second test alongside it: what does this do for a customer? Adoption rates, maturity scores, and framework fidelity are not customers.

You cannot decide to transform, and you cannot schedule it. What you can decide is to keep removing one constraint at a time and let the organization find a new shape around the space that opens up. Transformation accumulates from that, which is why the strategy has to be a practice rather than a program.

## Autonomy Comes From Where the Boundaries Sit

The practical definition of autonomy is the set of decisions the team can make without leaving the room. That set exists whether or not anyone in the building talks about empowerment, and you can find its edges by tracing one item of work. What did the team have to ask for, and who did it ask? Every answer marks a boundary drawn somewhere other than around the team's work.

A group assembled around a fragment of a value stream will always need the other groups. The team that builds the API and the team that builds the screen cannot each own the outcome the customer receives, no matter how much freedom they get. The work routes through someone else's queue, and the queue sets the pace.

The design rule is short. Draw a boundary so the group inside it can regulate its own decisions, which means giving that group the whole piece of work and the skills needed to finish it. A team that has to borrow a tester, a decision, or an environment every sprint has a boundary problem, and it will keep having one after every trust exercise it runs.

So count dependencies instead of reading tone. The number that matters is how many other teams' decisions sit between this team starting something and a customer receiving it. That number does not move when a leader announces empowerment, and it moves immediately when the work is split differently.

Splitting the work is the part leadership can do that no team can do for itself. It might mean cutting an epic into something one team can carry, drawing a service boundary so a team owns the whole path, moving a shared test environment under the team's control, or funding a smaller thing with fewer people on it. The instinct in most organizations is to scale the process up so it can carry the work. Scaling the work down until one team can carry it removes the coordination problem rather than managing it better.

## Where Decisions Sit Decides How Much Hierarchy You Need

Every organization has to cope with work going wrong, whether that is a rollback, an integration failing on the vendor's side, or a customer who needs an answer this week. Where those get handled decides how much supervision the organization has to buy.

Handle a problem where it happens, with the people who can stop it happening again, and you need almost no hierarchy to support it. Push it upward and each layer above has to exist to receive it, decide on it, and pass the decision back down. Management layers are not evidence of a controlling culture that needs fixing. They are what decision placement looks like once it has been built out.

The same logic applies to information. Information should reach the people who can act on it before it reaches anyone else. Send the signal upward first and it stops being a signal. A dashboard that arrives at a steering committee before it arrives at the team has become an agenda item, and the meeting it lands in will generate work for the team that the team had no part in choosing.

The picture a manager holds of the work is assembled from reports, boards, and conversations, which makes it a summary of a summary, collected at a distance and aging in transit. Decisions taken from that picture are decisions about a version of the work that no longer exists. That is not a failure of competence, and no amount of experience fixes it, because it is what distance does to a picture.

The role left for management is real. It covers resources, coordination across team boundaries, anticipating what is changing in the environment, and holding the outside of the system so the inside can work. What it does not include is deciding how the work happens.

## Say What Must Be True, and Stop There

One rule does most of the work here. Specify no more than is essential, and be explicit about what is essential. The negative half gets quoted, the positive half does the work: you have to name what must be true, or the vacuum gets filled by whatever the last person to write a template assumed.

In practice that means separating properties from methods. A definition of done that says the change is deployed, monitored, and supported by the team that built it is a specification. The same definition with the steps listed is a method. An architecture standard that states latency, tenancy, and data residency constraints leaves a team room to choose a pattern. The same standard naming the pattern has removed the choice, along with whatever the team would have learned by making it.

Over-specification has a predictable cause. Specifying closes options, and the person writing it is usually trying to close their own uncertainty, or to get a preference encoded as a rule before somebody picks differently. Both are understandable, and both take away the adaptiveness you were buying when you decided you wanted teams that could respond to change.

Designing inside today's constraints is how you end up with the organization you already have. Bring today's org chart, today's systems, and today's policies into the room at the start of a design and you will produce exactly that, with new vocabulary. Design the ideal version first, then accept only the constraints whose removal costs more than living with them. A constraint accepted before the design starts has already become the design.

The same instinct governs anything written from a desk. A standard drafted without time spent where the work happens encodes a version of the process that only exists in the document. The people doing the work find that out in a week, route around it, and stop reporting the deviation, which leaves the organization with a standard it believes in and no visibility into the work.

Governance that holds up is short. It states what must be true, who decides when the interpretation is contested, and what evidence shows the requirement is met. Everything past that list belongs to the people doing the work. Written that way, the governance meeting has nothing left to discuss.

## Check What the Other Practices Reward

Whatever you specify, the surrounding practices decide the result. Payment, promotion, performance review, selection, training, measurement, and approval each reinforce the design or contradict it, and when they contradict it, they win. People follow what they are measured on and paid for.

The contradictions are easy to find once you look for them. A team that sets its own priorities and is measured on utilization has been given two instructions, and the utilization number will win. A team free to change how it works but required to raise a ticket first has been given permission rather than authority. A self-managing team whose members are ranked against each other annually has been told that the individual is the unit the organization cares about. A team that owns its deployments but needs a sign-off per release does not own its deployments.

Finding out what a team actually controls takes one question. Take a decision it claims to own, and find out what happens when someone uses it and is wrong. If the answer involves a performance conversation or a rule that gets written, the team holds that decision on loan.

The same mechanism is how an organization resets itself without anyone deciding to. Every failure is answered with a checkpoint, because the checkpoint is the available response and it looks like action. The checkpoint stays long after the failure has been understood, and it is still sitting in the process when the next team inherits it.

## The Change Has to Be the Kind of Change You Want

A system where teams decide for themselves cannot be created by decree. If teams are meant to make their own decisions once the change lands, they have to be making some of them on the way there, starting with the decisions about the change itself. Klaus Leopold's phrasing is the one to keep: if the desired state is agile, the way there should be agile as well.

An announced operating model produces compliance with the announcement, since compliance is the only response a rollout can generate. Teams then apply the change the way it was applied to them, which is as a rule, and the organization ends up with a set of practices that everyone follows and nobody chose. The practices will be defended, because giving them up looks like resistance to the transformation.

Freedom needs a counterweight, and the counterweight is a hard goal. The strongest development teams in Takeuchi and Nonaka's study were given an extreme requirement and no method. One was asked for a car the youth market would want. Another, for a copier built at half the cost of the existing line, with no drop in performance. Ambiguity plus a demanding, specific outcome is what produces self-organization. Full freedom attached to a vague goal produces a comfortable team that drifts, and it will drift slowly enough that nobody notices for a quarter.

Time is the last piece, and it is the one most often promised and least often funded. Learning, reflection, and redesigning your own way of working all cost hours that have to come out of delivery capacity on purpose. If every hour goes to making ends meet, there is nothing left to consolidate experience, and improvement becomes something the team is asked to do on top of the work. Autonomy without time is homework.

## Descaling Never Finishes

Practices outlive their reasons. The change board created after an outage keeps meeting years after the practice that caused the outage was replaced. The review step added for a client who has since left still sits in the process. Institutionalized practice is the thing to watch, because it keeps applying a solution to a problem that has moved, and the longer it runs the more legitimate it looks.

The counter-practice is deliberate unlearning: treating your own standards as things with an expiry date, and rebuilding rather than inheriting wherever the environment has changed. The companies in Takeuchi and Nonaka's study did this on a schedule, defining each generation of a product as a break from the previous one rather than an improvement on it. It is a harder discipline than improvement, because it gives up accumulated advantages on purpose.

Adding is easier than removing, which is why descaling needs somebody who owns it. Adding a constraint comes with an incident, a sponsor, and a visible piece of diligence to point at. Removing one has no sponsor and no incident, and the person who suggests it sounds as though they are lowering standards. Left alone, the system will add faster than it removes, in every organization, forever.

The correction is small enough to run without a program. Once a month, pick one flow of work, walk it end to end with the people who do it, and ask which constraint could come out and what would break if it did. Remove the one where the answer is nothing much, watch what happens for a month, and put the question back on the calendar.

## The Principles as a Checklist

Principles give direction without determining the answer. Treat these as a checklist for testing a decision rather than a blueprint to copy, and use them to see which way a decision is already pointing.

| Layer | Principle | What it moves |
|---|---|---|
| **How the work is carved up** | Autonomy comes from the boundaries | Group a whole piece of work with the skills to finish it |
| | Handle problems where they occur | Control sits with the people who can stop the problem recurring |
| | Information reaches the people who can act | Send the signal to the decision, not the decision to the signal |
| **What gets specified** | Say what must be true, and only that | Outcomes, interfaces, and the non-negotiables |
| | Design without today's constraints first | Accept only the constraints worth more than their cost |
| | Check what the other practices reward | Payment, promotion, measurement, selection, approval |
| **How the change is run** | The change has to be the change you want | Participative design instead of a rollout |
| | Pair freedom with a hard goal and time | An extreme requirement, no method, and slack to reflect |
| | Keep descaling as a standing practice | Institutionalized practice expires |

## Three Things Worth Taking Away

1. **Autonomy is a design property, not a permission.** Trace where a team's decisions actually stop and you will find the boundary around its work, what has been specified for it, where the decisions sit, and what the surrounding practices reward. Announcements move none of those.

2. **Descaling is the strategy and agility is the goal.** A change that adds something teams have to comply with is scaling. A change that removes something they have to work around is descaling, and it is the only kind that shifts what the organization can do.

3. **The change you run has to be the change you want, and it has to keep running.** Freedom with a hard goal and time to think beats any rollout, and the organization regrows what you remove. Somebody has to keep asking which constraint can go.

Agility is what an organization does when the constraints left in it are the ones the work actually needs. Getting there is a long sequence of decisions about boundaries, specifications, and control, most of which are made by people who are not in the room where the work happens.
