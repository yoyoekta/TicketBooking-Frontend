package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.enums.BookingStatus;
import com.fil.TicketBooking.model.TicketBooking;
import com.fil.TicketBooking.repository.TicketBookingRepository;
import com.fil.TicketBooking.service.TicketBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketBookingServiceImpl implements TicketBookingService {

    @Autowired
    private TicketBookingRepository ticketBookingRepository;

    @Override
    public TicketBooking bookTicket(TicketBooking ticketBooking) {
        // Add any logic related to booking a ticket here
        return ticketBookingRepository.save(ticketBooking);
    }

    @Override
    public TicketBooking cancelTicket(Long ticketId) {
        TicketBooking ticket = ticketBookingRepository.findById(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
        ticket.setStatus(BookingStatus.CANCELLED);  // Change status to cancelled
        return ticketBookingRepository.save(ticket);
    }

    @Override
    public List<TicketBooking> getUserBookings(Long userId) {
        return ticketBookingRepository.findByUserId(userId);
    }
}

