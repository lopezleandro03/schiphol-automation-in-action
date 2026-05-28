import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './BreakoutSessionsSlide.module.css'
import emilePhoto from '../data/emile-verbunt.png'
import joranPhoto from '../data/joran-bergfeld.png'
import rikPhoto from '../data/rik-smit.png'

const sessions = [
  {
    id: 'agentic',
    number: '01',
    title: 'GitHub Agentic Workflows',
    speakers: [
      { id: 'rik', name: 'Rick Smit', role: 'Solution Engineer @ GitHub', photo: rikPhoto },
    ],
  },
  {
    id: 'cli',
    number: '02',
    title: 'Agentic SDLC',
    speakers: [
      { id: 'emile', name: 'Emile Verbunt', role: 'Software Solution Engineer @ Microsoft', photo: emilePhoto },
      { id: 'joran', name: 'Joran Bergfeld', role: 'Software Solution Engineer @ Microsoft', photo: joranPhoto },
    ],
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
              <div className={styles.speakers}>
                {s.speakers.map((sp) => (
                  <div key={sp.id} className={styles.speaker}>
                    <img src={sp.photo} alt={sp.name} className={styles.avatarImg} />
                    <div className={styles.speakerInfo}>
                      <Editable as="span" id={`breakouts.sessions.${s.id}.${sp.id}.name`} className={styles.speakerName}>
                        {sp.name}
                      </Editable>
                      <Editable as="span" id={`breakouts.sessions.${s.id}.${sp.id}.role`} className={styles.speakerRole}>
                        {sp.role}
                      </Editable>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="breakouts.footer">Schiphol Automation in Action Event</Editable>} />
    </Slide>
  )
}
