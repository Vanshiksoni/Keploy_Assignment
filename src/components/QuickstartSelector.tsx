"use client";

import { useState } from "react";
import { Server, CheckCircle, Database } from "lucide-react";

interface QuickstartOption {
  id: string;
  name: string;
  framework: string;
  db: string;
  desc: string;
  active?: boolean;
}

const options: QuickstartOption[] = [
  {
    id: "echo-postgres",
    name: "Echo + PostgreSQL",
    framework: "Echo v4",
    db: "PostgreSQL 15",
    desc: "URL Shortener app demonstrating Keploy Postgres wire protocol interception.",
    active: true,
  },
  {
    id: "gin-redis",
    name: "Gin + Redis",
    framework: "Gin v1.9",
    db: "Redis 7",
    desc: "User Auth service demonstrating Keploy RESP protocol interception for Redis.",
  },
  {
    id: "mux-postgres",
    name: "Mux + PostgreSQL",
    framework: "Gorilla Mux",
    db: "PostgreSQL 15",
    desc: "Product catalog service demonstrating Mux router request recording.",
  },
  {
    id: "mux-mysql",
    name: "Mux + MySQL",
    framework: "Gorilla Mux",
    db: "MySQL 8.0",
    desc: "URL shortener app demonstrating MySQL protocol interception.",
  },
  {
    id: "fasthttp-postgres",
    name: "FastHttp + PostgreSQL",
    framework: "FastHttp",
    db: "PostgreSQL 15",
    desc: "High-performance CRUD API showing low-overhead proxying.",
  },
];

export default function QuickstartSelector() {
  const [selected, setSelected] = useState("echo-postgres");
  const current = options.find((o) => o.id === selected) || options[0];

  return (
    <div className="my-8 rounded-2xl border border-[#eaeaea] dark:border-[#23272e] bg-[#f8f8f8] dark:bg-[#15181c] p-6 shadow-xs transition-all">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#eaeaea] dark:border-[#23272e]">
        <div>
          <h4 className="text-sm font-semibold text-[#0d0d0d] dark:text-white flex items-center gap-2">
            <Server className="w-4 h-4 text-[#646f79] dark:text-[#8e99a4]" />
            Keploy Go Quickstarts Switcher
          </h4>
          <p className="text-xs text-[#646f79] dark:text-[#9aa4ae] mt-0.5">
            Select a Go framework & database combination to preview Keploy compatibility.
          </p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#646f79] text-white">
          5 Quickstarts
        </span>
      </div>

      {/* Pill Selection Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                isSelected
                  ? "bg-[#646f79] text-white shadow-xs"
                  : "bg-white dark:bg-[#23272e] text-[#646f79] dark:text-[#9aa4ae] border border-[#eaeaea] dark:border-[#333a45] hover:border-[#646f79]"
              }`}
            >
              {isSelected && <CheckCircle className="w-3.5 h-3.5 text-white" />}
              {opt.name}
            </button>
          );
        })}
      </div>

      {/* Selected Quickstart Details Box */}
      <div className="p-4 rounded-xl bg-white dark:bg-[#1c2026] border border-[#eaeaea] dark:border-[#23272e] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-[#0d0d0d] dark:text-white">{current.name}</span>
            {current.id === "echo-postgres" && (
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-900">
                Current Tutorial Subject
              </span>
            )}
          </div>
          <p className="text-[#646f79] dark:text-[#9aa4ae] text-[11px] leading-relaxed">{current.desc}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2.5 py-1 rounded-md bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4] font-mono text-[11px]">
            {current.framework}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4] font-mono text-[11px] flex items-center gap-1">
            <Database className="w-3 h-3 text-blue-400" />
            {current.db}
          </span>
        </div>
      </div>
    </div>
  );
}
