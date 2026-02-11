---
title: "Getting Started with Your Digital Garden"
stage: evergreen
tags: ["tutorial", "getting-started", "garden", "formatting", "callouts", "markdown"]
summary: "Learn the basics of maintaining a digital garden and how to use this template."
pinned: true
---

## 🌱 Getting Started with Your Digital Garden

Welcome to your new digital garden! This post demonstrates the basic features and formatting options available in Sprout.

### What is a Digital Garden?

A digital garden is a space for cultivating your thoughts and ideas over time. Unlike traditional blogs, gardens:

- **Grow organically** - Posts evolve from seeds to sprouts to evergreens
- **Track evolution** - See how your thoughts develop over time
- **Encourage exploration** - Discover connections between ideas

## Formatting

### Headers
Use different header levels to organize your content:

## H2 - Section Headers
### H3 - Subsection Headers
#### H4 - Smaller Sections

#### Text Formatting

- **Bold text** using double asterisks
- *Italic text* using single asterisks
- ~~Strikethrough~~ using double tildes
- `Inline code` using backticks

#### Lists

##### Unordered Lists
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

##### Ordered Lists
1. First step
2. Second step
3. Third step

#### Links and Images

[Link to external site](https://example.com)

#### Code Blocks

```javascript
function helloGarden() {
  console.log("Welcome to your digital garden!");
}
```

#### Block quotes

> Be yourself; everyone else is already taken.
>
> ― Oscar Wildee

## 🎨 Callouts and Special Formatting

Sprout includes a rich callout system inspired by GitHub alerts and Obsidian callouts. These help highlight important information and add visual interest to your posts.

## Callouts

Testing every supported callout type:

### Informational
> [!NOTE]
> Standard note for small pieces of information.

> [!ABSTRACT]
> Used for summaries or TL;DRs.

> [!INFO]
> General information callout.

> [!EXAMPLE]
> Illustrative examples.

> [!IMPORTANT]
> Important point.

### Action Oriented
> [!TODO]
> Tasks or things to be done.

> [!TIP]
> Helpful tips and tricks.

> [!SUCCESS]
> Positive outcomes or successful checks.

> [!QUESTION]
> For questions, help, or FAQs.

### Issues
> [!WARNING]
> Critical warnings or cautions.

> [!FAILURE]
> Errors, failures, or missing items.

> [!DANGER]
> Significant risks or errors.

> [!BUG]
> Bug reports or technical issues.

### Thoughts
> [!QUOTE]
> For quotes or citations.

> [!IDEA]
> Idea callout.

### Status

> [!DRAFT]
> This is a draft block. It represents incomplete writing that is still in progress. Note the dashed border and specific styling to distinguish it from mature content.

> [!WIP]
> This is a draft block. It represents incomplete writing that is still in progress. Note the dashed border and specific styling to distinguish it from mature content.

### Callout Best Practices

- **Use sparingly** - Too many callouts can overwhelm readers
- **Choose appropriate types** - Different callouts serve different purposes
- **Keep them concise** - Long callouts lose their impact
- **Test readability** - Make sure callouts enhance, not distract from, your content

## Tables

| Callout Type | Use Case | Visual Style |
|-------------|----------|--------------|
| `NOTE` | General info | Blue background |
| `TIP` | Helpful advice | Green background |
| `IMPORTANT` | Critical info | Orange background |
| `WARNING` | Potential issues | Red background |
| `CAUTION` | Minor concerns | Yellow background |
| `IDEA` | Creative thoughts | Purple background |
| `QUESTION` | Engagement prompts | Blue background |
| `DRAFT` | Work in progress | Gray background |

Experiment with these callouts to find the style that works best for your garden! 🌱

## Drafting Patterns

Because this post has `draft: true` in its frontmatter, you should see a global draft banner at the top.

### Container-based Drafts

For sections that are incomplete, we can use the `:::draft` directive:

:::draft
#### A work in progress section
I haven't quite finished this part of the thought yet. It spans multiple paragraphs.

Here is the second paragraph of the draft section.

A list:

- One
- Two
- Three
:::

### Callout-based Drafts (Small blocks)

> [!DRAFT]
> This is a shorter, callout-style draft for specific notes.
