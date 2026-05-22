---
stage: seed
title: Moving Towards A Self-Hosted Cloud
publishedDate: 2008-09-08
tags:
  - General
---
Taking advantage of the power of the web today is something that new companies are doing everyday.  But for the past two years the major way I, and many other people have taken advantage of that power is by signing up for third-party web services.  For me, I live everyday using [Google](http://google.com) services, specifically: [Gmail](http://gmail.com), [Reader](http://www.google.com/reader/view/), [YouTube](http://www.youtube.com/), [Calendar](http://www.google.com/calendar/), [Docs](http://docs.google.com/) (which I use to write this post), [Maps](http://maps.google.ca/), [Groups](http://groups.google.com/), [Talk](http://www.google.com/talk/), [Analytics](http://www.google.com/analytics/), numerous software apps that are hosted on [Google Code](http://code.google.com/), and now add [Chrome](http://www.google.com/chrome) to the mix.  These are all the Google services I use at least once a week. And I don't want to be a pessimist but, in the long run I don't see this being future of the web, where it continues along a path where such a heavy reliance on these commercial third-party services is the norm.  The future I want to see us move towards is the idea of open source and self-hosted services supported by third-parties.

Google is only one example, but it's the most severe one because of the huge amounts of critical information people entrust it with.  There's a lot discussion going on talking about reasons why people shouldn't be handing companies like Google all of this information.  These discussions include ideas like no matter how many beneficial services are provided to make our lives easier, the fact that if it is all coming from a for-profit company, we'll never know what their long-term plans might, or when their intentions could change, or even what the possibility is that we could all be left up-the-creek without access to our information at all! As well, other services whose value is driven by our information are also being scrutinized by people raising their voices who want more and more control over their information, namely [Twitter](http://twitter.com).

The idea of creating open-source, self-hosted alternatives to these web services is at important step in moving the web forward in a direction collaboration and openness, rather than just dependence and criticism.

Following are a few examples of open-source applications leading the way in this.  Like the commercial solutions that preceded many of them, there is still lots of room for competition between open-source implementations and, lots of people hoping for continued innovation.

## Life Streaming: [Sweetcron](http://sweetcron.com/)

[](http://sweetcron.com/)PHP (with [CodeIgniter](http://codeigniter.com/)), GPL v3

Developed by Japan based developer [Yongfook](http://www.yongfook.com/) (his site is running the lastest version of Sweetcron), Sweetcron is an open source life streaming solution that collects the sum of your actions across the web based on the feeds you configure it to follow.  Sweetcron is designed as an alternative to similar services like [Friendfeed](http://friendfeed.com/), but without any of the same social networking features.

## Micro-Blogging: [Laconica](http://laconi.ca/trac/)

PHP, AGPL v3

Developed by Montreal based Evan Prodromou, [Wikipedia description:]
Laconica is an open source micro-blogging tool written in PHP that implements the [OpenMicroBlogging](http://en.wikipedia.org/wiki/OpenMicroBlogging) standard. Laconica was created as an open source, distributed alternative to Twitter, and was originally used by the [Identi.ca](http://identi.ca) micro-blogging service.
An example of setting up your own hosted micro-blogging network is [The Twit Army](http://army.twit.tv/), set up for fans of the [TWiT](http://twit.tv/) podcast network.

## Web Analytics: [Piwik](http://piwik.org/)

[](http://piwik.org/)PHP, GPL v3

Formally called phpMyVisites, Piwik is an open source alternative to web analytics packages like [Google Analytics](http://www.google.com/analytics).  It's currently in Beta, and some of it's notable features include it's Plug-in support for developer created add-on functionality, and graphs and charts that are embeddable into websites.  Plug-ins for other platforms including [Wordpress](http://wordpress.org/), [Mediawiki](http://www.mediawiki.org/wiki/MediaWiki), [Docuwiki](http://docuwiki.net/index.php?title=Main_Page), and [Typo3](http://typo3.org/) have already been developed that enable Piwik to be installed onto each of the platforms with some custom options (e.g., disabling admin user tracking for Wordpress).  Personally, I would have preferred if more of their visualizations were built using Javascript rather than Flash.

## RSS Aggregator: [Lilina](http://getlilina.org/)

[](http://getlilina.org/)PHP, GPL v2

A lightweight, RSS aggregator, Lilina was the only example I could find of a self-hosted and open source alternative to Google Reader.  It seems to be a rather new product with support for plug-ins and custom themes.  But there's a lack of documentation or media on the project homepage.  Something to look out for in the future perhaps.

The room for new projects is immense.  Projects like an open-source self-hosted office suite, or a calendar application would make great applications for those people who prefer working with their data on the cloud, but at the same time want the control hosting their own data.

There's a lot of room for discussion on this topic:  What are your main concerns with relying on a third party for your information? Would you use a self-hosted and open source application even if it offered less functionality?  How important is a commercial backing to these open-source and self-hosted applications, and are there any start-up opportunities there?
