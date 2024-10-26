package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.User;

public interface UserService {
    User registerUser(User user);
    User findByEmail(String email);
    User updateUser(Long userId, User user);
    void deleteUser(Long userId);
}
