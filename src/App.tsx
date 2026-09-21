import { ThemeProvider } from '@/context/ThemeProvider'
import { SiteBackground } from '@/components/layout/SiteBackground'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { CompetitiveProgramming } from '@/components/sections/CompetitiveProgramming'
import { Projects } from '@/components/sections/Projects'
import { Research } from '@/components/sections/Research'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Resume } from '@/components/sections/Resume'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--bg)]"
      >
        Skip to content
      </a>
      <SiteBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <CompetitiveProgramming />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}

export default App
