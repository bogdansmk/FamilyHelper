import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginPage from './Auth/Login';
import RegistrationPage from './Auth/Register';
import Header from "./components/Header/Header";
import LeftMenu from "./components/LeftMenu/LeftMenu";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Header/>
        <LeftMenu/>
        <main className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="Register" element={<RegistrationPage/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
