import { useReveal } from '../../hooks/useReveal';
import { personalInfo } from '../../data';

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
            Get in<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Touch</em>
          </h2>
          <p style={styles.intro}>
            Open to new opportunities, professional collaborations, and meaningful conversations.
          </p>

          <div style={styles.grid}>
            {/* Contact cards */}
            {contactItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="card"
                style={styles.card}
              >
                <span style={styles.icon}>{item.icon}</span>
                <div>
                  <p style={styles.label}>{item.label}</p>
                  <p style={styles.value}>{item.value}</p>
                </div>
                <span style={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const contactItems = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <MailIcon />,
    external: false,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: <PhoneIcon />,
    external: false,
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: 'https://maps.google.com/?q=Giza,Egypt',
    icon: <PinIcon />,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'ghada-gaber-3111441b6',
    href: personalInfo.linkedin,
    icon: <LinkedInIcon />,
    external: true,
  },
];

const styles = {
  intro: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    marginBottom: '3rem',
    maxWidth: '480px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 1.5rem',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  } as React.CSSProperties,
  icon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'var(--accent-dim)',
    border: '1px solid var(--border-mid)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    flexShrink: 0,
  } as React.CSSProperties,
  label: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-muted)',
    marginBottom: '0.2rem',
  },
  value: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    fontWeight: 400,
  },
  arrow: {
    marginLeft: 'auto',
    color: 'var(--text-muted)',
    fontSize: '1rem',
    opacity: 0.5,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  } as React.CSSProperties,
};

function MailIcon()    { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }
function PhoneIcon()   { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function PinIcon()     { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function LinkedInIcon(){ return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>; }
