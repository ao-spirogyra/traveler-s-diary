FROM node:12
WORKDIR /extended-browser-history
COPY package*.json ./
RUN npm install
COPY . /extended-browser-history
EXPOSE 3000

