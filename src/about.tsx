import { createRoot } from 'react-dom/client';
import { AboutPage } from '@/pages/AboutPage';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <AboutPage />
    <Analytics />
  </>
);
