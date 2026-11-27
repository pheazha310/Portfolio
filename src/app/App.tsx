import { useEffect, useState, type ComponentType } from 'react';
import { initializePortfolio } from '../features/site-interactions/lib/initializePortfolio';
import { pageRegistry, resolvePageName } from '../pages';
import SiteLayout from '../widgets/site-layout/ui/SiteLayout';

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
    initializePortfolio();
  }, [page, pageConfig, PageComponent]);

  return (
    <SiteLayout currentPage={page}>
      {PageComponent ? (
        <PageComponent />
      ) : loadError ? (
        <main role="alert">This page could not be loaded. Please try again later.</main>
      ) : (
        <main aria-busy="true" />
      )}
    </SiteLayout>
  );
}
