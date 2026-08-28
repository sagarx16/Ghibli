import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/facebook.png" alt="Facebook" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/instagram.png" alt="Instagram" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/x.png" alt="X (Twitter)" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/youtube.png" alt="YouTube" />
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
      <p className="copyright-text">© 2026 Ghibli, Inc.</p>
    </div>
  )
}

export default Footer
