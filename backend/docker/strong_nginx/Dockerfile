#
# Nginx Dockerfile
#
# https://github.com/dockerfile/nginx
#

# Pull base image.
#FROM ubuntu:16.04
#FROM centos:7.5
FROM nginx

# Define mountable directories.
#VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Define working directory.
WORKDIR /etc/nginx

#RUN mkdir conf
#COPY ./conf/nginx.conf ./nginx.conf

# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80
EXPOSE 443
