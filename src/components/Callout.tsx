import React from "react";
import { Info, Lightbulb, AlertTriangle, AlertCircle, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "danger" | "success";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    container: "bg-[#f8f9fa] dark:bg-[#15181c] border-[#eaeaea] dark:border-[#23272e] text-[#0d0d0d] dark:text-[#f3f3f3]",
    badge: "bg-[#646f79] text-white",
    icon: <Info className="w-4 h-4 text-[#646f79] dark:text-[#8e99a4] shrink-0" />,
    defaultTitle: "Note",
  },
  tip: {
    container: "bg-[#fafaf7] dark:bg-[#181a17] border-[#eeebe3] dark:border-[#2a2922] text-[#0d0d0d] dark:text-[#f3f3f3]",
    badge: "bg-amber-700/80 text-white",
    icon: <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />,
    defaultTitle: "Pro Tip",
  },
  warning: {
    container: "bg-[#fdf9f7] dark:bg-[#1b1716] border-[#f5e7e0] dark:border-[#332622] text-[#0d0d0d] dark:text-[#f3f3f3]",
    badge: "bg-orange-700/80 text-white",
    icon: <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />,
    defaultTitle: "Warning",
  },
  danger: {
    container: "bg-[#fdf7f7] dark:bg-[#1c1616] border-[#f6e4e4] dark:border-[#352323] text-[#0d0d0d] dark:text-[#f3f3f3]",
    badge: "bg-rose-700/80 text-white",
    icon: <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />,
    defaultTitle: "Important",
  },
  success: {
    container: "bg-[#f7faf8] dark:bg-[#151a17] border-[#e2efe7] dark:border-[#223328] text-[#0d0d0d] dark:text-[#f3f3f3]",
    badge: "bg-emerald-700/80 text-white",
    icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />,
    defaultTitle: "Success",
  },
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const style = calloutStyles[type] || calloutStyles.info;

  return (
    <div className={`my-6 p-4 rounded-xl border ${style.container} shadow-xs transition-all`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{style.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-xs uppercase tracking-wide text-[#646f79] dark:text-[#9aa4ae] mb-1">
            {title || style.defaultTitle}
          </div>
          <div className="text-sm leading-relaxed opacity-95">{children}</div>
        </div>
      </div>
    </div>
  );
}
