import { Router } from 'express';
import Cloud from '../models/Cloud.js';
// import Cloud from '../models/Cloud';
import CloudStorage from '../services/CloudStorage.js';

export default Router()
  .post('/api/v1/clouds', async (req, res, next) => {
    try {
      const cloud = await CloudStorage.create(req.body);
      res.send(cloud);
    } catch (error) {
      next(error);
    }
  })

// create route for the .GET in our controller
// just learned this syntax/method, its more concise which is very nice....
  .get('/', (req, res, next) => {
    Cloud.findAll()
      .then(cloud => res.send(cloud))
      .catch(next);
  })

// .get('/', async (req, res, next) => {
//   try {
//     const cloud = await CloudStorage.findAll();
//     console.log(req.body);
//     res.send(cloud);
//   } catch (error) {
//     next(error);
//   }
// });

  .get('/api/v1/clouds/:id', (req, res, next) => {
    Cloud.findById(req.params.id)
      .then(cloud => res.send(cloud))
      .catch(next);
  });







