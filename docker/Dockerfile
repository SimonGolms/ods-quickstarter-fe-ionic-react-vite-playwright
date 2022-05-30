# Use "Amazon Elastic Container Registry Public" in order not to charge the Docker pull rate limit
# https://gallery.ecr.aws/nginx/nginx
FROM public.ecr.aws/nginx/nginx:alpine

# Upgrade packages to prevent potential security vulnerabilities
RUN apk update && apk upgrade

COPY nginx.conf /etc/nginx/conf.d/default.conf.template
COPY build/ /usr/share/nginx/html

COPY nginx-inject-env.sh /docker-entrypoint.d

# Fix Permissions
RUN chmod gu+rwx /docker-entrypoint.d/nginx-inject-env.sh \
  /etc/nginx/conf.d \
  /etc/nginx/conf.d/default.conf \
  /etc/nginx/nginx.conf \
  /usr/share/nginx/html/inject.js

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
