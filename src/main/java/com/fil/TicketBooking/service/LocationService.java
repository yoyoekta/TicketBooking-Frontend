package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.Location;

import java.util.List;

public interface LocationService {
    Location createLocation(Location location);
    List<Location> getAllLocations();
    Location updateLocation(Long locationId, Location location);
    void deleteLocation(Long locationId);
}