FROM node:14 as base
WORKDIR /src
COPY package*.json ./
EXPOSE 8000
RUN npm install
COPY . .
CMD npm start