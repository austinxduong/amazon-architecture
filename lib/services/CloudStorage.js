import Cloud from '../models/Cloud.js';
import dotenv from 'dotenv';
// import cloud from '../controllers/cloud.js';
import { uploadObject } from '../utils/amazon.js';
// import { data from amazon from AWS here } from '../utils/amazon.js';
dotenv.config();

// *this file is where we create our function that gets used in the route, that lives inside of cloud.js

// export default class CloudStorage {
//   static async create({ quantity }) {
//     const cloud = await Cloud.insert({ quantity });
//     await uploadObject(
//       process.env.ACCESS_KEY,
//     );
//   }
// }

const params = {
  Bucket: process.env.BUCKET_NAME,
  Key: 'this is a key',
  Body: 'this is a body message'
};
  
export default class CloudStorage {
    
  static async create({ bucket, object }){
    const cloud = await Cloud.insert({ bucket, object });
    await uploadObject(params);
  
    return cloud;
  }

  static async findAll() {
    const { rows } = await pool.query(
      `SELECT *
      FROM clouds
      `);
    return rows.map(findAll => new Cloud(findAll));
  }
}


