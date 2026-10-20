# Minimal Design System

A lightweight, performance-focused React component library built around dark mode aesthetics, clean neutral palettes, and subtle glassmorphism.

## Overview

This design system provides a set of reusable UI components designed for modern web applications. It emphasizes fluid transitions, strict neutral color constraints, and subtle border hierarchy without relying on heavy drop shadows.

## Design Principles

- **Dark Native**: Engineered specifically for dark mode interfaces using layered transparency.
- **Subtle Glassmorphism**: Utilizes `backdrop-filter` blur effects for depth rather than heavy drop shadows.
- **60fps Micro-interactions**: Smooth state transitions (`hover`, `active`) using hardware-accelerated CSS properties.
- **Zero Heavy Dependencies**: Pure React with CSS Modules for scoped, performant styling.

## Project Structure

```text
├── style.css                 
└── src/
    └── components/
        ├── Button.jsx        
        ├── Button.module.css 
        ├── GlassCard.jsx     
        └── GlassCard.module.css
```

## Usage Example

```jsx
import './style.css';
import { Button } from './src/components/Button';
import { GlassCard } from './src/components/GlassCard';

export default function App() {
  return (
    <GlassCard description="Clean component example" title="Minimal UI">
      <Button>Action</Button>
    </GlassCard>
  );
}
```