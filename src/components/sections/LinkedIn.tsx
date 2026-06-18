import { useReveal } from '../../hooks/useReveal';
import { personalInfo } from '../../data';

export default function LinkedIn() {
  const ref = useReveal();

  return (
    <section className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <div style={styles.wrapper}>
            {/* Background pattern */}
            <div style={styles.pattern} aria-hidden="true" />

            <div style={styles.inner}>
              <div style={styles.badge}>
                <LinkedInIcon />
                <span style={styles.badgeText}>LinkedIn</span>
              </div>

              <h2 className="font-display" style={styles.heading}>
                Let's Connect<br />
                <em style={{ fontWeight: 300 }}>Professionally</em>
              </h2>

              <p style={styles.sub}>
                View my full professional profile, endorsements, and activity on LinkedIn.
                I'm open to new opportunities, collaborations, and professional conversations.
              </p>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={styles.btn}
              >
                <LinkedInIcon />
                View LinkedIn Profile
                <ExternalIcon />
              </a>

              <p style={styles.url}>{personalInfo.linkedin.replace('https://', '')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" style={{ maxWidth: '1140px', margin: '0 auto' }} />
    </section>
  );
}

const styles = {
  wrapper: {
    position: 'relative' as const,
    border: '1px solid var(--border-mid)',
    borderRadius: '8px',
    overflow: 'hidden' as const,
    background: 'var(--bg-card)',
    padding: 'clamp(2.5rem, 8vw, 5rem)',
    textAlign: 'center' as const,
  },
  pattern: {
    position: 'absolute' as const,
    inset: 0,
    backgroundImage: `radial-gradient(circle at 50% 0%, var(--accent-dim) 0%, transparent 60%)`,
    pointerEvents: 'none' as const,
  },
  inner: {
    position: 'relative' as const,
    maxWidth: '540px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1.25rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.35rem 1rem',
    border: '1px solid var(--border-mid)',
    borderRadius: '99px',
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    fontFamily: "'DM Mono', monospace",
    letterSpacing: '0.08em',
    background: 'var(--accent-glow)',
  } as React.CSSProperties,
  badgeText: {},
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
    fontWeight: 400,
    lineHeight: 1.1,
    color: 'var(--text-primary)',
  },
  sub: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
    maxWidth: '420px',
  },
  btn: {
    gap: '0.6rem',
    marginTop: '0.5rem',
  },
  url: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.68rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
    opacity: 0.6,
  },
};

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}
