import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';
import { logout } from '~/redux/slices/login/loginSlice';
import { store } from '~/redux/store';

function Navbar() {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((store) => store.login);
    const handleLogout = () => {
        dispatch(logout());
        persistStore(store).purge();
    };

    return (
        <div className="flex justify-between px-[7%]">
            <NavLink to="/">
                <p>Navbar Component</p>
            </NavLink>
            <div className="">
                <NavLink to="/login">
                    <button>{isAuthenticated ? user : 'login/register'}</button>
                </NavLink>
                {isAuthenticated && (
                    <button className="pl-10" onClick={() => handleLogout()}>
                        LOGOUT
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
