"use client";

import { useState } from "react";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "design",
    title: "Spatial Design",
    subtitle: "Create in 3D Space",
    description: "Design and prototype in real-world scale. See your creations come to life in your actual environment before committing to production.",
    stats: [
      { label: "Accuracy", value: "Sub-mm" },
      { label: "Export Formats", value: "20+" },
    ],
  },
  {
    id: "collab",
    title: "Remote Collaboration",
    subtitle: "Work Together, Anywhere",
    description: "Join colleagues in shared AR workspaces. Annotate real objects, share 3D models, and collaborate as if you're in the same room.",
    stats: [
      { label: "Max Users", value: "100+" },
      { label: "Latency", value: "<10ms" },
    ],
  },
  {
    id: "training",
    title: "Immersive Training",
    subtitle: "Learn by Doing",
    description: "Master complex procedures with guided AR overlays. From surgery to machinery repair, learn hands-on without the risks.",
    stats: [
      { label: "Retention Rate", value: "94%" },
      { label: "Time Saved", value: "60%" },
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("design");
  const activeExperience = experiences.find((e) => e.id === activeTab);

  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-6">
              <span className="text-sm text-neutral-400">Use Cases</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Endless{" "}
              <span className="text-neutral-400">
                Possibilities
              </span>
            </h2>
            <p className="text-lg text-neutral-500 mb-10 text-pretty">
              From enterprise solutions to creative tools, NexusAR adapts to your needs 
              and unlocks new ways to work, create, and connect.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "px-5 py-3 rounded-xl font-medium transition-all duration-300",
                    activeTab === exp.id
                      ? "bg-white text-black"
                      : "bg-white/[0.05] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                  )}
                >
                  {exp.title}
                </button>
              ))}
            </div>

            {/* Active Experience Details */}
            {activeExperience && (
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-300 text-sm font-medium mb-2">{activeExperience.subtitle}</p>
                  <p className="text-neutral-500 text-lg leading-relaxed">
                    {activeExperience.description}
                  </p>
                </div>
                <div className="flex gap-8">
                  {activeExperience.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-neutral-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right - Interactive Display */}
          <div className="relative">
            <GlassCard className="aspect-square p-8" hover={false}>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                {/* Animated visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />
                
                {/* 3D Grid representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Animated rings */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border border-white/[0.15] rounded-full"
                        style={{
                          animation: `glow-pulse ${3 + i}s ease-in-out infinite`,
                          transform: `scale(${1 + i * 0.3})`,
                        }}
                      />
                    ))}
                    
                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-2xl bg-white shadow-2xl shadow-white/20 flex items-center justify-center"
                        style={{ animation: "float 4s ease-in-out infinite" }}
                      >
                        <span className="text-4xl font-bold text-black">AR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-white/50" style={{ animation: "orb-float 4s ease-in-out infinite" }} />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-neutral-400/50" style={{ animation: "orb-float 5s ease-in-out infinite 1s" }} />
                <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-neutral-500/50" style={{ animation: "orb-float 6s ease-in-out infinite 2s" }} />
              </div>
            </GlassCard>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-white/[0.03] rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
