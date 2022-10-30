import pool from "./pool.js";

export function query(queryText, params, callback) {
    return pool.query(queryText, params, callback);
}