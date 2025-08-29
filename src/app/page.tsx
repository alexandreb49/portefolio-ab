// app/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MyProjects from './projects/page'
import {
  Mail, Phone, MapPin, Linkedin, Github, ArrowRight,
  Wrench, Layers, Database, Code2, Cpu, Globe, GraduationCap, Briefcase, Users
} from 'lucide-react'

export default function HomePage() {
  // ---- Background data ----
  const background = [
    {
      title: "Arts et Métiers ParisTech — Master's in Mechanical Engineering",
      time: '2023–2026',
      info: 'Specialization in Advanced Manufacturing & Design • Expected graduation 2026',
      logo: '/logos/ensam.png',
      alt: 'Arts et Métiers',
      type: 'education',
    },
    {
      title: 'IT Manager — Arts et Métiers Student Association',
      time: '2024–2025',
      info: 'Managing websites & databases • Network infrastructure for 300+ students • Process automation',
      logo: '/logos/ensam.png',
      alt: 'Arts et Métiers',
      type: 'association',
    },
    {
      title: 'Workshop Operator Intern — APMA',
      time: '2024',
      info: 'Machining, turning, deburring, sandblasting • Quality control processes',
      logo: '/logos/apma.png',
      alt: 'APMA',
      type: 'internship',
    },
    {
      title: 'ESEO Engineering School — Foundation Years',
      time: '2021–2023',
      info: 'Preparatory program in Mathematics, Physics, and Engineering fundamentals',
      logo: '/logos/eseo.png',
      alt: 'ESEO',
      type: 'education',
    },
  ]

  const projects = [
    {
      title: 'Finite Element Software — Arts et Métiers',
      time: '2025',
      info: 'Static & vibratory analysis for beam structures • Team lead (4)',
      logo: '/logos/ensam.png',
      alt: 'Arts et Métiers',
    },
    {
      title: 'CO₂ Cryogenic Assistance Study — Arts et Métiers',
      time: '2025',
      info: 'Tool wear evaluation • SEM chip analysis • Force measurement',
      logo: '/logos/ensam.png',
      alt: 'Arts et Métiers',
    },
    {
      title: 'NASA Space Apps (French Interstellar)',
      time: '2023',
      info: 'IMF analysis tool • Machine learning • UI',
      logo: '/logos/nasa.png',
      alt: 'NASA',
    },
    {
      title: 'Inductive Sensor Project — ESEO',
      time: '2022–2023',
      info: 'Vehicle detection by induction • Data processing software',
      logo: '/logos/eseo.png',
      alt: 'ESEO',
    },
  ]

  return (
    <main className="min-h-screen w-full text-black bg-white scroll-smooth">
      {/* ===== HERO (compact) ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-6 md:pt-10 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-300 to-indigo-200 blur-3xl opacity-50" />
                <Image
                  src="/me.jpg" // <- replace
                  alt="Alexandre Bernard"
                  width={320}
                  height={320}
                  priority
                  className="relative rounded-full object-cover"
                />
              </div>
            </div>

            {/* Intro */}
            <div className="md:col-span-3">
              <h1
                className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
                style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
              >
                Alexandre Bernard
              </h1>

              <p className="text-gray-700 mt-2 md:mt-3 text-lg">
                I craft systems where <strong>mechanics</strong>, <strong>software</strong>, and <strong>data</strong> meet — prototypes, simulations, and production-ready tools.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a href="mailto:alexandre.bernard@ensam.eu" className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-700" />
                  alexandre.bernard@ensam.eu
                </a>
                <span className="text-gray-300">•</span>
                <a href="tel:+33781995763" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-700" />
                  +33 7 81 99 57 63
                </a>
                <span className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-700" />
                  Angers, France
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/alexandre-bernard-chaillou"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 text-blue-800 hover:bg-blue-50 transition"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/yourgithub" // <- replace
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLUE BAND — Internship CTA (compact) ===== */}
      <section className="bg-gradient-to-r from-blue-700 to-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                Looking for a <span className="font-bold">6-month internship</span> (Feb → Sept 2026)
              </h2>
              <p className="mt-1 text-blue-50">
                Interests: aerospace, advanced manufacturing, simulation, embedded systems. I love fast iteration,
                clean code, and measurable outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:alexandre.bernard@ensam.eu?subject=Internship%20Opportunity"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-blue-800 hover:bg-blue-50 transition"
              >
                <Mail className="w-4 h-4" /> Contact me
              </a>
              <a
                href="/Alexandre_Bernard_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/70 hover:bg-white/10 transition"
              >
                Download CV <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto text-center mb-2">
          <p className="text-gray-800 leading-relaxed text-lg">
            French engineering student at Arts et Métiers, driven by hands-on projects and tight feedback loops.
            I thrive where mechanical design, electronics, and software overlap — building tools, pipelines, and
            interfaces that make teams faster and decisions clearer.
          </p>
        </div>
      </section>

      {/* ===== SKILLS (more space) + LANGUAGES & SOFT SKILLS (side-by-side) ===== */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          {/* Make skills span 2/3 and right column 1/3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Skills — col-span-2 for more room */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-blue-700" /> Skills & Expertise
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-700" /> Core Strengths
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      Project management & delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      Mechanical design & prototypes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      Fluid mechanics & testing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      Programming & automation
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-700" /> CAD & CAM
                    </h4>
                    <ul className="list-disc ml-5 text-gray-800 space-y-1">
                      <li>CATIA</li>
                      <li>SolidWorks</li>
                      <li>3DExperience</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-700" /> Simulation
                    </h4>
                    <ul className="list-disc ml-5 text-gray-800 space-y-1">
                      <li>Abaqus</li>
                      <li>StarCCM+</li>
                      <li>ForgeNXT</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-700" /> Software Development
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1 text-gray-800">
                    <span>Python, FastAPI, data pipelines</span>
                    <span>Embedded & IoT (ESP8266, sensors)</span>
                    <span>Numerical methods & optimization</span>
                    <span>ML for physical systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Languages & Soft Skills side-by-side */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Languages & Soft Skills</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Languages */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-700" /> Languages
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="font-medium">French</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Native</span>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="font-medium">English</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Professional (TOEIC 985)</span>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="font-medium">Spanish</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">Intermediate (B1)</span>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                      <span className="font-medium">German</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800">Beginner (A2)</span>
                    </li>
                  </ul>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-700" /> Soft Skills
                  </h4>
                  <ul className="space-y-3">
                    <li className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="font-medium text-sm">Leadership & Teamwork</div>
                      <div className="text-xs text-gray-600">Team lead experience, cross-functional collaboration</div>
                    </li>
                    <li className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="font-medium text-sm">Problem Solving</div>
                      <div className="text-xs text-gray-600">Analytical thinking, rapid prototyping approach</div>
                    </li>
                    <li className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="font-medium text-sm">Communication</div>
                      <div className="text-xs text-gray-600">Technical documentation, stakeholder presentations</div>
                    </li>
                    <li className="p-3 bg-white rounded-lg border border-gray-200">
                      <div className="font-medium text-sm">Adaptability</div>
                      <div className="text-xs text-gray-600">Fast learning, multidisciplinary projects</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BACKGROUND (compact) ===== */}
      <section id="background" className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {background.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[48px,1fr,auto] items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
            >
              {/* Logo (smaller) */}
              <div className="flex items-center justify-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.alt || 'Logo'}
                    width={40}
                    height={40}
                    className="rounded-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                )}
              </div>

              {/* Content (tighter text) */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold text-gray-900 leading-snug truncate">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-xs mt-0.5 line-clamp-2">{item.info}</p>
              </div>

              {/* Badge + time (compact) */}
              <div className="text-right">
                <div className="mb-1">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.type === 'education'
                        ? 'bg-blue-100 text-blue-800'
                        : item.type === 'internship'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {item.type === 'education' && <GraduationCap className="w-3 h-3 inline mr-1" />}
                    {item.type === 'internship' && <Briefcase className="w-3 h-3 inline mr-1" />}
                    {item.type === 'association' && <Users className="w-3 h-3 inline mr-1" />}
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
                <span className="text-[11px] text-gray-500 font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2
            className="text-3xl font-bold text-blue-900 mb-2"
            style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
          >
            Featured Projects
          </h2>
          <p className="text-gray-600 mb-6">A selection of recent work across mechanics, electronics, and software.</p>
          <MyProjects />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Let's build something.</h3>
            <p className="text-gray-700">Open to internships & collaborations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:alexandre.bernard@ensam.eu"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-bernard-chaillou"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-blue-50 transition"
            >
              <Linkedin className="w-4 h-4 text-blue-700" /> LinkedIn
            </a>
            <a
              href="https://github.com/yourgithub" // <- replace
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
