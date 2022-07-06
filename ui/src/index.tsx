import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './Auth/Login';
import RegistrationPage from './Auth/Register';
import ListsPage from "./Lists/Lists";
import MyFamilyPage from "./MyFamily/MyFamilyPage";
import CalendarPage from "./Calendar/Calendar";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="register" element={<RegistrationPage />} />
                <Route path="my-family" element={<MyFamilyPage />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="lists" element={<ListsPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
