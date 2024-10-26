package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.TicketPricing;

import java.util.List;

public interface TicketPricingService {
    TicketPricing createPricing(TicketPricing ticketPricing);
    List<TicketPricing> getPricingByPlaceId(Long placeId);
    TicketPricing updatePricing(Long pricingId, TicketPricing ticketPricing);
    void deletePricing(Long pricingId);
}
