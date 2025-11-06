// Test suite for server endpoints
const request = require('supertest');
const app = require('./server');

describe('Server Endpoints', () => {
  test('GET /hello should return "Hello world"', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello world');
  });

  test('GET /evening should return "Good evening"', async () => {
    const response = await request(app).get('/evening');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Good evening');
  });
});
