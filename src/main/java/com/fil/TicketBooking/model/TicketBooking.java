package com.fil.TicketBooking.model;
import com.fil.TicketBooking.enums.BookingStatus;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;

@Entity
@Table(name = "ticket_booking")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TicketBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticketId;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "place_id", nullable = false)
    private Event place;
    private String bookingDate;
    private String ticketDetails;
    private double totalPrice;
    @Enumerated(EnumType.STRING)
    private BookingStatus status;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private Long totalMember;

    @PrePersist
    protected void onCreate() {
        createdAt = new Timestamp(System.currentTimeMillis());
        createdAt = new Timestamp(System.currentTimeMillis());
        updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Timestamp(System.currentTimeMillis());
    }
}
