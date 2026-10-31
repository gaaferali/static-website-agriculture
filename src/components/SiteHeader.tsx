import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { aiServices, agricultureServices, type Service } from '../data/services';
import { Logo } from './Logo';

type MenuName = 'services' | 'ai';

interface DropdownProps {
  activeMenu: MenuName | null;
  href: string;
  items: Service[];
  label: string;
  name: MenuName;
  onMenuChange: (menu: MenuName | null) => void;
  onNavigate: () => void;
}

function Dropdown({
  activeMenu,
  href,
  items,
  label,
  name,
  onMenuChange,
  onNavigate,
}: DropdownProps) {
  const wrapper = useRef<HTMLDivElement>(null);
  const isOpen = activeMenu === name;
  const menuId = `${name}-menu`;

  return (
    <div
      className="nav-dropdown"
      ref={wrapper}
      onMouseEnter={() => onMenuChange(name)}
      onMouseLeave={() => onMenuChange(null)}
      onFocus={() => onMenuChange(name)}
      onBlur={(event) => {
        if (!wrapper.current?.contains(event.relatedTarget as Node | null)) {
          onMenuChange(null);
        }
      }}
    >
      <span className="nav-dropdown__trigger">
        <a href={href} onClick={onNavigate}>
          {label}
        </a>
        <button
          type="button"
          aria-controls={menuId}
          aria-expanded={isOpen}
          aria-label={`Toggle ${label} menu`}
          onClick={() => onMenuChange(isOpen ? null : name)}
        >
          <svg viewBox="0 0 12 8" aria-hidden="true">
            <path d="m1 1 5 5 5-5" />
          </svg>
        </button>
      </span>
      <div id={menuId} className="nav-dropdown__menu" data-open={isOpen}>
        {items.map((item) => (
          <Link key={item.slug} to={`/services/${item.slug}`} onClick={onNavigate}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const location = useLocation();

  const closeNavigation = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    closeNavigation();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNavigation();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <button
          type="button"
          className="mobile-menu-button"
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className="primary-navigation"
          data-open={mobileOpen}
          aria-label="Primary navigation"
        >
          <Link to="/" onClick={closeNavigation}>
            Home
          </Link>
          <a href="/#about" onClick={closeNavigation}>
            About Us
          </a>
          <Dropdown
            activeMenu={activeMenu}
            href="/#services"
            items={agricultureServices}
            label="Services"
            name="services"
            onMenuChange={setActiveMenu}
            onNavigate={closeNavigation}
          />
          <Link to="/contact" onClick={closeNavigation}>
            Contact Us
          </Link>
          <Dropdown
            activeMenu={activeMenu}
            href="/#ai-services"
            items={aiServices}
            label="AI Service"
            name="ai"
            onMenuChange={setActiveMenu}
            onNavigate={closeNavigation}
          />
        </nav>
      </div>
    </header>
  );
}
