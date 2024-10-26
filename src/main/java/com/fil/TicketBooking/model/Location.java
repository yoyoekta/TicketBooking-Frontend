package com.fil.TicketBooking.model;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "location")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long locationId;
    private String locationName;
    private String description;
    @ManyToOne
    @JoinColumn(name = "added_by", nullable = false)
    private User addedBy;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    @OneToMany(mappedBy = "location")
    private List<Event> events;

    // Getters and Setters

    @PrePersist
    public void prePersist() {
        createdAt = new Timestamp(System.currentTimeMillis());
        updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    public void preUpdate() {
        updatedAt = new Timestamp(System.currentTimeMillis());
    }
}
