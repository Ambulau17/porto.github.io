"use client"

import { useState } from "react"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("bio")

  const tabs = [
    { id: "bio", label: "Bio", icon: "👨‍💻" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
  ]

  const experiences = [
    {
      title: "Fullstack Web Develope",
      company: "HealthTourism Jogja Project",
      period: "2025 - Present",
      description:
        "Developed a web application providing tourism and healthcare information in Yogyakarta using Laravel (PHP) for the backend and MySQL as the primary database. Features include destination and hospital data management, location-based search, and a responsive user interface built with Blade and Bootstrap.",
    },
    {
      title: "UI/UX Designer (Practicum Project)",
      company: "E-Commerce Web Project",
      period: "2024",
      description:
        "Designed the user interface for an e-commerce website as part of a practical course project. Focused on creating a responsive layout and an efficient user flow, from the homepage and product catalog to the checkout process. Applied UI/UX design principles and created prototypes using Figma prior to implementation.",
    },
    {
      title: "Portfolio Website",
      company: "SPortfolio",
      period: "2024",
      description: "Built a personal portfolio website using HTML, CSS, and JavaScript. Showcases personal projects and profile information as a UI/UX Designer and Web Developer.",
    },
    {
      title: "React To-Do List App",
      company: "react-todolist",
      period: "2024",
      description: "Created a simple to-do list application using React. Implemented basic component structure and state management to add, edit, and delete daily tasks..",
    },
  ]

  return (
    <div className="space-y-8 py-8 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-cyan-400 animate-slideInFromLeft">About Me</h2>
        <div
          className="flex items-center space-x-2 text-gray-400 animate-slideInFromLeft"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-green-400">$</span>
          <span>cat about.txt</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        className="flex space-x-1 bg-gray-800 p-1 rounded-lg w-fit animate-slideInFromLeft"
        style={{ animationDelay: "0.4s" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-cyan-600 text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "bio" && (
          <div className="space-y-6 animate-slideInFromRight">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="border-l-4 border-cyan-400 pl-4">
                    I am a fourth-semester student at the Faculty of Science and Technology, Information Technology Program, Universitas ‘Aisyiyah Yogyakarta.
                  </p>
                  <p>
                    Throughout my studies, I have developed a strong interest in UI/UX Design and Frontend Development. I am passionate about creating digital experiences that are not only visually appealing but also functional and user-centered. My enthusiasm for modern web technologies and design principles drives me to bridge the gap between design and development.
                  </p>
                  <p>
                    Outside of my activities as a developer and designer, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with fellow developers in the community.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-cyan-400 text-2xl font-bold">2+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-cyan-400 text-2xl font-bold">7+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-cyan-400 text-2xl font-bold">4+</div>
                    <div className="text-gray-400 text-sm">UI/UX Web Designs</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-cyan-400 text-2xl font-bold">1</div>
                    <div className="text-gray-400 text-sm"> Real Ongoing Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="space-y-6 animate-slideInFromRight">
            <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-cyan-400 pl-6 pb-6 relative hover:border-blue-400 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "education" && (
  <div className="space-y-6 animate-slideInFromRight">
    <h3 className="text-2xl font-semibold text-white">Education & Certifications</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">Bachelor of Information Technology</h4>
        <p className="text-gray-400 mb-2">Universitas 'Aisyiyah Yogyakarta</p>
        <p className="text-gray-500">2025 – Present (Semester 4)</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">UI/UX Design Training</h4>
        <p className="text-gray-400 mb-2">Google UX Design (Self-paced via Coursera)</p>
        <p className="text-gray-500">2024</p>
        <p className="text-gray-400 mt-2 text-sm">
          Learned the fundamentals of UI design, wireframing, prototyping, and user research using Figma.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">Laravel Web Development Workshop</h4>
        <p className="text-gray-400 mb-2">Internal Workshop – Universitas 'Aisyiyah Yogyakarta</p>
        <p className="text-gray-500">2024</p>
        <p className="text-gray-400 mt-2 text-sm">
          Developed a tourism and healthcare information system using Laravel, MySQL, and Blade Template Engine.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">React Frontend Project Practice</h4>
        <p className="text-gray-400 mb-2">Self Project (react-todolist)</p>
        <p className="text-gray-500">2024</p>
        <p className="text-gray-400 mt-2 text-sm">
          Implemented basic React.js concepts such as state, props, and dynamic components in a To-Do List project.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold text-cyan-400 mb-2">E-Commerce Web Development (Practicum)</h4>
        <p className="text-gray-400 mb-2">University Practicum Project</p>
        <p className="text-gray-500">2024</p>
        <p className="text-gray-400 mt-2 text-sm">
          Designed and developed UI for an online store website, including product listings, shopping cart, and checkout process.
        </p>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  )
}
