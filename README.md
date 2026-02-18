# XRBridge

**Deploy Computer Vision to Meta Quest**

Platform for connecting perception models to Quest passthrough as real-time, world-locked overlays. Voice-controlled, model-agnostic, deployed as infrastructure.

## Overview

XRBridge enables developers to deploy computer vision capabilities to Meta Quest and render their outputs as world-locked overlays on live passthrough — in real time, in stereo, controlled entirely by voice.

A user wearing Quest 3 says, "Hey Vibe, blur the laptop." The system understands the request, identifies the object, and applies a spatial effect that remains anchored as the user moves. The result feels native to the headset.

## Platform Capabilities

### Voice Interface
Users speak naturally — the system translates intent into spatial changes. Commands can be direct ("Highlight the exit") or contextual ("It's too bright in here"). No menus, no controllers.

### Model-Agnostic Architecture
Deploy any perception model — segmentation, depth understanding, activity recognition, gesture awareness, or broader scene intelligence. The headset experience remains consistent across different capabilities.

### World-Locked Overlays
Spatial effects stay anchored to physical objects through real-time tracking and stereo projection. Overlays persist as users move through space.

### Backend Infrastructure
Deploy capabilities as services. Environments move from local development to cloud production without changes to the user experience. Updates are managed centrally.

## Current Implementation

Text-prompted object segmentation using SAM3:
- Name an object, the system acts on it
- 17 real-time spatial effects (blur, dim, highlight, mask, color change, etc.)
- 30fps rendering with world-locked tracking
- Natural language understanding via voice

## What You Can Build

- **Accessibility Tools**: Reduce visual overload, highlight critical information
- **Enterprise Systems**: Annotate workspaces, redact sensitive material, guide physical tasks
- **Educational Overlays**: Spatial instructions for hands-on learning
- **Context-Aware Experiences**: Scene understanding, activity recognition, gesture response

## Why XRBridge

Meta provides passthrough access, spatial anchors, hand tracking, and depth APIs. What's missing is a managed path from perception intelligence to persistent, world-locked overlays. XRBridge provides that path.

Developers can ship perception-driven experiences without solving real-time streaming, stereo rendering, or spatial projection themselves.

## Team

- [Aadit Krishna](https://www.linkedin.com/in/aaditkrishna/)
- [Ajay Raj](https://www.linkedin.com/in/ajay-raj-670850230/)
- [Jay Wankhede](https://www.linkedin.com/in/jaywankhede/)
- [Marshall Mandell](https://www.linkedin.com/in/marshall-mandell/)

## Links

- [Live Demo](https://vercel.com/aadikrishna04s-projects/v0-augmented-reality-website)
- [GitHub Repository](https://github.com/ajayraj-cmu/SocialSenseAR/)
