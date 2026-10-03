# 🚀 Keploy DevRel Candidate Assignment: Go (Echo + PostgreSQL) Quickstart & Documentation Site

> A production-grade, developer-focused static documentation site built with **Next.js**, **MDX**, and styled using the **Asana Design System** (`designmd.co/d/asana`).

---

## 🎯 Overview & Submission Details

This repository represents the completed candidate assignment for the **DevRel Role at Keploy**.

- 🔗 **GitHub Repository**: [https://github.com/Vanshiksoni/Keploy_Assignment](https://github.com/Vanshiksoni/Keploy_Assignment)
- 🌐 **Live Vercel Deployment**: [https://keploy-assignment-tau.vercel.app](https://keploy-assignment-tau.vercel.app) *(or your Vercel URL)*
- 📄 **Assignment Spec**: Based on `devrel code + content assignment.pdf` (Echo + PostgreSQL Go Quickstart)

---

## 🌟 Key Features & DevRel Highlights

1. **Interactive CLI Terminal Simulator (`<InteractiveTerminal />`)**:
   - Allows developers visiting the site to simulate running `keploy record` and `keploy test` live in their browser.
   - Shows real-time network interception logs, captured PostgreSQL queries, and auto-generated YAML test specs.

2. **Interactive Architecture Flow (`<ArchitectureFlow />`)**:
   - Step-by-step visual diagram illustrating how Keploy sits transparently between HTTP clients, Echo Go servers, and PostgreSQL containers.

3. **Asana DesignMD Aesthetic (`designmd.co/d/asana`)**:
   - Styled following Asana's minimal-maximalist design language (`#646f79` warm gray pills, rounded 16px cards, geometric sans typography).

4. **Command Palette Documentation Search (`⌘K` / `Ctrl+K`)**:
   - Instant search modal across all documentation sections, CLI commands, and Go driver compatibility notes.

5. **Full Theme System (Light / Dark Mode)**:
   - Built with Tailwind CSS v4 `@custom-variant dark` for seamless theme switching and high contrast across all components.

---

## 💡 Key DevRel Insights: Why Keploy for Go Developers?

Go microservices heavily utilize interface abstractions (`pgx`, `database/sql`, `gorm`). Traditionally, developers spend hours:
- Writing manual mocks with `golang/mock` or `sqlmock`.
- Maintaining database seed fixtures across CI/CD environments.

**Keploy's "Aha!" Moment**:
Keploy operates at the Linux OS network socket layer (via eBPF / proxying), capturing the binary PostgreSQL Wire Protocol. When replaying tests (`keploy test`), Keploy mocks PostgreSQL responses automatically—**allowing Go developers to run 100% of their unit & API test suites without spinning up PostgreSQL database containers!**

---

## 🛠️ Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css         # Asana theme design tokens & Tailwind v4 config
│   │   ├── layout.tsx          # Root layout with SEO metadata & navbar
│   │   └── page.tsx            # Main page rendering MDX tutorial
│   ├── components/
│   │   ├── ArchitectureFlow.tsx# Interactive eBPF proxy diagram
│   │   ├── Badge.tsx           # Anti-MDX paragraph injection pill badge
│   │   ├── Callout.tsx         # Sleek documentation alert callouts
│   │   ├── CodeBlock.tsx       # Syntax highlighted code snippets with copy button
│   │   ├── InteractiveTerminal.tsx # Live simulated keploy CLI terminal
│   │   ├── Navbar.tsx          # Asana styled header with theme switch & Cmd+K search
│   │   ├── QuickstartSelector.tsx # 5 Go quickstarts interactive preview
│   │   ├── SearchModal.tsx     # Cmd+K documentation search palette
│   │   ├── SidebarTOC.tsx      # Table of contents with active scroll tracking
│   │   └── ThemeToggle.tsx     # Light/Dark mode switcher
│   ├── content/
│   │   └── tutorial.mdx        # Full developer tutorial content
│   └── mdx-components.tsx      # MDX custom component registry
└── package.json
```

---

## 🚀 Local Development Setup

To run this documentation project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Vanshiksoni/Keploy_Assignment.git
cd Keploy_Assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# Open http://localhost:3000 in your browser.
```

---

## 📦 Static Production Build

```bash
# Test static compilation & prerendering
npm run build

# Start production server
npm start
```

---

## 📄 License & Attribution

Built with ❤️ for the **Keploy DevRel Team**.
