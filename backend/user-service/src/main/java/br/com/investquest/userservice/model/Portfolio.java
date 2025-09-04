package br.com.investquest.userservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "portfolios")
@Getter
@Setter
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Usamos BigDecimal para valores monetários para evitar problemas de arredondamento.
    @Column(nullable = false)
    private BigDecimal virtualCashBalance;

    // RELACIONAMENTO: Um Portfólio pertence a UM Usuário.
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnore // Evita que os dados do usuário venham junto com o portfólio, causando um loop.
    private User user;
}