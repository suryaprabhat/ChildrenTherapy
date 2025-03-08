import express from "express";
import Appointment from "../models/appointmentModel.js";

const router = express.Router();

// Handle appointment form submission
router.post("/book", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
});

export default router;
