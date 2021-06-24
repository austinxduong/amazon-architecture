import pool from '../utils/pool.js';

export default class Cloud {
  id;
  bucket;
  object;

  constructor(row) {
    this.id = row.id;
    this.bucket = row.bucket;
    this.object = row.object;
  }

  static async insert({ bucket, object }) {

    const { rows } = await pool.query(`
      INSERT INTO clouds (bucket, object)
      VALUES ($1, $2)
      RETURNING *
    `, [bucket, object]);

    return new Cloud(rows[0]);
  }


}