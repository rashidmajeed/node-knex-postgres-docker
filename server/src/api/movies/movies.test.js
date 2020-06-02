const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/movies', () => {
  it('should respond with an array of movies', async () => {
    const response = await supertest(app)
      .get('/api/v1/movies')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should respond with a single movie', async () => {
    const response = await supertest(app)
      .get('/api/v1/movies/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.id).toBe(1);
  });

  it('should respond with a 404 status if movie not found', async () => {
    await supertest(app)
      .get('/api/v1/movies/4200')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
