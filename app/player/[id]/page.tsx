'use client'

import { useParams, useRouter } from 'next/navigation'
import './player.css'

const trailerMap: Record<string, string> = {
  default: 'https://www.youtube.com/embed/YYXBWucnot8',
}

export default function PlayerPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const id = params?.id

  const trailerSrc = (id && trailerMap[id]) || trailerMap.default

  return (
    <div className="player">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/backarrow.jpg"
        alt="Go back"
        onClick={() => router.back()}
      />
      <iframe
        width="90%"
        height="90%"
        src={trailerSrc}
        title="Ghibli Trailer"
        frameBorder="0"
        allowFullScreen
      />
      <div className="player-info">
        <p>Published Date</p>
        <p>Movie ID: {id}</p>
        <p>Type</p>
      </div>
    </div>
  )
}
