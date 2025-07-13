"use client"

import { useState, useEffect } from "react"
import TerminalWindow from "./components/TerminalWindow"
import Navigation from "./components/Navigation"
import HomeSection from "./components/sections/HomeSection"
import AboutSection from "./components/sections/AboutSection"
import ProjectSection from "./components/sections/ProjectSection"
import SkillsSection from "./components/sections/SkillsSection"
import ContactSection from "./components/sections/ContactSection"

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isTyping, setIsTyping] = useState(true)
  const [commandText, setCommandText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullCommand = "whoami"

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullCommand.length) {
        setCommandText(fullCommand.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setIsTyping(false), 500)
      }
    }, 150)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "Home":
        return <HomeSection />
      case "About":
        return <AboutSection />
      case "Project":
        return <ProjectSection />
      case "Skills":
        return <SkillsSection />
      case "Contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <TerminalWindow>
          <div className="p-8 space-y-6">
            {/* Terminal Header */}
            <div className="text-gray-400 text-sm space-y-2">
              <div className="text-gray-300">Dzubar@website:~</div>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400">nunomaduro@website</span>
                <span className="text-gray-400">:~$</span>
                <span className="text-green-400">{commandText}</span>
                {(isTyping || showCursor) && <span className="text-green-400 animate-pulse">|</span>}
              </div>
            </div>

            {/* Navigation */}
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* Current Section Indicator */}
            <div className="text-cyan-400 text-xl font-bold animate-fadeIn"># {activeSection}</div>

            {/* Content */}
            <div className="min-h-[600px] animate-slideIn">{renderSection()}</div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}
