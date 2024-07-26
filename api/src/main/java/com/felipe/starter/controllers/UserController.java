package com.felipe.starter.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
  @GetMapping("/me")
  public ResponseEntity<Jwt> getLoggedInUserDetails(@AuthenticationPrincipal Jwt jwt) {
    return ResponseEntity.ok(jwt);
  }
}
