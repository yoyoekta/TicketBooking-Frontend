package com.fil.TicketBooking.model;
import com.fil.TicketBooking.enums.CustomerType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.sql.Timestamp;

@Entity
@Table(name = "ticket_pricing")
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TicketPricing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pricingId;
    @ManyToOne
    @JoinColumn(name = "place_id", nullable = false)
    private Event place;
    @Enumerated(EnumType.STRING)
    private CustomerType customerType;
    private double price;
    private String seasonalModifier;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Timestamp(System.currentTimeMillis());
        updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Timestamp(System.currentTimeMillis());
    }
}

