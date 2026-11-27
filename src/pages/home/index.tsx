import source from './content.html?raw';
import HtmlContent from '../../shared/ui/HtmlContent';

export default function HomePage() {
  return <HtmlContent source={source} />;
}
