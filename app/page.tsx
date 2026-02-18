import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <Logo className="text-white" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen grid-bg flex items-center px-6 pt-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Deploy <span className="italic bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Computer Vision</span> to Meta Quest
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                Real-time world-locked overlays from any perception model. Voice-controlled, stereo-rendered, deployed as infrastructure.
              </p>
            </div>

            {/* Right: Demo Video */}
            <div className="relative border-2 border-dashed border-blue-500/30 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-zinc-950">
                <iframe
                  src="https://www.youtube.com/embed/8aE9pb1p548?si=61r-yKhVrYhYnMb3"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Platform for Perception-Driven Experiences</h2>
          <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-4xl mx-auto">
            Connect computer vision models to Quest passthrough—no custom infrastructure required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="absolute top-4 right-4 text-sm font-mono text-zinc-600">01</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Voice Interface</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              "Hey Vibe, blur the laptop" — users speak naturally, the system translates intent into spatial changes. No menus, no controllers.
            </p>
          </div>

          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="absolute top-4 right-4 text-sm font-mono text-zinc-600">02</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">World-Locked Overlays</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Spatial effects remain anchored to physical objects. Real-time tracking, stereo projection, persistent across movement.
            </p>
          </div>

          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="absolute top-4 right-4 text-sm font-mono text-zinc-600">03</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Backend Infrastructure</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Deploy models as services. Update capabilities without client changes. Local development to cloud production seamlessly.
            </p>
          </div>

          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">COMING SOON</span>
            </div>
            <div className="absolute top-4 right-4 text-sm font-mono text-zinc-600">04</div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Model-Agnostic</h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Deploy any perception model — segmentation, depth, activity recognition. The rendering pipeline stays consistent. (currently in development)
            </p>
          </div>
        </div>
      </section>

      {/* Demo Videos */}
      <section id="demo" className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Example: Text-Prompted Segmentation</h2>
          <p className="text-base md:text-lg lg:text-xl text-zinc-400">
            Current implementation uses SAM3 for object segmentation. Say what you want modified, watch it happen in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="border-2 border-dashed border-white/[0.15] rounded-xl overflow-hidden">
            <div className="p-6 border-b-2 border-dashed border-white/[0.15] bg-zinc-950">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Color Modification</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/rkZq8w7ApEU"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-white/[0.15] rounded-xl overflow-hidden">
            <div className="p-6 border-b-2 border-dashed border-white/[0.15] bg-zinc-950">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Object Masking</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/Fo0ibA6xB1o"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-white/[0.15] rounded-xl overflow-hidden">
            <div className="p-6 border-b-2 border-dashed border-white/[0.15] bg-zinc-950">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Background Blur</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/fLn-sadAN4Q"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border-2 border-dashed border-white/[0.15] rounded-xl overflow-hidden">
            <div className="p-6 border-b-2 border-dashed border-white/[0.15] bg-zinc-950">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Selective Visibility</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/LXzgGdAiqE0"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-white/[0.15] rounded-xl overflow-hidden">
            <div className="p-6 border-b-2 border-dashed border-white/[0.15] bg-zinc-950">
              <div className="flex items-center justify-between">
                <h3 className="text-base">Focus Mode</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/hVykEwN5anM"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What You Can Build</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Accessibility Tools</h3>
            <p className="text-zinc-400 leading-relaxed text-base">
              Reduce visual overload, highlight critical information, adapt environments for different sensory needs.
            </p>
          </div>

          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Enterprise Systems</h3>
            <p className="text-zinc-400 leading-relaxed text-base">
              Annotate workspaces, redact sensitive material, guide users through physical tasks with spatial overlays.
            </p>
          </div>

          <div className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-6 md:p-8">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-2">Context-Aware Experiences</h3>
            <p className="text-zinc-400 leading-relaxed text-base">
              Understand scene composition, recognize activities, respond to gestures — any perception capability.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t-2 border-dashed border-white/[0.08]">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-8 text-base">
            <a
              href="https://www.linkedin.com/in/aaditkrishna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-500 transition-colors"
            >
              Aadit Krishna
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-raj-670850230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-500 transition-colors"
            >
              Ajay Raj
            </a>
            <a
              href="https://www.linkedin.com/in/jaywankhede/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-500 transition-colors"
            >
              Jay Wankhede
            </a>
            <a
              href="https://www.linkedin.com/in/marshall-mandell/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-500 transition-colors"
            >
              Marshall Mandell
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-dashed border-white/[0.08] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-base">
          © 2026 XRBridge
        </div>
      </footer>
    </main>
  );
}
