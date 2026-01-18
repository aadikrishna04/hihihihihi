import { AnimatedVRBackground } from "@/components/animated-vr-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { VideoCard } from "@/components/video-card";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated VR Background with frosted glass overlay */}
      <AnimatedVRBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Introduction Section */}
          <section className="text-center mb-12">
            <p className="text-lg text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              SocialSense AR helps people with learning disabilities stay regulated, focused, and confident in real-world environments by giving them direct control over overwhelming sensory and social input. Through adaptive visual and audio filtering, it transforms chaotic spaces into manageable ones, allowing users to participate more comfortably in conversations, presentations, and daily activities without needing to withdraw or mask.
            </p>
          </section>

          {/* Main Video Section */}
          <section className="mb-12">
            <GlassCard className="p-8">
              <div className="max-w-5xl mx-auto">
                <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.youtube.com/embed/8aE9pb1p548?si=61r-yKhVrYhYnMb3"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
              {/* GitHub Link Button */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://github.com/ajayraj-cmu/SocialSenseAR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.2] rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </GlassCard>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-12">
            <GlassCard className="p-8">
              <SectionTitle>Tech Stack</SectionTitle>
              <div className="flex justify-center mb-8">
              </div>
              {/* Conversation Flow Section */}
              <div className="mt-12 mb-8">
                <h3 className="text-center mb-6 text-2xl font-bold text-white tracking-wide relative pb-2">

                  Conversation Flow
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#cc0000] to-transparent shadow-[0_0_8px_rgba(204,0,0,0.4)]" />
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/Conversation.jpeg"
                    alt="Conversation Flow"
                    width={800}
                    height={600}
                    className="max-h-[600px]"
                    unoptimized
                  />
                </div>
              </div>

              {/* Environmental Modification Flow Section */}
              <div className="mt-12 mb-8">
                <h3 className="text-center mb-6 text-2xl font-bold text-white tracking-wide relative pb-2">
                  Environmental Modification Flow
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#cc0000] to-transparent shadow-[0_0_8px_rgba(204,0,0,0.4)]" />
                </h3>
                <div className="flex justify-center">
                  <Image
                    src="/Other_flow.jpeg"
                    alt="Environmental Modification Flow"
                    width={800}
                    height={600}
                    className="max-h-[600px]"
                    unoptimized
                  />
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Use Cases Section */}
          <section className="mb-12">
            <GlassCard className="p-8">
              <SectionTitle>Use Cases</SectionTitle>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-4xl mx-auto">
                We&apos;ve performed extensive tests on the accuracy of our model (from a computer vision and trajectory planning perspective) in order to determine its robustness. Below, we display 5 general cases of indoor-assisted navigation.
              </p>

              {/* Video Cards Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <VideoCard
                  title="Mitigating Color-Driven Sensory Overload"
                  videoId="rkZq8w7ApEU"
                />
                <VideoCard
                  title="Hiding distracting objects (object masking / blacking out)"
                  videoId="Fo0ibA6xB1o"
                />
                <VideoCard
                  title="Focus mode (background blur + audio suppression)"
                  videoId="fLn-sadAN4Q"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <VideoCard
                  title="Reducing social visual load"
                  videoId="LXzgGdAiqE0"
                />
                <VideoCard
                  title="Conversation mode (visual isolation, audio focus, sentiment support, conversation summary)"
                  videoId="dQw4w9WgXcQ"
                />
              </div>
            </GlassCard>
          </section>

          {/* Acknowledgments Section */}
          <section className="mb-12">
            <GlassCard className="p-8">
              <SectionTitle>Acknowledgments</SectionTitle>
              <p className="text-center text-neutral-400 mb-4">
                Special thanks to all contributors and collaborators who helped make SocialSense AR possible.
              </p>
              <p className="text-center text-neutral-400">
                …to NexHacks for allowing us to breathe life into this
              </p>
            </GlassCard>
          </section>
        </main>

        <Footer />
      </div>
    </main>
  );
}
