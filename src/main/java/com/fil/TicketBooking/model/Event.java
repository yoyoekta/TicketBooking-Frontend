package com.fil.TicketBooking.model;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long placeId;
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;
    private String placeName;
    private String description;
    @ManyToOne
    @JoinColumn(name = "added_by", nullable = false)
    private User addedBy;
    @OneToMany(mappedBy = "place")
    private List<TicketPricing> ticketPricings;

    @OneToMany(mappedBy = "place")
    private List<TicketBooking> ticketBookings;
    private String openTiming;
    private String openDays;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private Long maxTicket;
    private Long soldTicket;
}
