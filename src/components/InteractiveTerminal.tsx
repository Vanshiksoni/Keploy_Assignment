"use client";

import { useState } from "react";
import { Play, RotateCcw, CheckCircle2, FileCode, Server, Database, Activity } from "lucide-react";

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"record" | "test" | "yaml">("record");
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [capturedCount, setCapturedCount] = useState(0);

  const runRecordSimulation = () => {
    setIsSimulating(true);
    setLogs([]);
    setCapturedCount(0);

    const steps = [
      "🚀 Starting Keploy e2e proxy server on port 6789...",
      "⚙️ Intercepting network traffic for application binary './main'...",
      "🐘 Postgres connection detected on 127.0.0.1:5432 (database: urlshortener)...",
      "🌐 Echo Web Server started listening on http://localhost:8080",
      "📌 Simulating client request: POST http://localhost:8080/shorten -> {\"url\": \"https://keploy.io\"}",
      "💾 Captured SQL Query: INSERT INTO urls (short_code, original_url) VALUES ('k3p9L', 'https://keploy.io')",
      "✅ Keploy captured Test Case: test-set-1/test-1.yaml (Status: 200 OK)",
      "📌 Simulating client request: GET http://localhost:8080/k3p9L",
      "💾 Captured SQL Query: SELECT original_url FROM urls WHERE short_code = 'k3p9L'",
      "✅ Keploy captured Test Case: test-set-1/test-2.yaml (Status: 302 Found)",
      "🎉 Session finished! 2 test cases & dependency mocks recorded successfully!"
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (step.includes("captured Test Case")) {
          setCapturedCount((c) => c + 1);
        }
        if (index === steps.length - 1) {
          setIsSimulating(false);
        }
      }, (index + 1) * 600);
    });
  };

  const runTestSimulation = () => {
    setIsSimulating(true);
    setLogs([]);

    const steps = [
      "🧪 Starting Keploy Test Runner...",
      "📦 Loaded test suite: keploy/test-set-1 (2 test cases found)",
      "⚙️ Mocking PostgreSQL database calls (no real DB connection required!)...",
      "▶️ Executing test-1: POST /shorten",
      "  ├── Expected Response: {\"short_url\": \"http://localhost:8080/k3p9L\"}",
      "  └── Actual Response:   {\"short_url\": \"http://localhost:8080/k3p9L\"} (MATCH ✅)",
      "▶️ Executing test-2: GET /k3p9L",
      "  ├── Expected Status: 302 Found",
      "  └── Actual Status:   302 Found (MATCH ✅)",
      "📊 TEST RESULT: 2 PASSED, 0 FAILED, 0 ERRORS",
      "✨ Code Coverage: 92.4% (Echo routes & database handlers validated!)"
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsSimulating(false);
        }
      }, (index + 1) * 500);
    });
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-[#23272e] bg-[#0d0e10] shadow-xl font-sans">
      {/* Top Header */}
      <div className="px-5 py-3.5 bg-[#15181c] border-b border-[#23272e] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#646f79] animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#8e99a4]" />
            Interactive Keploy Terminal Simulator
          </span>
        </div>

        {/* Asana Pill Tab Controls */}
        <div className="flex bg-[#0d0e10] p-1 rounded-full border border-[#23272e] text-xs">
          <button
            onClick={() => { setActiveTab("record"); setLogs([]); }}
            className={`px-3.5 py-1.5 rounded-full transition-all font-medium flex items-center gap-1.5 ${
              activeTab === "record" ? "bg-[#646f79] text-white shadow-xs" : "text-[#8e99a4] hover:text-white"
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            keploy record
          </button>
          <button
            onClick={() => { setActiveTab("test"); setLogs([]); }}
            className={`px-3.5 py-1.5 rounded-full transition-all font-medium flex items-center gap-1.5 ${
              activeTab === "test" ? "bg-[#646f79] text-white shadow-xs" : "text-[#8e99a4] hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            keploy test
          </button>
          <button
            onClick={() => setActiveTab("yaml")}
            className={`px-3.5 py-1.5 rounded-full transition-all font-medium flex items-center gap-1.5 ${
              activeTab === "yaml" ? "bg-[#646f79] text-white shadow-xs" : "text-[#8e99a4] hover:text-white"
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            YAML Spec
          </button>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="px-5 py-2.5 bg-[#121417] border-b border-[#23272e] flex items-center justify-between text-xs">
        <span className="text-[#8e99a4] font-mono">
          {activeTab === "record" && "$ keploy record -c \"./main\""}
          {activeTab === "test" && "$ keploy test -c \"./main\" --delay 10"}
          {activeTab === "yaml" && "keploy/test-set-1/tests/test-1.yaml"}
        </span>

        {activeTab !== "yaml" && (
          <div className="flex gap-2">
            <button
              onClick={activeTab === "record" ? runRecordSimulation : runTestSimulation}
              disabled={isSimulating}
              className="px-4 py-1.5 rounded-full bg-[#646f79] hover:bg-[#4e5760] disabled:opacity-50 text-white font-medium transition-all flex items-center gap-1.5 shadow-xs"
            >
              <Play className="w-3 h-3 fill-current" />
              {isSimulating ? "Running..." : `Run ${activeTab}`}
            </button>
            <button
              onClick={() => { setLogs([]); setCapturedCount(0); }}
              className="p-1.5 rounded-full bg-[#23272e] hover:bg-[#2e343d] text-slate-300 transition-all"
              title="Clear terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Main Terminal View */}
      <div className="p-5 font-mono text-xs leading-relaxed min-h-[220px] max-h-[340px] overflow-y-auto text-slate-200">
        {activeTab === "yaml" ? (
          <div className="text-slate-300">
            <div className="text-[#8e99a4] mb-2 font-semibold"># Auto-generated by Keploy (Zero code written!)</div>
            <pre className="text-slate-300 text-xs">
{`version: api.keploy.io/v1beta1
kind: Http
name: test-1
spec:
  metadata: {}
  req:
    method: POST
    proto_major: 1
    proto_minor: 1
    url: /shorten
    body: '{"url": "https://keploy.io"}'
    header:
      Content-Type: application/json
  resp:
    status_code: 200
    header:
      Content-Type: application/json
    body: '{"short_url": "http://localhost:8080/k3p9L"}'
  objects: []
  mocks:
    - postgres-mock-1.yaml`}
            </pre>
          </div>
        ) : logs.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 py-10">
            <div className="p-3 rounded-full bg-[#1c2026] border border-[#2b3038] mb-3">
              <Play className="w-5 h-5 text-[#8e99a4]" />
            </div>
            <p className="font-medium text-slate-300">Click &quot;Run {activeTab}&quot; to simulate Keploy execution</p>
            <p className="text-[11px] text-slate-500 mt-1">Watch how Keploy intercepts API traffic & postgres queries.</p>
          </div>
        ) : (
          <div className="space-y-1.5">
            {logs.map((log, idx) => (
              <div key={idx} className="animate-fadeIn flex items-start gap-2">
                <span className="text-slate-600 select-none">&gt;</span>
                <span className={log.includes("✅") || log.includes("PASSED") ? "text-emerald-400" : log.includes("🐘") || log.includes("📌") ? "text-slate-300" : "text-slate-200"}>
                  {log}
                </span>
              </div>
            ))}
            {isSimulating && (
              <div className="flex items-center gap-2 text-[#8e99a4] font-semibold pt-1">
                <span className="inline-block w-2 h-4 bg-[#8e99a4] animate-pulse" />
                Processing network packets...
              </div>
            )}
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="px-5 py-2.5 bg-[#15181c] border-t border-[#23272e] text-[11px] text-[#8e99a4] flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-blue-400" />
          PostgreSQL Wire Mocking: <strong className="text-slate-200">Active</strong>
        </span>
        {activeTab === "record" && (
          <span className="text-slate-200 font-semibold">Recorded: {capturedCount} API tests</span>
        )}
      </div>
    </div>
  );
}
