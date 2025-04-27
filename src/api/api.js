import axios from 'axios';

const BASE_URL = 'https://ccm-backend-51f7.onrender.com'; // replace correctly

export const login = (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return axios.post(`${BASE_URL}/login`, formData);
};

export const getCyclones = () => axios.get(`${BASE_URL}/cyclones`);

export const filterCyclones = (threshold) =>
    axios.post(`${BASE_URL}/filter`, { threshold });

export const uploadCyclone = (file, token) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${BASE_URL}/upload-cyclone`, formData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
