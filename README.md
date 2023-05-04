## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node.js
- npm or yarn

### Installation

A step by step series of examples that tell you how to get a development env running

Clone the repository:

```
git clone https://github.com/Crusaders-Team/Front-end.git
```

Install dependencies:

```
npm install
```

### Usage

Explain how to run the development server and any other important usage information.

Start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running Tests

Explain how to run the automated tests for this system.

```
npm test
```

### Deployment

Explain how to deploy this project to a production environment.

```
npm run build
```

This command creates a production-ready build of your application in the `build` folder. You can deploy this build to a web server to make your application live.

# Docker Commands

This repository contains a React JS project that has been Dockerized for easy deployment and distribution. Here are some useful Docker commands for working with this project:

## Building the Docker Image

To build the Docker image in development mode for this project, run the following command from the root directory of the project:

```
docker build -t front-end-dev-image -f Dockerfile.dev .
```

To build the Docker image in production mode for this project, run the following command from the root directory of the project:

```
docker build -t front-end-prod-image -f Dockerfile.prod .
```

## Running the Docker Container

To run the Docker container in development mode for this project, use the following command:

```
docker run -p 3000:3000 front-end-dev-image
```

To run the Docker container in production mode for this project, use the following command:

```
docker run -p 3000:3000 front-end-prod-image
```

This will start a Docker container and map port 3000 of the host machine to port 3000 of the container.

## Stopping the Docker Container

To stop the Docker container for this project, first use the following command to list all running containers:

```
docker ps
```

This will display a list of all running containers, along with their container IDs. Find the container ID for the React JS container you want to stop, and use it to stop the container using the following command:

```
docker stop <container-id>
```

Replace `<container-id>` with the actual container ID.

## Removing the Docker Image

To remove the Docker image for this project, use the following command:

```
docker rmi front-end-dev-image
```

## Removing the Docker Container

To remove a Docker container, use the following command:

```
docker rm <container-id>
```

Replace `<container-id>` with the actual ID of the container you want to remove.

# Docker Compose Commands

## Docker Compose with -f, -d, and --build Flags

The `docker-compose` command is used to manage Docker Compose applications, which are defined in a `docker-compose.yml` file. The `-f` flag is used to specify an alternate Compose file, the `-d` flag is used to run the containers in detached mode, and the `--build` flag is used to (re)build the images before starting the containers.

## Starting with an Alternate Compose File, in Detached Mode, and Building Images

To start a Compose application with an alternate Compose file, in detached mode, and (re)build the images before starting the containers, use the following command:

```
docker-compose -f docker-compose-dev.yml up -d --build
```

## Stopping with an Alternate Compose File

To stop a Compose application with an alternate Compose file, use the following command:

```
docker-compose -f docker-compose-dev.yml down
```

## Viewing Logs with an Alternate Compose File

To view the logs of a Compose application with an alternate Compose file, use the following command:

```
docker-compose -f docker-compose-dev.yml logs
```
