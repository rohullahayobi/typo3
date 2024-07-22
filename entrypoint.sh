#!/bin/bash

# Print a message for debugging
echo "Starting TYPO3 setup..."

# Create the FIRST_INSTALL file if it doesn't exist
if [ ! -f /var/www/html/FIRST_INSTALL ]; then
    touch /var/www/html/FIRST_INSTALL
fi

# Set file permissions
chown -R www-data:www-data /var/www/html

# Start Apache in the foreground
exec apache2-foreground
