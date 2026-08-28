import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/10 px-6 md:px-16 py-10 max-w-6xl mx-auto text-sm text-white/60">
      {/* Social Icons - Blue tinted */}
      <div className="flex items-center gap-6 mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/facebook.png"
          alt="Facebook"
          className="w-8 h-8 object-contain icon-blue cursor-pointer transition-transform hover:-translate-y-1"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/instagram.png"
          alt="Instagram"
          className="w-8 h-8 object-contain icon-blue cursor-pointer transition-transform hover:-translate-y-1"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/x.png"
          alt="X (Twitter)"
          className="w-8 h-8 object-contain icon-blue cursor-pointer transition-transform hover:-translate-y-1"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/youtube.png"
          alt="YouTube"
          className="w-8 h-8 object-contain icon-blue cursor-pointer transition-transform hover:-translate-y-1"
        />
      </div>

      {/* Navigation Links Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs md:text-sm mb-10 list-none p-0">
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Audio Description</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Help Centre</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Media Centre</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Investor Relations</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Jobs</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Terms of Use</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Privacy</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Legal Notices</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Cookie Preferences</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Contact Us</li>
        <li className="hover:text-[#5b8cff] cursor-pointer transition-colors hover:underline">Love Ghibli</li>
      </ul>

      {/* Copyright */}
      <p className="text-xs text-white/30 tracking-wide font-medium">
        © 2026 Ghibli, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
