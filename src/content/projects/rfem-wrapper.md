---
title: "RFEM 6 Wrapper"
summary: "A friendlier Python wrapper over Dlubal's RFEM 6 structural-analysis API, built for engineers who aren't full-time programmers."
order: 5
role: "Author & package owner"
period: "Witteveen+Bos"
tech: ["Python", "RFEM", "GitLab CI/CD", "Poetry", "Read the Docs"]
link: "https://www.dlubal.com/en"
---

I built a Python package that wraps the **RFEM 6** API, layered on top of Dlubal's own package, to make structural automation approachable for **civil engineers with limited Python experience**.

It smooths over the rough edges of the raw API and adds features tailored to how engineers actually work — including support for our custom data models. The [Traffic Bridge Tool](/work/traffic-bridge-tool), for example, uses a dedicated `Bridge` class defined inside this wrapper.

It ships to the internal PyPI server with full docs and examples on Read the Docs, and every release runs through automated GitLab pipelines that test and validate it before publishing. Using GitLab's issue board, I also organised a group of structural engineers as active users — reporting bugs and requesting features — which kept the package genuinely useful rather than theoretically complete.
