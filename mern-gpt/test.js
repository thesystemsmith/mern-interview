//unit testing - indivisual pieces of code work as expected
function add(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

//integration testing - integration between components works fine
const request = require('supertest');
const app = require('./app');

test('GET /api/users should return all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});


// TDD - TDD involves writing tests first, then writing the implementation.
