# GraphQL Application - GraphQL CRUD Example

This code repository showcases a basic GraphQL application for a blog, including CRUD operations and unit tests. It is intended to demonstrate expertise in building GraphQL applications, implementing CRUD functionality, writing unit tests, and using Docker.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (v14 or higher)
- npm package manager
- Docker (optional)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/FlorianMarcon/GraphQLApp.git
```

2. Navigate to the project directory:

```bash
cd blog-app
```

3. Install the dependencies:

```bash
npm install
```

## Usage

### Running Tests

To run the unit tests for the application, use the following command:

```bash
npm test
```

This will execute the test cases defined in the `test/` directory and provide feedback on their success or failure.

### Starting the Application

To start the blog application, run the following command:

```bash
npm start
```

The application will start a GraphQL server and listen for incoming requests. You can access the GraphQL playground at `http://localhost:3000/graphql`.

### Running ESLint Linting

To lint the code using ESLint, use the following command:

```bash
npm run lint
```

This will analyze the code for any linting errors or warnings and provide feedback on how to resolve them. You can also use the `npm run lint:fix` command to automatically fix some of the detected issues.

## Docker

If you prefer to run the application and MongoDB in Docker containers, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your machine.

2. Run the following command to start the containers:

```bash
docker-compose up
```

This will build the necessary Docker images and start the application and MongoDB containers. You can then access the GraphQL playground at `http://localhost:3000/graphql`.

## License

This code is provided as a demonstration and is not intended for production use. Feel free to use, modify, and distribute the code according to your needs. However, please note that this code is provided "as is," without warranty of any kind.

```

Feel free to modify the README to suit your specific needs and add any additional information that would be relevant for your work expertise.