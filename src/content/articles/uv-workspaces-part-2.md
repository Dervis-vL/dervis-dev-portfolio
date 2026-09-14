---
title: "One workspace to rule them all — Part 2: The production toolchain"
summary: "Quality gates, testing, Docker, migrations, and the automation that ties it all together. Part 2 of a three-part series on building a production-ready Python monorepo with uv."
date: 2026-09-13
tags: ["python", "uv", "monorepo", "ci-cd", "docker", "testing"]
draft: true
link: "https://medium.com/@dervisvanleersum/"
---

Part 1 built the foundation: one lockfile, one venv, and a resolver that refuses to build a workspace whose dependencies contradict each other. Structure, done. But structure is only the first job.
 
In *Clean Architecture*, Robert C. Martin argues that a system's architecture exists to serve four things across its whole life: development, operation, deployment, and maintenance. Part 2 walks all four, plus the security thread running through the last two. Every tool is a gate, and passing them all is what lets uv turn the exact locked source you validated into the image you deploy and the wheel you publish.
 
Development is five gates: ruff for shape, mypy for meaning, deptry for whether your imports match your declarations, per-member versioning, and pytest scoped per member so coverage can't quietly lie to you. Operation is pre-commit, `just`, and one compose file that boots the entire domain — so your terminal, your hooks and your CI all run the literal same command. Deployment is multi-stage Docker builds straight from the lockfile, affected-project detection, and the trap waiting for you the first time you publish a member that depends on a sibling. Maintenance is the job a monorepo quietly wins: one lockfile to audit, one command to find the blast radius of a CVE, one place where versions and schema evolve.
 
The whole thing is public, so poke around the repo and judge my commit messages.
