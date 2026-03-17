# Build stage
FROM node:18-alpine as build
WORKDIR /li_shelly_ui_garden_build_checks
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /li_shelly_ui_garden_build_checks/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
