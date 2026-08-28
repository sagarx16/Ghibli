import Navbar from '@/components/Navbar/Navbar'
import TitleCards from '@/components/TitleCards/TitleCards'
import Footer from '@/components/Footer/Footer'
import styles from './Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/hero.jpg" alt="My Neighbor Totoro banner" />
        <div className={styles.herocaption}>
          <p>
            My Neighbor Totoro is a gentle, beautifully animated 1988 film by
            Hayao Miyazaki that captures the magic of childhood in 1950s rural
            Japan. The story follows two sisters, Satsuki and Mei, who move to
            the countryside with their father to be near their mother, who is
            recovering from a long-term illness in a nearby hospital.
          </p>
          <div className={styles['hero-btns']}>
            <button className={styles.btn}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/play.png" alt="Play" />
              Play
            </button>
            <button className={`${styles.btn} ${styles['dark-btn']}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/info.png" alt="Info" />
              More Info
            </button>
          </div>
        </div>
      </div>

      <div className={styles['more-cards']}>
        <TitleCards title="Ghibli Magical World" />
      </div>
      <Footer />
    </div>
  )
}
