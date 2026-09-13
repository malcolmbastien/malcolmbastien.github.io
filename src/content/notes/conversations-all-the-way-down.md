---
title: Conversations All the Way Down
tags:
  - Agile
  - Kanban
  - Organizational-Design
  - AI
publishedDate: 2026-09-21
summary: Agile practices get their value from the conversations they produce. Standards and automation quietly remove those conversations, and the system gets more fragile wherever nobody is talking
draft: true
---

Every agile practice comes with the same set of parts: roles, activities, steps, responsibilities, inputs, and outcomes. A Kanban board has columns, policies, WIP limits, and someone who runs the review. A sprint has events, artifacts, and accountabilities. All of it can be documented, trained, and audited.

The only part that decides whether the practice does anything is the kinds of conversations it produces. A story gets written so two people can argue about who the work is for. A retrospective sets aside an hour for the things nobody says during the week. A standup exists so the team finds out what changed since yesterday.

In agile, conversations are what move work forward. Ceremonies and meetings don't.

Conversations all the way down. Change the framework, rename the roles, replace the tool, and the system still runs on the quality of the conversations people have with each other, with their customers, and with whoever is holding up the work.

When those conversations thin out, nothing stops. Work keeps moving, reports keep arriving, the board stays current. What disappears is the system's ability to notice: the delay nobody names, the workaround everyone has quietly adopted, the dependency two teams keep negotiating by email. Those costs land later, as missed dates and blame aimed at the people closest to the work.

> [!IMPORTANT]
> Every useful Agile practice is a container for a conversation. Every practice that removes conversations makes the system less resilient to change.

## The Practice Is the Container, Not the Work

**Kanban boards.** A board makes the value stream visible: what is in progress, what is waiting, what is not moving. Visibility on its own does nothing for delivery. What the board buys you is a shared object the team can stand in front of and talk about: where the pile is, why that item has not moved in nine days, what to do about the thing that is stuck. Take away the conversation and you have a picture of the work that nobody acts on.

**Planning.** Story points and capacity numbers give a team somewhere to start. They do not hold the dependency on another team, the environment that is only free on Tuesdays, or the item three people privately think is twice the size. Disagreement is the useful output of planning. Points and capacity never produce it, so a plan built from those numbers alone is a record of intent.

**Retrospectives.** The format gets the credit. The honesty does the work. A retro that produces a tidy list of action items and no uncomfortable sentence has cost the team an hour.

**Swarming, pairing, demos.** Swarming is what happens when a team decides to stop starting and finish the thing that is stuck, together, today. Pairing is a conversation with a keyboard attached. A demo is where the customer talks back, usually about something nobody in the room was worried about. Each of these is a practice that makes a specific conversation routine and repeatable.

A team I worked with had a board that looked healthy for months. Two columns, steady throughput, nothing aging badly. The real state of the work only came out in a hallway conversation about a test environment that three teams shared. Nobody had put it on the board because the board tracked their work, and the environment belonged to someone else.

## "How Do I Write Better Stories"

The question I hear most often is not about boards or planning. It comes holding a draft: how do I write better stories?

A story is easy to critique. The template maybe half used, the acceptance criteria thin, the scope reading like two items stapled together. All fixable, and all beside the point. Look at how the story arrived and you find someone sitting alone, writing it on their own. No conversation happened on the way to the artifact, and none is expected.

That is the actual problem, and a well-turned sentence will not solve it. People writing alone make small mistakes not because they lack the details but because they wrote without anyone next to them. A collaborator asks the question that takes three seconds, says "that's not what I'd expect", and stops a wrong assumption before it hardens into text. Alone, the same assumption ships and gets discovered downstream, where the correction costs a sprint instead of a sentence.

So the feedback usually starts somewhere else than the draft. Who are you writing these with? Pair up. Walk through it together. Read the story out loud to the person who will use it and watch where their face changes. The template cannot supply what the conversation supplies, and the conversation does not need a template.

The same move works everywhere. The advice requested is about an artifact, and the artifact's quality is produced by the collaboration around it. Structure can be added to any practice. It only approximates what the conversation does directly.

## Delivery Problems Surface in Conversation, Not on Dashboards

Lean has a word for this, and Toyota has been using it far longer than agile has: genba, the real place, the spot where the work actually happens. In the Toyota Production System, leaders go to the genba. They stand where the work is being done, watch for long enough to see what really happens, and ask questions. They ask to learn context, to understand why the process is arranged the way it is, and to hear what the people doing the work think about it.

The practice has structure. Go to where the work is done. Watch before you speak. Ask about the work, not about how someone is performing. Arrive without the answer already formed, because a lead who turns up knowing what the problem is will spend the visit collecting agreement instead of context.

An afternoon at the genba tells you what a week of status reporting will not. The code review that takes six days and gets read in five minutes. A database change that needs a ticket to a team with its own roadmap, so a two-hour task waits three weeks. The one person who understands how the nightly job works, and who is booked solid through the end of the quarter. None of it shows up in the burndown, because the burndown tracks the work, and the things slowing the work down sit around the work rather than inside it: the queue, the handoff, the approval, the knowledge held in someone's head.

Resilience comes out of the same visits. A team that talks to its neighbours knows who to call when something breaks, and knows which of its own assumptions the neighbours are depending on. A lead who spends time where the work happens hears where the single points of failure are while they are still complaints.

Improving service delivery is less about installing the next practice than about keeping this exchange going. Go where the work is, ask, listen, and then say what changed. People keep telling you about their problems when telling you about their problems has changed something before.

## Standards and AI Make the Same Promise

Two responses show up in most improvement plans now. The first is a standard: an explicit process, defined once, that everyone follows. The pitch is that work will flow more smoothly and with less risk once the process is followed properly. The second is automation, increasingly AI-driven. The pitch is that the thing holding the team back is manual labour.

Both pitches are sometimes correct. Work that repeats, with stable demand and few exceptions, benefits from a standard, and if a model can do it consistently, letting a model do it is sensible. Where the pitch breaks is in work nobody has watched closely yet: the process that has run four times, the workflow with three variants and a fourth showing up next quarter, the intake path where half the requests arrive by email and half by ticket and nobody has reconciled the two.

A standard written before anybody has mapped the variation freezes a shape the work does not have. The people doing the work find that out in a week. Then they route around it, and the exceptions go back to the conversations the standard was supposed to replace, except now they're invisible because the process says the work follows the process.

## What You Lose When People Stop Talking

The first loss is the warning system. Conversations are where delay gets named while it is still small enough to fix. Once it has to become a metric to be noticed, you find out four weeks late, with a dashboard and no context.

The second loss is the ability to change. A standard or an automation is a decision that has been taken out of the room and stored somewhere else. Changing it means finding the owner, making a case, and waiting. Teams that can adjust their own workflow in an afternoon lose that capacity one process at a time.

The third loss is harder to see. When the work only moves through the designed path, the designed path becomes the only route anyone knows. The informal knowledge of how work really gets unstuck — who to ask, what to work around, which shortcut is safe — stops being passed on. The organization ends up depending on the design being right, and it has fewer people left who remember what it looked like when the design was wrong.

There is also a goal problem. Any practice that removes conversation has to replace it with something measurable, and the team gets judged on whatever that something is. Follow the process. Keep utilization up. Reduce manual hours. None of those are what the customer receives, and a team that meets them can still be shipping the wrong thing slowly.

## Ask What Conversation the Practice Replaces

Before you standardize or automate something, three questions are worth answering out loud.

- **What conversation does this replace, and who is having it now?** If the answer is "the team argues about this every planning session," that argument is where the team's understanding of the work is being built.
- **What is the current variation?** Low variation with repeating exceptions means the standard is safe. High variation means you are paying to encode something you do not yet understand, and the exceptions will fight you.
- **What will tell you when the work no longer fits?** A standard that cannot be broken without an escalation is a rule. A standard that makes problems visible, where a deviation starts an investigation rather than a compliance report, keeps the conversation alive.

Standards are not the problem, and neither is AI. The order matters, and so does what you leave open. Fix the part of the process you have watched enough times to understand, automate the part where the variation is genuinely gone, and keep the judgment calls where people can still argue about them.

## Three Things Worth Taking Away

1. **The practice is a container, not the outcome.** User stories, planning, standups, and reviews all get their value from the conversation they trigger. If the conversation has stopped, keeping the format running is admin.

2. **Anything that removes conversation should be applied where the variation is already low.** Standards and automation work on work you understand. Applied early, they hide the exception path you needed to see in order to understand it.

3. **Watch for practices that stop people from talking.** When a team gets quieter, the system loses its early warning, its ability to change, and its grip on what it is actually for. That is a bigger risk than slow delivery, and it is much harder to reverse.

Conversations are cheap, and they are the only place the system tells you what it is doing. Standards and automation can carry the parts that repeat. They cannot carry the part that is still being learned.
