import Navbar from "./components/layout/Navbar";
import FadeInSection from "./components/ui/FadeInSection";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";    // now with filtering
import Skills from "./components/sections/Skills";
import Stats from "./components/sections/Stats";           // ✨ new
import Currently from "./components/sections/Currently";   // ✨ new
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";     // ✨ new

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Stats />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Currently />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <footer className="text-center py-12 text-neutral-500 text-sm border-t border-neutral-200 dark:border-neutral-900">
        <p>© {new Date().getFullYear()} Your Name. Built with React and Vercel.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}