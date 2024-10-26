package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.model.Event;
import com.fil.TicketBooking.repository.EventRepository;
import com.fil.TicketBooking.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getEventsByLocation(Long locationId) {
        return eventRepository.findByLocationId(locationId);
    }

    @Override
    public Event updateEvent(Long eventId, Event event) {
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        // Update event properties
        existingEvent.setDescription(event.getDescription());
        existingEvent.setTicketPrice(event.getTicketPrice());
        // Update other properties as necessary
        return eventRepository.save(existingEvent);
    }

    @Override
    public void deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
    }
}
