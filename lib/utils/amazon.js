import dotenv from 'dotenv';
dotenv.config();
//require('dotenv').config();
import AWS from 'aws-sdk';

// import amazon from 'amazon';

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.ACCESS_PASSWORD
});
  
export const uploadObject = (params) => {
  
  return s3.upload(params, (err, data) => {
    if (err) {
      throw err;
    }
  });
};
