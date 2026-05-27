import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AppendixDividerSlide.module.css'

export default function AppendixDividerSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="h1" id="appendix.title">Appendix</Editable>
      </div>
      <BottomBar text={<Editable as="span" id="appendix.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
