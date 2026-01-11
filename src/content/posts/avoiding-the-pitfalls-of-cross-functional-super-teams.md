---
status: "seed"
title: Avoiding The Pitfalls of Cross-Functional Super Teams
publishedDate: 2023-07-25
updatedDate: 2024-02-13
slug: avoiding-the-pitfalls-of-cross-functional-super-teams
tags:
  - Agile
  - Team Topologies
---
I've previously written about [cross-functional teams and what it means for a team to be cross-functional](https://malcolmbastien.com/2023/05/16/revisiting-the-guidance-on-cross-functional-teams/). In that same post, I wrote about Team Topology's concept of a stream-aligned team.

To recap, stream-aligned teams:

Deliver a product or service to external customers and have end-to-end ownership of the lifecycle.

Should be able to analyze, test, build, release and monitor changes independently of other teams.

Deliver value without waiting for other teams to perform parts of the work.

Are close to customers and can respond quickly and effectively to customer feedback and changing needs.

Suppose autonomous and independent cross-functional teams that own an entire "slice" of a business domain are the ideal way to organize for software delivery. Does that mean organizations should only have stream-aligned teams?

The problem I see is people get hooked by what cross-functional teams offer and conclude that anything other than a cross-functional team is unfavourable and dismantled.

But are stream-aligned teams the answer to everything? What are the trade-offs to consider if we try to maximize the number of cross-functional teams in our organizations?

## The Problems With Cross-Functional Super Teams

A stream-aligned team has all the skills and capabilities to deliver end-to-end value to customers, from idea to live service, in one "slice" of a business domain. Team Topologies has some guidance on what end-to-end ownership might look like:

Generally speaking, each stream-aligned team will require a set of capabilities in order to progress work from its initial (requirements) exploration stages to production. These capabilities include (but are not restricted to):

- Application security
- Commercial and operational viability analysis
- Design and architecture
- Development and coding
- Infrastructure and operability
- Metrics and monitoring
- Product management and ownership
- Testing and quality assurance
- User experience (UX)
- Team Topologies

But how does that happen? How should one team satisfy all those capabilities? Based on what I see happening, most organizations do that by adding more people to a team.

Based on this incomplete list of capabilities, even the simplest teams requires at least ten members to cover all the bases. So traditional Agile team size guidance of "7 +/- 2 people" gets tossed out as teams of 20 to 30+ people get formed. And as teams get larger, problems start appearing, including:

Excessive team size

Excessive cognitive load

Low skills-liquidity

### Excessive Team Size

![](https://malcolmbastien.com/wp-content/uploads/2023/07/image.png?w=1118)

As you add more people, the number of potential communication pathways grows exponentially, making communication more difficult. Information takes longer to spread and doesn't get spread evenly.

As the team gets larger, it's challenging to maintain a single shared identity and purpose, so mini-groups start forming within the larger team.

### Excessive Cognitive Load

Bringing new capabilities into a team might help you fill a checkbox, but if you haven't taken care of how easy it is for the team to successfully fulfill those different concerns like security, monitoring or quality, you might have brought one person into your team, but a whole bunch more problems.

Rapidly expanding the scope of a team's responsibilities in a way that isn't well supported means the team's required cognitive load and mental effort begins exceeding what they can safely spend.

### Low Skills-liquidity

Bringing people into teams whenever you require a particular skill will inevitably run into problems as soon as the need for a skill exceeds the number of people you have with that skill. 

For example, you might have had a central User Experience group acting as a shared service before, but if you decide to dismantle that shared service and instead put UX designers directly into stream-aligned teams, what happens if you need more User Experience Designers than you have?

The problem worsens with more specialist skills, like security experts or DBAs. When this happens, organizations like to start dividing individuals "The DBA is 50% on our team, and 50% on another team."

## Supporting Teams Vs. Dependencies

Stream-aligned teams can only expect to own an entire "slice" of a business domain if the cognitive load required of the team matches their capacity. Instead of creating cross-functional super teams, the solution is to reduce the cognitive load needed of stream-aligned teams through the help and support they get from enabling, platform, and complicated-subsystem teams.

Supporting teams help stream-aligned teams gain new capabilities, reduce their learning curve when adopting new practices and technologies, develop and maintain highly complicated systems requiring specialized knowledge, and provide easy-to-use services.

However, earlier, we said, "Stream-aligned teams should be able to analyze, test, build, release and monitor changes independently of other teams." So if stream-aligned teams need to coordinate with other teams to get work done, what makes a supporting team different from any other dependency?

When I talk about dependencies, I like using this definition from [Troy Magennis](https://www.focusedobjective.com/):

Dependency: A blocker that might cause a delay in starting or finishing something we want in the future.

Troy Magennis

In our case, a dependency is anything that might delay our stream-aligned team from starting or finishing a piece of work.

What differentiates a supporting team from a dependency is that dependencies sit in the flow of change, whereas supporting teams don't.

Dependencies sit in the flow of change and increase the burden on stream-aligned teams.

Supporting teams don't sit in the flow of change and decrease the burden on stream-aligned teams.

If coordination, hand-offs, rework, delays and communication overhead between teams slows down the delivery of value to customers, you're dealing with dependencies.

Whereas supporting teams:

Reduce the burden on stream-aligned teams.

Don't block or delay value delivery to customers.

Help stream-aligned teams deliver value faster, better, and more quickly.

If your teams face dependencies, delays, excessive communication, and hand-offs, forming effective value streams is more complicated than applying a single pattern across your organization. The task is to explore your value stream or your organization's value chain and discover potential team boundaries that help you best meet your users' needs.

Teams that are currently acting as dependencies will need to change their purpose. They can't view supporting other groups as distracting from their primary goal. Their primary driver and mission should be the success of the stream-aligned teams.

## Conclusion

Cross-functional teams are the best way to organize people to deliver meaningful outcomes, but trying to remove dependencies and speed up delivery by killing off any team that doesn't directly deliver software to customers leads to throwing throw the baby out with the bathwater.

Trying to put all of the skills and people needed for end-to-end delivery into cross-functional super teams can lead to problems such as excessive team size, cognitive load, and low skills liquidity.

Create small and long-lived stream-aligned teams focused on end-to-end ownership and remove dependencies from the flow of work, but do that in a way that minimizes the cognitive load required. Leverage the other team types to help reduce the burden and increase the effectiveness of stream-aligned teams.

As a first step to start applying Team Topologies concepts and patterns, you can try using techniques such as value stream mapping, event storming, core domain charts, and user needs mapping to explore potential team boundaries and which capabilities might make sense to be taken care of by stream-aligned, enabling, complicated-subsystem or platform teams.

Using these patterns, you can avoid the pitfalls of cross-functional super teams and create a more effective software delivery organization.
