# # Dockerfile
# FROM node:14

# RUN apt-get update && apt-get install -y --no-install-recommends \
#     rubygems build-essential ruby-dev \
#     && rm -rf /var/lib/apt/lists/*

# COPY package*.json ./
# RUN npm install
# WORKDIR /app
# COPY . /app/
# CMD ["npm", "start"]
## BUILD STAGE

# Estágio de construção
FROM node:alpine as build

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de definição de pacote
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install --only=development

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir o aplicativo
RUN npm run build

# Estágio do servidor Nginx para servir o conteúdo estático
FROM nginx:alpine

# Copiar o conteúdo estático construído para o diretório do Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
