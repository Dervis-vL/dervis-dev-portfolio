---
title: "Pizza Platform"
summary: "A pizza-discovery platform - scraper, API and map app — that lets you find world-class pizzerias near you, built on a modern Python monorepo."
order: 1
featured: true
role: "Designer, architect & sole developer"
period: "2025 - present"
tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Streamlit", "uv", "Docker", "Scaleway"]
link: "https://github.com/Dervis-vL/best-pizza-services"
---

## What it is

A side project born from three of my obsessions: good pizza, clean software and clean architecture. The platform collects the world's best pizzerias, sourced from the [50 Top Pizza](https://www.50toppizza.it/) rankings, and puts them on an interactive map so you can discover great pizza near you. Filter by country, ranking or category, and dig into the details of any single place.

It's small in scope on purpose, and deliberately over-engineered for fun. A sandbox where I get to build the kind of clean, production-shaped system I enjoy, end to end, with nobody to answer to but myself.

## Architecture

The whole thing is a **uv-workspace monorepo** split into apps, services and a shared package:

```
scraper → parser → PostgreSQL (source of truth)
                        ↓
                   FastAPI (private API)
                        ↓
                   Streamlit map app (public)
```

- A **scraper** collects ranking data and pizzeria details.
- **Nominatim** turns addresses into coordinates for the map, with a fallback chain to handle the messy reality of international address data.
- **PostgreSQL** is the source of truth, with **SQLAlchemy** for the ORM layer and **Pydantic** models throughout.
- **Pandera** validates dataframes as they move through the pipeline.
- A **FastAPI** service exposes map markers, filters, per-pizzeria detail and a "nearest to me" geo endpoint.
- A **Streamlit** app renders everything on a pydeck map with colour-coded ranking markers.

## Engineering decisions worth mentioning

- **Private-by-network API.** The API has only one consumer, the frontend. So rather than bolt on API keys, the API runs privately and only the Streamlit app is public. The network *is* the security boundary.
- **Serverless and cheap.** Deployed on Scaleway (an EU provider) as two serverless containers that scale to zero when idle, with a managed PostgreSQL behind them. Images are built multi-arch and pushed to a registry.
- **Room to grow.** The architecture leaves space for an Elasticsearch read-layer to power fuzzy, typo-tolerant and geo-radius search — sitting alongside Postgres rather than replacing it.

## Why it matters

It's the clearest single demonstration of how I work today: typed Python, a clean monorepo, real CI/CD, sensible infrastructure choices, architecture that is clear and simple, and a finished thing you can actually click on. Also, the pizza is genuinely good. Have a look at what amazing [pizzeria](https://pizza-platform.streamlit.app/) is near you!
