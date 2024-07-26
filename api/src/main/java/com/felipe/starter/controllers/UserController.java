package com.felipe.starter.controllers;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
  @GetMapping("/me")
  public ResponseEntity<Map<String, String>> getLoggedInUserDetails() {
    Map<String, String> userDetails = new HashMap<>();
    userDetails.put("email", "email");
    return ResponseEntity.ok(userDetails);
  }
}
