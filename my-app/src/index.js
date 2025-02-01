import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';


const root = createRoot(document.getElementById('root'));
root.render(
    <AdminFlagProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AdminFlagProvider>
);