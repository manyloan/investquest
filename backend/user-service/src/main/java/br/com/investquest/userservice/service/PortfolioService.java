package br.com.investquest.userservice.service;

import br.com.investquest.userservice.model.Portfolio;
import br.com.investquest.userservice.repository.PortfolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final PortfolioRepository portfolioRepository;

    public Portfolio getPortfolioByUserEmail(String userEmail) {
        return portfolioRepository.findByUser_Email(userEmail)
                .orElseThrow(() -> new RuntimeException("Portfolio not found for user: " + userEmail));
        // Em uma aplicação real, usaríamos uma exceção customizada aqui.
    }
}