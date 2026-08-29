'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'خانه' },
  { href: '/game', label: 'AMON GAME' },
  { href: '/vip', label: 'TRADE VIP' },
  { href: '/net', label: 'AMON NET' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-cosmic-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cosmic-gold to-yellow-600 flex items-center justify-center shadow-lg shadow-cosmic-gold/20 group-hover:shadow-cosmic-gold/40 transition">
              <Zap className="w-5 h-5 text-cosmic-black" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              AMON<span className="text-cosmic-gold">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === link.href
                    ? 'text-cosmic-gold bg-cosmic-gold/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/Amonroobot"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-glow px-5 py-2.5 rounded-xl text-sm"
            >
              ورود به ربات
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:bg-white/5"
              aria-label="منو"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-cosmic-dark/95 backdrop-blur-xl">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  pathname === link.href
                    ? 'text-cosmic-gold bg-cosmic-gold/10'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://t.me/Amonroobot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-glow text-center px-4 py-3 rounded-xl text-sm"
            >
              ورود به ربات تلگرام
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
