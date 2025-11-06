# Node.js + Express.js Tutorial Server

A simple Node.js tutorial project demonstrating how to build a REST API server using the Express.js framework with multiple endpoints.

## Features

- Express.js web framework integration (v4.21.1)
- Two REST API endpoints:
  - `GET /hello` - Returns "Hello world"
  - `GET /evening` - Returns "Good evening"
- Comprehensive test coverage using Jest and Supertest
- Production-ready project structure with proper dependency management

## Prerequisites

- Node.js v20.x or higher
- npm v10.x or higher

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Server

Start the Express server:

```bash
npm start
```

The server will start on `http://localhost:3000` and you'll see:
```
Server is running on http://localhost:3000
```

## Testing Endpoints

### Using curl

Test the `/hello` endpoint:
```bash
curl http://localhost:3000/hello
# Output: Hello world
```

Test the `/evening` endpoint:
```bash
curl http://localhost:3000/evening
# Output: Good evening
```

### Using a browser

Open your browser and navigate to:
- http://localhost:3000/hello
- http://localhost:3000/evening

## Running Tests

Execute the automated test suite:

```bash
npm test
```

Expected output:
```
PASS ./server.test.js
  Server Endpoints
    ✓ GET /hello should return "Hello world"
    ✓ GET /evening should return "Good evening"

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```

## Project Structure

```
.
├── package.json       # Project configuration and dependencies
├── server.js          # Main Express server implementation
├── server.test.js     # Test suite for endpoints
└── README.md          # Project documentation
```

## Dependencies

### Production Dependencies
- **express** (^4.21.1) - Fast, unopinionated web framework for Node.js

### Development Dependencies
- **jest** (^29.7.0) - JavaScript testing framework
- **supertest** (^7.0.0) - HTTP assertion library for testing endpoints

## License

ISC