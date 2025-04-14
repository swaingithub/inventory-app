import express from 'express';
import { someControllerFunction } from '../controllers/index.js';

const router = express.Router();

router.get('/some-endpoint', someControllerFunction);

export default router;