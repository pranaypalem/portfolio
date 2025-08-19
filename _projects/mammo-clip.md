---
title: "Mammo-CLIP Vision-Language Model"
description: "OpenAI CLIP-style Vision-Language Model for mammogram analysis with radiology reports alignment"
long_description: "Engineered and evaluated an OpenAI CLIP-style Vision-Language Model (Mammo-CLIP) to align mammogram images with radiology reports, utilizing data-driven methodologies to enhance clinical decision-making."
domain: "AI/ML"
domain_slug: "ai-ml"
period: "May 2025 - Present"
organization: "Arizona State University"
github_url: "https://github.com/pranaypalem/MammoCLIP_Pranay"
cover_image: "/assets/images/projects/MammoClip-cover.png"
preview_image: "/assets/images/projects/MammoClip-cover.png"
technologies:
  - "PyTorch"
  - "CLIP"
  - "Transformers"
  - "OpenCV"
  - "Grad-CAM"
tags:
  - "Computer Vision"
  - "NLP"
  - "Medical AI"
  - "Deep Learning"
highlights:
  - "Implemented NLP-integrated multimodal learning with attention heatmaps"
  - "Applied explainable AI methods (Grad-CAM) for transparency"
  - "Enhanced clinical decision-making through data-driven methodologies"
---

## Project Overview

The Mammo-CLIP project represents a significant advancement in medical AI, specifically designed for mammogram analysis and interpretation. This work builds upon OpenAI's CLIP (Contrastive Language-Image Pre-training) architecture to create a specialized vision-language model for the medical domain.

![Cover Image]({{ page.cover_image | relative_url }})
*Mammo-CLIP architecture for multimodal mammogram analysis*

## Technical Implementation

### Architecture Design
- **Vision Encoder**: Modified ResNet-based architecture optimized for mammogram image processing
- **Text Encoder**: Transformer-based encoder fine-tuned for radiology report language
- **Contrastive Learning**: Joint embedding space for mammogram-report pairs

### Key Features
- **Multimodal Learning**: Simultaneous processing of visual mammogram data and textual radiology reports
- **Attention Mechanisms**: Integrated attention heatmaps for visual interpretation
- **Explainable AI**: Grad-CAM implementation for model transparency

## Results and Impact

The Mammo-CLIP model demonstrates significant improvements in:
- **Clinical Accuracy**: Enhanced diagnostic support through multimodal analysis
- **Interpretability**: Clear visualization of model attention areas
- **Efficiency**: Streamlined workflow for radiologists and medical professionals

## Research Significance

This project contributes to the growing field of medical AI by:
1. Bridging the gap between computer vision and natural language processing in healthcare
2. Providing interpretable AI solutions for critical medical decisions
3. Establishing a framework for future medical vision-language models