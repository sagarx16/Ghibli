import './Player.css'
import backarrow_icon from '../../../assets/backarrow.jpg'
import { useParams, useNavigate } from 'react-router-dom'

interface PlayerParams {
  id: string
  [key: string]: string | undefined
}

const Player = () => {
  const { id } = useParams<PlayerParams>()
  const navigate = useNavigate()

  // Map of movie IDs to YouTube trailer embed URLs
  const trailerMap: Record<string, string> = {
    default: 'https://www.youtube.com/embed/YYXBWucnot8',
  }

  const trailerSrc = (id && trailerMap[id]) || trailerMap.default

  return (
    <div className="player">
      <img
        src={backarrow_icon}
        alt="Go back"
        onClick={() => navigate(-1)}
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

export default Player
