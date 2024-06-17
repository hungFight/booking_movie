import './App.css';
import SignInSide from './Authentication/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Authentication/Register';
import Images from './assets/images/image';
import ResetPassword from './Authentication/ResetPassword';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import MovieDetail from './Movie/Detail';
function App() {
    const [cookies, setCookies] = useCookies(['tks']);
    useEffect(() => {
        if (!cookies.tks && !window.location.pathname.includes('login')) {
            window.location.href = 'login';
        } else if (cookies.tks && window.location.pathname.includes('login')) window.location.href = '/';
    }, [cookies?.tks]);
    return (
        <div className="App">
            <div className="w-40 h-40 absolute top-3 right-9">
                <img src={Images.logoApp} alt="Cinema" className="w-full h-full" />
            </div>{' '}
            <Routes>
                <Route path="/login" element={<SignInSide setCookies={setCookies} />} />
                <Route path="/movie/detail" element={<MovieDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
            </Routes>
        </div>
    );
}

export default App;
