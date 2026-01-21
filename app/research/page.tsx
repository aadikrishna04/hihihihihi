import { AnimatedVRBackground } from "@/components/animated-vr-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { ResearchCard } from "@/components/research-card";
import { GlassCard } from "@/components/glass-card";
import { Footer } from "@/components/footer";

export default function ResearchPage() {
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
          <section>
            <GlassCard className="p-8">
              <SectionTitle>Research</SectionTitle>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-4xl mx-auto text-center">
                Below are the research foundations for each of our use cases.
              </p>

              <ResearchCard title="Changing the colors of surrounding objects">
                Many neurodivergent individuals, particularly autistic people, experience visual hypersensitivity to specific colors, brightness, and contrast, which can trigger discomfort or sensory overload.
                Autistic sensory processing differences often involve difficulty filtering aversive visual input, meaning certain colors can disproportionately interfere with attention and emotional regulation.
                Research on sensory-friendly and neurodiversity-informed environments shows that reducing or modifying visually salient features improves comfort, participation, and engagement.
                Allowing users to replace triggering colors with less aversive alternatives aligns with evidence that simplified visual input supports well-being and sustained interaction.
                <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-400">
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3316948/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC3316948/?utm_source=chatgpt.com
                    </a>
                  </li>
                  <li>
                    <a href="https://journals.sagepub.com/doi/10.1177/19375867251373096?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://journals.sagepub.com/doi/10.1177/19375867251373096?utm_source=chatgpt.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.633037/full?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.633037/full?utm_source=chatgpt.com
                    </a>
                  </li>
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3086654/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC3086654/?utm_source=chatgpt.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tandfonline.com/doi/full/10.1080/09687599.2025.2498415?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.tandfonline.com/doi/full/10.1080/09687599.2025.2498415?utm_source=chatgpt.com
                    </a>
                  </li>
                </ul>
              </ResearchCard>

              <ResearchCard title="Hiding distracting objects (object masking / blacking out)">
                Neurodivergent individuals, especially autistic people and people with ADHD, often experience difficulty filtering irrelevant visual stimuli, making background objects like TVs or bright lights highly distracting.
                Research on sensory processing in autism shows that visual clutter and high-salience stimuli increase cognitive load and can lead to sensory overload or task disengagement.
                Studies on attention and perceptual load demonstrate that reducing irrelevant visual input improves focus and task performance by freeing cognitive resources.
                Masking or blacking out distracting objects aligns with sensory-friendly design principles that emphasize minimizing non-essential visual information to support regulation and sustained engagement.
                <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-400">
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10687592/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC10687592/
                    </a>
                  </li>
                  <li>
                    <a href="https://neurodivergentinsights.com/sensory-overload-in-adhd/?srsltid=AfmBOoqQc-S1KiAD64RgBtnGjiM9YOrWX-qDgH8T5LHHml2llpA_1bEI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://neurodivergentinsights.com/sensory-overload-in-adhd/?srsltid=AfmBOoqQc-S1KiAD64RgBtnGjiM9YOrWX-qDgH8T5LHHml2llpA_1bEI
                    </a>
                  </li>
                  <li>
                    <a href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2021.695825/full" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2021.695825/full
                    </a>
                  </li>
                </ul>
              </ResearchCard>

              <ResearchCard title="Focus mode (background blur + audio suppression)">
                Neurodivergent individuals often experience heightened sensitivity to visual motion, making moving people or objects in the background especially distracting and cognitively demanding.
                Research in autism shows atypical sensory modulation and reduced ability to suppress irrelevant visual and auditory input, which increases distraction and mental fatigue in dynamic environments.
                Studies on attention and perceptual load demonstrate that blurring or reducing background visual detail improves focus by limiting the salience of irrelevant motion cues.
                Auditory hypersensitivity is common in neurodivergent populations, and research shows that reducing or suppressing background noise can lower stress and improve task engagement and concentration.
                <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-400">
                  <li>
                    <a href="https://www.apricott.com/resources/how-do-autistic-people-see-the-world" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.apricott.com/resources/how-do-autistic-people-see-the-world
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tandfonline.com/doi/full/10.1080/09687599.2025.2498415" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.tandfonline.com/doi/full/10.1080/09687599.2025.2498415
                    </a>
                  </li>
                  <li>
                    <a href="https://www.frontiersin.org/journals/integrative-neuroscience/articles/10.3389/fnint.2025.1489322/full" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.frontiersin.org/journals/integrative-neuroscience/articles/10.3389/fnint.2025.1489322/full
                    </a>
                  </li>
                  <li>
                    <a href="https://www.researchgate.net/publication/354393443_Implications_of_Sensory_Processing_and_Attentional_Differences_Associated_With_Autism_in_Academic_Settings_An_Integrative_Review" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.researchgate.net/publication/354393443_Implications_of_Sensory_Processing_and_Attentional_Differences_Associated_With_Autism_in_Academic_Settings_An_Integrative_Review
                    </a>
                  </li>
                </ul>
              </ResearchCard>

              <ResearchCard title="Reducing social visual load">
                Many neurodivergent individuals experience heightened anxiety and sensory overload when being visually observed by others, such as during presentations or group settings where multiple people are staring.
                Research shows that autistic individuals often perceive neutral or ambiguous facial expressions as threatening, which can amplify stress when many faces are visible at once.
                Studies on social attention in autism indicate that faces are processed as highly salient stimuli and can consume disproportionate cognitive resources, interfering with task performance and verbal output.
                Reducing or hiding the visual presence of people aligns with evidence that lowering social-sensory load helps neurodivergent individuals regulate anxiety and maintain focus during demanding social tasks.
                <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-400">
                  <li>
                    <a href="https://www.steadystridesaba.com/blog/autistic-face" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.steadystridesaba.com/blog/autistic-face
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mdpi.com/2673-995X/4/4/104" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://www.mdpi.com/2673-995X/4/4/104
                    </a>
                  </li>
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8217662/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC8217662/
                    </a>
                  </li>
                </ul>
              </ResearchCard>

              <ResearchCard title="Conversation mode (visual isolation, audio focus, sentiment support, conversation summary)">
                Neurodivergent individuals often struggle to filter competing visual and auditory stimuli in social environments, making it difficult to maintain focus during one-on-one conversations when others are present.
                Reducing visual salience by isolating the conversation partner and desaturating or black-and-whiting others aligns with research showing that minimizing background visual input improves social attention and engagement in autism.
                Auditory hypersensitivity and difficulty segregating speech streams are common in neurodivergent populations, and suppressing non-target audio has been shown to reduce stress and improve conversational comprehension.
                Many autistic individuals have difficulty interpreting emotional cues such as anger, sarcasm, or neutrality, particularly in real-time conversation, which can lead to miscommunication and anxiety.
                Providing explicit sentiment cues supports social understanding by reducing ambiguity and perceived threat in conversational partners&apos; expressions or tone.
                Working memory and executive function challenges can make it hard to track conversational context, and external supports like brief summaries improve coherence, response quality, and sustained focus.
                <ul className="mt-4 space-y-2 list-disc list-inside text-neutral-400">
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12256219/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://pmc.ncbi.nlm.nih.gov/articles/PMC12256219/
                    </a>
                  </li>
                  <li>
                    <a href="https://upwardbehavioralhealth.com/understanding-neurodivergent-focus-the-dual-nature-of-under-focusing-and-over-focusing-in-adhd-and-autism" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://upwardbehavioralhealth.com/understanding-neurodivergent-focus-the-dual-nature-of-under-focusing-and-over-focusing-in-adhd-and-autism
                    </a>
                  </li>
                  <li>
                    <a href="https://jael999.medium.com/its-hard-to-find-connection-in-social-spaces-that-aren-t-made-for-you-95a26d1d79eb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      https://jael999.medium.com/its-hard-to-find-connection-in-social-spaces-that-aren-t-made-for-you-95a26d1d79eb
                    </a>
                  </li>
                </ul>
              </ResearchCard>
            </GlassCard>
          </section>
        </main>

        <Footer />
      </div>
    </main>
  );
}
