package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.Event;

import java.util.List;

public interface EventService {
    Event createEvent(Event event);
    List<Event> getEventsByLocation(Long locationId);
    Event updateEvent(Long eventId, Event event);
    void deleteEvent(Long eventId);
}