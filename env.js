import { config } from 'dotenv';

config();

export const database_url = process.env.DATABASE_URL;
export const secret = process.env.SECRET;