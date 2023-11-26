import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x1isdfpbz0sm28ns.us.auth0.com"
      clientId="gfnlDfmBjHwIgA57Mvfpj56UvYxcJcKw"
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/users'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

