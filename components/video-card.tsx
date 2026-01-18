"use client";

import { GlassCard } from "./glass-card";

interface VideoCardProps {
  title: string;
  videoId: string;
  description?: string;
}

export function VideoCard({ title, videoId, description }: VideoCardProps) {
  return (
    <GlassCard className="flex flex-col h-full">
      <div className="bg-black/40 backdrop-blur-xl p-4 mb-0 border-b border-white/[0.1] min-h-[100px] flex items-center justify-center">
        <h3 className="text-xl font-bold text-white text-center">
          {title}
        </h3>
      </div>
      <div className="relative w-full pb-[56.25%] overflow-hidden flex-shrink-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {description && (
        <div className="p-4 text-neutral-400 text-sm leading-relaxed flex-grow min-h-[60px]">
          {description}
        </div>
      )}
    </GlassCard>
  );
}
