---
title: "ANT v2 Python Package"
summary: "An async Python client for the ANT CDE API whose data models generate themselves from the live Swagger spec via CI/CD."
order: 4
role: "Developer"
period: "2024"
tech: ["Python", "asyncio", "GitLab CI/CD", "Poetry", "PyPI"]
link: "https://pypi.org/project/ANTConnect/"
---

For the CollaborAll project I wrote a second-generation Python package that talks to the ANT CDE API **asynchronously**.

The interesting part is that it largely writes itself. A pipeline step fetches the entire data model from **Swagger**, parses it, and **generates the Python classes and methods automatically**. That generation runs inside **GitLab CI/CD**: on trigger it pulls the latest data model, checks for changes, regenerates the package, bumps the version, runs pytest, lints, validates docstrings, builds the docs on Read the Docs, and publishes to the PyPI server - all hands-off.

The result is a client library that stays in lockstep with the API it wraps, without anyone hand-maintaining model code.
