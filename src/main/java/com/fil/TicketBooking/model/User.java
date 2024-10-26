package com.fil.TicketBooking.model;
import com.fil.TicketBooking.enums.UserRole;
import com.fil.TicketBooking.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name = "user")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;
    private String email;
    private String phone;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @Enumerated(EnumType.STRING)
    private UserStatus status;
    private String address;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private String profilePicture;

    @PrePersist
    public void prePersist() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        createdAt = timestamp;
         updatedAt = timestamp;
    }

    @PreUpdate
    public void preUpdate(){
        updatedAt = new Timestamp(System.currentTimeMillis());
    }

    @OneToMany(mappedBy = "user")
    private List<TicketBooking> ticketBookings;

    @OneToMany(mappedBy = "addedBy")
    private List<Event> events;

    @OneToMany(mappedBy = "addedBy")
    private List<Location> locations;
}
