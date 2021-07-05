import clouds from '../controllers/clouds.js';
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

  static async findAll() {
    const { rows } = await pool.query(
      `SELECT *
      FROM clouds
  `);
    return rows.map(row => new Cloud(row));
  }


  static async findById(id) {
    const { rows } = await pool.query(
      `SELECT *
      FROM clouds
      WHERE id = $1
      `, [id]);

    return new Cloud(rows[0]);
  }

}






