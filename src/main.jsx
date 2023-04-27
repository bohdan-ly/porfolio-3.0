import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import { Build } from './app/build.jsx';
import App from 'app/app';
import { ConnectProviders } from 'app/providers';
import 'shared/global/localization';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConnectProviders>
      <App />
    </ConnectProviders>
  </React.StrictMode>,
);
