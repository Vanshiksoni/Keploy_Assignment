"use client";

import { useState, useEffect } from "react";
import { Search, X, ChevronRight, FileText, Code2, Terminal } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  category: "Guide" | "Code" | "CLI" | "FAQ";
  desc: string;
}

const searchItems: SearchResult[] = [
  { id: "overview", title: "Overview & Why Keploy", category: "Guide", desc: "Understanding zero-code e2e testing for Go microservices." },
  { id: "prerequisites", title: "Prerequisites & Requirements", category: "Guide", desc: "Go 1.20+, Docker Compose, PostgreSQL & cURL." },
  { id: "architecture", title: "Keploy Architecture & eBPF Proxy", category: "Guide", desc: "How Keploy intercepts PostgreSQL wire protocol without SDKs." },
  { id: "step-1-app-setup", title: "Step 1: Echo App Setup", category: "Code", desc: "Cloning the Echo URL shortener Go sample repository." },
  { id: "step-2-postgres-database", title: "Step 2: PostgreSQL Container Setup", category: "Code", desc: "Starting PostgreSQL with Docker Compose on port 5432." },
  { id: "step-3-keploy-installation", title: "Step 3: Keploy CLI Installation", category: "CLI", desc: "Installing the binary via curl on Linux, macOS, or WSL2." },
  { id: "step-4-recording-tests", title: "Step 4: keploy record -c \"./main\"", category: "CLI", desc: "Interception of incoming API requests and database queries." },
  { id: "step-5-testing-mocking", title: "Step 5: keploy test -c \"./main\"", category: "CLI", desc: "Replaying recorded tests offline with database mocks." },
  { id: "interactive-demo", title: "Interactive Terminal Simulator", category: "CLI", desc: "Run simulated keploy record & test in browser." },
  { id: "devrel-insights", title: "DevRel Insights & Takeaways", category: "FAQ", desc: "Key benefits, determinism, and zero code maintenance." },
  { id: "troubleshooting", title: "Troubleshooting FAQ & GORM", category: "FAQ", desc: "Sudo permissions, database drivers, and GORM compatibility." },
];

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setIsOpen(false);
    setQuery("");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-full bg-[#f3f3f3] dark:bg-[#1a1e24] border border-[#eaeaea] dark:border-[#2b3038] text-xs text-[#646f79] dark:text-[#9aa4ae] hover:text-[#0d0d0d] dark:hover:text-white transition-all w-36 sm:w-48 shadow-xs"
        aria-label="Search documentation"
      >
        <span className="flex items-center gap-1.5 truncate">
          <Search className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Search docs...</span>
        </span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white dark:bg-[#23272e] border border-[#eaeaea] dark:border-[#333a45] text-[10px] font-mono text-[#646f79] dark:text-[#9aa4ae] shadow-2xs">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#15181c] border border-[#eaeaea] dark:border-[#23272e] shadow-2xl overflow-hidden animate-fadeIn">
            {/* Input Header */}
            <div className="p-4 border-b border-[#eaeaea] dark:border-[#23272e] flex items-center gap-3">
              <Search className="w-4 h-4 text-[#646f79] dark:text-[#8e99a4]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Keploy Go docs, commands, concepts..."
                className="flex-1 bg-transparent text-sm text-[#0d0d0d] dark:text-white placeholder-[#646f79] dark:placeholder-[#646f79] focus:outline-none font-sans"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#646f79] hover:bg-[#f3f3f3] dark:hover:bg-[#23272e] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#646f79] dark:text-[#9aa4ae]">
                  No documentation topics found for &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="p-3 rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-[#1c2026] cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1.5 rounded-lg bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4]">
                        {item.category === "Guide" && <FileText className="w-3.5 h-3.5" />}
                        {item.category === "Code" && <Code2 className="w-3.5 h-3.5" />}
                        {item.category === "CLI" && <Terminal className="w-3.5 h-3.5" />}
                        {item.category === "FAQ" && <FileText className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#0d0d0d] dark:text-white">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#9aa4ae]">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#646f79] dark:text-[#9aa4ae] mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#646f79] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-[#f8f8f8] dark:bg-[#121417] border-t border-[#eaeaea] dark:border-[#23272e] text-[10px] text-[#646f79] dark:text-[#8e99a4] flex items-center justify-between">
              <span>Press <kbd className="font-mono bg-white dark:bg-[#23272e] px-1 rounded border">ESC</kbd> to exit</span>
              <span>Search Go Quickstart Documentation</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
