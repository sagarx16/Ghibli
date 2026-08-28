'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Ghibli logo" />
        </Link>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New &amp; Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/search.png" alt="Search" className="icons" />
        <p>Children</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/bell.png" alt="Notifications" className="icons" />
        <div className="navbar-profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/profile.png" alt="Profile" className="profile" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/caret.png" alt="Menu" className="caret" />

          {/* Dropdown */}
          <div className="navbar-dropdown">
            <div className="dropdown-item">Manage Profiles</div>
            <div className="dropdown-item">Account</div>
            <div className="dropdown-item">Help Centre</div>
            <div className="dropdown-item signout">Sign out of Ghibli</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
