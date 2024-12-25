import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ThemeContextAPI from './contextApi/ThemeContextAPI.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextAPI>
      <App />
    </ThemeContextAPI>
  </StrictMode>,
);
