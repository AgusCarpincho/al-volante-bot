# Usa la imagen oficial de Node.js 18.20.3 como base
FROM node:18.20.3

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Define el comando de inicio de la aplicación
CMD ["npm", "start"]
