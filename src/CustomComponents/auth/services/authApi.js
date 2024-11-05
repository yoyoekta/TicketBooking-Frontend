import axios from 'axios';

const baseURL = 'http://localhost:8080';

const api = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    // rejectUnauthorized: true,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
});

export const signup = async (signupData) => {
        const body = {
            name: signupData.name,
            email: signupData.email,
            phone: signupData.phone,
            password: signupData.password,
            role: "C",
            status: "ACTIVE",
            address: signupData.address,
            profilePicture: "no_profile_url",
        };
        const response = await api.post('/auth/signup', body);
        return response;
    
}
export const signin = async ({ email, password }) => {
    try {
        const response = await api.post('/auth/signin', {email, password});
        return response;
    } catch (error) {
        throw error;
    }
};