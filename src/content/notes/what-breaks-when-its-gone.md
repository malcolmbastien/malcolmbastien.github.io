---
title: What Breaks When It's Gone
tags:
  - Agile
  - Teams
  - Maturity
publishedDate: 2026-06-14
summary: Agile maturity models treat all practices as equally important, it's more helpful to consider the negative space and ask what happens when a practice is absent?
draft: true
---

A recent paper on software leadership (Coelho et al., 2026) did something interesting. Instead of just asking "what makes a good leader?", they also asked "what makes a bad one?" Two complementary perspectives on the same question. The results were revealing: technical competence appeared as a bonus for success, but its absence wasn't what practitioners blamed for leadership failure. The things that actually hurt — micromanagement, counterproductive communication, unhealthy work patterns — were almost entirely interpersonal and managerial.

That asymmetry got me thinking about agile practices.

## The Maturity Model Problem

Most agile maturity models work like checklists. Does the team do sprint planning? Check. Daily standups? Check. User stories? Check. Retrospectives? Check. The assumption is that more practices executed more faithfully equals more maturity equals more success.

But practitioners know this isn't how it works. Some practices are load-bearing. Remove them and the team's ability to function degrades quickly. Others are decorative. Nice to have, maybe even helpful, but their absence doesn't cause the structure to collapse.

The problem is that maturity models treat all practices as if they sit on the same shelf. They don't.

## Two Questions Instead of One

Instead of asking "does this team practice X?", ask two questions:

1. **Does the presence of this practice help the team?** (The contribution question)
2. **Does the absence of this practice hurt the team?** (The absence question)

These sound like the same question, but they're not. A practice can be helpful when present without being damaging when absent. User stories might improve clarity in sprint planning, but teams that work without formal user stories — using job stories, tasks, or just conversation — don't necessarily suffer for it.

The inverse also holds. Some practices don't seem particularly exciting when present, but their absence creates real dysfunction. Try removing working agreements from a team that had them. The friction doesn't show up immediately. It accumulates.

```
                        HIGH PRESENCE VALUE
                               │
                   "Attractive" │    "Must-be"
                               │
   LOW ABSENCE ────────────────┼──────────────── HIGH ABSENCE
   IMPACT                      │                   IMPACT
                               │
                  "Indifferent" │    "Hygiene"
                               │
                        LOW PRESENCE VALUE
```

If this framing feels familiar, it should. Product managers will recognize the shape from the Kano Model, which classifies features along two axes — satisfaction when present and dissatisfaction when absent. Kano's labels map almost directly onto these quadrants: **Must-be** features don't delight anyone, but their absence causes real frustration. **Attractive** features create delight when present, but nobody misses what they've never had. **Indifferent** features don't matter either way. There's also a fourth category from Herzberg's motivation-hygiene theory that fits here: **hygiene factors** — things that don't actively motivate when present, but whose absence quietly corrodes the environment. The same asymmetry shows up in agile practices. Some practices are must-bes — CI/CD, retrospectives. Their absence doesn't just remove a feature; it creates dysfunction. Others are attractives — user stories, pair programming. Genuinely useful when present, but not what's breaking your team when they're gone. The mistake most maturity models make is treating every practice as a must-be.

## A Practice Library Through Both Lenses

Here's a set of common agile practices, examined through both perspectives. This isn't derived from controlled experiments — it's synthesized from practitioner accounts, team retrospectives, the DORA research program, and community discourse. Treat it as a starting framework, not a definitive ranking.

### Retrospectives

**Present:** Widely regarded as the heartbeat of continuous improvement. Teams that run effective retrospectives — where action items actually get completed — show measurable improvements in velocity and defect rates. Research from DORA consistently links continuous improvement culture to elite software delivery performance.

**Absent:** This is where it gets interesting. Teams that stop doing retrospectives don't immediately fall apart. The degradation is gradual. Problems that would have been surfaced and addressed in week three instead fester until month six. The team adapts to dysfunction rather than fixing it. One practitioner described it as "boiling frog syndrome — you don't notice the water heating up."

**Verdict:** High presence value, high absence impact. Must-be.

### WIP Limits

**Present:** WIP limits force the team to finish work before starting new work. They make bottlenecks visible and protect flow. When a team commits to WIP limits, cycle time drops and context switching decreases.

**Absent:** This is one of the most asymmetric practices. Teams without WIP limits don't feel like they're missing something. Work just... flows slower. Everyone is busy. Nothing finishes. The absence is invisible because the symptom (too much WIP) feels normal. It's only when you add WIP limits that you realize how much hidden thrashing was happening.

**Verdict:** Moderate presence value, very high absence impact. Hygiene.

### User Stories

**Present:** User stories provide a shared format for expressing value. "As a [user], I want [goal], so that [benefit]." When done well, they anchor conversations about who the work is for and why it matters.

**Absent:** Plenty of healthy teams don't use formal user stories. They use job stories, tasks with context, or just talk to each other. The format isn't what matters — the conversation is. A team that skips user stories but maintains rich dialogue about user needs suffers no meaningful loss of agility. A team that writes perfect user stories but never discusses them gains nothing.

**Verdict:** Moderate presence value, low absence impact. Attractive.

### Story Points and Velocity Tracking

**Present:** Story points give teams a relative sizing language. Velocity provides a rough planning signal. Neither is inherently harmful when used as intended — as a conversation starter about complexity and as a team-internal planning tool.

**Absent:** Teams that don't estimate or track velocity plan just fine using other methods — t-shirt sizing, throughput-based planning, or just breaking work into similarly-sized chunks. The absence of story points has essentially zero impact on a team's ability to deliver value. The DORA research program has never found a correlation between estimation practices and software delivery performance.

**Verdict:** Low presence value, negligible absence impact. Indifferent.

### Continuous Integration / Continuous Delivery

**Present:** CI/CD is the technical backbone of agile delivery. Automated builds, tests, and deployment pipelines let teams ship frequently with confidence. DORA's multi-year research across 32,000+ professionals consistently shows CI/CD as one of the strongest predictors of elite delivery performance.

**Absent:** You cannot do agile at scale without some form of CI/CD. Manual deployments create bottlenecks, increase batch size, slow feedback, and amplify risk. Teams without CI/CD compensate with heroics — late nights, manual checklists, deployment freezes. The absence doesn't just hurt; it actively prevents the team from achieving the fast feedback loops that agile depends on.

**Verdict:** High presence value, very high absence impact. Must-be.

### Daily Standups

**Present:** When done well, standups are a quick synchronization point. Fifteen minutes, blockers surfaced, coordination happening. The best standups feel like a natural part of the team's rhythm.

**Absent:** Many teams have replaced daily standups with async updates, Slack threads, or just-in-time conversations. And they're fine. The value of standup isn't the meeting — it's the synchronization. If the team achieves that through other means, the ceremony adds nothing. The problem is when teams keep doing standups out of obligation, reciting "same as yesterday" to a room of people checking their phones.

**Verdict:** Moderate presence value, low absence impact (when replaced). Attractive.

### Working Agreements

**Present:** Working agreements make implicit expectations explicit. How we handle code review. When we ask for help. How we make decisions. They reduce friction by creating shared defaults.

**Absent:** Teams without formal working agreements still have norms — they're just invisible. Invisible norms are harder to challenge, harder to update, and create more conflict when someone violates an expectation they didn't know existed. The absence doesn't break anything, but it makes everything slightly more effortful.

**Verdict:** Moderate presence value, moderate absence impact. Hygiene.

### Pair Programming / Ensemble Programming

**Present:** Pair programming improves code quality, spreads knowledge, and reduces bus factor. When practiced intentionally, it accelerates learning and catches defects early.

**Absent:** Most teams don't pair program, and most of them deliver software successfully. The benefits are real but situational — they matter most for complex problems, onboarding, and knowledge transfer. A team that never pairs isn't crippled. A team that pairs on critical work is stronger for it.

**Verdict:** High situational presence value, low general absence impact. Attractive (situational).

### Sprint Planning (Formal)

**Present:** Formal sprint planning creates a shared commitment. The team selects work, clarifies acceptance criteria, and agrees on what "done" means for the sprint. It provides a planning horizon and a forcing function for backlog refinement.

**Absent:** Kanban teams don't do sprint planning at all, and many Scrum teams have moved to continuous planning or just-in-time refinement. The absence of the ceremony doesn't hurt — but the absence of the *function* (shared understanding of what we're doing and why) does. The question isn't whether you hold the meeting. It's whether the team has a shared picture of near-term work.

**Verdict:** Moderate presence value, low absence impact. Attractive.

### Burndown Charts

**Present:** Burndown charts visualize progress within a sprint. They can help teams see if they're on track and prompt conversations about scope or blockers.

**Absent:** Almost no team misses burndown charts when they stop using them. They're a visualization of information the team already has. If you're talking to each other about progress, the chart adds little. If you're not talking, the chart won't fix that.

**Verdict:** Low presence value, negligible absence impact. Indifferent.

## The Summary

Here's the full library at a glance:

| Practice | Present Value | Absence Impact | Verdict |
|---|---|---|---|
| Retrospectives | High | High | Must-be |
| CI/CD | High | Very high | Must-be |
| WIP Limits | Moderate | Very high | Hygiene |
| Working Agreements | Moderate | Moderate | Hygiene |
| User Stories | Moderate | Low | Attractive |
| Story Points | Low | Negligible | Indifferent |
| Burndown Charts | Low | Negligible | Indifferent |
| Standups | Moderate | Low (if replaced) | Attractive |
| Sprint Planning | Moderate | Low | Attractive |
| Pair Programming | High (situational) | Low (general) | Attractive (situational) |

## The Asymmetry Map

When you plot these practices on the two axes, a pattern emerges:

```
                        HIGH PRESENCE VALUE
                               │
          Pair Programming     │    Retrospectives
          (situational)        │    CI/CD
                               │
                               │
   LOW ABSENCE ────────────────┼──────────────── HIGH ABSENCE
   IMPACT                      │                   IMPACT
                               │
          User Stories         │    WIP Limits
          Story Points         │    Working Agreements
          Burndown Charts      │
          Standups (async ok)  │
                               │
                        LOW PRESENCE VALUE
```

The upper-right quadrant is where the real work lives. Retrospectives, CI/CD — these are **must-be** practices whose absence quietly degrades the team's ability to function.

The lower-left quadrant is where a lot of agile coaching energy goes to die. User stories, story points, burndown charts, formal sprint planning — these are **attractive** or **indifferent** practices that feel productive to adopt and feel risky to drop, but whose absence doesn't actually cause harm.

The interesting space is the lower-right: **hygiene** practices like WIP limits and working agreements that don't feel exciting but whose absence creates invisible dysfunction. These are the practices that teams most need to protect and that maturity models most often overlook.

## What This Means for Mature Teams

If you're an agile practitioner working with a team that already knows the basics, the implication is straightforward: **audit your practices by their absence, not just their presence.**

Stop asking "are we doing this practice?" Start asking "what would happen if we stopped?"

If the answer is "not much" — the practice might be ceremony. Consider whether the energy spent maintaining it could go somewhere with higher impact.

If the answer is "things would gradually degrade and we might not notice for months" — protect that practice fiercely. It's doing more work than it looks like.

And if the answer is "we'd immediately feel the pain" — you've found a practice that both helps when present and hurts when absent. That's your foundation. Build everything else on top of it.