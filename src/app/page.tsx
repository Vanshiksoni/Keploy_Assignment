import Tutorial from "@/content/tutorial.mdx";
import SidebarTOC from "@/components/SidebarTOC";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex gap-12 items-start">
        {/* Main Documentation Article */}
        <article className="flex-1 min-w-0 max-w-4xl">
          <Tutorial />
        </article>

        {/* Sidebar Table of Contents */}
        <SidebarTOC />
      </div>
    </div>
  );
}
