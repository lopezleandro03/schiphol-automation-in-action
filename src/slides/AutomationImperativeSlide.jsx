import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './AutomationImperativeSlide.module.css'

const stats = [
  { id: 'pr-volume', value: '41%', label: 'of code on GitHub is now AI-generated', source: 'Microsoft, 2025' },
  { id: 'deploy-freq', value: '3×', label: 'increase in deployment frequency with agentic workflows', source: 'DORA Report, 2025' },
  { id: 'change-fail', value: '30%', label: 'higher change failure rate without automated guardrails', source: 'Gartner, 2025' },
  { id: 'self-service', value: '80%', label: 'of platform teams plan self-service portals by 2027', source: 'IDC Survey, 2025' },
]

export default function AutomationImperativeSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="autoimp.eyebrow" className={styles.eyebrow}>The Automation Imperative</Editable>
          <Editable as="h2" id="autoimp.title" className={styles.title}>
            Agents write more code — but who keeps the pipeline safe?
          </Editable>
          <Editable as="p" id="autoimp.subtitle" className={styles.subtitle}>
            As AI-generated code volume surges, automation and self-service are no longer nice-to-haves — they are the only way to maintain velocity without sacrificing quality.
          </Editable>
        </div>

        <EditableList
          id="autoimp.stats"
          items={stats}
          keyOf={(s) => s.id}
          className={styles.grid}
          itemClassName={styles.card}
        >
          {(s) => (
            <>
              <Editable as="span" id={`autoimp.stats.${s.id}.value`} className={styles.value}>{s.value}</Editable>
              <Editable as="span" id={`autoimp.stats.${s.id}.label`} className={styles.label}>{s.label}</Editable>
              <Editable as="span" id={`autoimp.stats.${s.id}.source`} className={styles.source}>{s.source}</Editable>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="autoimp.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
