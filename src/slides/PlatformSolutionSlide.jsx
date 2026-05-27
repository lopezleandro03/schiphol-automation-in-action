import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './PlatformSolutionSlide.module.css'

const pillars = [
  { id: 'platform', icon: '🏗️', title: 'Platform Engineering', desc: 'Golden paths, self-service infra, and guardrails that scale with your teams' },
  { id: 'automation', icon: '⚙️', title: 'End-to-End Automation', desc: 'CI/CD, testing, compliance, and deployment — automated from commit to production' },
  { id: 'agentic', icon: '🤖', title: 'Agentic Workflows', desc: 'AI agents that plan, execute, and iterate — not just suggest' },
]

const proofPoints = [
  { id: 'unlock', value: '85%', label: 'say platform engineering is key to unlocking AI value' },
  { id: 'deploy', value: '82%', label: 'ship to production weekly or faster' },
  { id: 'recover', value: '7 hrs', label: 'per week recoverable through automation' },
]

export default function PlatformSolutionSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="platsol.eyebrow" className={styles.eyebrow}>
            The Answer
          </Editable>
          <Editable as="h2" id="platsol.title" className={styles.title}>
            Platform Engineering &amp; Automation
          </Editable>
          <Editable as="p" id="platsol.subtitle" className={styles.subtitle}>
            The solution isn't less AI — it's better infrastructure around it
          </Editable>
        </div>

        <EditableList
          id="platsol.pillars"
          items={pillars}
          keyOf={(p) => p.id}
          className={styles.pillarsGrid}
          itemClassName={styles.pillarCard}
        >
          {(p) => (
            <>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <Editable as="h3" id={`platsol.pillars.${p.id}.title`} className={styles.pillarTitle}>{p.title}</Editable>
              <Editable as="p" id={`platsol.pillars.${p.id}.desc`} className={styles.pillarDesc}>{p.desc}</Editable>
            </>
          )}
        </EditableList>

        <EditableList
          id="platsol.proof"
          items={proofPoints}
          keyOf={(p) => p.id}
          className={styles.proofGrid}
          itemClassName={styles.proofCard}
        >
          {(p) => (
            <>
              <Editable as="span" id={`platsol.proof.${p.id}.value`} className={styles.proofValue}>{p.value}</Editable>
              <Editable as="span" id={`platsol.proof.${p.id}.label`} className={styles.proofLabel}>{p.label}</Editable>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="platsol.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
