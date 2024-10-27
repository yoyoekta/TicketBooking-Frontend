package com.fil.TicketBooking.serviceimpl;
import com.fil.TicketBooking.model.Event;
import com.fil.TicketBooking.model.TicketPricing;
import com.fil.TicketBooking.repository.EventRepository;
import com.fil.TicketBooking.service.EventService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Transactional
    @Override
    public Event createEvent(Event event) {
        for (TicketPricing ticketPricing : event.getTicketPricings()) {
            ticketPricing.setPlace(event);
        }
        return eventRepository.save(event);
    }

    @Override
    public Event updateEvent(Long id, Event event) {
        Optional<Event> existingEvent = eventRepository.findById(id);
        if (existingEvent.isPresent()) {
            event.setPlaceId(id);
            return eventRepository.save(event);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
