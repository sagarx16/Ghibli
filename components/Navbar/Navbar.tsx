'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import './Navbar.css'

const NAV_LINKS = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Language']

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      navRef.current.classList.toggle('nav-dark', window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on outside click
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
    <nav ref={navRef} className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Ghibli" />
        </Link>
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link, i) => (
            <li key={link} className={i === 0 ? 'active' : ''}>{link}</li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/search.png" alt="Search" className="icons" />
        <p className="children-label">Children</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/bell.png" alt="Notifications" className="icons" />

        {/* Profile with dropdown */}
        <div className="navbar-profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/profile.png" alt="Profile" className="profile" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/caret.png" alt="" className="caret" />
          <div className="navbar-dropdown">
            <div className="dropdown-item">Manage Profiles</div>
            <div className="dropdown-item">Account</div>
            <div className="dropdown-item">Help Centre</div>
            <div className="dropdown-item signout">Sign out of Ghibli</div>
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
