import { useMemo } from 'react';
import parse from 'html-react-parser';

type HtmlContentProps = {
  source: string;
};

function extractPageSections(source: string): string {
  const parsedPage = new DOMParser().parseFromString(source, 'text/html');
  const sections = Array.from(parsedPage.body.children)
    .filter((element) => !['NAV', 'FOOTER', 'SCRIPT'].includes(element.tagName))
    .filter((element) => !element.classList.contains('skip-link'));

  return sections.map((section) => section.outerHTML).join('');
}

export default function HtmlContent({ source }: HtmlContentProps) {
  const content = useMemo(() => extractPageSections(source), [source]);

  return <main id="main-content">{parse(content)}</main>;
}
