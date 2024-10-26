package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.model.QRCode;
import com.fil.TicketBooking.repository.QRCodeRepository;
import com.fil.TicketBooking.service.QRCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QRCodeServiceImpl implements QRCodeService {

    private final QRCodeRepository qrCodeRepository;

    @Autowired
    public QRCodeServiceImpl(QRCodeRepository qrCodeRepository) {
        this.qrCodeRepository = qrCodeRepository;
    }

    @Override
    public QRCode createQRCode(QRCode qrCode) {
        return qrCodeRepository.save(qrCode);
    }

    @Override
    public QRCode updateQRCode(Long id, QRCode qrCode) {
        Optional<QRCode> existingQRCode = qrCodeRepository.findById(id);
        if (existingQRCode.isPresent()) {
            qrCode.setQrCodeId(id);
            return qrCodeRepository.save(qrCode);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteQRCode(Long id) {
        qrCodeRepository.deleteById(id);
    }

    @Override
    public QRCode getQRCodeById(Long id) {
        return qrCodeRepository.findById(id).orElse(null);
    }

    @Override
    public List<QRCode> getAllQRCodes() {
        return qrCodeRepository.findAll();
    }
}

