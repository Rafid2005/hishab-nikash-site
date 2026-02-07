import { createRoot } from 'react-dom/client';
import { DownloadPage } from '@/pages/DownloadPage';
import { Analytics } from '@vercel/analytics/react';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <DownloadPage />
    <Analytics />
  </>
);
