package com.fil.TicketBooking.model;
import com.fil.TicketBooking.enums.RefundStatus;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;

@Entity
@Table(name = "refund")
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Refund {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long refundId;
    private Long paymentId;
    private double refundAmount;
    @Enumerated(EnumType.STRING)
    private RefundStatus refundStatus;
    private String refundReason;
    private Timestamp initiatedAt;
}
