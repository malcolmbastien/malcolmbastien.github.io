---
stage: evergreen
title: Better Planning with Two-Sided Dependencies
summary: Learn how to improve planning and reduce delays by managing dependencies effectively.
publishedDate: 2025-10-14
featured: true
cover: "../../assets/2025/10/image-9.png"
tags:
  - Agile
  - Dependencies
  - Planning
  - Tools
---
Every year, teams invest massive effort in annual plans that typically fail for one key reason: dependencies. Detailed timelines, careful estimates, and beautiful roadmaps all unravel once work begins and unforeseen issues with dependencies arise.

Plans are always imperfect, and estimates are always off, but in large organizations, where delivery requires multiple teams and services, the most significant delays are caused by unmanaged dependencies. Whether you're planning a year-long roadmap or a single feature, improving lead times hinges on managing these inter-team handoffs.

## The Real Problem with Dependencies

Many managers and Scrum Masters are overly inwardly focused, obsessing over their team's ceremonies, estimates, and sprints. For a decent team, however, the work usually gets done. The real challenge—and the biggest opportunity for improving flow—lies in optimizing handoffs and interactions between teams.

There are two main problems with how teams handle dependencies when planning any piece of work:

1. Failing to think through all the dependencies required to deliver a piece of work.
2. Not considering how things look from the dependent teams' perspective.

Knowing you need another team to do something is useless if they don't also know it—and haven't planned for it. When dependencies aren't adequately accounted for and managed, what you end up with is a set of unvalidated assumptions masquerading as a plan.

When handoffs and dependencies are not healthy (mature, reliable, or predictable), better planning and prettier timelines won't help. Dealing with unhealthy dependencies sometimes means the simplest and most helpful thing to do is just add 3–6 months to your target delivery dates.

## Focus on What's Important

When dealing with organizational change, the most important thing is to focus on the right things. Focus on what really makes the difference.

Teams often get told to solve planning problems by doing more planning: having bigger meetings, making more detailed estimates, and creating more granular project plans. These activities might make people feel better about their plans, but they don't do much to change the outcome. They only increase the cost and time it takes to be wrong.

Things can become more effective by making them easier for people. By focusing on the high-value interactions related to dependencies that are usually skipped, we can uncover the gaps that are often missed until it's too late.

## Seeing Both Sides of Dependencies

**Two-sided dependency planning** is when dependencies in plans are understood and captured by both the requesting and receiving teams.

Most planning sessions focus on a single, one-sided view: what one team wants to accomplish. Teams fill their backlogs, define roadmaps, and worry only about their own capacity. But teams don't work in a vacuum. Effective planning requires looking at the work from all sides.

The appeal of big room planning is its simplicity: if Team A needs something from Team B, they go and put a card in Team B's lane. Dependencies are identified and resolved collaboratively. This simple step prevents significant waste down the line.

To capture the same benefit for teams not doing big room planning, asking a few new questions can help. For each team, ask four simple questions:

1. What do you want to deliver?
2. What dependencies do you have on other teams (outgoing)?
3. What do other teams need from you (incoming)?
4. Does your planned scope, plus these incoming dependencies, match your available capacity?

These questions shift the focus from an isolated team backlog to a connected delivery system, forcing conversations that reveal the real picture of the system as a whole.

## Make Dependencies Visible

Making dependencies visible is the idea behind a [proof-of-concept tool](https://team-dependency-matrix-838267439197.us-west1.run.app/) I've been exploring based on big room planning and the [[the-team-dependency-matrix|Team Dependency Matrix]]. It focuses planning around capturing and validating dependencies.

![](../../assets/2025/10/image-9.png)
*Dashboard for [Agile Big Room Planning](https://team-dependency-matrix-838267439197.us-west1.run.app/) app, showcasing risk metrics, team loads, and dependencies to enhance planning and delivery.*

The tool captures each team's planned scope and the dependencies they have on other teams. When Team A lists a dependency on Team B, Team B sees the new incoming work, provides an estimate, and the new work is incorporated into their capacity planning

When planning makes dependencies between teams clear, new interactions become possible, creating new, helpful information. In this proof of concept, I use team scope, capacity and dependency data to create a dashboard that summarizes the system's health.

- **Team Load vs. Capacity:** Instantly compare a team's capacity against their planned work plus all incoming dependency requests. Seeing which teams are overloaded helps in identifying hotspots and bottlenecks before they derail the plan.
- **Risk Matrix:** A visual risk matrix plots work by effort and confidence, flagging the riskiest parts of the plan and enabling proactive conversations.
- **Plan Completeness:** Identify gaps in the plan by measuring features and dependencies without estimates, and whether low-confidence items have documented risks.
- **Dependency Hotspots:** Ranked lists show teams with the most outgoing and incoming dependencies. Teams with high outgoing dependencies face delivery risk; teams with high incoming dependencies face capacity overload.

This approach captures simple but typically missed data that can make quarterly or annual planning events easier and more useful for teams.

![](../../assets/2025/10/image-10.png)
*Team management and project scope editing features.*

![](../../assets/2025/10/image-11.png)
*Estimating view for team initiatives and requests.*

![](../../assets/2025/10/image-12.png)
*Report view showing planned scope and dependencies across teams, highlighting workload and incoming demand.*

## Conclusion

Too often, focus is misplaced on planning theater: crafting detailed artifacts, producing polished roadmaps, and holding lengthy meetings to discuss priorities. These activities provide an *illusion* of certainty while missing the real sources of delay.

If the goal is to improve delivery and reduce lead times, the first step is to understand the nature of dependencies in your system. Instead of planning isolated backlogs, focus on getting the dependencies right.

Focus on identifying handoffs and making dependencies visible to all teams involved. Start giving teams the tools and opportunities to engage in new interactions that help them manage their dependencies.

Link: [Agile Big Room Planning app](https://team-dependency-matrix-838267439197.us-west1.run.app/)
