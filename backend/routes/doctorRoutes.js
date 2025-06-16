import express from "express";
import {
	test,
	register,
	getAllDoctors,
	getDoctorById,
	updateDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

router.post("/register", register);
router.get("/", getAllDoctors);
router.get("/test", test);
router.get("/:id", getDoctorById);
router.put("/:id", updateDoctor);

export default router;
