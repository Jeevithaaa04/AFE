# Project 2: Hugging Face Model Card Analysis

## Chosen Model Details
* **Model Name:** zai-org/GLM-5.2
* **Developer:** Zhipu AI / Z.ai
* **License:** MIT Open Source (Free to use anywhere)
* **Primary Task:** Text Generation, Coding, and AI Agent tasks

---

## Technical Specifications
* **Model Size:** 753 Billion total parameters.
* **Context Window:** 1 Million tokens (can process massive amounts of text or entire codebases at once).
* **Key Architecture Feature (IndexShare):** It reuses its sorting index across every four layers. This makes the model run much faster, reducing processing work (FLOPs) by 2.9× when handling long text.

---

## Dataset & Training Details
* **Dataset Size:** Trained on a massive dataset of 28.5 Trillion tokens of data.
* **Focus Areas:** Heavy focus on programming code repositories, math problems, and multi-step reasoning tasks.

---

## Performance Benchmarks
Here is how the model scored on major industry standard tests:

* **GPQA Diamond (Hard Reasoning):** 91.2%
* **AIME 2026 (Advanced Mathematics):** 99.2%
* **SWE-bench Pro (Real-world Coding):** 62.1% (fixing software bugs autonomously)
* **Terminal-Bench 2.1 (Using Terminal/Shell):** 81.0%

---

## Supported Local Deployment Tools
You can run this model locally using these popular frameworks:
* vLLM
* SGLang
* Hugging Face Transformers
* Unsloth