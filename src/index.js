import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import './assets/styles/index.css'
import Navbar from "./components/Navbar";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import RegisterPage from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Navbar/>
            <div className="flex justify-center items-center w-full mx-auto my-auto">
                <div className="w-6/12">
                    <Routes>
                        <Route path='*' element={<NotFoundPage/>}/>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
