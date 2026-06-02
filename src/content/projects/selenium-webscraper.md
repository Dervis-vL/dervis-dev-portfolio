---
title: "Archive Scraper with GUI"
summary: "A one-click desktop tool that replaced ~2,500 manual clicks per batch when pulling structural archive data for a maintenance project."
order: 8
role: "Developer"
period: "Engineering project, Amsterdam"
tech: ["Python", "Tkinter", "Selenium", "regex"]
repo: "https://github.com/Dervis-vL/selenium_webscraper_aip"
---

This tool came out of a large-scale maintenance project on civil structures in Amsterdam, where assessing each structure means digging through the city's archive data to check whether the original design still meets standard.

The problem was sheer tedium. Archive files live behind a login, each structure has to be navigated to and downloaded by hand, and structures are filed in batches of 25–30 — each with anywhere from 20 to 200 files. Collecting a single batch meant **over 2,500 clicks**.

So I built a small **Tkinter** GUI on top of **Selenium**: you enter your login, choose where to save, give it a batch number, and pick a single structure or the whole batch. One button press, and it downloads everything in the background while you do something more useful.
