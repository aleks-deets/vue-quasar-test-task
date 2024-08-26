FROM node
#FROM node:18.7.0 AS build

WORKDIR /app

COPY dist ./dist

WORKDIR dist/ssr

RUN npm install

CMD ["npm", "start"]
