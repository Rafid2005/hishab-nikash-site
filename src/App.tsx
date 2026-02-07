import { HomePage } from '@/pages/HomePage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  );
}

export default App;
