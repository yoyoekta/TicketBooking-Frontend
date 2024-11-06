import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    // rejectUnauthorized: true,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
});

const apiEndpoints = {
    createLocation: async ({ locationName, address, description, addedBy }) => {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await api.post('/locations/create-location', { locationName, address, description, addedBy });
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default apiEndpoints;