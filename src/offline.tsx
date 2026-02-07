import { createRoot } from 'react-dom/client';
import { OfflinePage } from '@/pages/OfflinePage';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <OfflinePage />
    <Analytics />
  </>
);
