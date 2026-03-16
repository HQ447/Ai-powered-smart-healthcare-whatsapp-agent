import express from "express";
import { addDoctor, getDoctors, getAvailableSlots } from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/:id/slots", getAvailableSlots);
router.post("/add", addDoctor);
router.get("/get", getDoctors);

export default router;