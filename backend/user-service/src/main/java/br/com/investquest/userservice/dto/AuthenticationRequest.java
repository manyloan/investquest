package br.com.investquest.userservice.dto;

public record AuthenticationRequest(String email, String password) {
}