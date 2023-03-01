import axios from 'axios';
import { getTokens } from '~/utils/getTokens';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
// get ParsedURL
// if params was {name: "john", age=: 30} then parseurl= `url?name=John&age:30`
const getParsedUrl = (url, params) => {
    if (!params) {
        return url;
    }
    let urlString = '';
    Object.keys(params).forEach((key, index, array) => {
        if (params[key] !== undefined && params[key] !== null) {
            urlString += `${index === 0 ? '?' : ''}${key}=${params[key]}${
                index !== array.length - 1 ? '&' : ''
            }`;
        }
    });

    return url + urlString;
};

// axios interceptors for adding authorization in axios instance
instance.interceptors.request.use(
    (config) => {
        const token = getTokens();
        if (token) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// instance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         //! for refresh token logic to be implemented

//         if (error.response.status === 401) {
//             const storedToken = getTokens();

//             try {
//                 const rs = await axios.post(
//                     import.meta.env.VITE_BASE_URL`/auth/refresh/`,
//                     {
//                         refresh: storedToken.refresh,
//                     }
//                 );

//                 const { access } = rs.data;

//                 const updatedUsr = {
//                     ...storedToken,
//                     access,
//                 };

//                 localStorage.setItem('_users', JSON.stringify(updatedUsr));
//             } catch (_error) {
//                 return Promise.reject(_error);
//             }
//             if (error.response && error.response.status === 401) {
//                 localStorage.clear();
//                 window.location.replace('/login');
//             }

//             return Promise.reject(error);
//         }
//     }
// );

// api call function
const api = (method) => (url, params, data, config) =>
    instance({ url, params, method, data, ...config });

export { instance, api };

//! api(post){1 , 2 , 3 ,4 }
