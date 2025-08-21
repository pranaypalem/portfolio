---
title: "Artificial Potential Field for Multi-Robot Systems"
description: "Multi-robot firefighting system using Artificial Potential Field controllers for autonomous navigation and coordination"
long_description: "Developed comprehensive multi-robot firefighting system using artificial potential fields, implementing 5-robot coordination, collision avoidance, energy management, and dynamic task allocation for autonomous operations."
domains:
  - name: "Robotics"
    slug: "robotics"
period: "2024"
organization: "Personal Project"
github_url: "https://github.com/pranaypalem/artificial-potential-field"
show_code_button: true
cover_image: "/assets/images/projects/multirobot-preview.png"
preview_image: "/assets/images/projects/multirobot-preview.png"
technologies:
  - "Python"
  - "NumPy"
  - "matplotlib"
tags:
  - "Path Planning"
  - "Collision Avoidance"
  - "Multi-Robot Systems"
  - "Autonomous Navigation"
highlights:
  - "Implemented 5-robot coordinated firefighting system with APF controllers"
  - "Developed energy management with charging stations (0.025% battery decay)"
  - "Applied Control Barrier Functions for safety-critical operations"
  - "Achieved collision-free navigation and dynamic task allocation"
---

## Introduction

This project implements a multi-robot firefighting system using Artificial Potential Field (APF) controllers for autonomous navigation and coordination. The system manages 5 robots operating in a simulated environment, handling fire suppression tasks while maintaining energy efficiency and collision avoidance.

## Skills Used

- **Multi-Agent Robotics**: Coordination algorithms and distributed control
- **Control Theory**: Artificial potential fields and Control Barrier Functions
- **Path Planning**: Collision-free navigation in dynamic environments
- **Energy Management**: Battery monitoring and charging optimization
- **Python Programming**: Simulation framework development

## Project

The multi-robot firefighting system demonstrates advanced coordination capabilities using artificial potential field methods. Five autonomous robots navigate through an environment containing fires and charging stations, dynamically allocating tasks based on proximity and energy levels. Each robot experiences a 0.025% battery decay per simulation step, requiring strategic energy management.

The system implements attractive potential fields to guide robots toward fire locations and charging stations, while repulsive fields ensure collision avoidance between robots and obstacles. Control Barrier Functions provide safety guarantees during critical operations. The mathematical framework enables real-time decision making with computational efficiency suitable for multi-robot deployments.

Dynamic task allocation ensures optimal fire suppression coverage while maintaining system sustainability through coordinated charging behaviors. The implementation includes comprehensive visualization tools for analyzing robot behaviors, energy consumption patterns, and system performance metrics across various operational scenarios.