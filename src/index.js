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

const AuthenticatedRoute = ({ children }) => {
  const [cookies, setCookies] = useCookies(['tks']);

  return cookies?.tks ? children : <Navigate to="/login" />;
};

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={ <Login /> } />
          <Route path="/admin/register" element={ <Register /> } />
          <Route path="*" element={ <AuthenticatedRoute><ContextProvider>
            <App />
          </ContextProvider></AuthenticatedRoute> } />
          {/* <Route
            path="*"
            element=
            {
              <ContextProvider>
                <App />
              </ContextProvider>
            } /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

