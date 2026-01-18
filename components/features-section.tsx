"use client";

import { Eye, Zap, Layers, Globe, Shield, Sparkles } from "lucide-react";
import { GlassCard } from "./glass-card";

const features = [
  {
    icon: Eye,
    title: "Spatial Awareness",
    description: "Advanced depth sensing and environment mapping for pixel-perfect AR placement in any space.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast neural processing delivers seamless AR experiences with zero perceptible lag.",
  },
  {
    icon: Layers,
    title: "Multi-layer Rendering",
    description: "Stack multiple AR layers seamlessly, creating complex interactive environments.",
  },
  {
    icon: Globe,
    title: "World-scale AR",
    description: "Persistent AR content that exists in the real world, accessible by anyone, anywhere.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "On-device processing ensures your visual data never leaves your device.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Machine learning algorithms that understand context and enhance your AR interactions.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-6">
            <Sparkles className="w-4 h-4 text-neutral-400" />
            <span className="text-sm text-neutral-400">Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Technology That Feels{" "}
            <span className="text-neutral-400">
              Like Magic
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 text-pretty">
            Our platform combines breakthrough hardware with intelligent software to deliver 
            AR experiences that were previously thought impossible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="p-8">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.08] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
