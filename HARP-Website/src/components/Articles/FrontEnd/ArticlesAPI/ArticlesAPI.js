// api.js - Create this file to handle API calls
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Adjust URL based on your backend

export const articleAPI = {
    async getArticles() {
        try {
            console.log('Sending request to:', `${API_URL}/articles`);
            const response = await axios.get(`http://localhost:3000/articles`);
            console.log("Get complete");
            return response.data;
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    },

    async searchArticles(query) {
        try {
            const response = await axios.get(`${API_URL}/articles/search`, {
                params: { query }
            });
            return response.data;
        } catch (error) {
            console.error('Error searching articles:', error);
            throw error;
        }
    }
};