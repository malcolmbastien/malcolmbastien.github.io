---
title: Seems Agile, Isn't Actually Agile
tags:
  - Agile
  - Maturity
publishedDate: 2026-07-30
summary: Seems Agile, Isn't Agile
draft: true
---

# The Agile Alignment Chart

**Seems agile vs. is actually agile, where does your practice land?**

---

The practices that *look* the most agile are often the least effective. The practices that actually move the needle don't look agile at all. The grid shows you where each one lands, but the real test is simpler: does the practice remove friction from the work, or just look the part?

I mapped thirty-seven common agile practices on a 2×2 grid:

- **Seems Agile / Doesn't Seem Agile** — how does it look to outsiders, leadership, and certification bodies?
- **Is Actually Agile / Isn't Actually Agile** — does the practice remove friction from how work flows, or just look agile?

The result is what I'm calling the Agile Alignment Chart. And the diagonal it reveals is uncomfortable.

---

## The Grid

| | **Doesn't Seem Agile** | **Seems Agile** |
|---|---|---|
| **Is Actually Agile** | • Pair Programming<br>• TDD<br>• Continuous Integration<br>• Continuous Deployment<br>• Refactoring<br>• Trunk-Based Development<br>• Code Review<br>• WIP Limits<br>• Make Work Visible<br>• Cumulative Flow Diagram<br>• Value Stream Mapping<br>• Lead Time Tracking<br>• Throughput Tracking<br>• Explicit Policies<br>• Kaizen<br>• Team Charter<br>• Communities of Practice | • Event Storming<br>• User Story Map<br>• Customer Demo<br>• User Stories<br>• Three Amigos<br>• Definition of Done<br>• Kanban Board<br>• Product Owner |
| **Isn't Actually Agile** | • Big Upfront Design<br>• Roadmap Lock-In<br>• Approval Gates<br>• Handoff-Heavy Workflows<br>• Hero Culture<br>• Capacity Planning by %<br>• Individual Performance Reviews | • Sprints<br>• Sprint Planning<br>• Daily Standup<br>• Burndown Chart<br>• Sprint Goal<br>• Product Backlog<br>• Story Points<br>• Scrum Task Board<br>• Definition of Ready |

The pattern is hard to miss. **The top-left is empty of ceremony. The bottom-right is full of it.** The bottom-left isn't empty either. It's where the organizational defaults live. Nobody sold these as agile. They're just how companies naturally operate. They're the gravity the bottom-right was supposed to replace.

---

## What the Grid Reveals

### What Sells vs. What Works

Draw a line from the top-left corner to the bottom-right. That line is the story of agile adoption.

**Above the line**, practices that deliver real agility but don't look like much. Pair programming doesn't have a certification track. Nobody sells TDD workshops to executives. WIP limits are a column constraint on a board.

**Below the line**, practices that look extremely agile but deliver less than expected. Sprints, sprint planning, daily standups, burndown charts, story points. These are the things the agile industry promotes, sells, certifies, and ritualizes. They're also the practices most likely to become hollow ceremonies.

None of this means the bottom-right practices are inherently broken. A standup done well is genuinely useful. A sprint done well creates healthy cadence. The problem isn't the practices. It's what happens when they get standardized, packaged, and sold at scale. The agile industrial complex turns context-dependent practices into universal mandates. "Run standups" becomes "run standups like this." "Use sprints" becomes "use two-week sprints with these ceremonies." The practice gets separated from its purpose, and teams end up using the same words to mean dramatically different things. One team's "standup" is a 10-minute flow check. Another's is a 30-minute status report for management. Both call it agile. Only one is.

The uncomfortable conclusion: **most of what the agile industry sells lives in the bottom-right corner. Most of what works lives in the top-left.**

### What Organizations Buy

That single cell contains almost everything an organization buys when it "goes agile." It's the entire visible surface of agile adoption, and the quadrant that delivers the least. Enterprises are fast to adopt what's clear and visible: meetings with names, user stories in a backlog, Jira boards with columns. These are simple to explain and implement, and easy to audit. You can check whether a team runs sprints. You can count standups. You can audit a backlog.

The practices that deliver agility aren't so obvious. Nobody walks into a steering committee and says "we're going to start pairing on code" or "we're limiting work in progress to four items per column." There's no slide for that. No dashboard. No certification. Pair programming looks like two people doing one person's job. WIP limits look like a constraint on productivity. TDD looks like writing twice the code. The practices that work are the ones hardest to see and sell, hardest to audit.

### Practices Should Remove Friction

Many agile practices are valuable because they remove friction from the work: less waiting, less rework, less ambiguity.

The top-left removes friction by changing how work flows: continuous integration eliminates merge friction, test-driven development eliminates rework friction, work-in-progress limits eliminate context-switching friction. Much of it is collaboration. Pair programming and communities of practice remove the friction of handoffs and silos. Collaboration is friction removal.

The bottom-right is where friction-reducers become friction-generators. Sprints were meant to remove planning friction; done wrong, they add deadline pressure and carryover. Standups were meant to remove coordination friction; done wrong, they add a daily status report. The practice promised to remove friction and ended up reproducing it.

That makes friction the test of whether a practice is making a positive difference: does this reduce friction for the people doing the work, or just produce the appearance of it?

### Most Transformations Move Sideways

**The common path is a horizontal move, not a vertical one.** Organizations leave the bottom-left and land in the bottom-right. What people *do* changes. How people *think* doesn't. The disruption is real. The improvement isn't. Teams aren't shipping faster. Customers aren't getting better products. They're just doing different ceremonies on top of the same underlying system.

Moving up requires a different orientation entirely. It's not about adopting new practices. It's about developing new capabilities. These can't be mandated by a framework or verified by a certification.

This connects to something the Shook model of organizational change makes clear: **you change thinking by changing behavior, not the other way around.** People don't adopt new values and then change how they work. They change how they work, and the values follow. This is why the bottom-right practices are so consequential, and so dangerous when done wrong. The behavior you install shapes the thinking that develops.

Sprint planning, done well, is a short-term team planning session: alignment, shared ownership, "we chose this together." Sprint planning, done poorly, is a capacity-utilization exercise, making sure every team member has work and is at full capacity. Same ceremony. Same name. Completely different culture.

This is the real risk of the horizontal move. The behavior you install shapes the thinking that develops. Once that thinking takes hold, it becomes reinforced by daily practice. The thing that now needs to change is the thing the ceremony keeps producing.

---

## What the Top-Left Practices Share

### The Doing Is the Practice

The top-left practices have something in common that's worth naming: the doing IS the practice. TDD is TDD. Pair programming is pair programming. WIP limits are a number on a board. There's no gap between intent and execution, no ceremony to hollow out. You can't half-do them. You can't cargo-cult them. They resist corruption by design.

### Efficiency vs. Effectiveness

They also share a different orientation toward work. The bottom-right practices, when they go wrong, optimize for efficiency. Are people busy? Are we at full capacity? Is everyone utilized? The top-left practices optimize for effectiveness. Are we building the right thing? Is work flowing to customers? Are we catching defects before they ship? Efficiency asks "are we doing a lot?" Effectiveness asks "are we doing the right things well?" And effectiveness, in practice, is just friction removal. Work that flows to customers without waiting, rework, or handoffs.

This is why the top-left is harder to sell. Efficiency is visible. You can see a full calendar, a busy board, a high velocity number. Effectiveness is felt. Shorter cycle times, fewer production incidents, teams that ship without stress. One looks productive. The other is productive.

### Collaboration Is the Hard Part

Many of the practices in the top-left demand real collaboration, and that is the part nobody warns you about. Pair programming asks two people to think out loud together. Communities of practice ask people to show up and actually teach each other. Most teams were never trained for this. Good collaboration is hard. It is uncomfortable. It drags into the light the things teams usually keep buried.

This is also why so many collaboration-heavy practices collapse into ceremony. A standup that has become a status report is a standup where nobody had to collaborate. Real collaboration is where communication skills get tested and where a team's power dynamics show themselves. Who talks. Who gets interrupted. Whose opinion carries the room. Teams that have never done this work will quietly swap the hard practice for the easy ritual. The ritual looks identical from the outside.

---

## When Agile Becomes Ceremony

The bottom-right corner is where agile practices go to become their own opposites. These practices were designed to create agility. In practice, they often create the thing agile was supposed to replace.

### Sprints

**Intended:** A fixed-length iteration (1-4 weeks) creating a regular heartbeat for planning, delivery, and feedback.

**Reality:** The single most recognizable "agile" practice. Sprints become commitment traps. The team is pressured to commit to more than they should, and the sprint boundary becomes a mini-deadline that creates stress and shortcuts. Work that finishes on day 3 of a 2-week sprint sits waiting for the "sprint boundary" to be released. Work that's 90% done on the last day gets rushed or carries over.

**What to do instead:** If you must sprint, treat the sprint as a checkpoint, not a container. Ship when ready, not when the sprint ends. Use the sprint review for feedback, not for demonstrating completion. Better yet, drop the sprint entirely and use continuous flow with regular cadences for planning and review.

### Daily Standup

**Intended:** A 15-minute daily synchronization for rapid coordination and impediment surfacing.

**Reality:** In practice, almost always a status report for management wearing a team coordination costume. "What I did yesterday, what I'll do today" turns into a verbal timesheet. The blockers never get surfaced because admitting a blocker feels like admitting failure.

**What to do instead:** Walk the board, not the people. Start from the rightmost column and ask "what's blocking this item from moving?" Focus on flow, not individual productivity. If the manager is in the room and people change their behavior, the manager should leave.

### Story Points

**Intended:** A relative estimation technique where teams assign abstract point values based on effort, complexity, and uncertainty, facilitating team conversation about work size.

**Reality:** The output is a number that predicts nothing. Story points create false precision, get weaponized as velocity metrics, and the "points aren't hours" distinction collapses within a quarter. Teams game the system by inflating estimates, and management uses velocity as a productivity score.

**What to do instead:** Replace with throughput counting. "We finished 12 items last month" is more honest than "we completed 47 story points." The conversation about size is valuable; the number is not.

### Product Backlog

**Intended:** A living, ordered list of everything the product needs, the single source of truth for what the team works on next.

**Reality:** Usually a dumping ground that nobody maintains, full of stale tickets from three years ago. "It's in the backlog" becomes "we'll do it eventually" which means "we'll never do it."

**What to do instead:** Ruthlessly prune. If a backlog item hasn't been touched in 6 months, delete it. If it's important, it'll come back.

**The remaining practices follow the same pattern.** Sprint planning becomes a negotiation where the team is pressured to commit to more than they can handle. Burndown charts become tools for management to ask "why is this line wrong?" Sprint goals become retroactive labels slapped on whatever the team was going to do anyway. Scrum task boards become three-column status trackers that don't capture the actual workflow. Each one was designed to create agility. Each one, done poorly, creates the thing agile was supposed to replace.

---

## Reading the Grid

Friction is anything that slows work down or makes it harder than it needs to be: handoffs, waiting, rework, ambiguity, status reporting that goes nowhere. Every practice here makes a friction-reduction claim. The grid shows which claims hold.

Three questions to ask about any practice your team uses:

1. **Does this reduce friction, or create it?** A standup that surfaces blockers reduces friction. A standup that's a status report for management adds it. The visible practice doesn't tell you which. Only the effect does.
2. **Who is the friction removed for?** Practices that reduce friction for leadership (a dashboard, a predictable sprint commitment) often add it for the people doing the work. Practices that reduce friction for the team (pairing, WIP limits) are invisible to leadership. Watch who the practice serves.
3. **Are we moving up or moving across?** If your transformation changed what people do but not how they think about their work, you've moved across. The disruption was real. The friction wasn't removed. It was renamed.

The bottom-left corner of the grid isn't empty. It's full of organizational defaults. Big upfront design, approval gates, hero culture. Nobody sold these as agile. They're just how companies naturally operate. The damage happens when the bottom-right gets layered on top of the bottom-left. Agile ceremonies sit on top of waterfall behaviors, and the organization wonders why nothing changed.

---

## Where to Start

If this grid resonates, here's one thing to try this week: pick one top-left practice and make it real.

Pair program on your hardest bug. Set a WIP limit on your busiest column. Walk the board instead of walking the people in your next standup. Ship something small without waiting for the sprint boundary. Start measuring lead time instead of counting story points.

You don't need a transformation program. You need one team, one practice, and the willingness to ask the only question that matters: is this making the work easier, or just making it look managed?
