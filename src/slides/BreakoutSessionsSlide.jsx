import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './BreakoutSessionsSlide.module.css'
import emilePhoto from '../data/emile-verbunt.png'
import rikPhoto from '../data/rik-smit.png'

const sessions = [
  {
    id: 'agentic',
    number: '01',
    title: 'GitHub Agentic Workflows',
    speakerName: 'Rik Smit',
    speakerRole: 'Solution Engineer @ GitHub',
    photo: rikPhoto,
  },
  {
    id: 'cli',
    number: '02',
    title: 'GitHub Copilot CLI',
    speakerName: 'Emile Verbunt',
    speakerRole: 'Software Solution Engineer @ Microsoft',
    photo: emilePhoto,
  },
]

export default function BreakoutSessionsSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <Editable as="h2" id="breakouts.title" className={styles.title}>
            {"Let's Automate the Heck Out of It 🚀"}
          </Editable>
          <Editable as="p" id="breakouts.subtitle" className={styles.subtitle}>
            Two hands-on breakout sessions to dive deeper
          </Editable>
        </div>

        <EditableList
          id="breakouts.sessions"
          items={sessions}
          keyOf={(s) => s.id}
          className={styles.sessionsGrid}
          itemClassName={styles.sessionCard}
        >
          {(s) => (
            <>
              <span className={styles.sessionNumber}>{s.number}</span>
              <Editable as="h3" id={`breakouts.sessions.${s.id}.title`} className={styles.sessionTitle}>
                {s.title}
              </Editable>
              <div className={styles.speaker}>
                {s.photo ? (
                  <img src={s.photo} alt={s.speakerName} className={styles.avatarImg} />
                ) : (
                  <div className={styles.avatar}>
                    <span className={styles.avatarPlaceholder}>📷</span>
                  </div>
                )}
                <div className={styles.speakerInfo}>
                  <Editable as="span" id={`breakouts.sessions.${s.id}.name`} className={styles.speakerName}>
                    {s.speakerName}
                  </Editable>
                  <Editable as="span" id={`breakouts.sessions.${s.id}.role`} className={styles.speakerRole}>
                    {s.speakerRole}
                  </Editable>
                </div>
              </div>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="breakouts.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
