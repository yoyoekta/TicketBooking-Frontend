package com.fil.TicketBooking.controller;
import com.fil.TicketBooking.model.QRCode;
import com.fil.TicketBooking.service.QRCodeService;
import com.fil.TicketBooking.serviceimpl.QRCodeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qrcodes")
public class QRCodeController {
    @Autowired
    private QRCodeServiceImpl qrCodeService;

    @GetMapping
    public ResponseEntity<List<QRCode>> getAllQRCodes() {
        List<QRCode> qrCodes = qrCodeService.getAllQRCodes();
        return new ResponseEntity<>(qrCodes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QRCode> getQRCodeById(@PathVariable Long id) {
        QRCode qrCode = qrCodeService.getQRCodeById(id);
        return new ResponseEntity<>(qrCode, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<QRCode> createQRCode(@RequestBody QRCode qrCode) {
        QRCode createdQRCode = qrCodeService.createQRCode(qrCode);
        return new ResponseEntity<>(createdQRCode, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<QRCode> updateQRCode(@PathVariable Long id, @RequestBody QRCode qrCode) {
        QRCode updatedQRCode = qrCodeService.updateQRCode(id, qrCode);
        return new ResponseEntity<>(updatedQRCode, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQRCode(@PathVariable Long id) {
        qrCodeService.deleteQRCode(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
