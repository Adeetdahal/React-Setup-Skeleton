import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import history from '~/routes/History';
import Home from '~/pages/homepage';
import Login from '~/pages/Auth/Login/LoginPage';
import Register from '~/pages/Auth/SignUp/SignupPage';
import Navbar from '~/components/navbar/Navbar';
import ProtectedRoute from '~/routes/ProtectedRoute';
import Users from '~/components/admin/Users';
import Profile from '~/pages/profile/Profile';

function Routing() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <Users />
                        </ProtectedRoute>
                    }
                />
                {/* <ProtectedRoute path="/users/*" component={<Users />} /> */}

                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default Routing;
