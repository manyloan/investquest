# --- Estágio 1: Build com Maven ---
# Usamos uma imagem que já vem com Maven e Java 21 para compilar nosso projeto.
FROM maven:3.9-eclipse-temurin-21 AS build

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia primeiro os arquivos de dependência. O Docker aproveita o cache se eles не mudarem.
COPY pom.xml .
COPY .mvn/ .mvn/

# Baixa as dependências.
RUN mvn dependency:go-offline

# Copia o resto do código fonte.
COPY src ./src

# Executa o build do Maven para gerar o arquivo .jar (pulando os testes por enquanto).
RUN mvn package -DskipTests

# --- Estágio 2: Execução ---
# Usamos uma imagem "slim" (enxuta) apenas com o Java Runtime para rodar a aplicação.
FROM eclipse-temurin:21-jre-alpine

# Define o diretório de trabalho.
WORKDIR /app

# Copia o arquivo .jar que foi gerado no estágio 'build' para o nosso contêiner final.
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta que a nossa aplicação Spring usa.
EXPOSE 8080

# Comando que será executado quando o contêiner iniciar.
ENTRYPOINT ["java", "-jar", "app.jar"]