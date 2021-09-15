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



# EXPOSE 8080
FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]