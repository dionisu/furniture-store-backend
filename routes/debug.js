import { query } from "../db/index.js";
import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
    query(`
           select * from users;
          `, [], (err, result) => {
        res.send(result.rows);
    })
});

export default router;