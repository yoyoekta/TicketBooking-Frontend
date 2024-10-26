package com.fil.TicketBooking.controller;

import com.fil.TicketBooking.model.TicketBooking;
import com.fil.TicketBooking.service.TicketBookingService;
import com.fil.TicketBooking.serviceimpl.TicketBookingServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticketBookings")
public class TicketBookingController {
    @Autowired
    private TicketBookingServiceImpl ticketBookingService;

    @GetMapping
    public ResponseEntity<List<TicketBooking>> getAllTicketBookings() {
        List<TicketBooking> ticketBookings = ticketBookingService.getAllTicketBookings();
        return new ResponseEntity<>(ticketBookings, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TicketBooking> getTicketBookingById(@PathVariable Long id) {
        TicketBooking ticketBooking = ticketBookingService.getTicketBookingById(id);
        return new ResponseEntity<>(ticketBooking, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TicketBooking> createTicketBooking(@RequestBody TicketBooking ticketBooking) {
        TicketBooking createdTicketBooking = ticketBookingService.createTicketBooking(ticketBooking);
        return new ResponseEntity<>(createdTicketBooking, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketBooking> updateTicketBooking(@PathVariable Long id, @RequestBody TicketBooking ticketBooking) {
        TicketBooking updatedTicketBooking = ticketBookingService.updateTicketBooking(id, ticketBooking);
        return new ResponseEntity<>(updatedTicketBooking, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicketBooking(@PathVariable Long id) {
        ticketBookingService.deleteTicketBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
