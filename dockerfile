# Étape 1 : Construire l'application React
# Étape 1 : Construire l'application React
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Servir les fichiers avec Nginx
FROM nginx:alpine

# Copier le build de React dans Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration Nginx depuis le sous-dossier nginx/
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
