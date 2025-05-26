import express from "express"
import { getPortfolio } from "../controller/meta.controller.js";

const router = express.Router();

router.get("/getPortfolio",getPortfolio);

export default router