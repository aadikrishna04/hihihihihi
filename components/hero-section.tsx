"use client";

import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-sm text-neutral-300">Launching Soon — Join the Waitlist</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <span className="block text-balance">Experience Reality</span>
          <span className="block text-neutral-400">
            Reimagined
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 mb-12 leading-relaxed text-pretty">
          Step into a new dimension where the digital and physical worlds merge seamlessly. 
          Our cutting-edge AR technology transforms how you see, interact, and experience everything around you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className={cn(
              "group flex items-center gap-2 px-8 py-4 rounded-2xl",
              "bg-white",
              "text-black font-semibold text-lg",
              "hover:bg-neutral-200",
              "transition-all duration-300"
            )}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            className={cn(
              "group flex items-center gap-3 px-8 py-4 rounded-2xl",
              "bg-white/[0.05] backdrop-blur-sm",
              "border border-white/[0.08]",
              "text-white font-medium text-lg",
              "hover:bg-white/[0.08] hover:border-white/[0.12]",
              "transition-all duration-300"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.1] flex items-center justify-center group-hover:bg-white/[0.15] transition-colors">
              <Play className="w-4 h-4 text-white ml-0.5" />
            </div>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "99.9%", label: "Tracking Accuracy" },
            { value: "<1ms", label: "Latency" },
            { value: "8K", label: "Resolution" },
            { value: "180°", label: "Field of View" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
