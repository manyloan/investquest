package br.com.investquest.userservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;


@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 4. Desabilita o CSRF, uma proteção que não é necessária para nossa API stateless.
            .csrf(csrf -> csrf.disable())
            // 5. Define as regras de autorização para as requisições HTTP.
            .authorizeHttpRequests(auth -> auth
                // 6. Permite que QUALQUER UM acesse as URLs que começam com /api/auth/
                .requestMatchers("/api/auth/**").permitAll()
                // 7. Exige autenticação para QUALQUER OUTRA requisição.
                .anyRequest().authenticated()
            );

        return http.build(); // Constrói e retorna a cadeia de filtros de segurança.
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    
    }
}
