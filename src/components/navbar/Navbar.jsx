import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';
import { logout } from '~/redux/slices/login/loginSlice';
import { store } from '~/redux/store';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector((store) => store.login);
    const handleLogout = () => {
        dispatch(logout());
        persistStore(store).purge();
        navigate('/');
    };

    return (
        <div className="flex justify-between px-[7%] py-8">
            <NavLink to="/">
                <p>Navbar Component</p>
            </NavLink>
            <div className="flex">
                <NavLink to="/login">
                    <button>{isAuthenticated ? '' : 'Login/Register'}</button>
                </NavLink>
                {isAuthenticated && (
                    <div className="flex">
                        {/* {user.map((user) => (
                            <div key={user.id}>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                        ))} */}
                        <NavLink to="/profile">
                            <button>{user.name}</button>
                        </NavLink>
                        <button
                            className="pl-10"
                            onClick={() => handleLogout()}
                        >
                            LOGOUT
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
