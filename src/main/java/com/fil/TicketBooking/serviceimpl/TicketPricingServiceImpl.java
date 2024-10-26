package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.model.TicketPricing;
import com.fil.TicketBooking.repository.TicketPricingRepository;
import com.fil.TicketBooking.service.TicketPricingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketPricingServiceImpl implements TicketPricingService {

    private final TicketPricingRepository ticketPricingRepository;

    @Autowired
    public TicketPricingServiceImpl(TicketPricingRepository ticketPricingRepository) {
        this.ticketPricingRepository = ticketPricingRepository;
    }

    @Override
    public TicketPricing createTicketPricing(TicketPricing ticketPricing) {
        return ticketPricingRepository.save(ticketPricing);
    }

    @Override
    public TicketPricing updateTicketPricing(Long id, TicketPricing ticketPricing) {
        Optional<TicketPricing> existingTicketPricing = ticketPricingRepository.findById(id);
        if (existingTicketPricing.isPresent()) {
            ticketPricing.setPricingId(id);
            return ticketPricingRepository.save(ticketPricing);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteTicketPricing(Long id) {
        ticketPricingRepository.deleteById(id);
    }

    @Override
    public TicketPricing getTicketPricingById(Long id) {
        return ticketPricingRepository.findById(id).orElse(null);
    }

    @Override
    public List<TicketPricing> getAllTicketPricing() {
        return ticketPricingRepository.findAll();
    }
}
