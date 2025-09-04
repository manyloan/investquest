package br.com.investquest.userservice.controller;

import br.com.investquest.userservice.dto.AuthenticationRequest;
import br.com.investquest.userservice.dto.AuthenticationResponse;
import br.com.investquest.userservice.dto.UserRegistrationRequest;
import br.com.investquest.userservice.model.User;
import br.com.investquest.userservice.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserRegistrationRequest registrationRequest) {
        User newUser = new User();
        newUser.setUsername(registrationRequest.username());
        newUser.setEmail(registrationRequest.email());
        newUser.setPassword(registrationRequest.password());

        User savedUser = authenticationService.createUser(newUser);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}