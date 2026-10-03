<div align="center">

# 🚀 Keploy DevRel Candidate Assignment
### Go (Echo + PostgreSQL) Quickstart & Interactive Documentation Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![MDX](https://img.shields.io/badge/MDX-3.0-blue?style=for-the-badge&logo=mdx)](https://mdxjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://keploy-assignment-mu.vercel.app/)

---

### 🌐 [**Live Vercel Demo**](https://keploy-assignment-mu.vercel.app/) &nbsp;|&nbsp; 🐙 [**GitHub Repository**](https://github.com/Vanshiksoni/Keploy_Assignment)

*A production-grade, developer-focused documentation site designed following the **Asana DesignMD System** (`designmd.co/d/asana`).*

</div>

---

## 🎯 Candidate Overview & Assignment Deliverables

This repository is submitted for the **DevRel Candidate Assignment at Keploy**.

| Deliverable | Link / Resource | Description |
| :--- | :--- | :--- |
| 🌐 **Live Vercel Site** | [`keploy-assignment-mu.vercel.app`](https://keploy-assignment-mu.vercel.app/) | Deployed Next.js + MDX documentation site |
| 🐙 **GitHub Repository** | [`Vanshiksoni/Keploy_Assignment`](https://github.com/Vanshiksoni/Keploy_Assignment) | Open-source Next.js codebase & custom components |
| 📄 **Assignment Spec** | `devrel code + content assignment.pdf` | Based on Keploy's **Go (Echo + PostgreSQL)** Quickstart |

---

## 🌟 Key Features & Standout DevRel Implementations

<table>
  <tr>
    <td width="50%">
      <h3>⚡ Interactive Terminal Simulator</h3>
      Simulate <code>keploy record</code> and <code>keploy test</code> live inside your browser without installing CLI binaries! View real-time SQL interception logs and generated YAML specs.
    </td>
    <td width="50%">
      <h3>🔍 Command Palette (<code>⌘K</code> / <code>Ctrl+K</code>)</h3>
      Instant topic search across CLI commands, PostgreSQL wire interception notes, GORM driver compatibility, and troubleshooting FAQs.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⚙️ Go Quickstart Switcher</h3>
      Interactive framework switcher allowing visitors to preview all 5 Keploy Go quickstarts (<em>Echo+Postgres, Gin+Redis, Mux+MySQL, FastHttp+Postgres</em>).
    </td>
    <td width="50%">
      <h3>🎨 Asana DesignMD System</h3>
      Styled with Asana's minimal-maximalist aesthetics (<code>#646f79</code> warm gray pills, rounded 16px cards, geometric typography, dark/light mode switcher).
    </td>
  </tr>
</table>

---

## 💡 Key DevRel Insights: Why Keploy for Go Developers?

Go microservices rely heavily on interface abstractions (`pgx`, `database/sql`, `gorm`). Traditionally, developers spend hours:
- Writing manual mocks with `golang/mock` or `sqlmock`.
- Maintaining database seed fixtures across local & CI environments.

> ### 💡 The "Aha!" Moment for Go Engineers
> Keploy operates at the OS network socket layer via eBPF and TCP proxies, capturing the binary **PostgreSQL Wire Protocol**. 
> 
> When replaying tests (`keploy test`), Keploy mocks PostgreSQL responses automatically—**allowing Go developers to run 100% of their unit & API test suites without spinning up PostgreSQL database containers!**

---

## 🛠️ Project Architecture

```gdn
Keploy_Assignment/
├── src/
│   ├── app/
│   │   ├── globals.css          # Asana design tokens & Tailwind v4 config
│   │   ├── layout.tsx           # SEO layout with navbar & footer
│   │   └── page.tsx             # Main page rendering MDX tutorial
│   ├── components/
│   │   ├── ArchitectureFlow.tsx # Interactive eBPF proxy diagram
│   │   ├── Badge.tsx            # Pill badge component (MDX safe)
│   │   ├── Callout.tsx          # Sleek documentation alert callouts
│   │   ├── CodeBlock.tsx        # Code snippets with copy-to-clipboard
│   │   ├── InteractiveTerminal.tsx # Live simulated keploy CLI terminal
│   │   ├── Navbar.tsx           # Header with Cmd+K search & theme toggle
│   │   ├── QuickstartSelector.tsx # 5 Go quickstarts interactive preview
│   │   ├── SearchModal.tsx      # Cmd+K search palette modal
│   │   ├── SidebarTOC.tsx       # Table of contents with active scroll tracking
│   │   └── ThemeToggle.tsx      # Dark / Light theme switcher
│   ├── content/
│   │   └── tutorial.mdx         # Full developer tutorial content
│   └── mdx-components.tsx       # MDX custom component registry
├── README.md                    # Professional DevRel repository README
└── package.json                 # Next.js & MDX configuration
```

---

## 💻 Local Development & Build Setup

```bash
# 1. Clone the repository
git clone https://github.com/Vanshiksoni/Keploy_Assignment.git
cd Keploy_Assignment

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# Open http://localhost:3000 in your browser.
```

### Static Production Build
```bash
# Verify static compilation & prerendering
npm run build

# Run production server locally
npm start
```

---

<div align="center">

### Built with ❤️ for the **Keploy DevRel Team**

[**Live Vercel Site**](https://keploy-assignment-mu.vercel.app/) &bull; [**GitHub Repository**](https://github.com/Vanshiksoni/Keploy_Assignment)

</div>
