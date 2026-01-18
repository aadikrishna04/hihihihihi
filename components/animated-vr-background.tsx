"use client";

import { useEffect, useRef } from "react";

export function AnimatedVRBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const headset = container.querySelector(".vr-headset") as HTMLElement;
      if (headset) {
        headset.style.transform = `translate(${x}px, ${y}px)`;
      }

      const orbs = container.querySelectorAll(".orb") as NodeListOf<HTMLElement>;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.3;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated red glow orbs - background accents */}
      <div
        className="orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px]"
        style={{ animation: "orb-float 8s ease-in-out infinite" }}
      />
      <div
        className="orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-red-700/25 blur-[100px]"
        style={{ animation: "orb-float 10s ease-in-out infinite 2s" }}
      />
      <div
        className="orb absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-red-500/15 blur-[80px]"
        style={{ animation: "orb-float 12s ease-in-out infinite 4s" }}
      />

      {/* VR Headset with red glow */}
      <div className="vr-headset absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out">
        {/* Red glow effect behind headset */}
        <div
          className="absolute -inset-20 bg-red-600/30 rounded-full"
          style={{ animation: "glow-pulse 4s ease-in-out infinite", filter: "blur(80px)" }}
        />

        {/* VR Headset Image */}
        <div
          className="relative z-10"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <img
            src="/images/image.png"
            alt=""
            className="w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain opacity-70 grayscale"
          />
        </div>
      </div>

      {/* Small floating orbs with red tones */}
      <div
        className="orb absolute top-1/3 left-[20%] w-4 h-4 rounded-full bg-red-500/60 shadow-lg shadow-red-500/30"
        style={{ animation: "orb-float 5s ease-in-out infinite" }}
      />
      <div
        className="orb absolute top-2/3 right-[20%] w-3 h-3 rounded-full bg-white/40 shadow-lg shadow-white/20"
        style={{ animation: "orb-float 7s ease-in-out infinite 1s" }}
      />
      <div
        className="orb absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-red-600/50 shadow-lg shadow-red-600/30"
        style={{ animation: "orb-float 6s ease-in-out infinite 2s" }}
      />
      <div
        className="orb absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-neutral-400/50 shadow-lg shadow-neutral-400/20"
        style={{ animation: "orb-float 8s ease-in-out infinite 3s" }}
      />

      {/* Heavy frosted glass overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/50" />

      {/* Subtle grid pattern in gray */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
