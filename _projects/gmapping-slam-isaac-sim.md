---
title: "2D SLAM Implementation using GMapping in Isaac Sim"
description: "2D SLAM implementation using GMapping algorithm in photorealistic NVIDIA Isaac Sim hospital environment"
long_description: "Demonstrated autonomous mapping capabilities by teleoperating Nova Carter robot in a photorealistic hospital environment using NVIDIA Isaac Sim, implementing GMapping SLAM algorithm with 2D LiDAR sensor data and ROS Twist commands for comprehensive indoor navigation and mapping."
domains:
  - name: "Robotics"
    slug: "robotics"
  - name: "Simulation"
    slug: "simulation"
period: "2024"
organization: "Personal Project"
github_url: ""
show_code_button: false
cover_image: "/assets/images/projects/Gmapping_SLAM_preview.gif"
preview_image: "/assets/images/projects/Gmapping_SLAM_preview.gif"
technologies:
  - "NVIDIA Isaac Sim"
  - "ROS"
  - "GMapping"
  - "Nova Carter"
  - "2D LiDAR"
tags:
  - "SLAM"
  - "Simulation"
  - "ROS"
  - "Mapping"
  - "Isaac Sim"
highlights:
  - "Simulated Nova Carter robot in photorealistic hospital environment"
  - "Implemented GMapping 2D SLAM algorithm for indoor mapping"
  - "Manual teleoperation using ROS Twist commands"
  - "Generated comprehensive hospital layout map using 2D LiDAR"
---

## Introduction

This project showcases the implementation of Simultaneous Localization and Mapping (SLAM) using the GMapping algorithm in a highly realistic simulation environment. Using NVIDIA Isaac Sim, I created a photorealistic hospital environment and deployed the Nova Carter robot to demonstrate autonomous mapping capabilities in structured indoor spaces.

## Skills Used

- **Robotic Simulation**: NVIDIA Isaac Sim for photorealistic environment modeling
- **SLAM Algorithms**: GMapping implementation for 2D mapping and localization
- **Robot Control**: Manual teleoperation using ROS Twist commands
- **Sensor Integration**: 2D LiDAR data processing for mapping applications
- **ROS Integration**: Robot Operating System for sensor data and control commands

## Project

The project demonstrates the power of simulation-based robotics development by leveraging NVIDIA Isaac Sim's photorealistic rendering capabilities to create an immersive hospital environment. The Nova Carter robot, equipped with a 2D LiDAR sensor, was manually teleoperated through the environment while simultaneously building a map using the GMapping SLAM algorithm.

GMapping, while a 2D algorithm, remains a foundational and powerful tool for robot navigation in structured indoor environments. The algorithm effectively processes LiDAR scan data to create accurate occupancy grid maps, enabling the robot to understand its surroundings and navigate autonomously in future deployments.

The photorealistic nature of Isaac Sim provides an ideal testing ground for robotic perception systems, offering a bridge between simulation and real-world deployment. This simulation environment significantly eases the development and validation of perception pipelines before applying them to physical robots, demonstrating the potential for advanced robotics development in controlled virtual environments.

The resulting map captures the detailed layout of the hospital environment, showcasing the effectiveness of 2D SLAM techniques in structured indoor spaces and establishing a foundation for future autonomous navigation projects.