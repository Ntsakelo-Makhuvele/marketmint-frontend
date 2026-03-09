
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# Copy your custom config to replace the default one
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]