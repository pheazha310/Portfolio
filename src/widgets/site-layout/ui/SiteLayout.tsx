import type { ReactNode } from 'react';
import LanguageSwitcher from '../../../features/language-switcher/ui/LanguageSwitcher';
import ThemeToggle from '../../../features/theme-toggle/ui/ThemeToggle';
import type { PageName } from '../../../pages';

const navigationItems: [PageName, string, string][] = [
  ['home', 'nav.home', 'Home'],
  ['about', 'nav.about', 'About'],
  ['skills', 'nav.skills', 'Skills'],
  ['certificate', 'nav.certificate', 'Certificates'],
  ['projects', 'nav.projects', 'Projects'],
  ['experience', 'nav.experience', 'Experience'],
  ['contact', 'nav.contact', 'Contact'],
];

const socialLinks = [
  ['https://github.com/pheazha310', 'fab fa-github', 'GitHub'],
  ['https://linkedin.com/in/sophea-phal-a73a1034b', 'fab fa-linkedin', 'LinkedIn'],
  ['https://t.me/PheaZaLov3', 'fab fa-telegram', 'Telegram'],
  ['mailto:pheazha310@gmail.com', 'fas fa-envelope', 'Email'],
];

function pageHref(page: PageName, currentPage: PageName): string {
  if (page === 'home') {
    return currentPage === 'home' ? './index.html' : '../index.html';
  }

  return currentPage === 'home' ? `./page/${page}.html` : `./${page}.html`;
}

type SitePageProps = {
  currentPage: PageName;
};

export function Navigation({ currentPage }: SitePageProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href={pageHref('home', currentPage)} className="logo">
          Sophea Phal
        </a>
        <ul className="nav-menu" id="primary-navigation">
          {navigationItems.map(([page, key, label]) => (
            <li className="nav-item" key={page}>
              <a
                href={pageHref(page, currentPage)}
                className={`nav-link${currentPage === page ? ' active' : ''}`}
                data-i18n={key}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <button className="hamburger" type="button" aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded="false">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </nav>
  );
}

export function Footer({ currentPage }: SitePageProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sophea Phal</h3>
            <p data-i18n="footer.tagline_line1">
            Full-Stack Developer Intern at DELIGHTECH CO., LTD.
            </p>
          <p data-i18n="footer.tagline_line2">Web Development student at PNC</p>
            <div className="footer-cta">
              <a className="footer-btn" href={pageHref('contact', currentPage)} data-i18n="footer.cta">
                Let&apos;s Build Together
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h4 data-i18n="footer.contact">Contact</h4>
            <ul>
              <li>
                <i className="fas fa-envelope" />
                <a href="mailto:pheazha310@gmail.com">
                  pheazha310@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-location-dot" />
                <span data-i18n="footer.location">Phnom Penh, Cambodia</span>
              </li>
              <li>
                <i className="fas fa-graduation-cap" />
              <span data-i18n="footer.available">Open to collaboration</span>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4 data-i18n="footer.quick_links">Quick Links</h4>
            <ul>
              {navigationItems
                .filter(([page]) => page !== 'experience')
                .map(([page, key, label]) => (
                  <li key={page}>
                    <a href={pageHref(page, currentPage)} data-i18n={key}>
                      {label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="footer-social">
            <h4 data-i18n="footer.connect">Connect</h4>
            <p className="footer-note" data-i18n="footer.note">
              Find my latest work and reach out anytime.
            </p>
            <div className="social-icons">
              {socialLinks.map(([href, icon, label]) => (
                <a
                  href={href}
                  key={href}
                  aria-label={label}
                  target={href.startsWith('https://') ? '_blank' : undefined}
                  rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <span data-i18n="footer.rights_prefix">
              &copy; <span className="current-year">2026</span> Sophea Phal.
            </span>{' '}
            <span data-i18n="footer.rights_suffix">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

type SiteLayoutProps = SitePageProps & {
  children: ReactNode;
};

export default function SiteLayout({ currentPage, children }: SiteLayoutProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation currentPage={currentPage} />
      {children}
      <Footer currentPage={currentPage} />
    </>
  );
}
