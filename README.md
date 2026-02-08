# ✨ Modern 3D Portfolio

A high-performance, visually stunning portfolio built with **Next.js 16**, **Three.js**, and **React Three Fiber**, optimized for **Cloudflare Pages**.

## 🚀 The Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **3D Engine**: [Three.js](https://threejs.org/) with [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- **Helpers**: [@react-three/drei](https://github.com/pmndrs/drei) for essential R3F components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid, utility-first design
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for UI & [GSAP](https://gsap.com/) for complex 3D staging
- **Lint/Format**: [Biome](https://biomejs.dev/) — fast, all-in-one toolchain
- **Package manager**: [pnpm](https://pnpm.io/) — fast, disk-efficient
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) via [OpenNext](https://opennext.js.org/cloudflare)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/install) (`corepack enable && corepack prepare pnpm@latest --activate`)

### Installation

1. **Clone and Install**

   ```bash
   git clone <your-repo-url>
   cd dane-portfolio
   pnpm install
   ```

2. **Development**

   ```bash
   pnpm dev
   ```

3. **Lint & Format**

   ```bash
   pnpm lint        # Check
   pnpm lint:fix    # Check and auto-fix
   pnpm format      # Format only
   ```

4. **Production Build**

   ```bash
   pnpm build
   ```

## ☁️ Cloudflare Deployment

This project uses `@opennextjs/cloudflare` for seamless deployment to Cloudflare Workers/Pages.

```bash
# Preview locally (Workers runtime)
pnpm preview

# Deploy to Cloudflare
pnpm deploy
```

For CI/CD, connect your GitHub or GitLab repository in the Cloudflare dashboard for automatic builds and deployments.

## 📦 Project Structure

- `src/components/canvas` — Three.js components (Scene, models, lights)
- `src/components/ui` — React/Tailwind UI components
- `src/app` — Next.js App Router pages
- `public/models` — Optimized 3D assets (GLTF/GLB)

## 🎨 Design Philosophy

- **Immersive**: 3D elements that respond to mouse movement and scroll
- **Performant**: Optimized meshes, lazy-loaded Canvas, and Draco compression
- **Responsive**: Fluid transitions between mobile and desktop layouts

---

Built with 🤍 by [Dane]
