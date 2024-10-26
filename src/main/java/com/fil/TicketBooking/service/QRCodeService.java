package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.QrCode;

public interface QRCodeService {
    QrCode generateQRCode(QrCode qrCode);
}
