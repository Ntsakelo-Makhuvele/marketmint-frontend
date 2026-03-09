# Stage 1: The Build Stage
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: The Production Stage
FROM nginx:stable-alpine
# Make sure "build" here matches the "AS build" above exactly
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]