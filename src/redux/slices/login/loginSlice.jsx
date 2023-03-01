/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// import { getStore } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    // user: null,
    // login: {
    //     email: '',
    //     password: '',
    // },
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            // state.user = action.payload.user;
            // state.login = action.payload.login;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            // state.user = null;
            localStorage.clear();
        },
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
