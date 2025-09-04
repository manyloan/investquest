package br.com.investquest.userservice.controller;

import br.com.investquest.userservice.model.User;
import br.com.investquest.userservice.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository; // Injetamos para buscar o usuário completo

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public ResponseEntity<User> getAuthenticatedUser() {
        // O Spring Security, após nosso filtro rodar, guarda os dados de autenticação.
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName(); // O 'name' aqui é o email que definimos.

        // Buscamos o usuário completo no banco para retornar todos os seus dados.
        User user = userRepository.findByEmail(userEmail).orElseThrow();

        return ResponseEntity.ok(user);
    }
}