"use client"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const menuItems = [
    { name: "Home", path: "./Home_*" },
    { name: "About", path: "./About" },
    { name: "Project", path: "./Project" },
    { name: "Skills", path: "./Skills" },
    { name: "Contact", path: "./Contact" },
  ]

  return (
    <div className="flex flex-wrap gap-6 text-sm">
      {menuItems.map((item, index) => (
        <button
          key={item.name}
          onClick={() => setActiveSection(item.name)}
          className={`relative transition-all duration-300 hover:scale-105 group ${
            activeSection === item.name ? "text-cyan-400 font-semibold" : "text-blue-400 hover:text-cyan-300"
          }`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <span className="relative z-10">{item.path}</span>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-cyan-400/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>

          {/* Active Indicator */}
          {activeSection === item.name && (
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 animate-slideInFromLeft"></div>
          )}
        </button>
      ))}
    </div>
  )
}
