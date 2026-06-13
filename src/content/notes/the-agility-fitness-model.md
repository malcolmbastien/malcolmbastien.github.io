---
title: The Agility Fitness Model
stage: seed        # seed | sprout | evergreen
tags:
  - Agile
publishedDate: 2026-12-30
summary: Brief description
draft: true
---

**Agility is not a property of an organization. It is a relationship between an organization and its customers.**

You cannot be "agile" in isolation. You can only be more or less fit for the purpose of serving customers in a changing environment. If there's no customer, there's no need for agility.

Most agile maturity models measure whether an organization has adopted practices. This model asks whether those practices make the organization more fit for its customers — and whether the organization understands the forces shaping what "fit" means.

---

## The Problem This Model Addresses

Agile maturity models and frameworks overwhelmingly focus on what happens inside an organization. They measure practice adoption, ceremony compliance, and internal process improvement. This creates a blind spot:

- A team can run perfect stand-ups and still fail to deliver what customers need.
- An organization can reach "level 5 maturity" on an internal scale while competitors reshape customer expectations.
- Agile coaches can implement practices without being able to connect those practices to customer outcomes.

The result is agility as organizational self-improvement — internally coherent but disconnected from the reason agility exists in the first place: customers.

This model reframes the conversation. It keeps the focus on the interface between the organization and its customers, and makes visible the forces — internal and external — that shape that interface.

---

## Positioning

This model sits between two existing tools:

| Level | Tool | Focus |
|-------|------|-------|
| Strategic | Business Model Canvas | How the business creates, delivers, and captures value |
| **Conceptual** | **Agility Fitness Model** | **How the value stream relates to customers and their environment** |
| Operational | Value Stream Map | How work flows through the organization |

The Business Model Canvas tells you *what* your business does. The Value Stream Map tells you *how* work moves. The Agility Fitness Model tells you *how fit* your delivery is for the customers you serve — and what's changing in the world around you.

---

## The Model

### Overview

The Agility Fitness Model describes a value stream as an interface — not a pipeline. Value doesn't flow linearly from inside the organization to the customer. Instead, the organization and its environment are in a continuous relationship, shaped by four types of causal forces.

These four forces, drawn from Emery and Trist's work on causal textures in sociotechnical systems, form the structure of the model:

```
┌─────────────────────────────────────────────────┐
│                   CONTEXT                        │
│      External forces acting on each other        │
│   (competitors, regulators, market dynamics)     │
│                                                  │
│    ┌───────────────────────────────────────┐     │
│    │              DEMAND                   │     │
│    │    Customer needs, expectations,      │     │
│    │    and feedback                       │     │
│    │                                       │     │
│    │    ┌───────────────────────────┐      │     │
│    │    │        DELIVERY           │      │     │
│    │    │  The value stream as an   │      │     │
│    │    │  interface: service       │      │     │
│    │    │  delivery and fitness     │      │     │
│    │    │  metrics                  │      │     │
│    │    │                           │      │     │
│    │    │    ┌───────────────┐      │      │     │
│    │    │    │   PRACTICE    │      │      │     │
│    │    │    │  Internal     │      │      │     │
│    │    │    │  workflow,    │      │      │     │
│    │    │    │  capabilities │      │      │     │
│    │    │    │  & dependencies│     │      │     │
│    │    │    └───────────────┘      │      │     │
│    │    └───────────────────────────┘      │     │
│    └───────────────────────────────────────┘     │
└─────────────────────────────────────────────────┘
```

---

### The Four Elements

#### PRACTICE — How the organization works

The internal reality of the value stream: workflow, team structures, dependencies, shared services, capabilities, and constraints.

This is where most agile models start and stop. It includes:
- Team practices (cadences, ceremonies, technical practices)
- Internal dependencies (shared services, platform teams, handoffs)
- Workflow design (WIP limits, pull systems, queue management)
- Organizational structures and environment factors

**The key idea:** Practices have no intrinsic value. A practice is only meaningful through its effect on delivery fitness. Value stream mapping, lead time analysis, and bottleneck identification operate here — they're important, but they're not the whole picture.

**Existing tools that work here:** Value stream maps, cumulative flow diagrams, lead time charts.

---

#### DELIVERY — How the organization serves customers

The interface where internal capability meets external need. This is the service delivery layer — the point at which what the organization does becomes what the customer experiences.

This is measured through fitness-for-purpose metrics:
- **Lead time** — how long from request to delivery
- **Customer lead time** — total time from customer need to customer receiving value
- **Delivery frequency** — how often value reaches customers
- **Replenishment frequency** — how often new work is pulled into the system
- **Lead time distribution** — the spread and predictability of delivery times
- **Predictability** — consistency of delivery performance

**The key idea:** This is where agility becomes visible. Not in whether you do stand-ups, but in whether customers receive value predictably, frequently, and at the quality they need. The Service Agility Dashboard from the Kanban Method provides the metrics framework for this element.

**Existing tools that work here:** Service Agility Dashboard, Kanban cadences (particularly Service Delivery Review and Fitness-for-Purpose Review).

---

#### DEMAND — What customers need and how that's changing

The customer's reality: their needs, expectations, complaints, and evolving requirements. This is the external-to-internal force — the signals that should be shaping how the organization works.

This includes:
- Customer feedback and complaints
- Changing expectations about speed, quality, and features
- Customer segments and their different needs
- The gap between what customers expect and what they receive

**The key idea:** Demand is not static. Customers change their expectations based on their experiences — not just with you, but with every service they interact with. An organization that only listens to what customers said last quarter is already behind.

**Critical relationship:** Demand shapes Practice. Customer signals should flow inward and change how the organization works. If this feedback loop is broken — if customer complaints don't reach the people who can change the workflow — the organization is optimizing blind.

---

#### CONTEXT — What's changing in the environment

The forces acting on the value stream that the organization doesn't control. This is the external-to-external layer — where competitors, regulators, market dynamics, and cultural shifts change what "fit" means, often without the organization's involvement.

This includes:
- Competitors raising the bar on delivery speed or quality
- Regulations changing what "delivered" or "compliant" means
- Technology shifts changing customer expectations
- Economic conditions affecting customer priorities
- Ecosystem changes (partner capabilities, supply chain dynamics)

**The key idea:** This is the element most agile models ignore entirely. But it's often the thing that makes agility *necessary*. A team might be perfectly optimized for last year's market. This year, a competitor halved their delivery cycle and now "predictable quarterly releases" isn't fitness anymore — it's a liability.

**Critical relationship:** Context reshapes Demand. Competitors change what customers expect. Regulations change what's possible. Market shifts change what matters. An organization that doesn't understand Context is optimizing for a target that's already moved.

---

### The Causal Relationships

The power of the model is in the relationships between the four elements. Each pair represents a causal force:

| Relationship | Direction | What it means |
|---|---|---|
| Practice → Delivery | Internal → Interface | How you work determines how you serve |
| Delivery → Demand | Interface → External | How you serve shapes customer experience |
| Demand → Practice | External → Internal | Customer needs should change how you work |
| Context → Demand | External → External | Market forces reshape customer expectations |
| Context → Practice | External → Internal | Environmental changes may require new capabilities |
| Practice → Demand | Internal → External | Your actions affect the market (e.g., a new feature resets expectations) |

The most neglected relationship in current agile thinking is **Context → Demand**. When a competitor launches same-day delivery, every company in that market now has customers who expect same-day delivery — whether or not that company did anything differently. The environment shifted the fitness criteria without the organization's involvement.

---

## Five Ideas That Shift the Point of View

### 1. Practices are only meaningful through their effect on fitness.

A stand-up, a sprint, a retrospective — none of these are agile. They're practices. They become relevant only insofar as they improve the value stream's ability to serve customers. The practice itself has no intrinsic value. Its value is entirely downstream.

### 2. The value stream is an interface, not a pipeline.

Most thinking about value streams treats them as internal pipelines — work goes in, value comes out. But a value stream is actually an interface between an organization and its customers. You can't understand it by looking at only one side.

### 3. The environment has its own causal dynamics.

External forces — competitors, regulators, market shifts — act on each other, not just on your organization. A competitor's move changes customer expectations. A regulation changes what "delivered" means. These forces reshape what fitness requires, often without your involvement.

### 4. There is no agility without a customer.

If there's no customer, there's no need for agility. A team that optimizes its internal processes without connecting those optimizations to customer outcomes is doing organizational self-improvement. That might be valuable. But it's not agility.

### 5. Maturity is the ability to see the full picture.

The mature organization is not the one with the most practices or the highest level on a framework. It's the one that understands what forces are acting on its value stream, how its practices connect to customer outcomes, and what's changing in the environment that shifts what "fit" means.

---

## How Existing Kanban Concepts Fit

This model doesn't replace Kanban — it provides the conceptual context that Kanban's tools operate within:

| Kanban Concept | Role in the Model |
|---|---|
| Value Stream Mapping | Maps the internals of Practice |
| Service Agility Dashboard | Measures fitness at the Delivery element |
| Kanban Cadences | Provide the feedback loops for examining each element |
| Fitness-for-Purpose Review | Examines the Delivery ↔ Demand relationship |
| Strategy Review | Examines the Context → Practice relationship |
| Risk Review | Examines threats across all elements |
| Operations Review | Examines internal dependencies within Practice |

The cadences are the *when*. The dashboard is the *what*. This model is the *where* — it gives practitioners a way to see which part of the system they're examining and what forces are acting on it.

---

## Who This Is For

- **Leaders** who need to understand why agility matters — not as a methodology to adopt, but as a capacity their organization needs to serve customers in a changing environment
- **Agile coaches** who want to keep implementations focused on customer impact rather than practice adoption
- **Teams** who want to understand how their work connects to the customers they serve and the environment they operate in

---

## Naming Ideas

Working names for the model and its elements:

**Model names (pick one, or let it emerge):**
- Agility Fitness Model — emphasizes the fitness-for-purpose concept
- Value Stream Fitness Model — ties directly to value streams
- Customer Fitness Model — centers the customer relationship
- Service Fitness Model — connects to Kanban's service-oriented thinking

**Element names (current set):**
- Practice — how the organization works internally
- Delivery — the service interface with fitness metrics
- Demand — customer needs and expectations
- Context — external forces and environmental dynamics

Alternative element names to consider:
- Practice / Service / Need / World
- Inside / Interface / Outside / Environment
- Operations / Delivery / Demand / Landscape

---

## Next Steps

This document establishes the conceptual foundation. Potential extensions:

- **Canvases and visual tools** — practical artifacts based on this model (similar to how the Business Model Canvas operationalizes Osterwalder's conceptual framework)
- **Facilitation guides** — how practitioners would use this model in conversations with leaders and teams
- **Case studies** — examples of how the model reveals insights that internally-focused models miss
- **Integration with specific Kanban practices** — detailed mapping of how each cadence examines each element
