import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  // rejectUnauthorized: true,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MzA3OTA1NjEsImV4cCI6MTczMDg3Njk2MSwiZW1haWwiOnsiYXV0aG9yaXRpZXMiOltdLCJkZXRhaWxzIjpudWxsLCJhdXRoZW50aWNhdGVkIjpmYWxzZSwicHJpbmNpcGFsIjoiZWt0YUBnbWFpbC5jb20iLCJjcmVkZW50aWFscyI6IiQyYSQxMCRXc0VQb1pEUXVzSVFLQm8yMFZqTDlPUFJJL2tReDgvdk0udS9kNHJXR1FhdkZPUVFsaTY2RyIsIm5hbWUiOiJla3RhQGdtYWlsLmNvbSJ9fQ.W8IIBwxZT7nj80Eppht9izj4ixlC2DkaZUdwYaodUPHQe0nwzon78SwoFzqIbFAm",
    },
});

export const addPlace = async ({
  location,
  placeName,
  description,
  ticketPrice,
  openTiming,
  openDays,
  eventFromDate,
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post("/api/events/create-event", {
      location,
      placeName,
      description,
      ticketPrice,
      openTiming,
      openDays,
      eventFromDate,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
