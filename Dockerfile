# FROM node:12.13.0-alpine as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build
# FROM nginx:1.19.10-alpine as production-stage
# RUN mkdir /app
# COPY --from=build-stage /app/dist /usr/share/nginx/html/
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# FROM node:14.16.0-alpine3.13
# RUN npm install -g http-server
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm i -f
# COPY . .
# RUN npm run build
# EXPOSE 8080
# CMD [ "http-server", "dist" ]

FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx as production-stage
RUN npm install http-server -g
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/nginx/config/conf.d/default.conf /etc/nginx/conf.d/default.conf
# COPY /nginx/logs /var/log/nginx/
# COPY /nginx/ssl /ssl/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]