import { useReveal } from '../../hooks/useReveal';
import { education } from '../../data';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div ref={ref} className="reveal" style={styles.grid}>
          {/* Left: heading */}
          <div style={styles.left}>
            <span className="eyebrow">Academic</span>
            <h2 className="section-title">
              Education &<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Background</em>
            </h2>
            <div style={styles.accent} />
            <div style={styles.emblem}>
              <GraduationIcon />
            </div>
          </div>

          {/* Right: card */}
          <div>
            <div className="card" style={styles.card}>
              <div style={styles.badge}>
                <span style={styles.badgeText}>B.A.</span>
              </div>

              <h3 style={styles.degree}>{education.degree}</h3>
              <p style={styles.dept}>{education.department}</p>

              <div style={styles.instRow}>
                <span style={styles.instLine} />
                <p style={styles.inst}>{education.institution}</p>
              </div>

              <div style={styles.highlights}>
                {education.highlights.map((h, i) => (
                  <div key={i} style={styles.highlight}>
                    <span style={styles.hlDot} />
                    <p style={styles.hlText}>{h}</p>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <blockquote style={styles.quote}>
                "Linguistic precision is the foundation of effective communication."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.6fr',
    gap: 'clamp(2rem, 6vw, 5rem)',
    alignItems: 'start',
  } as React.CSSProperties,
  left: {},
  accent: {
    width: '40px',
    height: '2px',
    background: 'var(--text-muted)',
    margin: '1.5rem 0 2rem',
  },
  emblem: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '1px solid var(--border-mid)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    background: 'var(--accent-glow)',
  },
  card: {
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  badge: {
    position: 'absolute' as const,
    top: '1.5rem',
    right: '1.5rem',
    background: 'var(--accent-dim)',
    border: '1px solid var(--border-mid)',
    borderRadius: '3px',
    padding: '0.25rem 0.6rem',
  },
  badgeText: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.1em',
    color: 'var(--text-muted)',
    textTransform: 'uppercase' as const,
  },
  degree: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.75rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    paddingRight: '3rem',
    lineHeight: 1.2,
  },
  dept: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    marginBottom: '1rem',
  },
  instRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.75rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid var(--border)',
  },
  instLine: {
    display: 'block',
    width: '24px',
    height: '1px',
    background: 'var(--text-muted)',
    flexShrink: 0,
  } as React.CSSProperties,
  inst: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase' as const,
  },
  highlights: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem',
    marginBottom: '1.75rem',
  },
  highlight: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
  },
  hlDot: {
    display: 'block',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--text-muted)',
    flexShrink: 0,
    marginTop: '0.5rem',
  } as React.CSSProperties,
  hlText: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
  },
  quote: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1rem',
    fontStyle: 'italic' as const,
    color: 'var(--text-muted)',
    borderLeft: '2px solid var(--border-mid)',
    paddingLeft: '1rem',
    lineHeight: 1.6,
  },
};

function GraduationIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}
