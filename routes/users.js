import { Router } from 'express';

import * as UserController from '../controllers/users.js'

const router = Router();

router.get('/:handle', UserController.getProfile);

export default router;