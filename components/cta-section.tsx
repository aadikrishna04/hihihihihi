"use client";

import React from "react";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="relative overflow-hidden p-12 md:p-16" hover={false}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Step Into the{" "}
              <span className="text-neutral-400">
                Future
              </span>
              ?
            </h2>
            <p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto text-pretty">
              Join our exclusive early access program and be among the first to experience 
              the next evolution in augmented reality.
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/[0.1]">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <span className="text-white font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={cn(
                    "flex-1 px-6 py-4 rounded-xl",
                    "bg-white/[0.05] backdrop-blur-sm",
                    "border border-white/[0.08]",
                    "text-white placeholder:text-neutral-500",
                    "focus:outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10",
                    "transition-all duration-300"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "group flex items-center justify-center gap-2 px-8 py-4 rounded-xl",
                    "bg-white",
                    "text-black font-semibold",
                    "hover:bg-neutral-200",
                    "transition-all duration-300"
                  )}
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-400" />
                <span>Early access benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-neutral-400" />
                <span>Priority support</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
