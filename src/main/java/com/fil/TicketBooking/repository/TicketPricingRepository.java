package com.fil.TicketBooking.repository;

import com.fil.TicketBooking.model.TicketPricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketPricingRepository extends JpaRepository<TicketPricing, Long> {
    List<TicketPricing> findByPlaceId(Long placeId);
}