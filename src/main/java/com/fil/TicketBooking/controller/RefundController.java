package com.fil.TicketBooking.controller;

import com.fil.TicketBooking.model.Refund;
import com.fil.TicketBooking.service.RefundService;
import com.fil.TicketBooking.serviceimpl.RefundServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/refunds")
public class RefundController {
    @Autowired
    private RefundServiceImpl refundService;

    @GetMapping
    public ResponseEntity<List<Refund>> getAllRefunds() {
        List<Refund> refunds = refundService.getAllRefunds();
        return new ResponseEntity<>(refunds, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Refund> getRefundById(@PathVariable Long id) {
        Refund refund = refundService.getRefundById(id);
        return new ResponseEntity<>(refund, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Refund> createRefund(@RequestBody Refund refund) {
        Refund createdRefund = refundService.createRefund(refund);
        return new ResponseEntity<>(createdRefund, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Refund> updateRefund(@PathVariable Long id, @RequestBody Refund refund) {
        Refund updatedRefund = refundService.updateRefund(id, refund);
        return new ResponseEntity<>(updatedRefund, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRefund(@PathVariable Long id) {
        refundService.deleteRefund(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
