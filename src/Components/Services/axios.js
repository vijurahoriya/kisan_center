import axios from 'axios';

// Create an axios instance with base URL
export const kishanApi = axios.create({
    baseURL: 'https://kishan.divanex.in/api',
});

// Add a request interceptor to include the token in all requests
kishanApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const imgUrl = 'https://kishan.divanex.in'
