import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Amazon S3 storage buckets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

it('it creates and/or configures a bucket, via communicating to .PUT route in controller', async () => {
  const res = await request(app)
    .post('/api/v1/clouds')
    // .send({ Key: value });
  expect(res.body).toEqual({ key: 'value', key: value });
});
