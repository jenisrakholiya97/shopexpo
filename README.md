# Ethan Industries — Precision Engineering & Global Export Portal

A high-performance web platform built with **TanStack Start**, **React 19**, and **Tailwind CSS v4** for **Ethan Industries** — a premier manufacturer and international exporter of high-precision metal components based in Rajkot, India, with technical representation in Germany.

Repository: [https://github.com/jenisrakholiya97/shopexpo](https://github.com/jenisrakholiya97/shopexpo)  
Branch: `main`  
Live Production URL: [https://shopexpo-tan.vercel.app](https://shopexpo-tan.vercel.app)  

---

## 🚀 Core Features & Capabilities

### 1. Direct Export Products & Manufacturing Scope
* **Precision Casting Production (0.05 kg – 5,000 kg):** Sand Casting (Resin & Green Sand), Investment Casting (Lost Wax), High-Pressure Die Casting (HPDC), Gravity Die Casting (GDC), and Centrifugal Casting.
* **Heavy & Precision Forgings (0.05 kg – 4,000 kg):** Closed Die Forging, Open Die Forging, and Seamless Rolled Rings with continuous grain-flow orientation.
* **Tight-Tolerance CNC Machining (±0.005 mm):** 3, 4 & 5-Axis Milling (VMC/HMC), CNC Turning Centers, Honing, Grinding, and ready-to-assemble sub-assembly integration.
* **Metallurgical Quality & Certification:** In-house 32-channel optical emission spectrometry, CMM balloon inspection, Charpy impact testing, NDT (UT/MPI/RT), and EN 10204 3.1 & 3.2 inspection certification with 100% heat-number traceability.

### 2. Global Export & Logistics Hub
* **Deep-Sea Mundra Port Advantage:** Located 280 km from Port Mundra (APSEZ) with direct weekly sailings to major global container hubs (Hamburg, Rotterdam, Antwerp, New York, etc.).
* **International Incoterms:** Complete turnkey **DDP (Delivered Duty Paid)** door-to-door execution across Europe & USA, alongside CIF, FOB Mundra, and EXW terms.
* **Seaworthy Packaging:** ISPM-15 certified heat-treated wooden boxes, heavy export crates, and VCI molecular anti-corrosion barrier wrapping with silica desiccants.

### 3. Multilingual System
* **Live Language Switcher:** Interactive dropdown component supporting 5 languages:
  - 🇬🇧 English (EN)
  - 🇩🇪 Deutsch (DE)
  - 🇫🇷 Français (FR)
  - 🇪🇸 Español (ES)
  - 🇮🇹 Italiano (IT)
* Dynamic context-based translations with localStorage persistence across all page views.

### 4. Interactive Technical RFQ Modal
* **Full-Featured Inquiry Drawer/Modal:** Allows international buyers to configure technology (Casting/Forging/CNC), material alloys, quantities, destination ports/cities, target currencies (EUR/USD/GBP), packaging standards, and attach technical 2D drawings / 3D CAD models.

---

## 🛠 Tech Stack

* **Framework:** [TanStack Start](https://tanstack.com/start) (Full-stack SSR/SSG with Nitro server adapter)
* **Routing:** [TanStack Router](https://tanstack.com/router) (Type-safe file-based routing)
* **UI Library:** [React 19](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Icons:** [Lucide React](https://lucide.dev/)
* **Build Tool:** [Vite 8](https://vitejs.dev/)

---

## 📦 Getting Started

### Prerequisites
* Node.js 18+
* npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jenisrakholiya97/shopexpo.git

# Navigate to project directory
cd shopexpo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be accessible at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### Building for Production

```bash
npm run build
```

The output bundle is generated into `.output/` ready for deployment on any Node-compatible environment or cloud host.
