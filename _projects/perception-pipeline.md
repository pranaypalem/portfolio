---
title: "Perception Pipeline with SDG & Domain Randomization"
description: "End-to-end robotic perception pipeline with LiDAR SLAM, RRT exploration, and YOLOv8 object detection"
long_description: "Developed an end-to-end robotic perception pipeline integrating LiDAR-based SLAM, RRT exploration, and YOLOv8 object detection with 95% validation accuracy under Software-in-the-Loop (SIL) testing."
domain: "Robotics"
domain_slug: "robotics"
period: "Jan 2025 - May 2025"
organization: "Arizona State University"
github_url: "https://github.com/pranaypalem/perception-pipeline"
cover_image: "/assets/images/projects/perception-pipeline-cover.jpg"
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
  - "Deployed optimized model achieving sub-50ms latency on edge devices"
---

## Project Overview

This comprehensive robotic perception pipeline project integrates multiple cutting-edge technologies to create a robust autonomous navigation and object detection system. The pipeline combines simultaneous localization and mapping (SLAM), path planning, and real-time object detection in a unified ROS 2 architecture.

![Cover Image]({{ page.cover_image | relative_url }})
*End-to-end robotic perception pipeline in Isaac Sim environment*

## System Architecture

### Core Components
1. **LiDAR-based SLAM**: Real-time mapping and localization using advanced sensor fusion
2. **RRT Exploration**: Rapidly-exploring Random Tree algorithm for autonomous exploration
3. **YOLOv8 Detection**: State-of-the-art object detection optimized for robotics applications
4. **Domain Randomization**: Synthetic data generation for robust model training

### Integration Framework
- **ROS 2 Humble**: Modern robotics middleware for distributed computing
- **Isaac Sim**: NVIDIA's physics-accurate simulation environment
- **TensorRT**: GPU-accelerated inference optimization

## Technical Implementation

### SLAM System
```python
# LiDAR processing pipeline
def process_lidar_data(self, scan_msg):
    # Point cloud preprocessing
    points = self.convert_scan_to_points(scan_msg)
    
    # SLAM update
    pose_estimate = self.slam_backend.update(points)
    
    # Map update
    self.occupancy_grid.update(points, pose_estimate)
    
    return pose_estimate
```

### Object Detection Pipeline
- **Model**: YOLOv8n optimized for real-time inference
- **Input Resolution**: 640x640 pixels for optimal speed-accuracy tradeoff
- **Post-processing**: Non-maximum suppression with confidence thresholding

### Domain Randomization
- **Lighting Variations**: Dynamic illumination changes
- **Texture Randomization**: Surface material modifications
- **Geometric Variations**: Object placement and orientation changes

## Performance Metrics

### Accuracy Results
- **Object Detection**: 95% mAP@0.5 on validation dataset
- **SLAM Accuracy**: <2cm localization error in structured environments
- **Exploration Coverage**: 98% area coverage efficiency

### Real-time Performance
- **Detection Latency**: <50ms on NVIDIA Jetson Xavier NX
- **SLAM Update Rate**: 20Hz consistent performance
- **Memory Usage**: <4GB total system memory

## Deployment and Testing

### Hardware Platforms
- **Development**: High-performance workstation with RTX 4090
- **Deployment**: NVIDIA Jetson Xavier NX edge computing platform
- **Sensors**: Velodyne VLP-16 LiDAR, RealSense D435 camera

### Validation Environment
- **Simulation**: Isaac Sim with photorealistic environments
- **Real-world Testing**: Laboratory and outdoor scenarios
- **Stress Testing**: Various lighting and weather conditions

## Key Innovations

1. **Unified Pipeline**: Seamless integration of perception, mapping, and planning
2. **Edge Optimization**: Efficient deployment on resource-constrained hardware
3. **Synthetic Data**: Large-scale dataset generation through domain randomization
4. **Modular Design**: Flexible architecture for different robotic platforms

## Future Work

- **Multi-Robot Coordination**: Extending to collaborative mapping scenarios
- **Dynamic Objects**: Enhanced tracking of moving obstacles
- **Semantic SLAM**: Integration of semantic understanding with geometric mapping