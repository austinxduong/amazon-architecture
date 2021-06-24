import { Router } from 'express';
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
  });

  



