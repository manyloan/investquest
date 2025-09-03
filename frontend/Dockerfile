# --- Estágio 1: Build com Node.js ---
# Usamos uma imagem leve (alpine) com Node.js para construir nosso projeto.
FROM node:22-alpine AS build

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de definição de dependências.
COPY package*.json ./

# Instala as dependências do projeto.
RUN npm install

# Copia todo o resto do código do nosso frontend.
COPY . .

# Executa o script de build do Vite, que gera os arquivos estáticos na pasta /dist.
RUN npm run build

# --- Estágio 2: Serviço com Nginx ---
# Agora, usamos uma imagem super leve do Nginx para servir os arquivos.
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio de build para a pasta pública do Nginx.
COPY --from=build /app/dist /usr/share/nginx/html

# Copia nosso arquivo de configuração customizado do Nginx.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão que o Nginx usa.
EXPOSE 80

# Comando para iniciar o servidor Nginx.
CMD ["nginx", "-g", "daemon off;"]