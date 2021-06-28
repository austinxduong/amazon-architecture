import { Router } from 'express';
import Cloud from '../models/cloud.js';
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

//create route for the .GET in our controller
//just learned this syntax/method, its more concise which is very nice....
// .get('/', (req, res, next) => {
//   Cloud.findAll()
//     .then(cloud => res.send(cloud))
//     .catch(next);
// });

  .get('/api/v1/clouds', async (req, res, next) => {
    console.log(res.body);
    try {
      const cloud = await CloudStorage.findAll();
      res.send(cloud);
    } catch (error) {
      next(error);
    }
  });




