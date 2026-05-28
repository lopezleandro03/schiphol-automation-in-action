import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'
import githubLogo from './composed/data/logos/ms-products/github.svg'

export default function ThankYouSlide({ index }) {
  return (
    <Slide index={index} className="deck-ty">
      <div className="accent-bar" />

      <div className="deck-ty-glow deck-ty-glow1" />
      <div className="deck-ty-glow deck-ty-glow2" />
      <div className="deck-ty-glow deck-ty-glow3" />

      {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <div key={i} className={`deck-ty-streak deck-ty-streak${i}`} />
      ))}

      <div className={`deck-ty-shell content-frame content-gutter ${styles.shell}`}>
        <div className={`deck-ty-content ${styles.content}`}>
          <h2 className={`deck-ty-title ${styles.title}`}>Thank <span className={styles.highlight}>You</span></h2>
          <Editable as="p" id="thankYou.subtitle" className="deck-ty-subtitle">
            {"Let's build something great — together."}
          </Editable>
          <div className="deck-ty-divider" />

          <div className={styles.logos}>
            <img src={githubLogo} alt="GitHub" className={styles.logo} />
            <svg className={styles.logo} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
              <rect width="11" height="11" fill="#f25022" />
              <rect x="12" width="11" height="11" fill="#7fba00" />
              <rect y="12" width="11" height="11" fill="#00a4ef" />
              <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
            </svg>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="thankYou.footer">The Future of Software Delivery Is Agentic — and Automated</Editable>} />
    </Slide>
  )
}
