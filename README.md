# Minimal Design System

A lightweight, performance-focused React component library built around dark mode aesthetics, clean neutral palettes, subtle glassmorphism, and responsive micro-interactions.

 <img width="974" height="656" alt="preview" src="https://github.com/user-attachments/assets/7e881564-ae65-4475-b23a-4e2eeb36960f" />

## Overview

This design system provides a collection of reusable UI components designed for modern web applications and admin dashboards. It emphasizes fluid state transitions, strict neutral color constraints, and subtle border hierarchies without relying on heavy drop shadows or aggressive gradients.

## Design Principles

- **Dark Native**: Engineered specifically for dark mode interfaces using layered transparency and neutral tones.
- **Subtle Glassmorphism**: Utilizes `backdrop-filter` blur effects for structural depth rather than heavy drop shadows.
- **Micro-interactions**: Hardware-accelerated CSS state transitions (`hover`, `focus`, `active`) designed for a fluid experience.
- **Zero Heavy Dependencies**: Pure React with CSS Modules for scoped, performant, and zero-bleed styling.

## Component Library

- **Button**: Interactive action element supporting custom states and subtle hover elevation.
- **GlassCard**: Structural glass container featuring backdrop blur and border highlighting.
- **Input**: Reusable text input field with focused state borders and label styling.
- **Badge**: Compact status indicator with custom state indicators (e.g., operational/success states).
- **Modal**: Floating dialog box with backdrop blur for focused interactions.

## Project Structure

```text
├── index.html
├── package.json
├── preview.png               # Project preview image
├── style.css                 # Global theme variables & resets
└── src/
    ├── App.jsx               # Dashboard showcase & component preview
    ├── main.jsx              # Application root mount
    └── components/
        ├── Badge.jsx         
        ├── Badge.module.css  
        ├── Button.jsx        
        ├── Button.module.css 
        ├── GlassCard.jsx     
        ├── GlassCard.module.css
        ├── Input.jsx         
        ├── Input.module.css  
        ├── Modal.jsx         
        └── Modal.module.css  
```

## Usage Example

```jsx
import './style.css';
import { Button } from './src/components/Button';
import { GlassCard } from './src/components/GlassCard';
import { Input } from './src/components/Input';
import { Badge } from './src/components/Badge';
import { Modal } from './src/components/Modal';

export default function App() {
  return (
    <GlassCard description="Manage system access keys." title="API Authentication">
      <Badge status="success">Operational</Badge>
      <Input label="Application Name" placeholder="ex: System API"/>
      <Button>Generate Key</Button>
    </GlassCard>
  );
}
```
