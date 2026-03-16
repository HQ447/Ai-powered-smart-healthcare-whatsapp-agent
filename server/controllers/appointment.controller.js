import Appointment from "../models/Appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};