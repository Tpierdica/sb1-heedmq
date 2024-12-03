import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryProvider } from './providers/QueryProvider';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';

// Initialize EmailJS
emailjs.init('TIyVqjXB2ntv3Bsd-');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>
);