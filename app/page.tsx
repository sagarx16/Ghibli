import Navbar from '@/components/Navbar/Navbar'
import TitleCards from '@/components/TitleCards/TitleCards'
import Footer from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Banner Section */}
      <div className="relative w-full h-screen min-h-[550px] overflow-hidden">
        {/* Banner Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero.jpg"
          alt="My Neighbor Totoro banner"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Hero Caption */}
        <div className="absolute bottom-20 md:bottom-28 left-4 md:left-12 z-20 max-w-xl flex flex-col gap-4 p-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/90 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#5b8cff] animate-ping" />
            Now Streaming
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-lg">
            My Neighbor Totoro
          </h1>

          <p className="text-sm md:text-base text-white/80 font-normal leading-relaxed line-clamp-3 md:line-clamp-none drop-shadow">
            A gentle, beautifully animated masterpiece by Hayao Miyazaki that captures the pure magic of childhood in 1950s rural Japan. Two sisters discover the whimsical forest spirits that inhabit the countryside near their new home.
          </p>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-white text-black font-bold text-sm md:text-base hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/play.png" alt="" className="w-5 h-5 object-contain" />
              Play
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-gray-600/70 backdrop-blur-md text-white font-semibold text-sm md:text-base hover:bg-gray-600/90 border border-white/15 transition-all transform hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/info.png" alt="" className="w-5 h-5 object-contain filter invert" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Film Rows */}
      <div className="-mt-12 relative z-20 space-y-4 pb-12">
        <TitleCards title="Ghibli Magical World" />
        <TitleCards title="Miyazaki Classics" />
        <TitleCards title="Trending Now" />
      </div>

      <Footer />
    </div>
  )
}
