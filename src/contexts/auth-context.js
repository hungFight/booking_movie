// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken') ?? false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token, 'token');
    setIsAuthenticated(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
      { children }
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

// import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const HANDLERS = {
//   INITIALIZE: 'INITIALIZE',
//   SIGN_IN: 'SIGN_IN',
//   SIGN_OUT: 'SIGN_OUT'
// };

// const initialState = {
//   isAuthenticated: false,
//   isLoading: true,
//   user: null
// };

// const handlers = {
//   [HANDLERS.INITIALIZE]: (state, action) => {
//     const user = action.payload;

//     return {
//       ...state,
//       ...(
//         user
//           ? ({
//             isAuthenticated: true,
//             isLoading: false,
//             user
//           })
//           : ({
//             isLoading: false
//           })
//       )
//     };
//   },
//   [HANDLERS.SIGN_IN]: (state, action) => {
//     const user = action.payload;

//     return {
//       ...state,
//       isAuthenticated: true,
//       user
//     };
//   },
//   [HANDLERS.SIGN_OUT]: (state) => {
//     return {
//       ...state,
//       isAuthenticated: false,
//       user: null
//     };
//   }
// };

// const reducer = (state, action) => (
//   handlers[action.type] ? handlers[action.type](state, action) : state
// );

// export const AuthContext = createContext({ undefined });

// export const AuthProvider = (props) => {
//   const { children } = props;
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const initialized = useRef(false);

//   const initialize = async () => {
//     if (initialized.current) {
//       return;
//     }

//     initialized.current = true;

//     const token = localStorage.getItem('authToken');
//     if (token) {
//       // Optionally, validate token and get user info
//       // Example: const user = await fetchUserFromToken(token);
//       const user = { name: 'User' }; // Mock user, replace with actual logic
//       dispatch({
//         type: HANDLERS.INITIALIZE,
//         payload: user
//       });
//     } else {
//       dispatch({
//         type: HANDLERS.INITIALIZE
//       });
//     }
//   };

//   useEffect(() => {
//     initialize();
//   }, []);

//   const signIn = async (username, password) => {
//     try {
//       const response = await axios.post('https://localhost:7248/Api/User/Login', {
//         username,
//         password
//       });

//       const token = response.data.data.accessToken;
//       const user = response.data;
//       localStorage.setItem('authToken', token);

//       dispatch({
//         type: HANDLERS.SIGN_IN,
//         payload: user
//       });
//     } catch (error) {
//       throw new Error('Invalid login credentials');
//     }
//   };

//   const signOut = () => {
//     localStorage.removeItem('authToken');
//     dispatch({
//       type: HANDLERS.SIGN_OUT
//     });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         signIn,
//         signOut
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node
// };

// export const useAuthContext = () => useContext(AuthContext);
