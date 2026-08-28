import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'
import caret from '../../assets/caret.png'
import { useRef, useEffect } from 'react'

const Navbar = () => {

    const navRef = useRef();

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark')
        } else {
          navRef.current.classList.remove('nav-dark')
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Ghibli logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="search logo" className='icons'/>
        <p>Children</p> 
        <img src={bell} alt="bell logo" className='icons'/>
        <div className="navbar-profile">
          <img src={profile} alt="profile logo" className='profile'/>
          <img src={caret} alt="caret logo" className='caret'/>

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
 