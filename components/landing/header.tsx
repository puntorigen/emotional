'use client'

import Link from 'next/link'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export function Header() {
  return (
    <header className="sticky top-0 z-sticky bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">
            Emotional<span className="text-accent">.tools</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-fast"
          >
            How It Works
          </Link>
          <Link 
            href="#features" 
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-fast"
          >
            Features
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-fast"
          >
            Pricing
          </Link>
          <Link 
            href="#faq" 
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-fast"
          >
            FAQ
          </Link>
        </div>
        
        {/* CTA */}
        <div className="flex items-center gap-4">
          <ShimmerButton
            shimmerColor="#F0C49B"
            background="#7A4E9E"
            className="min-h-[44px] px-6 text-sm font-semibold"
          >
            Try It Free
          </ShimmerButton>
        </div>
      </nav>
    </header>
  )
}

