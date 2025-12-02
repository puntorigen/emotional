import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Emotional.tools - MCP Emotional Reasoning for AI Code',
  description: 'Stop AI regression loops. Automated quality evaluation for Copilot, Cursor, and any AI coding assistant. Maintain code coherence and prevent regressions with MCP-native emotional reasoning.',
  keywords: ['AI code quality', 'MCP', 'Cursor', 'GitHub Copilot', 'code review', 'AI assistant', 'emotional reasoning', 'LLM'],
  authors: [{ name: 'Emotional.tools' }],
  openGraph: {
    title: 'Emotional.tools - Give Your AI an Emotional IQ',
    description: 'Automated quality evaluation for AI-generated code. Stop regression loops and maintain coherence.',
    type: 'website',
    url: 'https://emotional.tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emotional.tools - MCP Emotional Reasoning for AI Code',
    description: 'Stop AI regression loops. Maintain code quality with automated emotional reasoning.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased">
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}


