import pool from '../utils/pool.js';

export default class Cloud {
  id;
  bucket;
  fileObject;

  constructor(row) {
    this.id = row.id;
    this.bucket = row.bucket;
    this.fileObject = row.file_object;
  }


}