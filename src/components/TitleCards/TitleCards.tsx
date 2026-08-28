import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

interface TitleCardsProps {
  title?: string
  category?: string
}

const TitleCards = ({ title, category: _category }: TitleCardsProps) => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const slider = cardsRef.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      slider.classList.add('dragging')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const onMouseUp = () => {
      isDown = false
      slider.classList.remove('dragging')
    }

    const onMouseLeave = () => {
      isDown = false
      slider.classList.remove('dragging')
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

    // Clean up all listeners on unmount
    return () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseup', onMouseUp)
      slider.removeEventListener('mouseleave', onMouseLeave)
      slider.removeEventListener('mousemove', onMouseMove)
      slider.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <section className="title-cards">
      <h2>{title ?? 'Ghibli Magical World'}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => navigate(`/player/${card.id}`)}
          >
            <img src={card.image} alt={card.name} loading="lazy" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TitleCards
