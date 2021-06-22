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

  static async insert({ bucket, fileObject }) {

    const { rows } = await pool.query(`
      INSERT INTO profiles (bucket, fileObject)
      VALUES ($1, $2)
      RETURNING *
    `, [bucket, fileObject]);

    return new Cloud(rows[0]);
  }


}