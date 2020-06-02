const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/genres', () => {
  it('should respond with an array of genres', async () => {
    const response = await supertest(app)
      .get('/api/v1/genres')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should respond with a single genre', async () => {
    const response = await supertest(app)
      .get('/api/v1/genres/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.id).toBe(1);
  });

  it('should respond with a 404 for a not found genre', async () => {
    await supertest(app)
      .get('/api/v1/genres/4200')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
