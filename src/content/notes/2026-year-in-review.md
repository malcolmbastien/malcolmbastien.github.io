---
title: 2026 Year In Review
stage: seed        # seed | sprout | evergreen
publishedDate: 2026-01-16
tags:
  - Year-In-Review
summary: Tracking what I've done in 2026
---

> [!DRAFT]
> I'm starting (and sharing) this post at the start of the year. My goal is to add to it as time goes by.

## Sprout

Sprout is the cleaned version of the [Astro](https://astro.build/) app that runs this site.

My initial goal was to have some way of sharing blog posts, without having to always go through the entire process of brainstorming, drafting and editing.

I took inspiration from the Digital Gardens others had created, piecing together parts that I liked and used AI to make something custom that fit what I wanted.

https://github.com/malcolmbastien/sprout

## Flow Focused

I migrated this blog away from WordPress, which this blog had run on since 2008, and with the help of AI, migrated it to [Astro](https://astro.build/).

I used AI to do all of the heavy lifting. For the setup and the design.

I used AI to export all my blog posts into markdown files, which lets me do all my writing and editing in [Obsidian.md](https://obsidian.md/).

I made a lot of this possible for me without having to learn multiple different systems. As a result, I spent a lot of time iterating the design. There were lots of little things the AI missed that I I needed to guide it to fix, but I also spent lots of time making little changes to parts I wasn't quite happy with.

## SquadView

Built [[SquadView]]

## OpenClaw

I began exploring [OpenClaw](https://github.com/openclaw/openclaw) in February, driven by curiosity about its explosive popularity. While I’m still trying to figure out its full potential, OpenClaw has shifted my perspective on using AI as a deeply integrated personal assistant.

I started my exploration by setting OpenClaw and one of its variants, [PicoClaw](https://github.com/sipeed/picoclaw), using Docker. I chose a containerized approach specifically to sandbox the AI, making sure it couldn't make any unintended changes to my files.

Since then, I have implemented several custom skills:

### Jellyfin Media Organizer

![[../../assets/2026/20260306135014.png]]

I’ve started leveraging AI to tackle tasks I previously put off, such as configuring self-hosted services like [Jellyfin](https://jellyfin.org/) and [Home Assistant](https://www.home-assistant.io/).

Using Docker, I expose only my "Videos" directory to OpenClaw. When I download movies or TV shows, I send OpenClaw an instruction to "clean up" the folder. The agent scans the directory, strips unnecessary metadata from titles, and renames every file according to a standardized naming convention.

### Job Application Autofill

The goal of this skill was to automate the tedious process of navigating multi-page job forms that all requested the same general information in slightly various ways. The AI uses a browser to navigate the job form, enters information based on my professional profile which is stored as a JSON file, and captures a screenshot of every page prior to submission for my records.

This skill utilizes OpenClaw’s [Browser tool](https://docs.openclaw.ai/tools/browser) and is quite effective for the pages it had access to. The only issue was that many companies require accounts to access their job portal, which could be solved by connecting a password manager like 1Password to OpenClaw, but that's outside my comfort zone.

### CRM-Copilot

The vision for this skill was to use Telegram as a lightweight interface for managing personal relationships—details that are often too cumbersome to track manually.

For years, I’ve used apps like OmniFocus, Logseq, and Obsidian to track "Agendas" (commitments and open loops related to specific people). This AI-driven system complements that by allowing me to quickly log birthday gift ideas, activity logs, and personal preferences through a simple chat interface.

### Knowledge Gap Analyzer

I've used Obsidian for over five years to store personal notes, quotes, and research. I consider this vault a "digital twin" of my brain. By exposing this vault to the AI (via a read-only Docker bind), I created a system to identify what I _don't_ know.

When I provide a topic—such as Product Management—the skill generates a comprehensive topic map. It then cross-references my Obsidian vault against that map, highlighting where my notes are robust, where they are merely "stubs," and where knowledge gaps exist. This provides a clear roadmap for my research and studies.

### Personal Shopping Strategist

Online shopping has become difficult due to biased reviews, AI and SEO-driven content. To cut through the noise, I built a skill that filters products based on signals I trust.

I fed the AI my specific preferences, a list of trusted web sources, and quality benchmarks for Amazon listings (for instance, filtering for items sold directly by Amazon Canada).

While highly effective, this skill raises some ethical questions regarding web scraping and its impact on the ad-supported business models of creators. Because of that, I've stopped using this tool.

## Video Games 

### Games Played

- Cairn
- The Riftbreaker
- Shape of Dreams 
- Outbound
- Desynced
