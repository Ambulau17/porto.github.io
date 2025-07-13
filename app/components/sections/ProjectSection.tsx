"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    description:
      "Simple e-commerce site built as a practicum project. Includes product catalog, shopping cart, product detail, and checkout pages.",
    longDescription:
      "A basic Laravel-based e-commerce website created for academic purposes. Backend built with Laravel and MySQL, frontend templating using Blade and styled with Bootstrap.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    github: "https://github.com/Ambulau17/E-commerce", // ganti dengan link GitHub-mu
    demo: "", // isi jika ada live demo
    status: "Completed",
    year: "2024",
  },
  {
    id: 2,
    name: "React To-Do List",
    description:
      "Interactive to-do list app built with React.js for learning state and props.",
    longDescription:
      "A simple yet functional to-do list app built using React.js. Features include adding, deleting, and marking tasks as complete. Designed to understand the core React concepts such as state and props.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/your-username/react-todolist", // ganti dengan link GitHub-mu
    demo: "", // isi jika ada live demo
    status: "Completed",
    year: "2024",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "Personal portfolio website featuring a modern, responsive design.",
    longDescription:
      "A personal website to showcase profile, skills, and completed projects. Built with semantic HTML, styled using modern CSS techniques, and enhanced with JavaScript for interactivity.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ambulau17/Portofolio", // ganti dengan link GitHub-mu
    demo: "", // isi jika ada live demo
    status: "Completed",
    year: "2024",
  },
  {
    id: 4,
    name: "HappyCare Web Application",
    description:
      "Fullstack web app for tourism and healthcare info in Yogyakarta, currently in development.",
    longDescription:
      "A fullstack web application that provides information on healthcare services and tourist destinations in Yogyakarta. Features include hospital and tourism data management, location search, and a responsive UI. Built with Laravel for the backend and Blade + Bootstrap for the frontend.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    github: "https://happycare.my.id/", // ganti dengan link GitHub-mu
    demo: "https://happycare.my.id/", // isi jika ada live demo
    status: "In Progress",
    year: "2025 – Present",
  },
];


  return (
    <div className="space-y-8 py-8 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-cyan-400 animate-slideInFromLeft">Projects</h2>
        <div
          className="flex items-center space-x-2 text-gray-400 animate-slideInFromLeft"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-green-400">$</span>
          <span>ls -la projects/</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project List */}
        <div className="lg:col-span-1 space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedProject === index
                  ? "bg-cyan-600/20 border border-cyan-400"
                  : "bg-gray-800 hover:bg-gray-700 border border-gray-700"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">{project.name}</h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-600/20 text-green-400"
                      : "bg-yellow-600/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail */}
        <div className="lg:col-span-2 animate-slideInFromRight">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
            {/* Project Image */}
            <div className="relative h-64 bg-gray-700">
              <Image
                src={projects[selectedProject].image || "/placeholder.svg"}
                alt={projects[selectedProject].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-2">{projects[selectedProject].name}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-cyan-400">{projects[selectedProject].year}</span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      projects[selectedProject].status === "Completed"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-600/20 text-yellow-400"
                    }`}
                  >
                    {projects[selectedProject].status}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 space-y-6">
              <p className="text-gray-300 leading-relaxed">{projects[selectedProject].longDescription}</p>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 hover:bg-cyan-600/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href={projects[selectedProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
