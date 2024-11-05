import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
});

const apiEndpoints = {
    createEvent: async ({ data }) => {
        try {
            const response = await api.post('/events/create-event', {
                placeName: data.placeName,
                description: data.description,
                location: data.location,
                addedBy: data.addedBy,
                openTiming: data.openTiming,
                openDays: data.openDays,
                maxTicket: data.maxTicket,
                soldTicket: data.soldTicket,
                ticketPrice: data.ticketPrice,
                ticketPricings: data.ticketPricings,
            });
            return response;
        } catch (error) {
            throw error;
        }
    },
};

export default apiEndpoints;
