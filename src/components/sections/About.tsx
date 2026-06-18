import { useReveal } from '../../hooks/useReveal';
import { personalInfo } from '../../data';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal" style={styles.grid}>
          {/* Left: heading block */}
          <div style={styles.left}>
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              Professional<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Overview</em>
            </h2>
            <div style={styles.accent} />

            <div style={styles.statsRow}>
              {stats.map(s => (
                <div key={s.label} style={styles.stat}>
                  <span style={styles.statNum}>{s.value}</span>
                  <span style={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: summary */}
          <div style={styles.right}>
            <p style={styles.summary}>{personalInfo.summary}</p>

            <div style={styles.tagGrid}>
              {tags.map(tag => (
                <span key={tag} style={styles.tag}>{tag}</span>
              ))}
            </div>

            <div style={styles.contactMini}>
              <a href={`mailto:${personalInfo.email}`} style={styles.contactLink}>
                <MailIcon /> {personalInfo.email}
              </a>
              <span style={styles.sep}>·</span>
              <a href={`tel:${personalInfo.phone}`} style={styles.contactLink}>
                <PhoneIcon /> {personalInfo.phone}
              </a>
              <span style={styles.sep}>·</span>
              <span style={styles.contactLink}>
                <PinIcon /> {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" style={{ maxWidth: '1140px', margin: '0 auto' }} />
    </section>
  );
}

const stats = [
  { value: '3', label: 'Roles' },
  { value: '3', label: 'Languages' },
  { value: 'B.A.', label: 'Cairo Univ.' },
];

const tags = [
  'Customer Relations', 'Sales Growth', 'Medical Reception',
  'Tele-Sales', 'Trilingual', 'POS Systems', 'Record Management',
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.4fr',
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
  statsRow: {
    display: 'flex',
    gap: '2rem',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.15rem',
  },
  statNum: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '2.25rem',
    fontWeight: 300,
    color: 'var(--text-primary)',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
  },
  right: {},
  summary: {
    fontSize: '1.05rem',
    lineHeight: 1.8,
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
  },
  tagGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  tag: {
    padding: '0.35rem 0.85rem',
    border: '1px solid var(--border-mid)',
    borderRadius: '2px',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontFamily: "'DM Mono', monospace",
    letterSpacing: '0.04em',
    background: 'var(--accent-glow)',
  } as React.CSSProperties,
  contactMini: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
  },
  contactLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.75rem',
  } as React.CSSProperties,
  sep: { color: 'var(--border-strong)', margin: '0 0.25rem' },
};

function MailIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
function PhoneIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function PinIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
