import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';
import { logout } from '~/redux/slices/login/loginSlice';
import { store } from '~/redux/store';
// import { loginHandler } from '~/services/handlers/LoginHandler';

function Navbar() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((store) => store.login);
    // const { userName } = loginHandler();
    // console.log(userName, 'name here in nav');

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
                    <button>
                        {isAuthenticated ? 'User' : 'login/register'}
                    </button>
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
