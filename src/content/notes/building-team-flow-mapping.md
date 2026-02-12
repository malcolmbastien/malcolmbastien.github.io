---
title: Building Team Flow Mapping
stage: seed        # seed | sprout | evergreen
publishedDate: 2026-01-16
tags:
  - AI
  - Tools
summary: How I built the teamflowmapping app.
---

- AI Tools
	- Zed
		- manually edit code
		- see code changes made by the AI
		- manage git
	- Google Firebase
	- Opencode
		- "Build" vs "Plan" modes. It's nice not having to always prompt models "answer my question without making any code changes"
	- Taskmaster
- The process
	- Prototyping with Google Firebase Studio
	- Moving to local development
- Techniques
	- Occasionally asking: "What should we do next?"
	- I never got into using any special techniques of any sort.
		- Thing like agents, skills
		- I just worked one feature or bug at a time, describing what I wanted the AI to do and iterating or manually editing the code until things worked how I wanted.
- Lessons I Learned
	- I was able to add a working prototype of new features with a single prompt, so the question each time became should I?
	- Playwright is really cool to automating end-to-end tests
