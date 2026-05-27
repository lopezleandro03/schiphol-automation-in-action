import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './KarpathyOrigin.module.css'
import tweetImg from '../data/karpathy-tweet.png'

export default function KarpathyOrigin({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>February 2025</p>
        <h1>
          The origin of <span className={styles.highlight}>vibe coding</span>
        </h1>

        <div className={styles.columns}>
          <div className={styles.screenshotWrapper}>
            <img src={tweetImg} alt="Karpathy tweet about vibe coding" className={styles.tweetImage} />
          </div>

          <div className={styles.impact}>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>🌊</span>
              <h3>A new paradigm</h3>
              <p>Developers everywhere started "vibing" — describing what they wanted and letting AI write the code.</p>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>⚡</span>
              <h3>Instant adoption</h3>
              <p>The term went viral. Suddenly everyone from hobbyists to startups was vibe coding their way to MVPs.</p>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>❓</span>
              <h3>But then what?</h3>
              <p>The vibes were great for prototypes. But what happens when you need to ship, maintain, and scale?</p>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="Schiphol Automation in Action Event" />
    </Slide>
  )
}
