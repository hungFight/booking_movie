import { ColorModeContext, useMode } from './theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import ProSideBar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Invoices from './scenes/management/invoices';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
// import Login from './scenes/login';
import Geography from './scenes/geography';
import User from './scenes/system/user';
// import Login from './scenes/auth/login';
// import Register from './scenes/auth/register';
import "./index.css";
import AddUser from './scenes/system/user/add';
import UserInfo from './scenes/system/user/user-info';
import Movie from './scenes/management/movie/index';
import AddMovie from './scenes/management/movie/add';
import Schedule from './scenes/management/schedule/index';
import AddSchedule from './scenes/management/schedule/add';
import Ticket from './scenes/management/ticket/index';
import AddTicket from './scenes/management/ticket/add';
import Seat from './scenes/management/seat/index';
import AddSeat from './scenes/management/seat/add';
import Room from './scenes/management/rooms/index';
import AddRoom from './scenes/management/rooms/add';
import BillTicket from './scenes/management/billTicket/index';
import Cinema from './scenes/management/cinema/index';
import AddCinema from './scenes/management/cinema/add';
import Promotion from './scenes/management/promotion/index';
import AddPromotion from './scenes/management/promotion/add';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Images from './assets/images/image';
import SignInSide from './app/Authentication/Login';
import Register from './scenes/auth/register';
import ResetPassword from './app/Authentication/ResetPassword';
import Login from './scenes/auth/login';
import SignUp from './app/Authentication/Register';
import { AuthContext } from './contexts/auth-context';
import MovieDetail from './app/Movie/Detail';

const AuthenticatedRouteAdmin = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  console.log(isAuthenticated, 'isAuthenticated');
  return isAuthenticated ? children : <Navigate to="/admin/login" />;

}; const AuthenticatedRoute = ({ children }) => {
  const [cookies, setCookies] = useCookies(['tks']);
  return cookies.tks ? children : <Navigate to="/login" />;
};
function App() {
  const [theme, colorMode] = useMode();
  const [cookies, setCookies] = useCookies(['tks']);

  return (
    <div className="App h-full">
      <div className="w-40 h-40 absolute top-3 right-9">
        <img src={ Images.logoApp } alt="Cinema" className="w-full h-full" />
      </div>{ ' ' }
      <Routes>
        <Route path="/login" element={ <SignInSide setCookies={ setCookies } /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/resetPassword" element={ <ResetPassword /> } />
        <Route path="/*" element={ <AuthenticatedRoute >
          <Routes>
            {/* home here */ }
            <Route path="/movie/detail" element={ <MovieDetail /> } />
          </Routes>
        </AuthenticatedRoute> } />
        <Route path="/admin/login" element={ <Login /> } />
        <Route path="/admin/register" element={ <Register /> } />
        <Route path='/admin/*' element={ <AuthenticatedRouteAdmin>
          <ColorModeContext.Provider value={ colorMode }>

            <ThemeProvider theme={ theme }>
              <CssBaseline />
              <Box className="app" sx={ { height: "100%" } }>
                <ProSideBar />
                <main className='content h-full overflow-auto' >
                  <Topbar />
                  <Routes>
                    <Route path='/' element={ <Dashboard /> } />
                    <Route path='/management/invoices' element={ <Invoices /> } />
                    <Route path='/form' element={ <Form /> } />
                    <Route path='/faq' element={ <FAQ /> } />
                    <Route path='/bar' element={ <Bar /> } />
                    <Route path='/line' element={ <Line /> } />
                    <Route path='/pie' element={ <Pie /> } />
                    <Route path='/geography' element={ <Geography /> } />
                    <Route path='/system/user' element={ <User /> } />
                    <Route path='/system/user/add' element={ <AddUser /> } />
                    <Route path='/system/user/user-info' element={ <UserInfo /> } />
                    <Route path='/management/movie' element={ <Movie /> } />
                    <Route path='/management/movie/add' element={ <AddMovie /> } />
                    <Route path='/management/schedule' element={ <Schedule /> } />
                    <Route path='/management/schedule/add' element={ <AddSchedule /> } />
                    <Route path='/management/ticket' element={ <Ticket /> } />
                    <Route path='/management/ticket/add' element={ <AddTicket /> } />
                    <Route path='/management/seat' element={ <Seat /> } />
                    <Route path='/management/seat/add' element={ <AddSeat /> } />
                    <Route path='/management/rooms' element={ <Room /> } />
                    <Route path='/management/rooms/add' element={ <AddRoom /> } />
                    <Route path='/management/billTicket' element={ <BillTicket /> } />
                    <Route path='/management/cinema' element={ <Cinema /> } />
                    <Route path='/management/cinema/add' element={ <AddCinema /> } />
                    <Route path='/management/promotion' element={ <Promotion /> } />
                    <Route path='/management/promotion/add' element={ <AddPromotion /> } />
                  </Routes>
                </main>
              </Box>
            </ThemeProvider>
          </ColorModeContext.Provider></AuthenticatedRouteAdmin> } />
      </Routes>



    </div>

  );
}

export default App;
