'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home',               href: '/' },
  { label: 'TV Shows',           href: '/tv-shows' },
  { label: 'Movies',             href: '/movies' },
  { label: 'New & Popular',      href: '/new' },
  { label: 'My List',            href: '/my-list' },
  { label: 'Browse by Language', href: '/browse' },
]

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY >= 80) {
        navRef.current.classList.add('bg-[#080812]/95', 'backdrop-blur-md', 'border-b', 'border-[#5b8cff]/15', 'shadow-lg')
        navRef.current.classList.remove('bg-gradient-to-b', 'from-black/90', 'to-transparent')
      } else {
        navRef.current.classList.remove('bg-[#080812]/95', 'backdrop-blur-md', 'border-b', 'border-[#5b8cff]/15', 'shadow-lg')
        navRef.current.classList.add('bg-gradient-to-b', 'from-black/90', 'to-transparent')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menuOpen])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 h-[68px] z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-300 bg-gradient-to-b from-black/90 to-transparent"
    >
      {/* Left side: Logo + Navigation Links */}
      <div className="flex items-center gap-7">
        <Link href="/" className="flex-shrink-0 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Ghibli"
            className="h-11 w-auto object-contain transition-all hover:opacity-90 hover:drop-shadow-[0_0_8px_rgba(91,140,255,0.6)]"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap block ${
                    isActive
                      ? 'text-[#5b8cff] font-bold'
                      : 'text-white/80 hover:text-white hover:bg-[#5b8cff]/10'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="block h-[2px] bg-gradient-to-r from-[#7c5cfc] to-[#5b8cff] rounded-full mt-0.5 animate-pulse" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Right side: Search, Bell, Children, Sign In, Profile */}
      <div className="flex items-center gap-4">
        {/* Search Icon - Blue filter */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/search.png"
          alt="Search"
          className="w-5 h-5 object-contain cursor-pointer icon-blue transition-transform duration-200 hover:scale-125"
        />

        {/* Children label */}
        <p className="hidden sm:block text-sm text-white/80 hover:text-[#5b8cff] hover:bg-[#5b8cff]/10 px-2.5 py-1 rounded-md cursor-pointer transition-colors">
          Children
        </p>

        {/* Bell Icon - Blue filter */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bell.png"
          alt="Notifications"
          className="w-5 h-5 object-contain cursor-pointer icon-blue transition-transform duration-200 hover:scale-125"
        />

        {/* Sign In Button */}
        <Link
          href="/login"
          className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-md bg-gradient-to-r from-[#7c5cfc] to-[#5b8cff] text-white text-xs md:text-sm font-semibold hover:opacity-90 transition-all shadow-[0_4px_16px_rgba(91,140,255,0.35)] hover:shadow-[0_6px_20px_rgba(91,140,255,0.5)] hover:-translate-y-0.5"
        >
          Sign In
        </Link>

        {/* Profile Dropdown */}
        <div className="relative group flex items-center gap-1.5 cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-7 h-7 rounded border-2 border-transparent group-hover:border-[#5b8cff] transition-colors object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/caret.png"
            alt="Dropdown"
            className="w-3.5 h-3.5 object-contain icon-blue transition-transform duration-300 group-hover:rotate-180"
          />

          {/* Dropdown Menu */}
          <div className="absolute top-[calc(100%+12px)] right-0 hidden group-hover:block w-48 bg-[#0c0c18]/95 backdrop-blur-xl border border-[#5b8cff]/20 rounded-xl overflow-hidden shadow-2xl z-50 transition-all">
            <div className="p-3 text-xs text-white/80 hover:bg-[#5b8cff]/10 hover:text-[#5b8cff] cursor-pointer border-b border-white/5 transition-colors">
              Manage Profiles
            </div>
            <div className="p-3 text-xs text-white/80 hover:bg-[#5b8cff]/10 hover:text-[#5b8cff] cursor-pointer border-b border-white/5 transition-colors">
              Account
            </div>
            <div className="p-3 text-xs text-white/80 hover:bg-[#5b8cff]/10 hover:text-[#5b8cff] cursor-pointer border-b border-white/5 transition-colors">
              Help Centre
            </div>
            <div className="p-3 text-xs text-red-400 hover:bg-red-500/15 hover:text-red-500 cursor-pointer transition-colors">
              Sign out of Ghibli
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 p-1 rounded-md hover:bg-[#5b8cff]/10 transition-colors focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-[#5b8cff] rounded transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#5b8cff] rounded transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#5b8cff] rounded transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-[#080812]/98 backdrop-blur-2xl border-b border-[#5b8cff]/20 py-3 flex flex-col gap-1 px-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-2.5 px-4 text-sm rounded-lg transition-colors ${
                pathname === href
                  ? 'bg-[#5b8cff]/15 text-[#5b8cff] font-semibold'
                  : 'text-white/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-2.5 px-4 text-sm font-semibold text-center text-white bg-gradient-to-r from-[#7c5cfc] to-[#5b8cff] rounded-lg shadow-md"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
