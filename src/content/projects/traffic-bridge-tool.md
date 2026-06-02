---
title: "Traffic Bridge Tool"
summary: "Automated design software that turns a handful of inputs into a norm-compliant traffic-bridge design — turning a week of work into an hour."
order: 2
featured: true
role: "Lead developer & architect"
period: "Witteveen+Bos"
tech: ["Python", "RFEM", "Revit", "Dynamo", "GitLab", "ANT CDE"]
---

I led the development of a tool that models a complete traffic bridge in **Revit and RFEM** from a small set of fundamental inputs, producing a preliminary design that complies with the relevant norms (Eurocode / ROK). Work that normally took **at least a week** comes out ready to deliver in about **an hour**.

The output is the full set of traditional deliverables: a PDF report, calculation appendices, dimensioned technical drawings, a complete RFEM model with all loads and traffic actions, and a Revit 3D model.

## How it works

I authored the architecture and designed the complete data model. Inputs load into a Python `Bridge` object, which preprocesses the data and hands it to third-party software (RFEM and Revit) for analysis. Inside RFEM an **iterative process decides which foundation piles are needed** based on the bridge geometry. Section results then feed back for assessment and validation, and everything is archived into the report and appendices.

## Why the approach was smart

Rather than one monolithic script, each component became its own reusable Python package — usable not just by this tool but by engineers across the company. That multiplies the value of the work: the same building blocks power several tools, each documented on its own portfolio page.
