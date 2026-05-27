import { BottomBar, Slide, useSlides } from '@deckio/deck-engine'
import priyankaImg from '../data/images/priyanka.png'
import styles from './PriyankaInfographicSlide.module.css'

export default function PriyankaInfographicSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={styles.body}>
        <p className={styles.eyebrow}>Agentic SDLC</p>
        <img src={priyankaImg} alt="SDLC Powered by AI Is Now an Hour Glass" className={styles.infographic} />
        <p className={styles.attribution}>@pvergadia · thecloudgirl.dev</p>
      </div>

      <BottomBar text="Schiphol Automation in Action Event" />
    </Slide>
  )
}
