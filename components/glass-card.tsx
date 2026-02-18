import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-white/[0.06] to-white/[0.02]",
        "backdrop-blur-xl",
        "border border-white/[0.06]",
        "shadow-2xl shadow-black/40",
        hover && "transition-all duration-300 hover:border-[#ff6b00]/[0.15] hover:shadow-black/50 hover:scale-[1.01]",
        className
      )}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
