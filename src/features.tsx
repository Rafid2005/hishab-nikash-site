import { createRoot } from 'react-dom/client';
import { FeaturesPage } from '@/pages/FeaturesPage';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <FeaturesPage />
    <Analytics />
  </>
);
