# Build stage
FROM node:18-alpine as build
WORKDIR /shelly_li_ui_garden
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /shelly_li_ui_garden/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
