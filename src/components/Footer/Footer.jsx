import './Footer.css'
import youtube from '../../assets/youtube.png'
import x from '../../assets/x.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={x} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
        <li>Love Ghibli</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2026 Ghibli, Inc.</p>
      </div>
      
    
  )
}

export default Footer
