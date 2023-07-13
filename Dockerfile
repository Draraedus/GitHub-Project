# Use a lightweight base image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the web server directory
COPY . /usr/share/nginx/html

# Expose the default HTTP port (optional)
EXPOSE 80