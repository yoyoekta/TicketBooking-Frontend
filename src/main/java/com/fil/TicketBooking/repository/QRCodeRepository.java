package com.fil.TicketBooking.repository;

import com.fil.TicketBooking.model.QRCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QRCodeRepository extends JpaRepository<QRCode, Long> {
}
