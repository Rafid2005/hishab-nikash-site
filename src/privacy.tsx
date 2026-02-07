import { createRoot } from 'react-dom/client';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <PrivacyPage />
    <Analytics />
  </>
);
