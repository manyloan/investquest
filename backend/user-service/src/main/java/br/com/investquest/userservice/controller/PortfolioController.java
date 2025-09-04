package br.com.investquest.userservice.controller;

import br.com.investquest.userservice.model.Portfolio;
import br.com.investquest.userservice.service.PortfolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolios")
@RequiredArgsConstructor
public class PortfolioController {

    private final PortfolioService portfolioService;

    @GetMapping("/my-portfolio")
    public ResponseEntity<Portfolio> getMyPortfolio() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userEmail = authentication.getName();

        // Serviço para buscar o portfólio com base no email do usuário autenticado.
        Portfolio portfolio = portfolioService.getPortfolioByUserEmail(userEmail);

        // Retorna o portfólio encontrado com um status 200 OK.
        return ResponseEntity.ok(portfolio);
    }
}