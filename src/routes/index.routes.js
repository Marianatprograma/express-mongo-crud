import { Router } from "express";

const router = Router();

const { renderIndex, renderAbout } = require('../controllers/index.controller')
router.get("/", renderIndex);

router.get("/about", renderAbout);

export default router;
