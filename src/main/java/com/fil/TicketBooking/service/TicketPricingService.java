package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.TicketPricing;

import java.util.List;

public interface TicketPricingService {
    TicketPricing createTicketPricing(TicketPricing ticketPricing);
    TicketPricing updateTicketPricing(Long id, TicketPricing ticketPricing);
    void deleteTicketPricing(Long id);
    TicketPricing getTicketPricingById(Long id);
    List<TicketPricing> getAllTicketPricing();
}
