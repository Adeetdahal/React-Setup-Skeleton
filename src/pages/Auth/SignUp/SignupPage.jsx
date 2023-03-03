/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { RegisterHandler } from '~/services/handlers/RegisterHandler';

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const OnSubmit = async (payload) => {
        console.log(payload);
        const { data } = await RegisterHandler(dispatch, payload);
        console.log(data, 'data');
        // localStorage.setItem('accessToken', JSON.stringify(data?.token));
        console.log(data, 'registerpage');
        navigate('/login');
        reset();
    };
    //
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit(OnSubmit)}
                id="SignUp"
                className=" flex flex-col"
            >
                <label htmlFor="full_name">Full Name:</label>
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    {...register('full_name', {
                        required: 'Name cannot be empty',
                    })}
                />
                {errors.full_name && (
                    <p className="text-red-600">{errors.full_name.message}</p>
                )}
                {/* <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    {...register('lastName', {
                        required: 'Last Name cannot be empty',
                    })}
                />
                {errors.lastName && (
                    <p className="text-red-600">{errors.lastName.message}</p>
                )} */}
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    {...register('email', {
                        required: 'Email cannot be empty',
                    })}
                />
                {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                )}
                {/* <label htmlFor="phone_no">Telephone:</label>
                <Controller
                    name="phone_no"
                    control={control}
                    rules={{
                        validate: (value) => isValidPhoneNumber(value),
                        required: 'Phone number cannot be empty',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <PhoneInput
                            value={value}
                            onChange={onChange}
                            defaultCountry="NP"
                            id="phone_no"
                            international
                            countryCallingCodeEditable={false}
                        />
                    )}
                />
                {errors.phone_no && errors.phone_no.type === 'required' && (
                    <p className="text-red-600">{errors.phone_no.message}</p>
                )}
                {errors.phone_no && errors.phone_no.type === 'validate' && (
                    <p className="text-red-600">Invalid Phone</p>
                )} */}
                <label htmlFor="phone_no">Phone Number:</label>
                <input
                    type="number"
                    id="phone_no"
                    name="phone_no"
                    {...register('phone_no', {
                        required: 'Phone Number cannot be empty',
                    })}
                />
                {errors.phone_no && (
                    <p className="text-red-600">{errors.phone_no.message}</p>
                )}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    {...register('password', {
                        required: 'You must specify a password',
                        minLength: {
                            value: 5,
                            message: 'Password must have at least 5 characters',
                        },
                        maxLength: {
                            value: 12,
                            message:
                                'Password cannot exceed more than 12 characters',
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                )}
                {/* <label htmlFor="confirmpassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    {...register('confirmpassword', {
                        required: 'You must specify a password',
                        validate: (value) =>
                            value === watch('password') ||
                            "Passwords don't match.",
                    })}
                />
                {errors.confirmpassword && (
                    <p className="text-red-600">
                        {errors.confirmpassword.message}
                    </p>
                )} */}
                <label htmlFor="terms_conditions">Terms and conditions:</label>
                <input
                    type="text"
                    id="terms_conditions"
                    name="terms_conditions"
                    defaultValue={1}
                    {...register('terms_conditions', {
                        required: 'Terms and conditions cannot be empty',
                    })}
                />

                <button type="submit">submit</button>
            </form>
            <p>
                Already has an account ?
                <button className="text-blue-700">
                    <NavLink to="/login"> Login </NavLink>
                </button>
            </p>
        </div>
    );
}

export default SignUp;
