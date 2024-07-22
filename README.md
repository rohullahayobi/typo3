# Fully Working TYPO3 (12.04) - Docker Setup

This repository provides a Docker compose setup for TYPO3, including MySQL, to quickly get a fully working TYPO3 instance for testing and development purposes.

## Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ayobirohullah/typo3-docker-setup.git
cd typo3
```

### 2. Build and Run the Containers

```bash
docker-compose up --build
docker-compose up -d
```

This command will build the TYPO3 image and start both the TYPO3 and MySQL containers.

### 3. Access TYPO3

[localhost:8080](http://localhost:8080)

### 4. TYPO3 Setup

Follow the setup instructions in the browser. Use the following database configuration:

- Database Host: db
- Database User: typo3
- Database Password: typo3_password
- Database Name: typo3

## Stopping the Containers

To stop the running containers, press Ctrl+C in the terminal where docker-compose up is running, or run:

```bash
docker-compose down
```

## Volumes

- TYPO3 data is mounted from ./typo3 to /var/www/html inside the container.
- MySQL data is persisted in a Docker volume named db_data.

## Notes

- The Typo3 source code has been take from the official [website](https://get.typo3.org/version/12)
- Ensure that ports 8080 (for TYPO3) and 3306 (for MySQL) are available on your machine.
- Customize the typo3 source code by modifying files in the ./typo3 directory.