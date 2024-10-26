package com.fil.TicketBooking.serviceimpl;

import com.fil.TicketBooking.model.Refund;
import com.fil.TicketBooking.repository.RefundRepository;
import com.fil.TicketBooking.service.RefundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RefundServiceImpl implements RefundService {

    private final RefundRepository refundRepository;

    @Autowired
    public RefundServiceImpl(RefundRepository refundRepository) {
        this.refundRepository = refundRepository;
    }

    @Override
    public Refund createRefund(Refund refund) {
        return refundRepository.save(refund);
    }

    @Override
    public Refund updateRefund(Long id, Refund refund) {
        Optional<Refund> existingRefund = refundRepository.findById(id);
        if (existingRefund.isPresent()) {
            refund.setRefundId(id);
            return refundRepository.save(refund);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteRefund(Long id) {
        refundRepository.deleteById(id);
    }

    @Override
    public Refund getRefundById(Long id) {
        return refundRepository.findById(id).orElse(null);
    }

    @Override
    public List<Refund> getAllRefunds() {
        return refundRepository.findAll();
    }
}
