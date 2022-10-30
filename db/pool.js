import pkg from 'pg';
import { config } from 'dotenv';

const { Pool } = pkg;

config();

const databaseConfig = { 
    connectionString: process.env.DATABASE_URL

};

const pool = new Pool(databaseConfig);

export default pool;