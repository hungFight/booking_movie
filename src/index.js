import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './scenes/auth/login';
import Register from './scenes/auth/register';
import { AuthProvider, AuthContext } from './contexts/auth-context';
import { ContextProvider } from './contexts/theme-context';
import './styles/tailwind.css';
import { useCookies } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
        {/* <Route path="*" element={ <AuthenticatedRoute><ContextProvider>
          </ContextProvider></AuthenticatedRoute> } /> */}
        {/* <Route
            path="*"
            element=
            {
              <ContextProvider>
                <App />
              </ContextProvider>
            } /> */}

      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

