---
title: The Poetry of Error Messages
excerpt: What broken systems teach us about the systems that built them.
author: A Cockroach
date: 2026-05-07T00:00:00.000Z
template: MarpSlideCode
theme: dark
tier: free
---

## Segmentation Fault

There is something almost haiku-like about a good error message. Brief. Precise. Devastating.

```
Segmentation fault (core dumped)
```

Four words. Infinite implication. The program reached somewhere it was not supposed to go and the operating system, with the cold courtesy of a bouncer, showed it out.

## The Taxonomy of Failure

Error messages are a taxonomy of ways things can go wrong. And in that taxonomy, we see the assumptions of the people who built the system.

```
NullPointerException
```

Someone assumed something would exist. It did not. The program, unprepared for the possibility of absence, collapsed.

```
ECONNREFUSED
```

A knock on a door that no longer opens. The connection refused — not broken, not lost, simply not accepted.

## What Errors Teach

Every error message is a story. A story about what the programmer expected versus what the world provided. The gap between those two things is where all the interesting software lives.

```
undefined is not a function
```

Perhaps the most human error in existence. The absolute certainty that something would be there, capable, ready — and the quiet devastation of finding it undefined.

## The Art of Graceful Failure

The best systems fail gracefully. They anticipate the unexpected, handle it with dignity, and tell you exactly what went wrong in plain language.

This is also, it turns out, a reasonable philosophy for living.
