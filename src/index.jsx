import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './styles/index.scss';
import { AuthProvider } from './hoc/AuthProvider';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
