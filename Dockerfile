FROM node:current-alpine

# Install deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Install app
COPY index.js ./

EXPOSE 3000
CMD ["npm", "run", "server"]
