import { personalInfo } from '../../data';

export default function Hero() {
  return (
    <section
      id="hero"
      style={styles.section}
    >
      {/* Subtle background grid */}
      <div style={styles.grid} aria-hidden="true" />

      <div className="container" style={styles.container}>
        {/* Left: text */}
        <div style={styles.content}>
          <span className="eyebrow animate-fadeInUp" style={{ marginBottom: '1.5rem' }}>
            Portfolio
          </span>

          <h1
            className="font-display animate-fadeInUp delay-1"
            style={styles.name}
          >
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'block', lineHeight: i === 0 ? '1' : '1.05' }}>
                {word}
              </span>
            ))}
          </h1>

          <div
            className="animate-fadeInUp delay-2"
            style={styles.titleRow}
          >
            <span style={styles.line} />
            <p style={styles.title}>{personalInfo.title}</p>
          </div>

          <p
            className="animate-fadeInUp delay-3"
            style={styles.subtitle}
          >
            {personalInfo.subtitle}
          </p>

          <div className="animate-fadeInUp delay-4" style={styles.cta}>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
              <ArrowRight />
            </a>
            <a href="#about" className="btn btn-outline">
              View My Work
            </a>
          </div>

          {/* Contact chips */}
          <div className="animate-fadeInUp delay-5" style={styles.chips}>
            <a href={`mailto:${personalInfo.email}`} style={styles.chip}>
              <MailIcon />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} style={styles.chip}>
              <PhoneIcon />
              {personalInfo.phone}
            </a>
          </div>
        </div>

        {/* Right: decorative monogram */}
        <div className="animate-fadeIn delay-2" style={styles.monogramWrap} aria-hidden="true">
          <div style={styles.monogramRing}>
            <span className="font-display" style={styles.monogramText}>GG</span>
          </div>
          <div style={styles.tagLine}>
            <span style={styles.tagItem}>Sales</span>
            <span style={styles.dot}>·</span>
            <span style={styles.tagItem}>Reception</span>
            <span style={styles.dot}>·</span>
            <span style={styles.tagItem}>Communication</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={styles.scrollHint} aria-hidden="true">
        <span style={styles.scrollLabel}>scroll</span>
        <div style={styles.scrollLine} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    paddingTop: '68px',
    overflow: 'hidden',
  },
  grid: {
    position: 'absolute' as const,
    inset: 0,
    backgroundImage: `
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    opacity: 0.4,
    pointerEvents: 'none' as const,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    gap: '4rem',
    padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
  },
  content: {
    maxWidth: '580px',
  },
  name: {
    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
    fontWeight: 300,
    color: 'var(--text-primary)',
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    lineHeight: 1,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  line: {
    display: 'block',
    width: '32px',
    height: '1px',
    background: 'var(--text-muted)',
    flexShrink: 0,
  } as React.CSSProperties,
  title: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.8rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    marginBottom: '2.5rem',
    letterSpacing: '0.04em',
  },
  cta: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
    marginBottom: '2.5rem',
  },
  chips: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontFamily: "'DM Mono', monospace",
    transition: 'color 0.2s ease',
  } as React.CSSProperties,
  monogramWrap: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.5rem',
  },
  monogramRing: {
    width: 'clamp(160px, 20vw, 220px)',
    height: 'clamp(160px, 20vw, 220px)',
    borderRadius: '50%',
    border: '1px solid var(--border-mid)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--accent-glow)',
    boxShadow: '0 0 0 8px var(--accent-glow), 0 0 0 16px var(--accent-glow)',
    position: 'relative' as const,
  },
  monogramText: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: 300,
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
  },
  tagLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  tagItem: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
  },
  dot: {
    color: 'var(--border-strong)',
  },
  scrollHint: {
    position: 'absolute' as const,
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '0.5rem',
  },
  scrollLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    opacity: 0.6,
  },
  scrollLine: {
    width: '1px',
    height: '40px',
    background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
    opacity: 0.4,
  },
};

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
