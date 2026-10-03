import type { MDXComponents } from "mdx/types";
import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import Badge from "@/components/Badge";
import QuickstartSelector from "@/components/QuickstartSelector";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    CodeBlock,
    InteractiveTerminal,
    ArchitectureFlow,
    Badge,
    QuickstartSelector,
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#0d0d0d] dark:text-white mb-6 mt-2 font-sans" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-[#0d0d0d] dark:text-white mt-12 mb-4 pt-6 border-t border-[#eaeaea] dark:border-[#23272e] scroll-mt-24 flex items-center group font-sans"
        {...props}
      >
        {children}
        {id && (
          <a href={`#${id}`} className="ml-2 text-[#646f79] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#0d0d0d]">
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="text-xl font-medium text-[#0d0d0d] dark:text-white mt-8 mb-3 scroll-mt-24 flex items-center group font-sans"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-[#0d0d0d]/90 dark:text-[#f3f3f3]/90 leading-relaxed mb-4 text-sm sm:text-base font-sans" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-[#0d0d0d]/90 dark:text-[#f3f3f3]/90 text-sm sm:text-base pl-2 font-sans" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-[#0d0d0d]/90 dark:text-[#f3f3f3]/90 text-sm sm:text-base pl-2 font-sans" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed text-[#0d0d0d]/90 dark:text-[#f3f3f3]/90 font-sans" {...props}>
        {children}
      </li>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="font-medium text-[#646f79] dark:text-[#8e99a4] underline decoration-[#646f79]/30 dark:decoration-[#8e99a4]/30 underline-offset-4 hover:text-[#0d0d0d] dark:hover:text-white transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-2 border-[#646f79] pl-4 py-1 my-4 text-[#646f79] dark:text-[#9aa4ae] italic text-sm font-sans" {...props}>
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => {
      if (typeof children === "string" && !children.includes("\n")) {
        return (
          <code className="px-2 py-0.5 rounded-full bg-[#f3f3f3] dark:bg-[#23272e] border border-[#eaeaea] dark:border-[#2b3038] text-[#0d0d0d] dark:text-[#f3f3f3] font-mono text-xs font-medium" {...props}>
            {children}
          </code>
        );
      }
      return <code {...props}>{children}</code>;
    },
  };
}
