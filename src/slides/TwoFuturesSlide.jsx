import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TwoFuturesSlide.module.css'

const chaotic = [
  { id: 'drift', icon: '🔥', text: 'Config drift across environments' },
  { id: 'shadow', icon: '👻', text: 'Shadow deployments with no audit trail' },
  { id: 'incidents', icon: '🚨', text: 'Incident rate spikes as velocity grows' },
  { id: 'bottleneck', icon: '🐌', text: 'Ops becomes the bottleneck to every change' },
]

const governed = [
  { id: 'golden', icon: '✅', text: 'Golden paths for every repo and service' },
  { id: 'policy', icon: '🛡️', text: 'Policy-as-code enforced at every stage' },
  { id: 'selfserve', icon: '⚡', text: 'Developers ship independently via self-service' },
  { id: 'observe', icon: '📊', text: 'Full observability from commit to production' },
]

export default function TwoFuturesSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="twofutures.eyebrow" className={styles.eyebrow}>Two Futures</Editable>
          <Editable as="h2" id="twofutures.title" className={styles.title}>
            Same agents, same speed — different outcomes
          </Editable>
        </div>

        <div className={styles.columns}>
          {/* Chaotic future */}
          <div className={`${styles.column} ${styles.chaotic}`}>
            <div className={styles.columnHeader}>
              <Editable as="span" id="twofutures.chaotic.icon" className={styles.columnIcon}>🚫</Editable>
              <Editable as="h3" id="twofutures.chaotic.title" className={styles.columnTitle}>Without guardrails</Editable>
            </div>
            <Editable as="p" id="twofutures.chaotic.desc" className={styles.columnDesc}>
              Agents and devs ship fast — but nobody governs the blast radius.
            </Editable>
            <ul className={styles.list}>
              {chaotic.map((item) => (
                <li key={item.id} className={styles.listItem}>
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <Editable as="span" id={`twofutures.chaotic.${item.id}`}>{item.text}</Editable>
                </li>
              ))}
            </ul>
            <Editable as="div" id="twofutures.chaotic.outcome" className={styles.outcome}>
              Result: velocity without control = compounding risk
            </Editable>
          </div>

          {/* Governed future */}
          <div className={`${styles.column} ${styles.governed}`}>
            <div className={styles.columnHeader}>
              <Editable as="span" id="twofutures.governed.icon" className={styles.columnIcon}>🏗️</Editable>
              <Editable as="h3" id="twofutures.governed.title" className={styles.columnTitle}>With a self-service platform</Editable>
            </div>
            <Editable as="p" id="twofutures.governed.desc" className={styles.columnDesc}>
              Agents and devs ship fast — inside guardrails that scale with them.
            </Editable>
            <ul className={styles.list}>
              {governed.map((item) => (
                <li key={item.id} className={styles.listItem}>
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <Editable as="span" id={`twofutures.governed.${item.id}`}>{item.text}</Editable>
                </li>
              ))}
            </ul>
            <Editable as="div" id="twofutures.governed.outcome" className={styles.outcome}>
              Result: velocity with confidence = sustainable scale
            </Editable>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="twofutures.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
