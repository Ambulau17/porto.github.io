"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface TerminalWindowProps {
  children: ReactNode
}

export default function TerminalWindow({ children }: TerminalWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <div
      className={`mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-600 transition-all duration-500 hover:shadow-cyan-500/20 hover:shadow-2xl ${
        isMaximized ? "w-full h-screen" : "w-full max-w-6xl"
      }`}
    >
      {/* Terminal Header */}
      <div className="bg-gray-700 px-6 py-4 flex items-center justify-between border-b border-gray-600">
        <div className="flex space-x-3">
          <button className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-400 transition-colors duration-200 shadow-lg"></button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
          ></button>
          <button className="w-4 h-4 bg-green-500 rounded-full hover:bg-green-400 transition-colors duration-200 shadow-lg"></button>
        </div>
        <div className="text-center text-gray-300 text-sm font-medium tracking-wider">Dzubar@website:~</div>
        <div className="w-12"></div>
      </div>

      {/* Terminal Content */}
      <div className="bg-gradient-to-b from-gray-900 to-slate-900 text-gray-100 font-mono relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
