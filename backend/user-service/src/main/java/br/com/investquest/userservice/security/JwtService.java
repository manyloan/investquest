package br.com.investquest.userservice.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${application.security.jwt.secret-key}")
    private String secretKey;

    // 2. Método para extrair o nome de usuário (subject) do token.
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // 3. Método principal para gerar um novo token.
    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username) // Define o "dono" do token.
                .issuedAt(new Date(System.currentTimeMillis())) // Data de criação.
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Validade: 10 horas.
                .signWith(getSignInKey()) // Assina o token com nossa chave secreta.
                .compact(); // Constrói e serializa o token para uma string.
    }

    // --- MÉTODOS AUXILIARES ---

    // Método genérico para extrair qualquer "claim" (informação) do token.
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Pega a nossa chave secreta em String e a converte para um objeto SecretKey.
    private SecretKey getSignInKey() {
        // 3. Use a variável injetada 'secretKey' em vez da constante
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Decodifica o token e extrai todas as informações (claims) dele.
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}