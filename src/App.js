import logo from './logo.svg';
import './App.css';
import SignInSide from './Authentication/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Authentication/Register';
import { Image, Layout } from 'antd';
import Images from './assets/images/image';
import LayoutHeaderFooter from './Components/layout/LayoutHeaderFooter/LayoutHeaderFooter';
import Homepage from './pages/Homepage';
function App() {
    return (
        <div className="App">
            <div className="w-40 hidden h-40 absolute top-3 right-9">
                <img src={Images.logoApp} alt="Cinema" className="w-full h-full" />
            </div>{' '}
            <Routes>
                <Route path="/login" element={<SignInSide />} />
                <Route path="/register" element={<Register />} />
                <Route path='/homepage' element={<LayoutHeaderFooter><Homepage/></LayoutHeaderFooter>} />
            </Routes>
        </div>
    );
}

export default App;
