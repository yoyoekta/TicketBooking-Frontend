package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.Refund;

import java.util.List;

public interface RefundService {
    Refund createRefund(Refund refund);
    Refund updateRefund(Long id, Refund refund);
    void deleteRefund(Long id);
    Refund getRefundById(Long id);
    List<Refund> getAllRefunds();
}