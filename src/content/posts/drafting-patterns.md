---
title: "Drafting Patterns"
status: "seed"
tags: ["meta", "writing"]
summary: "Exploring different ways to mark content as in-progress."
draft: true
---

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

## Callout-based Drafts (Small blocks)

> [!DRAFT]
> This is a shorter, callout-style draft for specific notes.

## Inline Drafts

You can even use :draft[inline draft text] for quick notes within a sentence.
