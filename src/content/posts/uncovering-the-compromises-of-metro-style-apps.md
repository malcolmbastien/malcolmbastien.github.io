---
status: "seed"
title: Uncovering the Compromises of Metro Style Apps
publishedDate: 2012-08-06
updatedDate: 2012-08-06
slug: uncovering-the-compromises-of-metro-style-apps
tags:
  - General
  - iOS
  - Metro
  - Tech
  - Windows 8
---
The Windows 8 design case study is not just an interesting look at how the Windows team approaches designing an app, it also gives you a sense of how users are going to use a typical Metro style app on Windows 8. Unfortunately, as I read through the case study more and more cracks started to show. What I concluded was that while Windows 8 is a good looking operating system, the interface doesn’t work. It especially doesn’t work for a operating system that needs to be usable on a large scale by the masses.

While the case study does a good job of pointing out the differences between designing an iOS application and a Windows 8 application, what I think you’ll take away from it is that even though by iOS may not be as beautiful, its compromises are for the sake of usability.

The headers of this article match headers in the case study.

[Design case study: iPad to Metro style app](http://msdn.microsoft.com/en-us/library/windows/apps/hh868262)

## Layout and navigation

They say their first goal was to remove all of the UI elements that were not directly relevant to the core functionality of the app. That sounds fine, but the core functionality isn’t the only design consideration that needs to be taken into account. Focusing on content is great and can give users an immersive experience, but there are always other considerations that need to be taken into account.

Apple advises developers to design mobile applications specifically for considerations such as glance-ability, to use shallow navigation stacks and generous touch targets, and to include alternatives for gestural controls.

In Metro, giving an app’s content priority over all other considerations leads to consequences both good and bad. Metro apps don’t have fixed toolbars on screen, and on iOS the toolbar and tab bar navigation controls take up a lot of screen space while providing very little in return (A large amount of the black tab bar does nothing). What the user gets out of those controls is always knowing where he is in the application, and what’s available. They are visual anchor points. They aren’t content, but they are important pieces of app context that iOS gives its users that Metro doesn’t.

In many examples to follow, it’s clear that Metro style apps expects users to already know many gestural commands used to access controls and to navigate the operating system. From this case study, many of them are not obvious, clear, explained, and there are no alternative ways of performing those actions. Meanwhile iOS makes heavy use of metaphors (the trash bin), skeuomorphic interfaces (mimicking a physical calendar), and alternative controls (edit buttons) to help users.

### Timeline view on the home screen

The Metro style app displays photos for a particular month using large photos, by overlaying those photos with extra contextual information, and removes any borders and chrome from the content. One of the nice things it loses though is the ability to show the user all 12 months on a single screen. What content and what destinations are available to the user isn’t clear.

While the photos on the iPad are smaller, don’t include descriptions and include distracting chrome, having all 12 months visible at once gives a user all the information they need to know what’s available to them. With the Metro version of the app, to get anywhere requires hunting for content that’s off screen. The months on the Metro style app look better, but they doesn’t work better.

### Use direct manipulation to navigate

When you remove a navigation element and replace it with a gesture you put the burden on the user to the know the gesture as well as when, where and how to use it. They’ll also have to reorient themselves to whatever new view appears. The approach taken in iOS and on the iPad typically involves an onscreen way to do things for each gestural control. The iPad Calendar app lets users swipe to change days and months, but also provide arrow buttons at the bottom of the screen to accomplish the same action. Also in Calendar app, you can click a “+” button to add an event, or tap right on the calendar.

Other third party applications like Path and Facebook both use a sliding navigation metaphor where the user can either tap a icon which exposes the slide out navigation, or simply use a swiping gesture.

The key thing is that users generally need to know about gestures and learn them before they can use them. In Metro if the gestures aren’t already known, then the user will have issues.

## Commands and actions

Again we see this “content before chrome” approach. The app bar is controlled by another gesture. Once again the user must already be familiar with the what, where, how, and why of the gesture to use the app comfortably.

Another problem the app bar is that for any particular view the app bar changes its available commands based on where you are in the app, and on what content is selected. Global actions are also blended with local ones. Unless the user has committed every single combination of screen, content selection to memory, he’ll need to open up the app bar before he even knows what actions are available. This is different compared to iOS where menu bars and toolbars are always visible and most available actions are all clear at a glance.

## Contracts

Easier sharing for social networks as a fundamental part of mobile platforms. So the easier goals are to implement for developers the better. Metro relies on another user gesture to access the search charm.

I’m not too sure what to think about global search within applications. I’m skeptical if it’s the best thing to have in the mobile context specifically. On the iPhone we have spotlight on the phone, but if I’ve already opened an application, I think I’d expect my search focus to me within that app.

## Touch

  “Using Windows 8, a user can swipe from edges to access commands and navigate between apps.”

I really don’t like how Metro has gestural controls from all edges of the screen. This might be great for power users, but I really believe it’s far beyond what a regular user should expect to learn or how likely they will be to. People still have problems double clicking links online, and or accessing cut and paste from the menu bar.

It’s not that gestures are bad, but the fact that in Metro they are all hidden. There isn’t any indication of when or how to use them, and most importantly there are no alternative controls provided.

  “With Windows 8, a user can slide their finger a short distance, perpendicular to the panning direction, to select an object in a list or a grid. When objects are selected, the app bar is revealed, automatically showing relevant commands.”

Another swiping gesture without any alternative control…

## My Own Conclusion

Overall I really enjoyed reading this design case study and gaining an idea of what the design considerations are for making a Metro style app. My biggest concern is that a lot of these guidelines for designing for Metro and the highlighting of its benefits don’t actually create a better user experience, and show deep flaws within the user interface. The Metro team has done what they’ve set out to do, but they’ve done it at a price which their users will have to pay.

This case study has helped me appreciate the price that iOS itself pays in its user interface design. Compromises like the screen space taken up by navigation bars and tool bars, the use of menu buttons and graphical user interfaces, and how it adapts the content to the interface are all examples of the price iOS pays to make a user interface that is usable by the masses.

If users have an easy time knowing how to use their apps and are comfortable with them though, they should never notice these compromises.
