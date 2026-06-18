import { useReveal } from '../../hooks/useReveal';
import { experiences } from '../../data';

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>
            Work<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>History</em>
          </h2>

          <div style={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} style={styles.entry}>
                {/* Timeline spine */}
                <div style={styles.spine}>
                  <div style={styles.dot} />
                  {i < experiences.length - 1 && <div style={styles.line} />}
                </div>

                {/* Content */}
                <div style={styles.content}>
                  <div className="card" style={styles.card}>
                    <div style={styles.cardHeader}>
                      <div>
                        <h3 style={styles.role}>{exp.title}</h3>
                        <p style={styles.company}>
                          <BuildingIcon />
                          {exp.company}
                        </p>
                      </div>
                      <span style={styles.index}>
                        0{i + 1}
                      </span>
                    </div>

                    <ul style={styles.list}>
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} style={styles.listItem}>
                          <span style={styles.bullet} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  timeline: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 0,
  },
  entry: {
    display: 'grid',
    gridTemplateColumns: '32px 1fr',
    gap: '1.5rem',
    paddingBottom: '1.5rem',
  },
  spine: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    paddingTop: '1.5rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '2px solid var(--text-muted)',
    background: 'var(--bg-secondary)',
    flexShrink: 0,
    zIndex: 1,
  },
  line: {
    width: '1px',
    flex: 1,
    background: 'var(--border-mid)',
    marginTop: '6px',
  },
  content: { paddingTop: '0.75rem' },
  card: {
    padding: 'clamp(1.25rem, 3vw, 2rem)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.25rem',
    gap: '1rem',
  },
  role: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.4rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
    marginBottom: '0.35rem',
    lineHeight: 1.2,
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontFamily: "'DM Mono', monospace",
    letterSpacing: '0.05em',
  } as React.CSSProperties,
  index: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '2rem',
    fontWeight: 300,
    color: 'var(--border-strong)',
    lineHeight: 1,
    flexShrink: 0,
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.65rem',
  },
  listItem: {
    display: 'flex',
    gap: '0.75rem',
    fontSize: '0.925rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    alignItems: 'flex-start',
  } as React.CSSProperties,
  bullet: {
    display: 'block',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--text-muted)',
    flexShrink: 0,
    marginTop: '0.55rem',
  } as React.CSSProperties,
};

function BuildingIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}
