---
title: "ANT Script Server"
summary: "A Flask service that runs arbitrary Python scripts safely inside isolated Docker containers, exposed over a REST API."
order: 3
role: "Developer"
period: "ANT Common Data Engineering"
tech: ["Python", "Flask", "Docker", "Gunicorn", "SQLite", "Docker Compose"]
link: "https://antcde.io/"
---

For ANT Common Data Engineering I built a server that executes Python scripts on demand inside **isolated Docker containers** — receiving tasks over a REST API, validating the payload, then spinning up a container to run each script in a clean, sandboxed environment.

It's served in production through **Gunicorn**, with configurable workers and threads for scalability. A **SQLite-backed task manager** tracks active jobs and prevents duplicate execution, alongside structured error handling and logging.

The server supports configurable Python versions (3.8–3.12) and a debug mode for local development, and the whole stack ships via **Docker Compose** for one-command deployment. Incoming scripts are wrapped with the imports and API connections they need, so every task runs in a consistent environment regardless of who wrote it.
