import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
    const { isAuthenticated, role } = useSelector((store) => store.login);
    console.log(role);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/login');
        }
    }, [isAuthenticated]);

    return role === 'admin' ? (
        children
    ) : (
        // navigate('/login')
        <div>You are unauthorized to this page</div>
    );
}

export default ProtectedRoute;
