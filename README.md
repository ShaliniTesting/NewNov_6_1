# Node.js Express Server Tutorial

A simple Node.js server tutorial demonstrating Express.js framework with multiple REST API endpoints.

## Features

- 🚀 Express.js web framework (v4.21.1+)
- 📡 Two GET endpoints with text responses
- ✅ Comprehensive test coverage with Jest and Supertest
- 📝 Clear code structure for learning purposes

## Prerequisites

Before running this project, ensure you have:

- **Node.js** v20.x or higher
- **npm** v10.x or higher

## Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```bash
npm install
```

This will install:
- Express.js (web framework)
- Jest (testing framework)
- Supertest (HTTP testing library)

## Running the Server

Start the server with:
```bash
npm start
```

The server will start on `http://localhost:3000`

You should see:
```
Server is running on http://localhost:3000
```

## Testing Endpoints

### Endpoint 1: Hello World
**GET** `/hello`

Returns the text response: `Hello world`

Test with curl:
```bash
curl http://localhost:3000/hello
```

Expected response:
```
Hello world
```

### Endpoint 2: Good Evening
**GET** `/evening`

Returns the text response: `Good evening`

Test with curl:
```bash
curl http://localhost:3000/evening
```

Expected response:
```
Good evening
```

## Running Tests

Execute the automated test suite:
```bash
npm test
```

This runs all endpoint tests using Jest and Supertest.

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
├── server.js           # Main Express server with endpoint definitions
├── server.test.js      # Test suite for endpoints
├── package.json        # Project configuration and dependencies
├── package-lock.json   # Dependency version lock file
└── README.md          # This file
```

## Dependencies

### Production Dependencies
- **express** (^4.21.1): Fast, unopinionated, minimalist web framework for Node.js

### Development Dependencies
- **jest** (^29.7.0): Delightful JavaScript testing framework
- **supertest** (^7.0.0): HTTP assertions library for testing Node.js HTTP servers

## Learn More

- [Express.js Official Documentation](https://expressjs.com/)
- [Jest Documentation](https://jestjs.io/)
- [Supertest on npm](https://www.npmjs.com/package/supertest)