import Navbar from '@/components/Navbar/Navbar'
import TitleCards from '@/components/TitleCards/TitleCards'
import Footer from '@/components/Footer/Footer'
import styles from './Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Navbar />

      {/* ── Hero ── */}
      <div className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/hero.jpg" alt="My Neighbor Totoro banner" />
        <div className={styles.herocaption}>
          <div className={styles['hero-badge']}>
            <span></span>
            Now Streaming
          </div>
          <h1 className={styles['hero-title']}>My Neighbor Totoro</h1>
          <p>
            A gentle, beautifully animated 1988 masterpiece by Hayao Miyazaki
            that captures the pure magic of childhood in 1950s rural Japan.
            Two sisters discover the whimsical forest spirits that inhabit the
            countryside near their new home.
          </p>
          <div className={styles['hero-btns']}>
            <button className={styles.btn}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/play.png" alt="" />
              Play
            </button>
            <button className={`${styles.btn} ${styles['dark-btn']}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/info.png" alt="" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* ── Film Rows ── */}
      <div className={styles['more-cards']}>
        <TitleCards title="Ghibli Magical World" />
        <TitleCards title="Miyazaki Classics" />
      </div>

      <Footer />
    </div>
  )
}
