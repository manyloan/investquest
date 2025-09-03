# investquest

Para executar basta rodar o comando
docker-compose up -d

As keys estao sendo enviadas dentro do github pois sao todas locais para rodar o projeto local.
Key/token para API externa precisarão ser colocadas dentro do .env

Para registrar um usuario
curl --location 'http://localhost:8080/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "investidor_teste",
  "email": "teste@investquest.com",
  "password": "senhaSuperSecreta123"
}'

Para logar um usuario e receber o jwt token
curl --location 'http://localhost:8080/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "teste@investquest.com",
  "password": "senhaSuperSecreta123"
}'

