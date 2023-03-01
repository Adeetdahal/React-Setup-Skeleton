/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginHandler } from '~/services/handlers/LoginHandler';
import { login } from '~/redux/slices/login/loginSlice';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleLogin = (user) => {
        dispatch(login({ user }));
    };

    const OnSubmit = async (payload) => {
        console.log(payload);
        // try {
        //     const { data } = await loginHandler(dispatch, payload);
        //     console.log(data);
        //     localStorage.setItem('accessToken', JSON.stringify(data?.token));
        //     console.log(data, 'loginpage');
        //     navigate('/');
        // } catch (err) {
        //     toast.error(err?.response?.data?.message); //! this toast doesnt work
        //     console.log('err here1');
        // }
        const { data } = await loginHandler(payload);
        console.log(data, 'data');
        // console.log(userName, 'username');
        localStorage.setItem('accessToken', JSON.stringify(data?.token));
        const user = data.user_info.name;
        // dispatch(login({ user }));
        // dispatch(handleLogin('data.user_info.name'));
        console.log(data, 'loginpage');
        navigate('/');
        reset();
    };
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit(OnSubmit)}
                id="login"
                className=" flex flex-col"
            >
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    {...register('text', {
                        required: 'Email cannot be empty',
                    })}
                />
                {errors.text && (
                    <p className="text-red-600">{errors.text.message}</p>
                )}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    {...register('password', {
                        required: 'Password cannot be empty',
                    })}
                />
                {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                )}
                <button type="submit">submit</button>
            </form>
            <p>
                Dont have an account?
                <button className="text-blue-700">
                    <NavLink to="/register">Register </NavLink>
                </button>
            </p>
        </div>
    );
}

export default LoginPage;
