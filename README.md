# Minimal Design System

A lightweight, performance-focused React component library built around dark mode aesthetics, clean neutral palettes, subtle glassmorphism, and responsive micro-interactions.

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

## Project Structure

```text
├── index.html
├── package.json
├── style.css                 # Global theme variables & resets
└── src/
    ├── App.jsx               # Dashboard showcase & component preview
    ├── main.jsx              # Application root mount
    └── components/
        ├── Badge.jsx         # Status badge logic
        ├── Badge.module.css  # Scoped badge styles
        ├── Button.jsx        # Button component logic
        ├── Button.module.css # Scoped button styles
        ├── GlassCard.jsx     # Glass container logic
        ├── GlassCard.module.css
        ├── Input.jsx         # Text input field logic
        └── Input.module.css  # Scoped input styles
```

## Usage Example

```jsx
import './style.css';
import { Button } from './src/components/Button';
import { GlassCard } from './src/components/GlassCard';
import { Input } from './src/components/Input';
import { Badge } from './src/components/Badge';

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