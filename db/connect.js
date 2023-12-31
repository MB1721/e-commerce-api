import { Pool } from 'pg';
import env from '../.env';

env = env.config().parsed;

export const pool = new Pool({
  user: env.USERNAME,
  host: env.HOST,
  database: env.DB,
  password: env.PASSWORD,
  port: env.DB_PORT,
});