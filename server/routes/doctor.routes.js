import express from "express";
import { addDoctor, getDoctors } from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/add", addDoctor);
router.get("/get", getDoctors);

export default router;