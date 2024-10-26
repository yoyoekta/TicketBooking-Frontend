package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.model.TicketBooking;
import com.fil.TicketBooking.repository.TicketBookingRepository;
import com.fil.TicketBooking.service.TicketBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketBookingServiceImpl implements TicketBookingService {

    private final TicketBookingRepository ticketBookingRepository;

    @Autowired
    public TicketBookingServiceImpl(TicketBookingRepository ticketBookingRepository) {
        this.ticketBookingRepository = ticketBookingRepository;
    }

    @Override
    public TicketBooking createTicketBooking(TicketBooking ticketBooking) {
        return ticketBookingRepository.save(ticketBooking);
    }

    @Override
    public TicketBooking updateTicketBooking(Long id, TicketBooking ticketBooking) {
        Optional<TicketBooking> existingTicketBooking = ticketBookingRepository.findById(id);
        if (existingTicketBooking.isPresent()) {
            ticketBooking.setTicketId(id);
            return ticketBookingRepository.save(ticketBooking);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteTicketBooking(Long id) {
        ticketBookingRepository.deleteById(id);
    }

    @Override
    public TicketBooking getTicketBookingById(Long id) {
        return ticketBookingRepository.findById(id).orElse(null);
    }

    @Override
    public List<TicketBooking> getAllTicketBookings() {
        return ticketBookingRepository.findAll();
    }
}






//import com.fil.TicketBooking.enums.BookingStatus;
//import com.fil.TicketBooking.model.TicketBooking;
//import com.fil.TicketBooking.repository.TicketBookingRepository;
//import com.fil.TicketBooking.service.TicketBookingService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class TicketBookingServiceImpl implements TicketBookingService {
//
//    @Autowired
//    private TicketBookingRepository ticketBookingRepository;
//
//    @Override
//    public TicketBooking bookTicket(TicketBooking ticketBooking) {
//        // Add any logic related to booking a ticket here
//        return ticketBookingRepository.save(ticketBooking);
//    }
//
//    @Override
//    public TicketBooking cancelTicket(Long ticketId) {
//        TicketBooking ticket = ticketBookingRepository.findById(ticketId)
//                .orElseThrow(() -> new RuntimeException("Ticket not found"));
//        ticket.setStatus(BookingStatus.CANCELLED);  // Change status to cancelled
//        return ticketBookingRepository.save(ticket);
//    }
//
//    @Override
//    public List<TicketBooking> getUserBookings(Long userId) {
//        return ticketBookingRepository.findByUserUserId(userId);
//    }
//}
//


