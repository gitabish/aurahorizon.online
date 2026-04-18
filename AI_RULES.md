# Aurahorizon Project Rules

## Tech Stack
- **Framework**: React 18 with Vite and TypeScript.
- **Styling**: Tailwind CSS for utility-first responsive design.
- **Animations**: Framer Motion for all scroll-triggered, layout, and micro-interactions.
- **3D Graphics**: React Three Fiber (@react-three/fiber) and Drei (@react-three/drei) for immersive WebGL elements.
- **Icons**: Lucide React for consistent, scalable vector icons.
- **Components**: Shadcn UI (Radix UI) for accessible, high-quality UI primitives.
- **Forms**: React Hook Form with Zod validation for robust user input.
- **State Management**: React Context and TanStack Query for server state.

## Library Usage Rules
- **Framer Motion**: Use `useScroll` and `useTransform` for parallax effects. Prefer `spring` transitions over `tween` for a more organic, premium feel.
- **React Three Fiber**: Keep 3D scenes lightweight. Use `Float` and `MeshDistortMaterial` for subtle, high-end background effects.
- **Tailwind CSS**: Use custom HSL variables for the "Dark Cosmic" theme. Utilize `backdrop-blur` and custom gradients for "glassmorphism" effects.
- **Typography**: Use `Space Grotesk` for high-impact headings and `Inter` for readable body text. Maintain a strict vertical rhythm and generous whitespace.
- **Performance**: Lazy load 3D components and use optimized image formats. Ensure all animations are GPU-accelerated.