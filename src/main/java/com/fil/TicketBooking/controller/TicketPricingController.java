package com.fil.TicketBooking.controller;
import com.fil.TicketBooking.model.TicketPricing;
import com.fil.TicketBooking.service.TicketPricingService;
import com.fil.TicketBooking.serviceimpl.TicketPricingServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ticketPricing")
public class TicketPricingController {
    @Autowired
    private TicketPricingServiceImpl ticketPricingService;

    @GetMapping
    public ResponseEntity<List<TicketPricing>> getAllTicketPricing() {
        List<TicketPricing> ticketPricingList = ticketPricingService.getAllTicketPricing();
        return new ResponseEntity<>(ticketPricingList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TicketPricing> getTicketPricingById(@PathVariable Long id) {
        TicketPricing ticketPricing = ticketPricingService.getTicketPricingById(id);
        return new ResponseEntity<>(ticketPricing, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TicketPricing> createTicketPricing(@RequestBody TicketPricing ticketPricing) {
        TicketPricing createdTicketPricing = ticketPricingService.createTicketPricing(ticketPricing);
        return new ResponseEntity<>(createdTicketPricing, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketPricing> updateTicketPricing(@PathVariable Long id, @RequestBody TicketPricing ticketPricing) {
        TicketPricing updatedTicketPricing = ticketPricingService.updateTicketPricing(id, ticketPricing);
        return new ResponseEntity<>(updatedTicketPricing, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTicketPricing(@PathVariable Long id) {
        ticketPricingService.deleteTicketPricing(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
