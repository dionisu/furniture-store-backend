import express from 'express';
import debug from './debug.js';

const router = express.Router();

router.use('/', debug);

export default router;
