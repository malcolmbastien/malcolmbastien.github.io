---
stage: evergreen
title: "Test-Driven Goals: A Scalable and Effective Pattern"
publishedDate: 2023-04-27
tags:
  - Agile
  - OKRs
---
I've been working with a team and trying to help them answer questions about their plan for the upcoming year.

Why is this your plan for next year?

Why did you choose to include these particular initiatives in your roadmap?

Even if the team can answer these questions, there's another that always seems to pose a challenge: "What are you trying to achieve?"

To help them answer the question of what they want to achieve, I read up as much as I could on Objectives and Key Results. OKRs have helped facilitate discussions around goals by providing a framework and some structure, but they also have been a challenge. In my experience, it's always easier for teams to create a roadmap and even articulate the value of their work than it is for them to identify what they want to achieve and how they'll know when they've achieved it.

One aspect of Objectives and Key Results that has been particularly challenging for teams is coming up with Key Results that don't describe projects or work items. Key Results should create options and encourage better decision-making on what work a team should do to achieve its Objectives.

> If your key results are tasks, projects or a to do list, someone is doing OKRs wrong.
>
> Christina Wodtke

> A key result is not a task you do or don't do.
>
> Christina Wodtke

The first goal is to help teams express their desired outcomes for the year in a way that's more focused on value and outcomes rather than outputs. The second goal is to avoid situations where a team accomplishes all of its Key Results, but still misses its Objectives.

When I read [How I like to use OKR](https://philcalcado.com/2020/01/31/how_i_like_to_use_okrs.html)s by Phil Calçado, I saw that Phil describes Key Results as a test for the Objective. So one way to approach key results is to think about writing them like writing acceptance tests for user stories, which Agile teams do every day.

> The way I have seen OKRs working well is when you use the **Key Results** as the test if you have achieved the **Objective**.
>
> Phil Calçado, [How I like to use OKRs](https://philcalcado.com/2020/01/31/how_i_like_to_use_okrs.html)

If we think about writing Key Results like acceptance tests for our Objectives, they should help answer the question user story-based acceptance tests are often concerned with, "How do we know when we're done?"

> Acceptance tests also provide basic criteria that can be used to determine if a story is fully implemented
>
> Mike Cohn, User Stories Applied

These two practices at different levels of scope and time follow the same pattern:

- Identify a target state.
- Define tests that check when the gap has been closed.
- Do some work.
- Check the work and assess your performance in closing the gap.
- Use those results to identify the next target state.

![](../../assets/2023/04/image-3.png)

This pattern aligns with what Ron Jeffries calls "Bracketed Intervals."

> **Bracketed Intervals**: to provide, at every level, a rhythmic focus on goals bracketed by prospective and retrospective consideration.
>
> Ron Jeffries, [Twelve](https://ronjeffries.com/articles/019-01ff/twelve/)

The Bracketed Intervals process has three steps:

> 1. **Entry Bracket [**: We determine a concrete prospective example of what we plan to accomplish in the interval.
> 2. **Build**: We do our work during the interval, building the desired product, working to accomplish what we set out to do
> 3. **Exit Bracket ]**: We assess our performance in the light of the passed interval, and use our actual results in retrospect, to prepare us for the next entry bracket.
> 
> Ron Jeffries, [Twelve](https://ronjeffries.com/articles/019-01ff/twelve/)

## Scaling Up and Down

Even though this idea originally helped create clarity for me around OKRs, what I find interesting and particularly valuable about this pattern is how it scales both down and up.

When scaled down, it promotes working in smaller increments, identifying testable conditions for what we want to accomplish in an interval, whether a sprint, a week, or even an afternoon. As it scales down, it resembles an approach GeePaw Hill has written about called [Many More Much Smaller Steps](https://www.geepawhill.org/series/many-more-much-smaller-steps/).

As we scale the pattern up, we can start connecting some dots between this and Mike Rother's [Improvement Kata](http://www-personal.umich.edu/~mrother/The_Improvement_Kata.html).

There's also a potential connection here with strategy. In [Finishing Strategy](https://rogermartin.medium.com/finishing-strategy-fdc1409a0640), Roger Martin says,

> When a gap between your aspirations and your outcomes becomes evident, you should engage in a thinking process that brings you to new choice that addresses the problematic gap — i.e. strategy.
>
> Roger Martin, Finishing Strategy

In this case, strategy functions less as the test and more as the work a company might engage in to close the gap between its current and aspirational states. When the strategy is working, the outcomes and aspirations should come back into alignment.
