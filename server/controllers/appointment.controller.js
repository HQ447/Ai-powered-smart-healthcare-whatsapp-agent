import Appointment from "../models/Appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;

    const existing = await Appointment.findOne({
      doctorId,
      date,
      time
    });

    if (existing) {
      return res.status(400).json({
        message: "Slot already booked"
      });
    }

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