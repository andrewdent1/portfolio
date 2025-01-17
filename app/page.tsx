'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Mail, Github, Linkedin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { SkillTag } from '@/components/skill-tag'
import { ExperienceItem } from '@/components/experience-item'
import { ProjectCard } from '@/components/project-card'
import { SocialButton } from '@/components/social-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PDFViewer } from '@/components/pdf-viewer'

export default function Home() {
  const [theme, setTheme] = useState('dark')
  const [isThemeButtonVisible, setIsThemeButtonVisible] = useState(true)
  const [isPDFOpen, setIsPDFOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsThemeButtonVisible(false)
      } else {
        setIsThemeButtonVisible(true)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const tools = [
    "Microsoft Excel", "PowerBI", "Microsoft Office", "Adobe Creative Cloud",
    "Canva", "Figma", "Git & GitHub", "Visual Studio Code", "Wordpress",
    "Chrome DevTools", "MySQL"
  ]

  const languages = [
    "HTML5", "CSS/SCSS", "JavaScript", "TypeScript", "Python", "SQL",
    "Node.js", "Flask", "TailwindCSS"
  ]

  const softSkills = [
    "Detail Oriented", "Team Coordination", "Remote Productivity",
    "Adaptability", "Problem Solving"
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <AnimatePresence>
        {isThemeButtonVisible && (
          <motion.button
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleTheme}
            className="fixed top-8 right-8 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <ScrollToTop />

      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl="/resume.pdf"
      />

      <main className="container max-w-3xl mx-auto px-6 py-32">
        <motion.div
          className="space-y-32"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div {...fadeIn}>
            <h1 className="text-4xl font-bold mb-2">
              Hello! <span className="inline-block animate-wave">👋</span>
            </h1>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-4">
            <p className="text-3xl font-medium leading-relaxed">
              I&apos;m <span className="text-primary">Andrew Dent</span>, an analytical thinker and ambitious problem-solver with a passion for building innovative solutions <span className="inline-block">👩‍💻</span>
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <p className="text-xl text-muted-foreground">
              Get in touch{' '}
              <span className="inline-block">👉</span>{' '}
              <a
                href="mailto:your.email@example.com"
                className="text-primary underline decoration-2 underline-offset-4 hover:decoration-primary/70 transition-colors"
              >
                dentdrew@gmail.com
              </a>
            </p>
          </motion.div>

          <motion.section {...fadeIn}>
            <SectionHeading>Background</SectionHeading>
            <div className="space-y-4 text-muted-foreground">
              <p>
                After graduating from Florida State University in Spring 2023, I dove into the world of accounting, and am currently a Revenue Accountant. This path has allowed me to gain valuable experience in financial analysis and operational strategy. I've also had the unique opportunity to work remotely while traveling the U.S., which taught me the importance of adaptability and finding creative solutions to challenges.
              </p>
              <p>
                As a business-oriented individual with a strong interest in technology, I'm passionate about bridging the gap between strategy and innovation. Whether I'm analyzing data or optimizing processes, I enjoy finding ways to combine my analytical mindset with technical skills. My ultimate goal is to contribute to projects that are both impactful and forward-thinking.
              </p>
              <p>
                When I'm not working, I'm likely pursuing personal goals around fitness, exploring the latest tech trends, or crossing off another item on my bucket list.
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeIn}>
            <SectionHeading>Skills</SectionHeading>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Tools & Platforms</h3>
                <div>
                  {tools.map((tool) => (
                    <SkillTag key={tool}>{tool}</SkillTag>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Languages & Frameworks</h3>
                <div>
                  {languages.map((lang) => (
                    <SkillTag key={lang}>{lang}</SkillTag>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Soft Skills</h3>
                <div>
                  {softSkills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeIn}>
            <SectionHeading>Professional Experience</SectionHeading>
            
            <div className="space-y-6">
              <ExperienceItem
                company="Space Coast Web Development"
                position="Co-Founder"
                period="October 2024 - Current"
              />
              <ExperienceItem
                company="Brown & Brown Insurance"
                position="Revenue Accountant"
                period="June 2024 - Current"
              />
              <ExperienceItem
                company="Greenberg Traurig, LLP"
                position="Revenue Analyst"
                period="May 2023 - June 2024"
              />
              <ExperienceItem
                company="Truist Financial Corporation"
                position="Financial Services Specialist"
                period="September 2021 - Dec 2022"
              />
            </div>

            <button
              onClick={() => setIsPDFOpen(true)}
              className="inline-block mt-8 text-primary underline decoration-2 underline-offset-4 hover:decoration-primary/70 transition-colors"
            >
              View Full Resume
            </button>
          </motion.section>

          <motion.section {...fadeIn}>
            <SectionHeading>Featured Projects</SectionHeading>
            
            <div>
              <ProjectCard
                title="CharacterGPT"
                website="character-gpt.com"
                projectLink="https://character-gpt.com/templates/home.html"
                description="This CharacterAI dupe was my first personal project and the one that jump-started my interest in programming. I built this app to allow users to speak to different chatbots. Please note that the API's integrated in the current site are no longer active, disabling the bots functionality. (I don't want to pay for ElevenLabs)"
                date="June 2024"
                technologies={["HTML5", "CSS/SCSS", "JavaScript", "Python", "Flask", "OpenAI API", "ElevenLabs API"]}
              />
              
              <ProjectCard
                title="Environmental Property Audits"
                website="ep-audits.com"
                projectLink="https://ep-audits.com/"
                description="Redesigning this site was my first project with Space Coast Web Development. Since this project, we have focused on designing and developing sleek, static sites for local businesses."
                date="October 2024"
                technologies={["HTML5", "CSS/SCSS", "JavaScript", "TypeScript", "TailwindCSS", "Astro"]}
              />
              
              <ProjectCard
                title="GarageSale"
                website="coming soon"
                description="A personal project that I am currently building. GarageSale aims to create a trustworthy and transparent online marketplace that empowers local communities to embrace sustainability and reusability."
                date="January 2025"
                technologies={["HTML5", "CSS/SCSS", "JavaScript", "TypeScript", "TailwindCSS", "Astro", "Node.js"]}
              />
            </div>

            <div className="mt-16 space-y-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <SocialButton
                  href="mailto:dentdrew@gmail.com"
                  icon={Mail}
                  label="Email"
                />
                <SocialButton
                  href="https://github.com/andrewdent1"
                  icon={Github}
                  label="GitHub"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/andrew-dent-a20a22160/"
                  icon={Linkedin}
                  label="LinkedIn"
                />
              </div>

              <div className="text-sm text-muted-foreground text-center">
                SITE DESIGNED AND DEVELOPED BY{' '}
                <span className="font-medium text-foreground">ANDREW DENT</span>, 2024
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

