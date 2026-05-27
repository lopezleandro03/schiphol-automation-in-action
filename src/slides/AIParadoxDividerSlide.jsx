import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AIParadoxDividerSlide.module.css'

export default function AIParadoxDividerSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="h1" id="aiparadoxdiv.title">The AI Paradox</Editable>
        <Editable as="p" id="aiparadoxdiv.subtitle">Coding is faster than ever — yet teams lose a full workday per week to AI-related inefficiencies</Editable>
      </div>
      <BottomBar text={<Editable as="span" id="aiparadoxdiv.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
