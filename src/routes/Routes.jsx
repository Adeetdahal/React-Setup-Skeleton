import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import history from '~/routes/History';
import Home from '~/pages/homepage';
import Login from '~/pages/Auth/Login/LoginPage';
import Register from '~/pages/Auth/SignUp/SignupPage';
import Navbar from '~/components/navbar/Navbar';

function Routing() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default Routing;
