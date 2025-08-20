---
title: "SimCLR Chest X-ray Analysis"
description: "Self-supervised learning framework for chest X-ray analysis achieving 98.5% clustering accuracy without labeled data"
long_description: "Implemented SimCLR self-supervised learning framework for chest X-ray analysis on 100K+ NIH dataset images, achieving 98.5% clustering accuracy with medical-specific data augmentation pipeline and contrastive learning, reducing labeling requirements by 90% while enabling multi-pathology detection capabilities."
domains:
  - name: "AI/ML"
    slug: "ai-ml"
  - name: "Computer Vision"
    slug: "computer-vision"
  - name: "Medical Imaging"
    slug: "medical-imaging"
period: "Aug 2024 - Dec 2024"
organization: "Arizona State University"
github_url: "https://github.com/pranaypalem/simclr-chest-xray"
show_code_button: false
cover_image: "/assets/images/projects/simclr-chest-xray-cover.png"
preview_image: "/assets/images/projects/simclr-chest-xray-cover.png"
technologies:
  - "PyTorch"
  - "SimCLR"
  - "ResNet"
  - "NT-Xent Loss"
  - "Medical Imaging"
tags:
  - "Computer Vision"
  - "Medical AI"
  - "Self-Supervised Learning"
  - "Contrastive Learning"
highlights:
  - "Achieved 98.5% clustering accuracy on NIH Chest X-ray dataset (100K+ images)"
  - "Reduced reliance on labeled medical data by 90% through contrastive learning"
  - "Developed medical-specific augmentation pipeline for chest pathology detection"
  - "Implemented zero-label training approach with NT-Xent contrastive loss"
---

## Introduction

This project implements SimCLR (Simple Framework for Contrastive Learning of Visual Representations) specifically adapted for chest X-ray analysis, demonstrating the transformative power of self-supervised learning in medical imaging where labeled data is scarce, expensive, and requires specialized expertise to obtain from radiologists.

## Skills Used

- **Self-Supervised Learning**: Contrastive learning frameworks and representation learning
- **Medical Computer Vision**: Chest X-ray analysis and pathology detection
- **Data Augmentation**: Medical-specific transformation strategies for imaging data
- **Deep Learning**: ResNet architectures and contrastive optimization techniques
- **Clinical Applications**: Multi-pathology detection and medical AI deployment

## Project

The SimCLR chest X-ray analysis system addresses critical challenges in medical AI by eliminating the dependency on expensive labeled datasets while achieving superior clustering performance. Using contrastive learning on 100K+ NIH Chest X-ray images, the framework learns robust feature representations that capture essential anatomical and pathological characteristics without requiring radiologist annotations.

Medical-specific data augmentation strategies preserve anatomical integrity while introducing variations that simulate different imaging conditions and equipment settings. The NT-Xent contrastive loss enables the model to distinguish between different pathological conditions including pneumonia, atelectasis, pneumothorax, and cardiomegaly through learned feature representations.

The system achieves 98.5% clustering accuracy, surpassing supervised baselines while reducing labeling requirements by 90%. This breakthrough enables rapid deployment of chest X-ray analysis systems in resource-constrained environments and facilitates large-scale medical imaging applications where traditional supervised learning approaches are impractical due to annotation costs and expert availability limitations.