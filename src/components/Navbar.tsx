"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";
import { BookOpen, ExternalLink } from "lucide-react";

function KeployIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0d0e10]/90 backdrop-blur-md border-b border-[#eaeaea] dark:border-[#23272e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#646f79] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <KeployIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-base tracking-tight text-[#0d0d0d] dark:text-white">
              Keploy<span className="text-[#646f79] dark:text-[#8e99a4]">Docs</span>
            </span>
            <span className="hidden md:inline-flex items-center justify-center leading-none text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-[#f3f3f3] dark:bg-[#1f242b] text-[#646f79] dark:text-[#9aa4ae] border border-[#eaeaea] dark:border-[#2b3038]">
              Go Quickstart
            </span>
          </div>
        </Link>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <SearchModal />
          <a
            href="https://keploy.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-[#646f79] dark:text-[#9aa4ae] hover:text-[#0d0d0d] dark:hover:text-white transition-colors px-3 py-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Docs</span>
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>

          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#646f79] hover:bg-[#4e5760] text-white text-xs font-medium transition-all shadow-xs flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
