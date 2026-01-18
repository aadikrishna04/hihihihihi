"use client";

import { GlassCard } from "./glass-card";

interface CitationLinkProps {
  href: string;
  children: React.ReactNode;
  dataSource: string;
}

function CitationLink({ href, children, dataSource }: CitationLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-[#cc0000] underline-offset-2 text-neutral-400 hover:text-white cursor-pointer relative group"
      title={dataSource}
    >
      {children}
    </a>
  );
}

interface ResearchCardProps {
  title: string;
  children: React.ReactNode;
}

export function ResearchCard({ title, children }: ResearchCardProps) {
  return (
    <GlassCard className="p-8 mb-8">
      <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/[0.1]">
        {title}
      </h3>
      <div className="text-neutral-400 text-base leading-relaxed">
        {children}
      </div>
    </GlassCard>
  );
}

export { CitationLink };
