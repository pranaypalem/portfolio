---
title: "Perception Pipeline with SDG & Domain Randomization"
description: "End-to-end robotic perception pipeline with LiDAR SLAM, RRT exploration, and YOLOv8 object detection"
long_description: "Developed comprehensive end-to-end robotic perception pipeline integrating LiDAR-based SLAM, RRT exploration, and YOLOv8 object detection, achieving 95% validation accuracy with sub-50ms latency on NVIDIA Jetson Xavier NX through domain randomization and 5,000+ synthetic training images."
domains:
  - name: "Robotics"
    slug: "robotics"
  - name: "Computer Vision"
    slug: "computer-vision"
  - name: "Perception"
    slug: "perception"
period: "Jan 2025 - May 2025"
organization: "Arizona State University"
github_url: "https://github.com/pranaypalem/perception-pipeline"
show_code_button: false
cover_image: "/assets/images/projects/perception-pipeline-preview.gif"
preview_image: "/assets/images/projects/perception-pipeline-preview.gif"
technologies:
  - "ROS 2"
  - "YOLOv8"
  - "Isaac Sim"
  - "TensorRT"
  - "NVIDIA Jetson"
tags:
  - "SLAM"
  - "Object Detection"
  - "ROS 2"
  - "Computer Vision"
highlights:
  - "Integrated LiDAR-based SLAM with RRT exploration algorithms"
  - "Generated 5,000+ synthetic training images using domain randomization"
  - "Achieved 95% validation accuracy with sub-50ms edge deployment latency"
  - "Implemented unified ROS 2 architecture for distributed computing"
---

## Introduction

This comprehensive robotic perception pipeline project integrates cutting-edge technologies to create a robust autonomous navigation and object detection system. The pipeline combines simultaneous localization and mapping (SLAM), path planning, and real-time object detection in a unified ROS 2 architecture optimized for real-world deployment.

## Skills Used

- **Robotic Perception**: LiDAR processing and sensor fusion techniques
- **Computer Vision**: YOLOv8 optimization and real-time object detection
- **SLAM Systems**: Mapping and localization algorithm implementation
- **Edge Computing**: TensorRT optimization for resource-constrained hardware
- **Synthetic Data Generation**: Domain randomization for robust model training

## Project

The end-to-end perception pipeline addresses critical challenges in autonomous robotics by seamlessly integrating mapping, exploration, and object detection capabilities. The system utilizes LiDAR-based SLAM for real-time mapping and localization while RRT exploration algorithms enable autonomous environment discovery and navigation.

YOLOv8 object detection achieves 95% validation accuracy through comprehensive training on 5,000+ synthetic images generated using Isaac Sim's domain randomization techniques. TensorRT optimization enables sub-50ms inference latency on NVIDIA Jetson Xavier NX, making the system suitable for real-time autonomous operations.

The unified ROS 2 architecture provides distributed computing capabilities with modular design principles, ensuring scalability across different robotic platforms. Software-in-the-Loop testing validates system performance across diverse operational scenarios, establishing a robust foundation for autonomous navigation applications in dynamic environments with reliable perception and decision-making capabilities.