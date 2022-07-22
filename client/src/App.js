import './App.css';
import React from 'react';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<LandingPage />} />
          <Route exact path="/login" element = {<LoginPage />} />
          <Route exact path="/register" element = {<RegisterPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;