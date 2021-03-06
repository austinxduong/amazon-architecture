import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Cloud from '../lib/models/Cloud.js';


describe('Amazon S3 storage buckets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  // it('it creates and/or configures a bucket, via communicating to .PUT route in controller', async () => {
  //   const res = await request(app)
  //     .post('/api/v1/clouds')
  //     .send({ bucket: 3 }); 
  //   expect(res.body).toEqual({ id: '1', bucket: 3 });
  // });

  test('creates a bucket via .POST', async () => {
    const res = await request(app)
      .post('/api/v1/clouds').send({
        bucket: 'first',
        object: 'picture'
      });
    expect(res.body).toEqual({
      id: '1',
      bucket: 'first',
      object: 'picture'
    });
  });

  test('gets all buckets via .GET findAll ', async () => {
    const bucket1 = await Cloud.insert({
      bucket: 'this bucket holds files',
      object: 'this is a .JPG file, living inside the bucket'
    });

    const bucket2 = await Cloud.insert({
      bucket: 'this is my second bucket, that holds files',
      object: 'this will store my notes, all are .pdf files'
    });

    const bucket3 = await Cloud.insert({
      bucket: 'this is my third bucket, that holds files',
      object: 'i will store all my memories, all are .mov files'
    });

    const res = await request(app)
      .get('/');
  
    expect(res.body).toEqual([bucket1, bucket2, bucket3]);
  });
});

test('gets a specific/individual bucket via .GET findById', async () => {
  const bucket1 = await Cloud.insert({
    bucket: 'this bucket holds files',
    object: 'these are all .JPG files, living in my S3 bucket'
  });
  
  const res = await request(app)
    .get(`/api/v1/clouds/${bucket1.id}`);

  expect(res.body).toEqual(bucket1);
});

test('copy/move objects via .PUT', async () => {

  const object1 = await Cloud.insert({
    quantity: 7
  });

  object1.quantity = 8;

  const res = await request(app)
    .put(`/api/v1/clouds/${object1.id}`)
    .send(object1);
  expect(res.body).toEqual(object1);
});


