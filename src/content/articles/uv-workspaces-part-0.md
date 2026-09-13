---
title: "One workspace to rule them all — Part 0: Where do I put my files?"
summary: "A short, slightly petty history of the monorepo, and why Python made it so hard. Part 0 of a three-part series on building a production-ready Python monorepo with uv."
date: 2026-09-13
tags: ["python", "uv", "monorepo", "packaging", "architecture"]
draft: false
link: "https://medium.com/@dervisvanleersum/part-0-one-workspace-to-rule-them-all-building-a-production-ready-python-monorepo-with-uv-14311df9e6d9"
---

I set out to build a simple pizza app. But I'm a perfectionist, so it became a monorepo.
 
What started as a scraper and a Streamlit dashboard turned into a Streamlit frontend, a FastAPI backend, a batch worker, three service libraries, a shared package, Postgres and S3-compatible storage, all in one repo, glaring at me like a family portrait nobody wanted to pose for. Which raised the question that has started more Slack arguments than tabs-vs-spaces: how do you actually organise all of this?
 
Part 0 is the prologue. It speed-runs how we got here: the monolith, the great repo scattering into microservices, the monorepo swinging back, and then gets specific about why Python in particular made monorepos miserable for so long. Spoiler: it was never the folders. It was the dependency wiring between them, held together with `pip install -e ../`, tape, hope, and a `PYTHONPATH` you were too afraid to look at directly.
 
No code in this one. Just the argument the rest of the series is built on: folder structure isn't about tidiness, it's about declaring dependencies you can actually enforce.
