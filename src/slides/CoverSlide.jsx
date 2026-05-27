/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>Schiphol Automation in Action Event</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">The Future of Software Delivery Is Agentic — and</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Automated</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            Schiphol Automation in Action
          </Editable>

          <div className={styles.meta}>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Speaker</span>
              <span className={styles.metaValue}>Lopez Leandro</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Solution Engineering Lead @ Microsoft</span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.logos}>
        <svg className={styles.logo} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="11" height="11" fill="#f25022"/>
          <rect x="12" width="11" height="11" fill="#7fba00"/>
          <rect y="12" width="11" height="11" fill="#00a4ef"/>
          <rect x="12" y="12" width="11" height="11" fill="#ffb900"/>
        </svg>
        <svg className={styles.logo} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
