---
title: "Civil Engineering Toolbox"
summary: "A Python package of shared calculations and data models that standardised structural data across an entire engineering firm."
order: 6
role: "Author & package owner"
period: "Witteveen+Bos"
tech: ["Python", "RFEM", "Revit", "Dynamo", "GitLab", "Poetry"]
---

I created and owned a Python package — the Civil Engineering Toolbox — that gathered common calculations and data models into one place for the firm's civil engineers.

At its heart is a `Bridge` class I designed to **standardise structural data company-wide**. It captures the full geometry of a structure, derives in-situ deck thickness, identifies prefab beam types where relevant, enables rapid quantity take-offs, and carries reinforcement data and normative factors. Because it's a shared object, it drops straight into automation tools like the [Traffic Bridge Tool](/work/traffic-bridge-tool), the [RFEM 6 Wrapper](/work/rfem-wrapper) and the [3D Bridge Builder](/work/bridge-web-app).

I led the data model's design and ongoing refactoring, managed issues and bugs as package owner, and worked with engineers across the company to fold their existing Excel-based methods into structured, reusable models — a few lines of code now do what used to mean opening a spreadsheet. Beyond the day-to-day convenience, organising the data this way lays the groundwork for generative design further down the line.
