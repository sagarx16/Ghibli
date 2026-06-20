import './Player.css'
import backarrow_icon from '../../../assets/backarrow.jpg'
const Player = () => {
  return (
    <div className="player">
      <img src={backarrow_icon} alt="" />
      <iframe width='90%' height='90%'
      src='https://www.youtube.com/embed/YYXBWucnot8'
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
