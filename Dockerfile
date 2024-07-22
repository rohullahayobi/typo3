# Use the official PHP image with Apache
FROM php:8.1-apache

# Install required PHP extensions and tools
RUN apt-get update && apt-get install -y \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libicu-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql intl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Apache modules
RUN a2enmod rewrite

# Set the working directory
WORKDIR /var/www/html

# Copy TYPO3 source code into the container
COPY ./src /var/www/html

# Copy the entrypoint script into the container
COPY entrypoint.sh /usr/local/bin/docker-entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Create and configure php.ini dynamically
RUN echo "max_execution_time=240" > /usr/local/etc/php/conf.d/99-custom.ini && \
    echo "max_input_vars=1500" >> /usr/local/etc/php/conf.d/99-custom.ini

# Expose port 80
EXPOSE 80

# Use a custom entrypoint script
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
