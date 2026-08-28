'use client'

import { useParams, useRouter } from 'next/navigation'

const trailerMap: Record<string, string> = {
  default: 'https://www.youtube.com/embed/YYXBWucnot8',
}

export default function PlayerPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const id = params?.id

  const trailerSrc = (id && trailerMap[id]) || trailerMap.default

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4">
      {/* Back Arrow Button */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/backarrow.jpg"
        alt="Go back"
        onClick={() => router.back()}
        className="absolute top-6 left-6 w-12 h-12 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg border-2 border-white/20 z-20"
      />

      {/* Video Container */}
      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <iframe
          width="100%"
          height="100%"
          src={trailerSrc}
          title="Ghibli Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Player Meta Info */}
      <div className="w-full max-w-5xl flex items-center justify-between mt-6 text-sm text-white/70 px-2">
        <p className="font-medium text-white/50">Published Date: 1988</p>
        <p className="font-semibold text-[#5b8cff]">Movie ID: #{id}</p>
        <p className="font-medium text-white/50">Category: Anime Feature</p>
      </div>
    </div>
  )
}
