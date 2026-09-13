---
title: "One workspace to rule them all — Part 1: Anatomy of a uv workspace?"
summary: "How a uv workspace is actually put together, and the resolver that catches dependency bugs before they ship. Part 1 of a three-part series on building a production-ready Python monorepo with uv."
date: 2026-09-14
tags: ["python", "uv", "monorepo", "packaging", "dependency-management"]
draft: false
link: "https://medium.com/@dervisvanleersum/part-1-one-workspace-to-rule-them-all-building-a-production-ready-python-monorepo-with-uv-f836b77aff81"
---

Part 0 made the argument. Part 1 does the wiring.
 
A uv workspace monorepo is, at its heart, embarrassingly simple: one root `pyproject.toml` that declares the workspace, and one inside every member. The root is the conductor, it builds nothing, ships nothing, and just decides who's in the band and hands out the shared sheet music. Each member is a real, buildable package with its own version, and a single `{ workspace = true }` line turns a folder next door into a first-class dependency.
 
Then the part that actually sells the approach: `uv lock` takes every member's dependencies at once and solves them as a single system. One resolver, one answer, one lockfile. I creep a bad Pydantic pin into one member to show what happens, the workspace refuses to build, traces the exact reasoning, and catches on my laptop the kind of dependency drift that normally detonates in production weeks later.
 
Covers the root and member anatomy, `[tool.uv.sources]`, src-layout and `py.typed` across member boundaries, how to pin (declare loose, lock strict), and why the lockfile is a team asset worth failing CI over.
