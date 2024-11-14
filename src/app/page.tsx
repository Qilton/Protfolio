'use client'
import { ReactNode, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Github, Linkedin, Mail, Moon, Sun, ExternalLink } from "lucide-react"

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const techStack = [
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Express.js", url: "https://expressjs.com/" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Node.js", url: "https://nodejs.org/" },
    { name: "GraphQL", url: "https://graphql.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Prisma", url: "https://www.prisma.io/" },
    { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    { name: "Firebase", url: "https://firebase.google.com/" },
  ]

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white'
        : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'
      }`}>
        
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-5xl font-bold mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
              }`}>Swayam Bhalotia</h1>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>Aspiring Full Stack Developer</p>
          </motion.div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/Qilton" target='_blank' className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              } transition-colors duration-300`}>
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/swayam-bhalotia-8b7597318/" target='_blank' className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              } transition-colors duration-300`}>
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:swayambhalotia@gmail.com" target='_blank' className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              } transition-colors duration-300`}>
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className={`absolute top-0 right-0 p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
              } transition-colors duration-300`}
            aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </header>

        <main className="space-y-12">
          <AnimatedSection>
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
              }`}>
              <CardHeader>
                <CardTitle className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>About Me</CardTitle>
              </CardHeader>
              <CardContent className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                <p>
                  I&#39;m a first-year B.Tech CSE student at Techno India University, Kolkata. Passionate about coding and
                  exploring new technologies, I&#39;m constantly pushing myself to learn and grow in the field of software
                  development. My goal is to become a proficient full-stack developer and contribute to innovative projects.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
              }`}>
              <CardHeader>
                <CardTitle className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Tech Stack</CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                  Technologies I&#39;m proficient in or currently learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none"
                    >
                      <Badge
                        variant="secondary"
                        className={`${theme === 'dark' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800'
                          } transition-colors duration-300 hover:bg-purple-600 hover:text-white`}
                      >
                        {tech.name}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
              }`}>
              <CardHeader>
                <CardTitle className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Techno India University, Kolkata
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  B.Tech in Computer Science and Engineering
                </p>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>2023 - Present</p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
              }`}>
              <CardHeader>
                <CardTitle className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Projects</CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                  Showcase of my recent work
                </CardDescription>
              </CardHeader>
              <CardContent className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } space-y-6`}>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>Project Yogikaa</h3>
                  <p className="mb-2">
                    A comprehensive web application focused on yoga and wellness, showcasing my skills in modern web development and content management.
                  </p>
                  <ul className="list-disc list-inside mb-2 space-y-1">
                    <li>Developed a user-friendly frontend for yoga enthusiasts</li>
                    <li>Implemented an admin panel for content management</li>
                    <li>Integrated Firebase for secure video storage and retrieval</li>
                    <li>Created features for updating photos, videos, and testimonials</li>
                  </ul>
                  <p className="mb-2">
                    <span className="font-semibold">Technologies used:</span> React, Node.js, Firebase, Content Management System
                  </p>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://yogikaa.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'
                        } transition-colors duration-300 flex items-center`}
                    >
                     <img src="/Yogika.png" alt="" /> <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
                <p>
                  More exciting projects are in the works, leveraging my skills in the MERN stack, GraphQL, TypeScript, Docker, Prisma, and PostgreSQL. Stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection>
            <Card className={`${theme === 'dark' ? 'bg-gray-800 border-purple-500' : 'bg-white border-purple-200'
              }`}>
              <CardHeader>
                <CardTitle className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Skills Highlight</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className={`list-disc list-inside ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  } space-y-2`}>
                  <li>Full-stack web development with MERN stack</li>
                  <li>API development using GraphQL</li>
                  <li>Database management with PostgreSQL and Prisma ORM</li>
                  <li>Containerization with Docker</li>
                  <li>Type-safe programming with TypeScript</li>
                  <li>Version control with Git and GitHub</li>
                  <li>Content Management System (CMS) development</li>
                  <li>Cloud storage integration with Firebase</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </main>

        <footer className={`mt-12 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
          <p>&copy; {new Date().getFullYear()} Swayam Bhalotia. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
