import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
// import Cloud from '../lib/models/Cloud.js';

describe('Amazon S3 storage buckets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});

// it('it creates and/or configures a bucket, via communicating to .PUT route in controller', async () => {
//   const res = await request(app)
//     .post('/api/v1/clouds')
//     .send({ bucket: 3 }); 
//   expect(res.body).toEqual({ id: '1', bucket: 3 });
// });

test('creates a bucket via POST', async () => {
  const res = await request(app)
    .post('/api/v1/clouds').send({
      bucket: 'first',
      fileObject: 'picture'
    });
  expect(res.body).toEqual({
    id: '1',
    bucket: 'first',
    fileObject: 'picture'
  });
});

