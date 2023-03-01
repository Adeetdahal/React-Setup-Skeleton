// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { api } from '../Api';
import { login } from '~/redux/slices/login/loginSlice';

export const loginHandler = async (payload) => {
    try {
        // const handleLogin = (user) => {
        //     dispatch(login({ user }));
        // };
        const rs = await api('POST')('/login', undefined, payload);
        if (rs?.data?.status === 'success') {
            toast.success(rs?.data.message);
            console.log(rs, 'rs');
            // const userName = rs.data.data.data.user_info.name;
            // console.log(userName, 'username');
            // dispatch(handleLogin(rs.data.data.user_info.name));
        } else {
            toast.error(rs?.data?.message);
            console.log(rs?.error);
            console.log('rs');
        }
        console.log(rs?.data?.data, 'API response');
        console.log(rs, 'API response2');
        return {
            ...rs,
            data: rs?.data?.data,
            // localStorage.setItem('username', userName);
            // userName: rs?.data?.data?.user_info?.name,

            // data: rs?.data?.data,
        };
    } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log(err?.response?.data?.message, 'err here2');
    }
};
