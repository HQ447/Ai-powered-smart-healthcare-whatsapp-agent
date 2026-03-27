import express from "express";
import { addDoctor, getDoctors, getAvailableSlots, getDoctorById, deleteDoctor, searchDoctors, updateDoctor } from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/add", addDoctor);
router.get("/all", getDoctors);
router.get("/search", searchDoctors)
router.get("/:id", getDoctorById)
router.delete("/delete/:id", deleteDoctor)
router.put("/update/:id", updateDoctor)
router.get("/:id/slots", getAvailableSlots);

export default router;