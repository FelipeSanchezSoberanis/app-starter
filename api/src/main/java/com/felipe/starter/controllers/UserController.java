package com.felipe.starter.controllers;

import com.felipe.starter.responses.UserDetailsResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
  @GetMapping("/me")
  @PreAuthorize("hasAuthority('SCOPE_read:current_user')")
  public ResponseEntity<UserDetailsResponse> getLoggedInUserDetails(
      @AuthenticationPrincipal Jwt jwt) {
    return ResponseEntity.ok(
        UserDetailsResponse.builder().permissions(jwt.getClaimAsStringList("permissions")).build());
  }
}
