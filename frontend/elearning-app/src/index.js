import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const redirecntion = [
  'http://localhost:3000/user/',
  'http://localhost:3000/course/'
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x1isdfpbz0sm28ns.us.auth0.com"
      clientId="gfnlDfmBjHwIgA57Mvfpj56UvYxcJcKw"
      authorizationParams={{
        redirect_uri: redirecntion.includes(window.location.href) ? window.location.href : 'http://localhost:3000/course/' || 'http://localhost:3000/user/',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

