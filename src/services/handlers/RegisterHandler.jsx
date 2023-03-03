// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { api } from '../Api';
import { login } from '~/redux/slices/login/loginSlice';

export const RegisterHandler = async (dispatch, payload) => {
    try {
        const rs = await api('POST')('/user-registeration', undefined, payload);
        if (rs?.data?.status === 'success') {
            toast.success(rs?.data.message);
            console.log(rs, 'rs');
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
        };
    } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log(err?.response?.data?.message, 'err here2');
        console.log(err, 'err');
    }
};
