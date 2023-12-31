import { Pool } from 'pg';
import dotenv from '../.env';

dotenv.config(); // add settings to process.env

env = process.env;

 const pool = new Pool({
  user: env.USERNAME,
  host: env.HOST,
  database: env.DB,
  password: env.PASSWORD,
  port: env.DB_PORT,
});

export default pool;