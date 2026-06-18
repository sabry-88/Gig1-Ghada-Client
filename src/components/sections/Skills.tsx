import { useReveal } from '../../hooks/useReveal';
import { skills } from '../../data';

export default function Skills() {
  const ref = useReveal();

  const technical = skills.filter(s => s.category === 'technical');
  const soft      = skills.filter(s => s.category === 'soft');
  const languages = skills.filter(s => s.category === 'language');

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">Competencies</span>
          <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>
            Skills &<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Expertise</em>
          </h2>

          <div style={styles.grid}>
            <SkillGroup title="Technical" icon={<TerminalIcon />} items={technical.map(s => s.name)} />
            <SkillGroup title="Soft Skills" icon={<HeartIcon />} items={soft.map(s => s.name)} />
            <SkillGroup title="Languages" icon={<GlobeIcon />} items={languages.map(s => s.name)} />
          </div>
        </div>
      </div>
      <div className="section-divider" style={{ maxWidth: '1140px', margin: '4rem auto 0' }} />
    </section>
  );
}

function SkillGroup({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="card" style={styles.group}>
      <div style={styles.groupHeader}>
        <span style={styles.groupIcon}>{icon}</span>
        <h3 style={styles.groupTitle}>{title}</h3>
      </div>
      <div style={styles.pills}>
        {items.map(item => (
          <span key={item} style={styles.pill}>{item}</span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  group: {
    padding: '2rem',
  },
  groupHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid var(--border)',
  },
  groupIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'var(--accent-dim)',
    border: '1px solid var(--border-mid)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    flexShrink: 0,
  } as React.CSSProperties,
  groupTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text-secondary)',
  },
  pills: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.6rem',
  },
  pill: {
    padding: '0.6rem 0.9rem',
    background: 'var(--accent-glow)',
    border: '1px solid var(--border)',
    borderRadius: '3px',
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    transition: 'border-color 0.2s ease, background 0.2s ease',
  } as React.CSSProperties,
};

function TerminalIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
}
function HeartIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}
function GlobeIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
}
