FROM node:18.7.0 AS build

WORKDIR /app

COPY . .

RUN npm run build

CMD [ "npm", "start" ]