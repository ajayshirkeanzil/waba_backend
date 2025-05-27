import express from "express"
import { getPortfolio, getServices } from "../controller/meta.controller.js";
import { checkApiKey } from "../utils/helper.js";

const router = express.Router();

router.get("/getPortfolio",getPortfolio);
router.get("/getServices",getServices)

export default router