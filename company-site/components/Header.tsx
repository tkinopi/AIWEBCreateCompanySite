'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:opacity-80 transition-opacity"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link href="/" className="text-white text-3xl font-bold tracking-wider">
            NEXUS
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-white text-sm hover:opacity-80 transition-opacity">
              Blog
            </Link>
            <Link href="/contact" className="text-white text-sm hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-8 text-white">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Home
              </Link>
              <Link href="/technology" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Technology
              </Link>
              <Link href="/design" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Automation
              </Link>
              <Link href="/ai-consulting" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Consulting
              </Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Blog
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold hover:opacity-80">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header