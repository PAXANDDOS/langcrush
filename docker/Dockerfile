FROM node:lts-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

EXPOSE 3000

FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:mainline-alpine as production

COPY --from=build /app/build /var/www/html

COPY docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
