// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";
// import Login from './scenes/auth/login';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './scenes/auth/login';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const isAuthenticated = () => {
//   // Replace this with your actual authentication logic
//   return localStorage.getItem('authToken') !== null;
// };

// console.log(isAuthenticated());

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={
//           isAuthenticated() ? <App /> : <Navigate to="/login" />
//         } />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './scenes/auth/login';
import Register from './scenes/auth/register';
import { AuthProvider, AuthContext } from './contexts/auth-context';
import { ContextProvider } from './contexts/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AuthenticatedRoute = ({ children }) => {
  // const { isAuthenticated } = React.useContext(AuthContext);

  // return isAuthenticated ? children : <Navigate to="/login" />;
};

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<AuthenticatedRoute><App /></AuthenticatedRoute>} /> */}
          <Route
            path="*"
            element=
            {
              <ContextProvider>
                <App />
              </ContextProvider>
            } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

