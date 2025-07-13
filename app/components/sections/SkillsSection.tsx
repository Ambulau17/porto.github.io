"use client"

import { useState, useEffect } from "react"

export default function SkillsSection() {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 90, color: "from-purple-400 to-purple-600", logo: "🎨" },
        { name: "Adobe XD", level: 85, color: "from-pink-400 to-pink-600", logo: "🎭" },
        { name: "Mockup Design", level: 90, color: "from-blue-400 to-blue-600", logo: "📱" },
        { name: "Prototyping", level: 85, color: "from-green-400 to-green-600", logo: "🔗" },
        { name: "User Research", level: 80, color: "from-yellow-400 to-yellow-600", logo: "🔍" },
      ],
    },
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React/Next.js", level: 75, color: "from-blue-400 to-blue-600", logo: "⚛️" },
        { name: "TypeScript", level: 70, color: "from-blue-500 to-indigo-600", logo: "🔷" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-cyan-600", logo: "🎨" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600", logo: "🟨" },
        { name: "HTML/CSS", level: 90, color: "from-orange-400 to-orange-600", logo: "🌐" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Laravel", level: 75, color: "from-red-400 to-red-600", logo: "🟥" },
        { name: "PHP", level: 70, color: "from-purple-500 to-purple-700", logo: "🐘" },
        { name: "MySQL", level: 65, color: "from-blue-600 to-indigo-700", logo: "🗄️" },
        { name: "REST API", level: 70, color: "from-green-500 to-green-700", logo: "🚀" },
        { name: "Database Design", level: 68, color: "from-gray-500 to-gray-700", logo: "🗃️" },
      ],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills: { [key: string]: number } = {}
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          newAnimatedSkills[skill.name] = skill.level
        })
      })
      setAnimatedSkills(newAnimatedSkills)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-8 py-8 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-cyan-400 animate-slideInFromLeft">Skills & Technologies</h2>
        <div
          className="flex items-center space-x-2 text-gray-400 animate-slideInFromLeft"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-green-400">$</span>
          <span>cat skills.json</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 animate-slideInFromBottom"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.logo}</span>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>

                  <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{
                        width: `${animatedSkills[skill.name] || 0}%`,
                        transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Stats */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Average</span>
                <span className="text-cyan-400 font-semibold">
                  {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div
        className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInFromBottom"
        style={{ animationDelay: "0.8s" }}
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">🚀</span>
          Other Technologies & Interests
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Wireframing", logo: "📐" },
            { name: "Adobe Photoshop", logo: "🎨" },
            { name: "Adobe Illustrator", logo: "✏️" },
            { name: "Sketch", logo: "💎" },
            { name: "InVision", logo: "👁️" },
            { name: "Zeplin", logo: "🔶" },
            { name: "Bootstrap", logo: "🅱️" },
            { name: "Sass/SCSS", logo: "💅" },
            { name: "jQuery", logo: "📜" },
            { name: "Git", logo: "🌿" },
            { name: "Composer", logo: "🎼" },
            { name: "Artisan", logo: "🛠️" },
            { name: "Blade Templates", logo: "⚔️" },
            { name: "Eloquent ORM", logo: "💎" },
            { name: "MVC Pattern", logo: "🏗️" },
            { name: "Responsive Design", logo: "📱" },
          ].map((tech, index) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-cyan-600 hover:text-white transition-all duration-300 cursor-default flex items-center space-x-1"
              style={{ animationDelay: `${1 + index * 0.05}s` }}
            >
              <span>{tech.logo}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}