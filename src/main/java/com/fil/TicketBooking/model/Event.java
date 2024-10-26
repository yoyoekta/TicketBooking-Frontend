package com.fil.TicketBooking.model;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;

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
    private Long locationId;
    private String placeName;
    private String description;
    private Long addedBy;
    private double ticketPrice;
    private String openTiming;
    private String openDays;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private Long maxTicket;
    private Long soldTicket;
}
