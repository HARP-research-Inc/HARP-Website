// src/services/auth.service.js

import axios from 'axios';

const AUTH_API_URL = 'http://localhost:5000'; // Update with your auth server URL

class AuthService {
    async login(email, password) {
        const response = await axios.post(`${AUTH_API_URL}/login`, {
            email,
            password
        });
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    isAuthenticated() {
        const user = this.getCurrentUser();
        return !!user && !!user.token;
    }

    getToken() {
        const user = this.getCurrentUser();
        return user?.token;
    }

    // Add this to your axios interceptors to automatically add the token
    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                const token = this.getToken();
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
}

export default new AuthService();