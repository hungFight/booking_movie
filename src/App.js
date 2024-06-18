import { ColorModeContext, useMode } from './theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
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
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Images from './assets/images/image';
import SignInSide from './Authentication/Login';
import Register from './scenes/auth/register';
import ResetPassword from './Authentication/ResetPassword';

function App() {
  const [theme, colorMode] = useMode();
  const [cookies, setCookies] = useCookies(['tks']);
  useEffect(() => {
    if (!cookies.tks && !window.location.pathname.includes('login')) {
      window.location.href = 'login';
    } else if (cookies.tks && window.location.pathname.includes('login')) window.location.href = '/';
  }, [cookies?.tks]);
  return (
    <div className="App">
      <div className="w-40 h-40 absolute top-3 right-9">
        <img src={ Images.logoApp } alt="Cinema" className="w-full h-full" />
      </div>{ ' ' }
      <Routes>
        <Route path="/login" element={ <SignInSide setCookies={ setCookies } /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/resetPassword" element={ <ResetPassword /> } />
      </Routes>
      <ColorModeContext.Provider value={ colorMode }>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Box className="app" sx={ { height: "100%" } }>
            <ProSideBar />
            <main className='content h-full overflow-auto' >
              <Topbar />
              <Routes>
                <Route path='/admin/' element={ <Dashboard /> } />
                <Route path='/admin/management/invoices' element={ <Invoices /> } />
                <Route path='/admin/form' element={ <Form /> } />
                <Route path='/admin/faq' element={ <FAQ /> } />
                <Route path='/admin/bar' element={ <Bar /> } />
                <Route path='/admin/line' element={ <Line /> } />
                <Route path='/admin/pie' element={ <Pie /> } />
                <Route path='/admin/geography' element={ <Geography /> } />
                <Route path='/admin/system/user' element={ <User /> } />
                <Route path='/admin/system/user/add' element={ <AddUser /> } />
                <Route path='/admin/system/user/user-info' element={ <UserInfo /> } />
                <Route path='/admin/management/movie' element={ <Movie /> } />
                <Route path='/admin/management/movie/add' element={ <AddMovie /> } />
                <Route path='/admin/management/schedule' element={ <Schedule /> } />
                <Route path='/admin/management/schedule/add' element={ <AddSchedule /> } />
                <Route path='/admin/management/ticket' element={ <Ticket /> } />
                <Route path='/admin/management/ticket/add' element={ <AddTicket /> } />
                <Route path='/admin/management/seat' element={ <Seat /> } />
                <Route path='/admin/management/seat/add' element={ <AddSeat /> } />
                <Route path='/admin/management/rooms' element={ <Room /> } />
                <Route path='/admin/management/rooms/add' element={ <AddRoom /> } />
                <Route path='/admin/management/billTicket' element={ <BillTicket /> } />
                <Route path='/admin/management/cinema' element={ <Cinema /> } />
                <Route path='/admin/management/cinema/add' element={ <AddCinema /> } />
                <Route path='/admin/management/promotion' element={ <Promotion /> } />
                <Route path='/admin/management/promotion/add' element={ <AddPromotion /> } />

              </Routes>
            </main>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>

  );
}

export default App;
