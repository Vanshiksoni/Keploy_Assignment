"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  filename?: string;
  language?: string;
  code: string;
  children?: React.ReactNode;
}

export default function CodeBlock({ filename, language = "bash", code, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const textContent = code || (typeof children === "string" ? children : "");

  const handleCopy = () => {
    if (textContent) {
      navigator.clipboard.writeText(textContent.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-[#23272e] bg-[#0d0e10] text-[#f3f3f3] shadow-sm font-mono text-xs">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#15181c] border-b border-[#23272e] text-xs text-[#8e99a4]">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#8e99a4]" />
          {filename ? (
            <span className="font-semibold text-slate-200">{filename}</span>
          ) : (
            <span className="uppercase text-[10px] tracking-wider text-[#8e99a4] font-bold">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#23272e] hover:bg-[#2e343d] text-slate-300 hover:text-white transition-all text-xs font-sans font-medium"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto text-slate-200 font-mono text-[13px] leading-relaxed select-text">
        <pre className="m-0 p-0 whitespace-pre">
          <code>{textContent.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
