---
title: Building Continuous Delivery Systems
stage: seed        # seed | sprout | evergreen
tags:
  - Agile
publishedDate: 2026-12-30
summary: Agile Delivery Leads should avoid the trap of acting as project managers and focus on building a healthy, sustainable delivery system.
draft: true
---

Many companies are replacing their Scrum Masters with Agile Delivery Leads. These new roles combine coaching and servant leadership with domain expertise and delivery accountability.

However, the word "delivery" can be interpreted in two very different ways. How a company defines delivery determines the impact its new Agile Delivery Leads will have on the teams they lead.

The two main choices are between an "_Agile_ Delivery Lead" and a "_Project Manager_ Delivery Lead." In the former, delivery is about building a healthy, sustainable delivery system. In the latter, delivery is focused on meeting short-term project commitments.

While successful teams need both, the current boom in "Agile Delivery Lead" job openings risks becoming just a rebrand of the same Agile "certified" Scrum Masters as before, leading companies to hire people who lean heavily toward traditional project management and command-and-control leadership. When leads are hired who are agile in name only, they are more likely to lead teams down a path of:

- Command-and-control leadership
- Increased micromanagement
- Optimizing for short-term deliverables
- Creating conflict with existing Project Manager resources
- Stripping team members of delivery accountability

## Two Types of "Delivery"

Let's start by distinguishing two different philosophies of "delivery":

- **Delivery as a target:** Making sure the team can deliver and meet a short-term, fixed-date, fixed-scope target.
- **Delivery as a capability:** Continuously growing and improving a team's capability to deliver by managing, protecting, and optimizing the team's environment.

| |Delivery Towards a Target|Delivery as a Capability|
|---|---|---|
|**System Evolution**|Technical debt and short-term changes accumulate to hit immediate milestones|Automated tooling, refactoring, and feedback loops are reinforced for continuous improvement|
|**Ecosystem Treatment**|Treated as a fixed constraint; structural changes are avoided to minimize risk to the schedule|Treated as an enabler; actively evolved and reshaped to remove bottlenecks and waste|
|**How System Changes Happen**|Forced and top-down, driven by late-stage pressure to rescue a compromised plan|Safe and cooperative; open to continuous, team-driven experimentation and empirical feedback|
|**Efficiency**|**Resource Efficiency:** Focuses on keeping individuals 100% busy (high utilization), pushing work into queues regardless of flow bottlenecks|**Flow Efficiency:** Focuses on how fast work moves through the system; prioritizes low work-in-progress (WIP) and short lead times|
|**Predictability**|Hitting a target date committed to months in advance, often requiring late-stage heroics or quality compromises|Improving consistency, improving throughput, shortening lead-time tails, and utilizing data-driven forecasting|
|**Response to Underperformance**|Working longer hours ("crunch" time) or adding more people to the team|Redirecting effort to resolve system constraints, using Andon Cord/swarming, and protecting long-term delivery capability|
|**Feedback Loops**|Quality, integration, and user feedback is left to the very end of the cycle|Automated testing, trunk-based integration, and frequent small releases flag issues early|

## Delivering Towards a Date

When a planned project target date becomes the only goal, it acts as a forcing function, driving all other behaviours and decisions within a system. In this environment, Agile Delivery Leads focus on balancing the tension between where they are and where they expect to be.

Under pressure to meet delivery commitments, teams are forced to make trade-offs: deferring automated testing, ignoring system bottlenecks, and working long hours late into projects to ensure dates aren't missed. When the main goal is meeting deadline targets, problems discovered late in the process, having to do with quality, usability, and value, are deferred.

To hit the date, teams are pushed to add extra people, work longer, or make compromises in scope and quality to ensure they "make the date". Unfortunately, there's always another target to hit. Over time, these compromises and short-term interventions cause the system to drift toward a state where team members lose engagement, getting results requires more management, more people, and more technical debt.

## Delivery That Strengthens the System

In the second interpretation, delivery is the activity of achieving continuous positive outcomes by building a healthy system. The goal shifts from the next delivery target to the next level of team and delivery maturity. This version of delivery leadership is built on stewardship—prioritizing long-term capabilities over short-term milestones through continued improvement and growth.

In this model, effort is focused on addressing sources of waste and constraints that limit the system. Bottlenecks in the architecture, deployment pipelines, or missing feedback loops are exposed and resolved. Continuous delivery optimizes the entire system, prioritizing sustainable flow and improving customer value.

## Delivery Stewardship

Meeting committed dates does matter—team commitments, customer expectations, regulatory deadlines, and market windows are real constraints for all teams. But an emphasis on hiring the wrong kind of delivery manager or structuring the role incorrectly is the difference between seeing these challenges as a set of discrete, successive projects and seeing them as the fitness criteria used to judge the overall effectiveness of your delivery system.

Both kinds of delivery are important. It is critical to meet business commitments and deliver to your customers on time. But it is equally critical to build a healthy, long-term delivery system. You cannot reliably have the former without investing in the latter.