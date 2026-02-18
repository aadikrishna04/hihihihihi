import Link from "next/link";

export default function ResearchPage() {
  const research = [
    {
      title: "Color-Driven Sensory Modulation",
      description: "Many neurodivergent individuals experience visual hypersensitivity to specific colors and contrast. Real-time color modification reduces sensory overload and supports sustained engagement in environments that would otherwise be overwhelming.",
      impact: "Improved comfort and participation in visually stimulating spaces"
    },
    {
      title: "Object Masking",
      description: "Visual clutter increases cognitive load and can trigger sensory overload. The ability to hide or mask distracting objects helps maintain focus and reduces the need to withdraw from challenging environments.",
      impact: "Enhanced attention control and reduced cognitive fatigue"
    },
    {
      title: "Background Blur & Audio Suppression",
      description: "Neurodivergent individuals often struggle with background motion and ambient noise. Selective blurring and audio filtering create manageable sensory environments without requiring physical isolation.",
      impact: "Better task engagement and stress reduction"
    },
    {
      title: "Social Visual Load Management",
      description: "Being observed by multiple people can trigger anxiety and overwhelm. Reducing the visual presence of observers helps individuals stay present during presentations and group interactions.",
      impact: "Reduced social anxiety and improved performance"
    },
    {
      title: "Conversation Support",
      description: "Filtering competing visual and auditory stimuli during one-on-one conversations improves comprehension and reduces miscommunication. Sentiment indicators provide additional context for emotional understanding.",
      impact: "More confident and effective communication"
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-3xl font-bold">
            XRBridge
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid-bg pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Research Foundations</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Evidence-based approach to adaptive sensory support
          </p>
        </div>
      </section>

      {/* Research Sections */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {research.map((item, index) => (
          <div key={index} className="relative border-2 border-dashed border-white/[0.15] rounded-xl p-8">
            <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="absolute top-6 right-6 text-sm font-mono text-zinc-600">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h2 className="text-3xl font-bold mb-4 mt-2">{item.title}</h2>
            <p className="text-zinc-400 leading-relaxed mb-4 text-base">
              {item.description}
            </p>
            <div className="pt-4 border-t-2 border-dashed border-white/[0.08]">
              <div className="text-sm font-mono text-blue-500 mb-2">IMPACT</div>
              <div className="text-base text-zinc-500">{item.impact}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-dashed border-white/[0.08] py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-base">
          © 2026 XRBridge
        </div>
      </footer>
    </main>
  );
}
