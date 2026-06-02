---
title: "3D Bridge Builder"
summary: "A microservices web app with a live 3D bridge visualisation that puts early-stage bridge design in the hands of clients and architects."
order: 7
role: "Product owner & architect"
period: "2025"
tech: ["Python", "Unity", "Microservices", "GitLab", "Scrum"]
---

I conceived a web app to make feeding inputs into the [Traffic Bridge Tool](/work/traffic-bridge-tool) genuinely easy. A user interface that shows input parameters live inside a **3D bridge visualisation built in Unity**.

The backend is a **microservices architecture**: one service wraps the Traffic Bridge Tool, another estimates construction cost from the inputs, and a third calculates the Environmental Cost Indicator (MKI) score. The frontend surfaces cost and MKI in real time, and the app exchanges results with [ANT CDE](https://os.antcde.io/info).

The goal is to close the gap between clients and contractors by making bridge design approachable early on, letting government bodies or architects produce draft designs that speed up permit applications. I designed the microservices architecture, wrote the project plan, and acted as product owner through development.
