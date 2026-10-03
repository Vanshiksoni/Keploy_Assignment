"use client";

import { useState } from "react";
import { Globe, ShieldCheck, Database, Cpu, CheckCircle } from "lucide-react";

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "1. HTTP Request Arrival",
      desc: "Client sends an API request (e.g., POST /shorten) to the Echo Go Web Server on port 8080.",
    },
    {
      id: 2,
      title: "2. Keploy e2e Interception",
      desc: "Keploy e2e proxy transparently captures incoming HTTP headers, payloads, and path parameters.",
    },
    {
      id: 3,
      title: "3. SQL Query Interception",
      desc: "Echo app communicates with PostgreSQL. Keploy intercepts read/write SQL queries and response rows.",
    },
    {
      id: 4,
      title: "4. Test & Mock YAML Generation",
      desc: "Keploy automatically generates test case YAMLs and database mock YAML files under /keploy/test-set-1.",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-[#eaeaea] dark:border-[#23272e] bg-[#f8f8f8] dark:bg-[#15181c] p-6 shadow-xs transition-all">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#eaeaea] dark:border-[#23272e]">
        <div>
          <h4 className="text-base font-semibold text-[#0d0d0d] dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#646f79] dark:text-[#8e99a4]" />
            Keploy Architecture: Echo + PostgreSQL Interception Flow
          </h4>
          <p className="text-xs text-[#646f79] dark:text-[#9aa4ae] mt-0.5">
            Click any step below to see how Keploy captures network packets & DB queries automatically.
          </p>
        </div>
        <span className="inline-flex items-center justify-center leading-none text-xs font-medium tracking-wide px-3.5 py-1.5 rounded-full bg-[#646f79] text-white select-none">
          Zero-Code Instrument
        </span>
      </div>

      {/* Visual Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        {/* Client */}
        <div
          onClick={() => setActiveStep(1)}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            activeStep === 1
              ? "border-[#646f79] bg-white dark:bg-[#1c2026] shadow-sm ring-1 ring-[#646f79]"
              : "border-[#eaeaea] dark:border-[#23272e] bg-white/60 dark:bg-[#15181c] hover:border-[#646f79]/50"
          }`}
        >
          <div className="w-9 h-9 mx-auto rounded-full bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4] flex items-center justify-center mb-2">
            <Globe className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-[#0d0d0d] dark:text-white">API Client</div>
          <div className="text-[11px] text-[#646f79] dark:text-[#9aa4ae] mt-1">cURL / Postman</div>
        </div>

        {/* Keploy Proxy */}
        <div
          onClick={() => setActiveStep(2)}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            activeStep === 2 || activeStep === 4
              ? "border-[#646f79] bg-white dark:bg-[#1c2026] shadow-sm ring-1 ring-[#646f79]"
              : "border-[#eaeaea] dark:border-[#23272e] bg-white/60 dark:bg-[#15181c] hover:border-[#646f79]/50"
          }`}
        >
          <div className="w-9 h-9 mx-auto rounded-full bg-[#646f79] text-white flex items-center justify-center mb-2">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-[#0d0d0d] dark:text-white">Keploy Proxy</div>
          <div className="text-[11px] text-[#646f79] dark:text-[#9aa4ae] mt-1">e2e Interceptor</div>
        </div>

        {/* Echo App */}
        <div
          onClick={() => setActiveStep(3)}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            activeStep === 3
              ? "border-[#646f79] bg-white dark:bg-[#1c2026] shadow-sm ring-1 ring-[#646f79]"
              : "border-[#eaeaea] dark:border-[#23272e] bg-white/60 dark:bg-[#15181c] hover:border-[#646f79]/50"
          }`}
        >
          <div className="w-9 h-9 mx-auto rounded-full bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4] flex items-center justify-center mb-2">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-[#0d0d0d] dark:text-white">Echo Go Server</div>
          <div className="text-[11px] text-[#646f79] dark:text-[#9aa4ae] mt-1">URL Shortener App</div>
        </div>

        {/* PostgreSQL Database */}
        <div
          onClick={() => setActiveStep(3)}
          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
            activeStep === 3
              ? "border-[#646f79] bg-white dark:bg-[#1c2026] shadow-sm ring-1 ring-[#646f79]"
              : "border-[#eaeaea] dark:border-[#23272e] bg-white/60 dark:bg-[#15181c] hover:border-[#646f79]/50"
          }`}
        >
          <div className="w-9 h-9 mx-auto rounded-full bg-[#f3f3f3] dark:bg-[#23272e] text-[#646f79] dark:text-[#8e99a4] flex items-center justify-center mb-2">
            <Database className="w-4 h-4" />
          </div>
          <div className="text-xs font-bold text-[#0d0d0d] dark:text-white">PostgreSQL</div>
          <div className="text-[11px] text-[#646f79] dark:text-[#9aa4ae] mt-1">DB Mocks Recorded</div>
        </div>
      </div>

      {/* Step Description Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              activeStep === step.id
                ? "border-[#646f79] bg-white dark:bg-[#1c2026] text-[#0d0d0d] dark:text-white font-medium shadow-xs"
                : "border-[#eaeaea] dark:border-[#23272e] bg-white/40 dark:bg-[#15181c] text-[#646f79] dark:text-[#9aa4ae] hover:border-[#646f79]/40"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-xs text-[#0d0d0d] dark:text-white">{step.title}</span>
              {activeStep === step.id && <CheckCircle className="w-3.5 h-3.5 text-[#646f79] dark:text-[#8e99a4]" />}
            </div>
            <p className="text-[11px] opacity-90 leading-relaxed text-[#646f79] dark:text-[#9aa4ae]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
