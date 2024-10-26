package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.TicketBooking;

import java.util.List;

public interface TicketBookingService {
    TicketBooking bookTicket(TicketBooking ticketBooking);
    TicketBooking cancelTicket(Long ticketId);
    List<TicketBooking> getUserBookings(Long userId);
}