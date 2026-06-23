# AFE Final Project Submission

This repository contains the complete submission for all four required AFE projects.

---

## Project 1: GitHub Setup & First Commit
* **Status:** Completed
* **Details:** GitHub account successfully initialized. This entire repository, along with its version history, files, and directories, represents the verified initial commits and version tracking.

---

## Project 2: Hugging Face Model Card Analysis
* **Selected Model:** `zai-org/GLM-5.2`
* **Developer:** Zhipu AI / Z.ai
* **License:** MIT Open Source

### Technical Specifications
* **Model Size:** 753 Billion total parameters.
* **Context Window:** 1 Million tokens (capable of processing massive text/code streams simultaneously).
* **Key Architecture Feature (IndexShare):** Reuses the sorting index across every four layers. This reduces processing overhead (FLOPs) by 2.9× during long-context tasks.

### Training & Dataset
* **Dataset Size:** Pre-trained on 28.5 Trillion tokens.
* **Focus Areas:** Heavy emphasis on programming repositories, mathematics, and multi-step reasoning.

### Performance Benchmarks
* **GPQA Diamond (Hard Reasoning):** 91.2%
* **AIME 2026 (Advanced Mathematics):** 99.2%
* **SWE-bench Pro (Software Engineering):** 62.1%
* **Terminal-Bench 2.1 (OS/Shell Execution):** 81.0%

---

## Project 3: E-Profile Website
* **Status:** Completed & Deployed Live
* **Live Deployment Link:** [INSERT_YOUR_LIVE_PORTFOLIO_LINK_HERE]
* **Code Location:** Located inside the `/e-profile` directory.
* **Description:** A clean, responsive portfolio website showcasing professional skills, education, technical focus areas, and project links. 

---

## Project 4: News Website
* **Status:** Completed & Deployed Live
* **Live Deployment Link:** [INSERT_YOUR_LIVE_NEWS_LINK_HERE]
* **Code Location:** Located inside the `/news-website` directory.
* **Description:** A dynamic web application that connects to a live News API endpoint. It fetches real-time news data asynchronously, parses the JSON payload, and renders the current articles dynamically on a clean user interface.