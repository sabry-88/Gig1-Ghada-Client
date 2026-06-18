import { useState, useEffect } from 'react';
import { Theme } from '../../types';
import { navItems, personalInfo } from '../../data';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" style={navStyles.nav(scrolled)}>
      <div className="container" style={navStyles.inner}>
        {/* Logo */}
        <a href="#hero" style={navStyles.logo} onClick={() => setActive('')}>
          <span className="font-display" style={navStyles.logoText}>GG</span>
        </a>

        {/* Desktop links */}
        <ul style={navStyles.links}>
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                style={navStyles.link(active === item.href)}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={navStyles.actions}>
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={navStyles.themeBtn}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={navStyles.hamburger}
          >
            <span style={navStyles.bar(menuOpen, 0)} />
            <span style={navStyles.bar(menuOpen, 1)} />
            <span style={navStyles.bar(menuOpen, 2)} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={navStyles.mobileMenu}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              style={navStyles.mobileLink}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...navStyles.mobileLink, color: 'var(--text-muted)' }}
          >
            LinkedIn ↗
          </a>
        </div>
      )}
    </nav>
  );
}

const navStyles = {
  nav: (scrolled: boolean) => ({
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: scrolled ? 'var(--nav-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'all 0.35s ease',
  }),
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '68px',
  },
  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 400,
    color: 'var(--text-primary)',
    letterSpacing: '0.05em',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    alignItems: 'center',
  } as React.CSSProperties,
  link: (active: boolean) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 400,
    color: active ? 'var(--text-primary)' : 'var(--text-muted)',
    textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'color 0.2s ease',
    paddingBottom: '2px',
    borderBottom: active ? '1px solid var(--text-primary)' : '1px solid transparent',
  } as React.CSSProperties),
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  themeBtn: {
    background: 'none',
    border: '1px solid var(--border-mid)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--text-muted)',
    transition: 'all 0.2s ease',
  } as React.CSSProperties,
  hamburger: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '5px',
    padding: '4px',
    alignItems: 'flex-end',
  },
  bar: (open: boolean, i: number) => ({
    display: 'block',
    height: '1.5px',
    background: 'var(--text-primary)',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
    width: i === 1 ? (open ? '20px' : '14px') : '20px',
  } as React.CSSProperties),
  mobileMenu: {
    background: 'var(--bg-secondary)',
    borderTop: '1px solid var(--border)',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  },
  mobileLink: {
    padding: '0.75rem 1rem',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    borderRadius: '4px',
    transition: 'background 0.2s ease',
  } as React.CSSProperties,
};

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
