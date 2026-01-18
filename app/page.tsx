import { AnimatedVRBackground } from "@/components/animated-vr-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ExperienceSection } from "@/components/experience-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated VR Background with frosted glass overlay */}
      <AnimatedVRBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <ExperienceSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
