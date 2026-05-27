import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './AIParadoxSlide.module.css'

const stats = [
  { id: 'tools', value: '60%', label: 'of teams juggle 5+ dev tools' },
  { id: 'aitools', value: '49%', label: 'rely on 5+ separate AI tools' },
  { id: 'compliance', value: '70%', label: 'say AI makes compliance harder' },
  { id: 'scale', value: '76%', label: 'predict more engineers — amplifying the challenge' },
]

const tensions = [
  { id: 'faster', icon: '⚡', text: 'AI accelerates code generation dramatically' },
  { id: 'friction', icon: '🔗', text: 'Tool sprawl creates new bottlenecks downstream' },
  { id: 'context', icon: '🔄', text: 'Context switching between tools erodes productivity' },
  { id: 'quality', icon: '⚠️', text: 'AI-generated code still requires heavy review and rework' },
]

export default function AIParadoxSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="p" id="aiparadox.eyebrow" className={styles.eyebrow}>
            Industry Research · 2026
          </Editable>
          <Editable as="h2" id="aiparadox.title" className={styles.title}>
            The AI Paradox
          </Editable>
          <Editable as="p" id="aiparadox.subtitle" className={styles.subtitle}>
            Coding is faster than ever — yet teams lose a full workday per week to AI-related inefficiencies
          </Editable>
        </div>

        <div className={styles.content}>
          {/* Hero stat */}
          <div className={styles.heroStat}>
            <Editable as="span" id="aiparadox.hero.value" className={styles.heroValue}>7 hrs</Editable>
            <Editable as="span" id="aiparadox.hero.label" className={styles.heroLabel}>
              lost per team member per week to inefficient processes
            </Editable>
          </div>

          {/* Tension points */}
          <div className={styles.tensions}>
            <EditableList
              id="aiparadox.tensions"
              items={tensions}
              keyOf={(t) => t.id}
              className={styles.tensionList}
              itemClassName={styles.tensionItem}
            >
              {(t) => (
                <>
                  <span className={styles.tensionIcon}>{t.icon}</span>
                  <Editable as="span" id={`aiparadox.tensions.${t.id}`}>{t.text}</Editable>
                </>
              )}
            </EditableList>
          </div>

          {/* Stats row */}
          <EditableList
            id="aiparadox.stats"
            items={stats}
            keyOf={(s) => s.id}
            className={styles.statsGrid}
            itemClassName={styles.statCard}
          >
            {(s) => (
              <>
                <Editable as="span" id={`aiparadox.stats.${s.id}.value`} className={styles.statValue}>{s.value}</Editable>
                <Editable as="span" id={`aiparadox.stats.${s.id}.label`} className={styles.statLabel}>{s.label}</Editable>
              </>
            )}
          </EditableList>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="aiparadox.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
