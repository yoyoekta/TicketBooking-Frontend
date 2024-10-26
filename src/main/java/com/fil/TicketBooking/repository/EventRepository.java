package com.fil.TicketBooking.repository;
import com.fil.TicketBooking.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByLocationLocationId(Long locationId);
}
