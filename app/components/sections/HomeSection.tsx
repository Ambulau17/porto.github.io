"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HomeSection() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["UI/UX Designer & front end developer", "Creative Problem Solver", "Digital Experience Creator"]

  useEffect(() => {
    const currentText = texts[textIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts])

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
      <div className="flex-1 space-y-8 animate-slideInFromLeft">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Hello!
            </span>{" "}
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              I'm
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-fadeInUp inline-block"
              style={{ animationDelay: "0.6s" }}
            >
              Dzubar.
            </span>
          </h1>

          <div className="h-8 flex items-center">
            <p className="text-xl lg:text-2xl text-gray-400 font-mono">
              "{displayText}
              <span className="animate-pulse text-cyan-400">|</span>"
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-8 pt-8 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <a
            href="https://github.com/Ambulau17"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://wa.me/085351355092"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>

          <a
            href="mailto:ombantai22@gmail.com"
            className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25"
          >
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end animate-slideInFromRight">
      <div className="relative group">
    <Image
      src="/profile.png"
      alt="Dzubar Profile"
      width={350}
      height={350}
      className="rounded-xl object-cover"
      priority
           />

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
            <div
              className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
