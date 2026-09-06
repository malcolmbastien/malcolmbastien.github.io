---
title: Seems Agile, Isn't Actually Agile
tags:
  - Agile
  - Maturity
publishedDate: 2026-07-30
summary: Seems Agile, Isn't Agile
draft: true
---

A lot of energy in the Agile industry goes into training and promotion around practices that look agile but do little to improve how work gets done.

The inverse is also true. Some practices that improve collaboration and shorten lead times don't look agile at all.

I mapped forty-one common agile practices, roles, artifacts, and failure modes on a 2×2 grid:

- **Seems Agile / Doesn't Seem Agile** — how the practice is perceived by outsiders, leaders, and agile practitioners.
- **Is Actually Agile / Isn't Actually Agile** — whether it removes friction from the flow of work and supports agile principles.

---

|| **Doesn't Seem Agile** | **Seems Agile** |
|---|---|---|
| **Is Actually Agile** | • Pair Programming<br>• TDD<br>• Continuous Integration<br>• Continuous Deployment<br>• Refactoring<br>• Trunk-Based Development<br>• Code Review | • Event Storming<br>• User Story Map<br>• Customer Demo<br>• Three Amigos<br>• Definition of Done<br>• Kanban Board<br>• Product Ownership<br>• WIP Limits<br>• Make Work Visible<br>• Cumulative Flow Diagram<br>• Value Stream Mapping<br>• Lead Time Tracking<br>• Throughput Tracking<br>• Explicit Policies<br>• Kaizen<br>• Team Charter<br>• Communities of Practice |
| **Isn't Actually Agile** | • Annual Budgeting<br>• Project-Based Funding<br>• Functional Team Structures<br>• Centralized Prioritization<br>• Utilization Targets<br>• Dependency Tracking<br>• Annual Performance Reviews | • Fixed Sprint Commitments<br>• Sprint Planning as Capacity Allocation<br>• Daily Standup as Status Reporting<br>• Burndown Chart as a Management Dashboard<br>• Sprint Goal as a Delivery Contract<br>• Product Backlog as a Ticket Archive<br>• Story Points as Productivity Metrics<br>• Scrum Task Board as a Status Board<br>• Definition of Ready as an Entry Gate<br>• User Stories as Ticket Templates |

The pattern is hard to miss. **The top-left is empty of ceremony. The bottom-right is full of it.** The bottom-left contains the organizational defaults that agile was supposed to replace.

## What Sells vs. What Works

Draw a line from the top-left corner to the bottom-right. That line is the story of agile adoption.

Above the line are practices that deliver real agility without looking like much. Pair programming has no executive-friendly certification track. WIP limits look like a constraint on productivity. TDD looks like writing twice the code.

Below the line are recognizable Agile practices turned into control mechanisms: fixed sprint commitments, sprint planning as capacity allocation, daily standups as status reporting, burndown charts as management dashboards, and story points as productivity metrics. These are easy to explain, sell, standardize, and audit. They are also easy to hollow out.

The underlying practices are not inherently useless. A good standup helps a team coordinate. A good sprint creates a useful cadence. The problem starts when context-dependent practices become universal mandates. “Run standups” becomes “run standups like this.” “Use sprints” becomes “use two-week sprints with these ceremonies.” The practice gets separated from its purpose.

One team’s standup is a ten-minute flow check. Another’s is a thirty-minute status report for management. Both call it agile. Only one is helping the team.

## What Organizations Buy

Organizations buy the visible surface of agile: named meetings, backlog stories, and Jira boards. These are easy to explain and audit.

Agile ceremonies sit on top of the old system, and the organization wonders why nothing changed.

## Practices Should Remove Friction

Agile practices are valuable when they remove friction from the work: waiting, rework, handoffs, ambiguity, and context switching.

Continuous integration reduces merge friction. Test-driven development reduces rework. WIP limits reduce context switching. Pair programming and communities of practice reduce the friction created by silos and handoffs.

The same practices can become friction-generators when their purpose is forgotten. Fixed sprint commitments can create deadline pressure and carryover. Standups can become daily status reports. Story points can become productivity scores. The practice promised to remove friction and ended up reproducing it.

That gives us a practical test: **does this reduce friction for the people doing the work, or does it only produce the appearance of control?**

Pay attention to who benefits. A dashboard or predictable sprint commitment may reduce friction for leadership while adding it for the team. Pairing and WIP limits may be nearly invisible to leadership while making the work easier for the people doing it.

## Most Transformations Move Sideways

The common transformation path is horizontal. Organizations leave the bottom-left and land in the bottom-right. What people do changes. How they think about the work does not.

Teams perform different ceremonies on top of the same underlying system. The organization changes its vocabulary without changing how decisions get made or how work flows.

Moving up requires capability, not just adoption. People change their thinking by changing their behavior. The behavior you install shapes the culture that develops around it.

Sprint planning can be a short team planning session that builds alignment and shared ownership. It can also be a capacity-utilization exercise designed to keep everyone busy. Same ceremony. Different behavior. Different culture.

That is why standardized practices are risky. A team can learn to perform the ceremony while strengthening the habits the ceremony was meant to replace.

## What the Top-Left Practices Share

The top-left practices share two characteristics.

First, the doing is the practice. TDD is TDD. Pair programming is pairing. A WIP limit is a constraint on the board. There is less distance between the intention and the action, so there is less ceremony to hollow out.

Second, they optimize for effectiveness rather than utilization. The question is not whether everyone is busy or whether the velocity number is high. It is whether useful work reaches customers with less waiting, rework, and stress.

Effectiveness is harder to sell because it is felt rather than displayed. Shorter cycle times, fewer production incidents, and calmer delivery do not look as productive as a full calendar or a busy board. They are more productive.

These practices also demand real collaboration. Pairing requires two people to think out loud together. Communities of practice require people to teach one another. Good collaboration is uncomfortable because it exposes communication problems and power dynamics. Teams that have never done that work often replace it with ceremony.

## Reading the Grid

Use three questions to evaluate any practice your team uses:

1. **Does it reduce friction or create it?** The name of the practice tells you very little. Its effect tells you everything.
2. **Who is the friction removed for?** A practice that helps leadership may make the work harder for the team. Watch who it serves.
3. **Are we moving up or moving across?** If people are doing new ceremonies but thinking about work in the same old way, the transformation has changed behavior without improving the system.

If the grid resonates, start small. Pick one top-left practice and make it real this week. Pair on your hardest bug. Set a WIP limit on your busiest column. Walk the board instead of walking the people. Ship something without waiting for a sprint boundary. Measure lead time instead of story points.

You do not need another transformation program. You need one practice and the willingness to ask whether it makes the work easier—or merely makes it look managed.
