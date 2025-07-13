import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Dzubar - UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Dzubar - Passionate UI/UX Designer and Frontend Developer creating amazing digital experiences",
  keywords: ["portfolio", "developer", "UI/UX", "frontend", "designer", "react", "nextjs"],
  authors: [{ name: "Dzubar" }],
  creator: "Dzubar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-mono bg-gray-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
