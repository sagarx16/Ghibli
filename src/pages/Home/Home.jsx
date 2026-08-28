import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero.jpg'
// import herocaption from '../../assets/herocaption.png'
import play from '../../assets/play.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="banner-img" />
        <div className="herocaption">
          {/* <img src={herocaption} alt="" className='caption-img'/> */}
          <p>My Neighbor Totoro is a gentle, beautifully animated 1988 film by Hayao Miyazaki that captures the magic of childhood in 1950s rural Japan. The story follows two sisters, Satsuki and Mei, who move to the countryside with their father to be near their mother, who is recovering from a long-term illness in a nearby hospital.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
          </div>
        </div>
      </div>

     <div className="more-cards">
      <TitleCards title='Ghibli Magical World'/>

     </div>
     <Footer/>
    </div>
  )
}

export default Home