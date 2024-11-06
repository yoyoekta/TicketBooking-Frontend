// import axios from 'axios';

// const baseURL = 'http://localhost:8080/api';

// const api = axios.create({
//     baseURL: baseURL,
//     timeout: 20000,
//     // rejectUnauthorized: true,
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//     },
// });

// type CreateTicketBookingType = {
//     user: {
//       userId: number;
//     };
//     place: {
//       placeId: number;
//     };
//     totalMember: number;
//     ticketDetails: string;
//     totalPrice: number;
//     status: string;
//     bookingDate: string;
//   };

// const apiEndpoints = {
//     createTicketBooking: async ({ data }: { data: CreateTicketBookingType }) => {
//         try {
//             const response = await api.post('/ticketBookings/create-ticket-booking', data);
//             return response;
//         } catch (error) {
//             throw error;
//         }
//     },
// };

// export default apiEndpoints;