---
title: "Mammo-CLIP Vision-Language Model"
description: "CLIP-style contrastive learning foundation model specialized for mammography analysis and radiology report alignment"
long_description: "Engineered and evaluated an OpenAI CLIP-style Vision-Language Model (Mammo-CLIP) to align mammogram images with radiology reports, utilizing EfficientNet backbone and contrastive learning to enhance clinical decision-making with zero-shot capabilities."
domains:
  - name: "AI/ML"
    slug: "ai-ml"
  - name: "Computer Vision"
    slug: "computer-vision"
  - name: "Medical Imaging"
    slug: "medical-imaging"
period: "May 2025 - Present"
organization: "Arizona State University"
github_url: "https://github.com/pranaypalem/MammoCLIP_Pranay"
show_code_button: true
cover_image: "/assets/images/projects/MammoClip-cover.png"
preview_image: "/assets/images/projects/MammoClip-cover.png"
technologies:
  - "PyTorch"
  - "EfficientNet"
  - "CUDA"
  - "PyTorch DDP"
  - "DICOM Processing"
tags:
  - "Computer Vision"
  - "NLP"
  - "Medical AI"
  - "Contrastive Learning"
highlights:
  - "Implemented EfficientNet-based contrastive learning for medical imaging"
  - "Developed zero-shot evaluation capabilities for mammography analysis"
  - "Created multi-dataset support for RSNA and VinDr mammogram datasets"
  - "Applied multi-GPU distributed training with modular architecture"
---

## Introduction

Mammo-CLIP represents a significant advancement in medical AI, specifically designed for mammogram analysis and interpretation. This work adapts OpenAI's CLIP architecture to create a specialized vision-language model for the medical domain, enabling alignment between mammogram images and radiology reports through contrastive learning.

## Skills Used

- **Computer Vision**: EfficientNet architecture and medical image processing
- **Natural Language Processing**: Transformer-based text encoding for radiology reports
- **Contrastive Learning**: Vision-language alignment with NT-Xent loss
- **Medical AI**: DICOM processing and clinical data standardization
- **Distributed Computing**: Multi-GPU training with PyTorch DDP

## Project

The Mammo-CLIP project addresses critical challenges in medical imaging by creating a foundation model capable of understanding both visual mammogram content and corresponding textual descriptions. Using EfficientNet (B2/B5) as the vision backbone, the system learns joint representations of mammogram images and radiology reports through contrastive learning objectives.

The implementation features comprehensive preprocessing pipelines for DICOM to PNG conversion, medical image standardization, and text normalization. The modular architecture supports multiple datasets including RSNA and VinDr mammography collections, enabling robust training across diverse clinical scenarios.

Zero-shot evaluation capabilities allow the model to analyze new mammogram cases without additional training, making it valuable for clinical deployment. The system demonstrates enhanced diagnostic support through multimodal analysis, providing interpretable outputs that assist radiologists in clinical decision-making while maintaining transparency through attention visualization mechanisms.