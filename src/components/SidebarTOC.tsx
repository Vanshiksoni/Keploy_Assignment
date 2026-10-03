"use client";

import { useEffect, useState } from "react";
import { List, ChevronRight } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

const defaultSections: TOCItem[] = [
  { id: "overview", title: "Overview & Why Keploy", level: 2 },
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "architecture", title: "Architecture & How It Works", level: 2 },
  { id: "step-1-app-setup", title: "Step 1: Echo App Setup", level: 2 },
  { id: "step-2-postgres-database", title: "Step 2: PostgreSQL Database", level: 2 },
  { id: "step-3-keploy-installation", title: "Step 3: Keploy Installation", level: 2 },
  { id: "step-4-recording-tests", title: "Step 4: Recording API Tests", level: 2 },
  { id: "step-5-testing-mocking", title: "Step 5: Testing & Mock Replay", level: 2 },
  { id: "interactive-demo", title: "Interactive Terminal Demo", level: 2 },
  { id: "devrel-insights", title: "DevRel Insights & Takeaways", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting FAQ", level: 2 },
];

export default function SidebarTOC() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    defaultSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-64 shrink-0 hidden lg:block sticky top-24 h-[calc(100vh-7rem)] overflow-y-auto pr-2">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#eaeaea] dark:border-[#23272e] text-[11px] font-bold text-[#646f79] dark:text-[#8e99a4] uppercase tracking-wider">
        <List className="w-3.5 h-3.5" />
        <span>On This Page</span>
      </div>

      <nav className="space-y-1 text-xs">
        {defaultSections.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center justify-between px-3.5 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-[#646f79] text-white font-medium shadow-xs"
                  : "text-[#646f79] dark:text-[#9aa4ae] hover:text-[#0d0d0d] dark:hover:text-white hover:bg-[#f3f3f3] dark:hover:bg-[#1a1e24]"
              }`}
            >
              <span className="truncate">{item.title}</span>
              {isActive && <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-80" />}
            </a>
          );
        })}
      </nav>

      {/* Asana Pro Tip Box */}
      <div className="mt-8 p-4 rounded-2xl bg-[#f8f8f8] dark:bg-[#15181c] border border-[#eaeaea] dark:border-[#23272e] text-xs text-[#646f79] dark:text-[#9aa4ae]">
        <span className="font-semibold text-[#0d0d0d] dark:text-white block mb-1">💡 Developer Note</span>
        Keploy records traffic at the OS proxy layer, generating zero-maintenance YAML test specs.
      </div>
    </aside>
  );
}
