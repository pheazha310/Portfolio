import { useEffect, useState, type ComponentType } from 'react';
import { initializePortfolio } from '../features/site-interactions/lib/initializePortfolio';
import { pageRegistry, resolvePageName } from '../pages';
import SiteLayout from '../widgets/site-layout/ui/SiteLayout';

const pageDescriptions: Record<string, string> = {
  home: 'Sophea Phal is a Full-Stack Developer Intern at DELIGHTECH CO., LTD. Explore projects in web applications, APIs, databases, and real-time communication.',
  about: 'Learn about Sophea Phal, a Web Development student at PNC and Full-Stack Developer Intern at DELIGHTECH CO., LTD.',
  skills: 'Frontend, backend, database, architecture, and cloud deployment skills used by Full-Stack Developer Sophea Phal.',
  projects: 'Selected internship and academic projects by Sophea Phal, including real-time communication, classroom engagement, and APIs.',
  experience: 'Full-Stack Developer Intern at DELIGHTECH CO., LTD. and Web Development student at Passerelles Numériques Cambodia.',
  contact: 'Contact Sophea Phal about full-stack development, software engineering, and collaboration.',
  certificate: 'Training and achievements of Sophea Phal.',
};

export default function App() {
  const page = resolvePageName(window.location.pathname);
  const pageConfig = pageRegistry[page];
  const [PageComponent, setPageComponent] = useState<ComponentType | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    setPageComponent(null);
    setLoadError(false);

    pageConfig
      .load()
      .then((module) => {
        if (active) setPageComponent(() => module.default);
      })
      .catch((error: unknown) => {
        console.error(`Unable to load the ${page} page content.`, error);
        if (active) setLoadError(true);
      });

    return () => {
      active = false;
    };
  }, [page, pageConfig]);

  useEffect(() => {
    if (!PageComponent) return;
    document.title = pageConfig.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = pageDescriptions[page];
    initializePortfolio();
  }, [page, pageConfig, PageComponent]);

  return (
    <SiteLayout currentPage={page}>
      {PageComponent ? (
        <PageComponent />
      ) : loadError ? (
        <main role="alert">This page could not be loaded. Please try again later.</main>
      ) : (
        <main className="page-loading" aria-busy="true" aria-label={`Loading ${page} page`}>
          <div className="page-loading-status" role="status">
            <span className="page-loading-spinner" aria-hidden="true" />
            <span>Loading {page === 'home' ? 'portfolio' : page}…</span>
          </div>
        </main>
      )}
    </SiteLayout>
  );
}
