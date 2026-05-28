import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AgenticDivider.module.css'

export default function AgenticDivider({ index, project }) {
  return (
    <Slide index={index} className={styles.agenticDivider}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <h1 className={styles.title}>
          Agentic<br />
          <span className={styles.highlight}>Engineering</span>
        </h1>
        <p className={styles.subtitle}>
          Give your agents context, identity, skills, structure, memory, and guardrails.
        </p>
      </div>

      <BottomBar text="Schiphol Automation in Action Event" />
    </Slide>
  )
}
