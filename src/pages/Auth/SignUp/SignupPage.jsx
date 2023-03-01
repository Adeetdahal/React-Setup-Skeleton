/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { loginHandler } from '~/services/handlers/LoginHandler';

function SignUp() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
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
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    {...register('firstName', {
                        required: 'First Name cannot be empty',
                    })}
                />
                {errors.firstName && (
                    <p className="text-red-600">{errors.firstName.message}</p>
                )}
                <label htmlFor="lastName">Last Name:</label>
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
                )}
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    {...register('text', {
                        required: 'Email cannot be empty',
                    })}
                />
                {/* <p>{errors.email?.message}</p> */}
                {errors.text && (
                    <p className="text-red-600">{errors.text.message}</p>
                )}
                <label htmlFor="telephone">Telephone:</label>
                <Controller
                    name="telephone"
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
                            id="telephone"
                            international
                            countryCallingCodeEditable={false}
                        />
                    )}
                />
                {errors.telephone && errors.telephone.type === 'required' && (
                    <p className="text-red-600">{errors.telephone.message}</p>
                )}
                {errors.telephone && errors.telephone.type === 'validate' && (
                    <p className="text-red-600">Invalid Phone</p>
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
                <label htmlFor="confirmpassword">Confirm Password:</label>
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
                )}

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
