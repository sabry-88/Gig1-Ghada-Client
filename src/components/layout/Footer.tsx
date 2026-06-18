import { personalInfo, navItems } from '../../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.inner}>
          {/* Logo & tagline */}
          <div style={styles.brand}>
            <span className="font-display" style={styles.logo}>GG</span>
            <p style={styles.tagline}>Customer Relations & Sales Professional</p>
            <p style={styles.location}>{personalInfo.location}</p>
          </div>

          {/* Quick links */}
          <div style={styles.linkGroup}>
            <p style={styles.groupLabel}>Navigation</p>
            <ul style={styles.links}>
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} style={styles.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={styles.linkGroup}>
            <p style={styles.groupLabel}>Contact</p>
            <ul style={styles.links}>
              <li>
                <a href={`mailto:${personalInfo.email}`} style={styles.link}>
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} style={styles.link}>
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={styles.bottom}>
          <p style={styles.copy}>
            © {year} Ghada Gaber Abdelnazer. All rights reserved.
          </p>
          <a href="#hero" style={styles.backTop}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    background: 'var(--bg-primary)',
    paddingTop: '4rem',
    paddingBottom: '2rem',
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr',
    gap: 'clamp(2rem, 5vw, 4rem)',
    paddingBottom: '3rem',
    borderBottom: '1px solid var(--border)',
    marginBottom: '2rem',
  } as React.CSSProperties,
  brand: {},
  logo: {
    fontSize: '2rem',
    fontWeight: 300,
    color: 'var(--text-primary)',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '0.75rem',
  } as React.CSSProperties,
  tagline: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    marginBottom: '0.35rem',
  },
  location: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    opacity: 0.6,
    letterSpacing: '0.08em',
  },
  linkGroup: {},
  groupLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    marginBottom: '1rem',
    opacity: 0.7,
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.6rem',
  },
  link: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  } as React.CSSProperties,
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '1rem',
  },
  copy: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    opacity: 0.5,
    letterSpacing: '0.05em',
  },
  backTop: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    letterSpacing: '0.08em',
    opacity: 0.6,
    transition: 'opacity 0.2s ease',
  } as React.CSSProperties,
};
