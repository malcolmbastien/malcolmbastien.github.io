---
title: What Agile Frameworks Actually Do to Your Organization
stage: seed        # seed | sprout | evergreen
tags:
  - Agile
publishedDate: 2026-12-30
summary: Mapping agile constraints onto a grid of cost to change and time to change.
draft: true
---

Agile frameworks promise flexibility. But what do they actually do to an organization's ability to change?

If you've ever tried to modify a practice in a team that's "doing Scrum": moving a stand-up, changing how backlog refinement works, adjusting sprint length. And you hit resistance not from the team but from the framework itself. The framework has made that practice harder to change. Not because the practice is inherently difficult to modify. Because the framework has placed it in a position where changing it feels like breaking the rules.

There's a simple way to see this.

---

## The Mapping Idea

Take any constraint an agile framework introduces, and place it on a grid with two axes:

- **Cost to change** — how expensive or difficult would it be to modify this thing?
- **Time to change** — how long would it take to shift it, even with effort?

The grid looks something like this:

```
High cost ┤
to change │
          │  FIXED              BEDROCK
          │  (hard to change,   (almost
          │   requires effort)   immutable)
          │
          │
          │  VARIABLE           VISCOUS
          │  (moderate effort,  (resistant,
          │   can shift)         slow-moving)
          │
          │
Low cost  │  GASEOUS             LIQUID
to change │  (shifting easily,  (flows with
          │   easily reformed)    effort)
          │
          └──────────────────────────────────────────
          Short                            Long
               Time to change →
```

The same constraint can sit in different positions depending on the organization. In one company, a stand-up format might be a "liquid" — changeable on a team's own authority. In another, it might be "bedrock" — standardized across the organization and effectively immovable without leadership approval.

Mapping constraints onto this grid reveals a balance. It's not just a description of what is hard to change. It's a description of the balance between global standardization and local adaptability that an organization has struck. Sometimes that balance is explicit and deliberate. Sometimes it happened by accident.

---

## What Agile Frameworks Move

The components that any agile framework introduces, modifies, or constrains:

- **Meetings & cadences**
  - Stand-ups
  - Retrospectives
  - Planning sessions
  - Demos / reviews
  - Refinement
  - PI Planning (SAFe)
  - Inspect & Adapt (SAFe)
  - Sync meetings (SAFe)
- **Roles**
  - Scrum Master
  - Product Owner
  - Developer
  - Release Train Engineer (SAFe)
  - Solution Architect (SAFe)
  - Product Management (SAFe)
- **Responsibilities & decision rights**
  - What each role is accountable for
  - What each role can decide
- **Team membership & size**
  - Team size (Scrum: 3–9, SAFe: 5–11)
  - Team composition (e.g. cross-functional)
- **Team structures**
  - Independent teams
  - Agile Release Trains (SAFe)
  - Solution Trains (SAFe)
  - Portfolio structures (SAFe)
- **Customer & stakeholder interfaces**
  - Product Owner as customer proxy (Scrum)
  - Service Delivery Manager (Kanban)
  - Program-level customer feedback (SAFe)
  - Direct customer involvement (or absence of it)
- **Tools & artifacts**
  - Jira configuration
  - Boards and workflows
  - Sprint Backlog (Scrum)
  - Increment (Scrum)
  - PI Objectives (SAFe)
  - Features and Stories (SAFe)
  - Reporting structure
- **Work capture & planning**
  - Backlogs
  - Roadmaps
  - Refinement
  - Sprint commitment
  - Definition of done
  - Definition of ready
- **Documentation**
  - Required artifacts (or absence)
  - Working software over comprehensive documentation
- **Process & flow**
  - Sprints / timeboxed iterations
  - Continual flow / no fixed cadence
  - WIP limits (Kanban)
  - Pull systems
- **Practices**
  - Pair programming
  - Test-driven development
  - Continuous integration
  - Continuous delivery
  - Refactoring
- **Metrics & measurement**
  - Velocity (Scrum, informal)
  - Service Agility Dashboard (Kanban)
  - Program metrics (SAFe)
  - Flow metrics
- **Values**
  - SAFe: alignment, built-in quality, transparency, program execution
  - Scrum: commitment, focus, openness, respect, courage
  - Kanban: customer focus, flow, leadership, understanding, agreement, respect
- **Objectives & strategy**
  - OKRs / prescribed objectives
  - Strategic goals
- **Risk management**
  - Risk reviews (Kanban)
  - Program-level risk management (SAFe)
  - Implicit risk handling (Scrum)

When mapping a framework's impact, you'd take each of these categories, mark where each sits on the grid *before* adoption, and then mark where it sits *after*. The difference is the framework's effect on the organization.

---

## Where Constraints Live: The Ownership Layer

There's a second dimension to this map that doesn't get drawn explicitly: **ownership**. As cost and time to change increase, constraints tend to move out of the team's control. At the high end, constraints are chosen by management or imposed by frameworks. At the low end, they're better left to teams to decide.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   HIGH COST/TIME TO CHANGE                                                  │
│   (Standards - bedrock, fixed, viscous)                                     │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  OWNERSHIP: Management / Enterprise / Framework                      │  │
│   │                                                                      │  │
│   │  • Team structures (ARTs, value stream boundaries)                  │  │
│   │  • Roles and responsibilities (Product Owner, Scrum Master, RTE)    │  │
│   │  • Cadences (sprint length, PI cadence)                             │  │
│   │  • Tools (Jira configuration, reporting structure)                  │  │
│   │  • Values (organization-wide)                                       │  │
│   │  • Cross-team coordination patterns                                 │  │
│   │                                                                      │  │
│   │  The team cannot change these without escalation.                   │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   LOW COST/TIME TO CHANGE                                                   │
│   (Volatile - liquid, gaseous, variable)                                    │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │  OWNERSHIP: Teams / Individuals                                     │  │
│   │                                                                      │  │
│   │  • How a stand-up is run                                           │  │
│   │  • What practices to try (pairing, mobbing, TDD)                   │  │
│   │  • Local tooling choices (within the team's scope)                 │  │
│   │  • Daily workflow patterns                                         │  │
│   │  • Team norms and interaction styles                               │  │
│   │                                                                      │  │
│   │  The team can change these directly.                               │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Some of this is appropriate.**

Cross-team coordination needs standards. Organizational strategy needs alignment. You can't have ten teams each doing PI Planning differently and expect them to synchronize. Coordination, strategy, and cross-cutting concerns are legitimate reasons to put constraints in the high-cost zone.

**The trap is putting everything there.**

Organizations adopting frameworks often push *everything* up. They standardize the stand-up format, the definition of done, the retrospective structure, the backlog format, the branching strategy, the testing approach, the release process. They treat the framework as a complete answer and remove the team's ability to make local decisions.

This looks like alignment. It feels like maturity. But it removes the team from having any control over how they work, which removes their ability to adapt, which removes the agility that the framework was supposed to provide.

**The test for where a constraint belongs:**

For any constraint a framework prescribes, ask: **does any team other than this one need to know or care about how this team does this thing?**

If no — it's a team-level decision. Keep it in the low-cost zone.
If yes — it's an enterprise-level decision. Standardize it.

The frameworks that violate this principle (by standardizing team-internal practices) push more constraints than necessary into the high-cost zone and remove more autonomy from teams than the coordination problem requires.

**The principle:**

- **Put constraints at the enterprise level when they require cross-team coordination, strategy alignment, or organizational coherence.** If ten teams need to release together, the release process is enterprise-level. If the org has one strategy, objectives are enterprise-level.
- **Leave constraints at the team level when they only affect how the team works internally.** If no other team needs to know, the team should decide.
- **The mistake is treating team-level decisions as if they were enterprise-level decisions.** Standardizing the stand-up format is treating a team-internal practice as if it required organizational coordination.

Ownership and cost-to-change are linked but not identical. A constraint can have high cost to change *because* it's at the enterprise level — not because of any inherent complexity. Once management has standardized something, changing it requires management action. The cost is institutional, not technical.

This is why framework adoption is so often a one-way ratchet. Once a standard is in place, moving it back down to team ownership requires the same kind of institutional effort that putting it there required. The grid shows the *state*. The ownership layer shows *who can change it*. Both are needed to understand what a framework has done to an organization.

**Trust runs through the ownership layer.**

Leaving a constraint at the team level is an act of trust in two directions. First, it requires trust among team members. They have to be able to work out their practices together, negotiate decisions, and resolve disagreements without escalation. A team that doesn't trust each other can't operate with volatile constraints. They'll either avoid the negotiation entirely (and let bad practices persist) or escalate every disagreement (which removes the time-saving benefit of local decision-making). High-trust teams can hold more fluid constraints because they're equipped to handle the friction those constraints produce.

Second, it requires trust between the organization and the team. The organization has to believe that the team will make reasonable decisions, take responsibility for outcomes, and not need to be policed. A manager who doesn't trust their team will standardize things, because standards are a way of controlling behavior without having to supervise it. The "we do Scrum" framework gives the manager something to point to when asking whether the team is doing the right thing. Standards are, in part, a substitute for trust.

The grid and the ownership layer are about what an organization is willing to trust the team with. An organization that puts most constraints in the high-cost zone is, implicitly, saying: *we don't trust our teams to make these decisions well*. An organization that leaves most constraints in the low-cost zone is saying: *we trust our teams, and we trust that trust will produce better outcomes than standardization would*.

This is one of the deeper reasons why framework adoption is so common. Frameworks are a way for an organization to extend trust selectively, trusting the team to do the work but not trusting them to decide how. The framework fills the gap between the work itself and the way of working, which is the part the organization is unwilling to leave to local judgment.

When the trust is real, when the organization genuinely believes in the team's capability and judgment, leaving constraints at the team level produces the kinds of outcomes agile was originally pointing toward: adaptability, ownership, and practices that fit the situation. When the trust is absent, when the standards exist as a control mechanism, not a coordination mechanism, the same setup produces something else: teams that are technically autonomous but practically constrained, and a layer of "we do Scrum" that papers over the lack of trust without addressing it.

---

## The Trade-offs: A Closer Look

It's easy to assume that high cost and time to change is always bad, that mutability is good and fixedness is bad. The reality is more nuanced.

Items with high cost and time to change have real value. They create clarity. Everyone knows what to expect, which reduces decision fatigue. They enable coordination at scale, because multiple teams can synchronize around shared patterns. They provide organizational cover. "We do Scrum" is easier to defend than "we've designed a practice we think works." And they offer stability under stress. When decisions are pre-made, teams don't have to negotiate them during a crisis.

The downside is that standards can calcify. A good standard from three years ago can become a bad standard, and once something is in the bedrock zone, it's expensive to move, even when the environment has shifted. "We do it because that's the standard" replaces judgment with compliance. Standards become identity, and shedding them feels like losing part of who you are.

Items with low cost and time to change offer a different set of trade-offs. They enable adaptability, so practices can shift as conditions change. They support local optimization, where each team finds what works for their context. They stay current and avoid the trap of a good practice becoming a bad one.

The downside is inconsistency. Every team does it differently, which creates decision fatigue, coordination friction, and onboarding challenges. Measurement is harder when nothing stays still long enough to observe. And without a shared pattern, there's no organizational cover for individual choices.

### The Pros and Cons of Standards vs. Volatility

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   HIGH COST/TIME TO CHANGE                                                  │
│   (Standards - bedrock, fixed, viscous)                                     │
│                                                                              │
│   ┌─────────────────────────────────┐    ┌─────────────────────────────────┐│
│   │          PROS                   │    │           CONS                   ││
│   │                                 │    │                                 ││
│   │ • Clarity: everyone knows what  │    │ • Inflexibility when the env-    ││
│   │   to expect                      │    │   ironment changes              ││
│   │ • Reduced decision fatigue       │    │ • "We do it because that's the  ││
│   │   (one less thing to negotiate) │    │   standard" replaces judgment    ││
│   │ • Cross-team coordination is    │    │ • Hard to shed: standards        ││
│   │   easier with shared patterns    │    │   become identity               ││
│   │ • Comparability: you can        │    │ • Sunk cost in training,         ││
│   │   measure and improve            │    │   tooling, culture              ││
│   │ • Organizational cover:          │    │ • Loses local adaptation:        ││
│   │   reduces burden of justification│    │   one-size-fits-all              ││
│   │ • Onboarding: faster for new    │    │ • Standards calcify: a good      ││
│   │   members                        │    │   standard from 3 years ago      ││
│   │ • Stability under stress:        │    │   becomes a bad standard         ││
│   │   decisions are pre-made         │    │ • Suppresses innovation: hard    ││
│   │                                 │    │   to try something new           ││
│   └─────────────────────────────────┘    └─────────────────────────────────┘│
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   LOW COST/TIME TO CHANGE                                                   │
│   (Volatile - liquid, gaseous, variable)                                    │
│                                                                              │
│   ┌─────────────────────────────────┐    ┌─────────────────────────────────┐│
│   │          PROS                   │    │           CONS                   ││
│   │                                 │    │                                 ││
│   │ • Adaptability: can change as   │    │ • Inconsistency: every team     ││
│   │   conditions shift              │    │   does it differently            ││
│   │ • Local optimization: each team │    │ • Decision fatigue: every        ││
│   │   finds what works for them     │    │   change requires deliberation   ││
│   │ • Innovation: easy to try new   │    │ • Hard to coordinate across      ││
│   │   approaches                    │    │   teams                          ││
│   │ • Stays current: practices      │    │ • Measurement is harder:         ││
│   │   evolve with the environment   │    │   nothing stays still long      ││
│   │ • Avoids calcification: a bad   │    │   enough to measure              ││
│   │   practice can be changed       │    │ • Lack of organizational cover:  ││
│   │                                 │    │   harder to justify choices      ││
│   │                                 │    │ • Inconsistency erodes trust:    ││
│   │                                 │    │   "why does their team do it     ││
│   │                                 │    │   differently than ours?"        ││
│   └─────────────────────────────────┘    └─────────────────────────────────┘│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

These aren't simply opposite trade-offs. They're different *kinds* of costs and benefits. The high-cost side gives you efficiency and coordination but at the price of adaptability. The low-cost side gives you adaptability and local fit but at the price of consistency and reduced friction.

The worst position to be in is **high cost and time to change for things that should be low** — standards that calcified around practices that no longer fit. That's the "we do it because that's the standard" trap. The best position is **being intentional about which side of the matrix each practice sits on**, knowing that sometimes you want bedrock (shared values, coordination cadences, cross-team interfaces) and sometimes you want liquid (team practices that should adapt to local context).

A standard isn't inherently good or bad. It becomes good when it's chosen deliberately and reviewed periodically. It becomes bad when it becomes invisible — when no one remembers why it exists or whether it still fits.

### Reading the Table Through Agile Values

The trade-offs in the table look different depending on which lens you read them through. In some domains (aviation, pharmaceutical manufacturing) you want a strong bias toward the high-cost side. Standards, predictability, and consistency are the whole point. The volatility side is a bug, not a feature.

In agile software development, the original values and principles bias the other way. The manifesto's "individuals and interactions over processes and tools" and "responding to change over following a plan" sit firmly on the low-cost side of the grid. The twelve principles reinforce this, favoring local decision-making and team autonomy over organizational prescription.

Read through this lens, the "PROS" column of the low-cost/time side reads as the original intent of agile. The "PROS" column of the high-cost side (clarity, coordination, organizational cover) reads as the trade-offs the manifesto was pushing back against. If most of the constraints a team faces sit in the high-cost quadrant, the manifesto is no longer guiding their work. They've traded the values they claimed to adopt for the certainty of standards.

**But this lens is not the only one.** A healthcare organization, a financial trading platform, a government agency, a manufacturing floor: these may rightly bias toward the high-cost side. Safety, regulation, and auditability are real requirements.

The point of the table is to be deliberate about which side each constraint sits on, given the domain and the values you're trying to honor.

---

## The Direction of Movement Matters Too

The grid describes where a constraint sits. There's another question the grid doesn't directly answer: how did it get there, and can it ever move?

**Even good standards carry risk if they can't change.**

A standard that delivers clarity, coordination, and organizational cover is genuinely useful. But a standard that can never be changed is a liability waiting to happen. The moment the environment shifts (new tooling, new customer expectations, new regulations, a change in team size or structure) that standard stops being a benefit and becomes an obstacle. If changing it requires the same institutional effort that putting it there required, the organization will live with a bad standard for a long time.

This is true even for genuinely good standards. The risk is that no one can tell when a standard has *become* bad, because the cost of questioning it is so high.

**The riskiest position is starting in bedrock.**

When a new practice or way of working is introduced as a standard — when it begins its life in the high-cost, long-time quadrant of the grid — it carries the most risk. There is no evidence that the practice works in this organization. There is no experience of what it looks like in different contexts. There is no feedback loop that would tell you, quickly, whether the practice is fit for purpose. The standard has all the weight of an institutional commitment and none of the evidence that the commitment is justified.

This is exactly the opposite of how good standards tend to emerge.

A better pattern: a new way of working starts small. One team tries it. It might start in the volatile, low-cost, low-time quadrant of the grid — changeable, observable, easy to abandon. If it works, other teams adopt it. The practice builds evidence. The organization learns what it looks like at scale, what the failure modes are, and what conditions it requires to succeed. Only then, with experience and feedback, does it make sense to promote the practice to a standard — to move it from the bottom of the grid to the top.

This organic promotion has several benefits:

- **The standard has evidence behind it.** It wasn't chosen because a consultant recommended it or because a framework prescribes it. It was chosen because it worked in practice.
- **The organization knows what the standard actually requires.** It has seen the practice in different contexts and has learned how to support it.
- **The standard can be downgraded if it stops working.** Because it started small and grew, the organization has experience in *not* treating it as a standard. The downgrade path is familiar.
- **The standard carries less risk of calcification.** It was once a team-level decision that proved its value. That history makes it easier to revisit when conditions change.

A standard introduced as a standard, by contrast, has none of these benefits. It has weight but no track record. It is hard to change because changing it was never expected. And when it stops working, the organization has no practice of treating it as revisable.

**The principle:**

- **Let new practices start in the volatile zone.** Give teams the freedom to try things, observe what works, and build evidence.
- **Promote to standards based on experience, not prescription.** A practice becomes a standard when the organization has seen it work and has learned what it requires.
- **Keep a downgrade path visible.** Any standard should be revisable. If the cost of questioning a standard is too high, the standard is too rigid to be safe.

The grid describes a state. The direction a constraint came from, and the direction it can still go, describes whether that state is sustainable. Constraints that moved up the grid through evidence are resilient. Constraints that were placed at the top from the start are fragile.

---

## What Constraints Do to People

There's another question the grid doesn't directly answer: what does living with a constraint do to the people who have to work under it?

When a team's environment is full of standards (fixed practices, prescribed roles, rigid cadences, mandated tooling) their orientation shifts. They start to focus on the standards they are expected to follow. "Are we doing the stand-up correctly?" "Is the sprint commitment met?" "Is the burndown on track?" "Are we filling in the right fields on the board?" The standards become the work. The team is oriented toward compliance with the framework, and the framework becomes the primary thing they pay attention to.

When a team's environment is more fluid, when practices are changeable, when decisions are made locally, when the way of working is something the team negotiates, something different happens. The team has to pay attention to each other and to the environment. They have to ask: *what does this situation actually require?* *How is the team feeling this week?* *What changed since last sprint?* *Is the way we're working still serving us, or do we need to adjust?* The team's orientation shifts from following standards to sensing situations.

The two orientations are different in kind, not just degree.

The standards-focused team is predictable. They've reduced ambiguity. They know what's expected, and they deliver against that expectation. Their output is consistent. Their coordination with other teams is straightforward. They pay a cost for this: they've outsourced the question of *how should we work* to whoever set the standards, and that question is no longer alive for them.

The sensing-focused team is adaptive. They pay attention to context, to each other, to the changing demands of their work. They adjust their practices to fit the situation. Their output varies based on what the situation requires. They pay a cost for this: they have to do more thinking, more negotiation, more attention. They can't fall back on "the standard says so" when something is hard.

Neither orientation is universally better. The grid influences which one a team develops.

**These orientations reflect the trust the organization extends to the team, not just the constraints themselves.**

The standards-focused orientation tends to emerge in low-trust environments. When an organization doesn't trust its teams to make good decisions, it standardizes those decisions and creates a framework the team can follow. The team, in turn, learns to pay attention to the framework rather than to the situation. Their attention follows the trust: the organization trusts them to follow standards, so they focus on standards.

The sensing-focused orientation tends to emerge in high-trust environments. When an organization trusts its teams to make good decisions, it leaves the decisions to the team. The team, in turn, develops the muscle of paying attention to context, to each other, to what the situation actually requires. Their attention follows the trust too: the organization trusts them to sense, so they develop sensing.

Trust and orientation are mutually reinforcing. A team in a high-trust environment that *also* has volatile constraints will develop sensing capability, which validates the trust, which allows more volatile constraints. A team in a low-trust environment that has high standards will develop compliance orientation, which confirms that standards are needed, which justifies more standardization. The two configurations become self-perpetuating.

A team whose constraints sit mostly in the high-cost, long-time quadrant is being shaped toward the standards-focused orientation. The standards are doing the thinking for them. The team's attention goes to compliance rather than to the situation.

A team whose constraints sit mostly in the low-cost, short-time quadrant is being shaped toward the sensing-focused orientation. There are fewer standards to follow, which means the team has to pay attention to what the situation actually requires. They develop the muscle of reading context, adjusting practice, and coordinating with each other based on what's happening now.

This is part of what the agile values were trying to surface. The original signatories were pushing back against an environment where standards and processes had become the primary thing teams paid attention to. They wanted teams to be sensitive to their context, their customers, and each other. They saw the standards-focused orientation as a failure mode — one that produced predictability but not agility.

The standards-focused orientation has its place. In regulated industries, in safety-critical systems, in large organizations where coordination is the dominant challenge, paying attention to standards is exactly the right thing to do. But in environments where the situation changes faster than the standards can keep up, the sensing-focused orientation is the one that keeps the team effective.

**The principle:**

- **Constraints shape attention.** A team living under many fixed constraints learns to pay attention to those constraints. A team living with more fluid constraints learns to pay attention to context.
- **Be deliberate about which orientation you're building.** If you want sensing, you need to leave room for the team to sense. If you want compliance, you need to set the standards clearly and make the standards the work.
- **Watch for the drift.** It's easy for an organization to start with a sensing-oriented team and slowly standardize them into a compliance-oriented one. The team looks more "aligned." They've also stopped paying attention to anything but the standards.

The grid describes where constraints sit. The ownership layer describes who controls them. The direction of movement describes whether they can change. The orientation they produce describes what kind of attention the team develops under them. And the trust the organization extends shapes which configuration is even possible. All of these matter when deciding what a framework should and shouldn't standardize.

---

## Summary

Mapping agile constraints onto a grid of cost to change and time to change gives us a way to see the real impact of an agile framework. Not as a list of practices to adopt, but as a transformation of the landscape an organization operates in.

A framework moves constraints. It changes their cost and time to change. It shifts the balance between global standardization and local adaptability. This shift has consequences, sometimes good, sometimes bad, often invisible until the organization needs to change something it can no longer change easily.

The grid shows the *state* of a constraint. State alone doesn't tell the full story. Five dimensions together describe what a framework has done to an organization:

**Where a constraint sits.** The grid. Cost to change on one axis, time to change on the other. Standards and volatile practices occupy different quadrants, and the framework determines which side most of them land on.

**Who controls it.** Constraints in the high-cost zone are owned by management, the framework, or cross-team coordination. Constraints in the low-cost zone are owned by the team. The trap is treating team-internal decisions as if they were enterprise-level decisions, and removing the team's ability to make local calls.

**How it got there, and whether it can move.** Standards introduced as standards carry the most risk. Institutional weight without evidence, no downgrade path, no experience of treating them as revisable. Standards that emerged from team-level practice and were promoted based on experience are more resilient. A constraint's history is part of its fragility.

**What it does to the people living under it.** Standards-oriented teams focus on compliance. Sensing-oriented teams focus on context. The grid shapes which orientation a team develops. An organization that wants sensing needs to leave room for sensing. An organization that standardizes everything produces teams that pay attention to the standards.

**And what trust the organization extends.** High-trust environments can support volatile constraints, because the team has the trust among itself to negotiate decisions and the trust from the organization to take responsibility. Low-trust environments produce standards, because standards are a way of controlling behavior without supervision. Trust and orientation reinforce each other. The configuration an organization has today is the configuration the trust is shaping, and the configuration the trust will continue to shape, unless someone intervenes.

Six things worth taking away:

**First, frameworks are not neutral.** They change what is hard to change. You should know what trade you're making.

**Second, standards have value.** Stability, clarity, coordination, and organizational cover are real benefits. The question is which things should be standardized and which should stay mutable.

**Third, the worst outcome is a standard that calcified.** A good practice from the past that became a bad practice in the present, and that no one can change because it's now "the way we do things." The antidote is to periodically examine the standards, to ask whether each one still fits its purpose, or whether it's become bedrock when it should be liquid.

**Fourth, the riskiest standards are those introduced as standards.** New practices should start small, build evidence, and be promoted to standards only when the organization has seen them work. Standards placed at the top of the grid from the start have weight but no track record.

**Fifth, constraints shape attention.** A team living under many fixed constraints learns to pay attention to those constraints. A team living with more fluid constraints learns to pay attention to context. Be deliberate about which orientation you're building. Watch for the drift from sensing to compliance.

**Sixth, standards are a substitute for trust.** High-trust environments can support volatile constraints. Low-trust environments produce standards, because standards are a way of controlling behavior without supervision. Trust and orientation reinforce each other. The drift from sensing to compliance often follows the trust, not the other way around.

The grid doesn't tell you what to do. It tells you what your framework has done. The rest is judgment.
