import logo from './logo.svg';
import './App.css';
import SignInSide from './Authentication/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Authentication/Register';
import { Image, Layout } from 'antd';
import Images from './assets/images/image';
import SignInSide from './app/Authentication/Login';
import Register from './scenes/auth/register';
import ResetPassword from './app/Authentication/ResetPassword';
import Login from './scenes/auth/login';
import SignUp from './app/Authentication/Register';
import { AuthContext } from './contexts/auth-context';
import MovieDetail from './app/Movie/Detail';
import Homepage from './app/Homepage';
// import jwt_decode from './utils/jwt_decode';

const AuthenticatedRouteAdmin = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  // if (token) {
  // const decodeToken = jwt_decode(token);
  // console.log(isAuthenticated, 'isAuthenticated', decodeToken);
  // if (decodeToken.sub === 'ADMIN') return children
  // }
  return children
  return <Navigate to="/admin/login" />
};
const AuthenticatedRoute = ({ children }) => {
  const [cookies, setCookies] = useCookies(['tks']);
  return !cookies.tks ? children : <Navigate to="/login" />;
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
            <Route path="/homepage" element={ <Homepage /> } />
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
