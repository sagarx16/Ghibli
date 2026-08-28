'use client'

import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import cards_data from '@/data/cards'

interface TitleCardsProps {
  title?: string
  category?: string
}

const TitleCards = ({ title, category: _category }: TitleCardsProps) => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const slider = cardsRef.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add('cursor-grabbing')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const onMouseUp = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }

    const onMouseLeave = () => {
      isDown = false
      slider.classList.remove('cursor-grabbing')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.5
      slider.scrollLeft = scrollLeft - walk
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      slider.scrollLeft += e.deltaX || e.deltaY
    }

    slider.addEventListener('mousedown', onMouseDown)
    slider.addEventListener('mouseup', onMouseUp)
    slider.addEventListener('mouseleave', onMouseLeave)
    slider.addEventListener('mousemove', onMouseMove)
    slider.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseup', onMouseUp)
      slider.removeEventListener('mouseleave', onMouseLeave)
      slider.removeEventListener('mousemove', onMouseMove)
      slider.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <section className="mt-8 mb-4 overflow-x-hidden">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 px-4 md:px-12 mb-4">
        <span className="w-1 h-5 bg-gradient-to-b from-[#7c5cfc] to-[#5b8cff] rounded-full" />
        <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
          {title ?? 'Ghibli Magical World'}
        </h2>
      </div>

      {/* Horizontal Scrollable Row */}
      <div
        ref={cardsRef}
        className="flex gap-4 md:gap-5 px-4 md:px-12 py-4 overflow-x-auto overflow-y-hidden no-scrollbar cursor-grab scroll-smooth select-none"
      >
        {cards_data.map((card) => (
          <div
            key={card.id}
            onClick={() => router.push(`/player/${card.id}`)}
            className="group relative flex-shrink-0 w-36 sm:w-44 md:w-48 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(91,140,255,0.25)] hover:z-20 border border-transparent hover:border-[#5b8cff]/30"
          >
            {/* Card Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.name}
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark Overlay + Play Icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5">
              <div className="self-center my-auto w-10 h-10 rounded-full bg-[#5b8cff]/80 backdrop-blur-sm flex items-center justify-center text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Title label at bottom */}
              <p className="text-white text-xs md:text-sm font-semibold truncate drop-shadow-md">
                {card.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TitleCards
