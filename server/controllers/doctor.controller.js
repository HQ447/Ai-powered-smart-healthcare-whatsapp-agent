import Doctor from "../models/Doctor.model.js";
import { generateSlots } from "../services/slotGenerator.js";
import Appointment from "../models/Appointment.model.js"

export const addDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchDoctors = async (req, res) => {
  try {
    const { specialization, city } = req.query;

    if (!specialization) {
      return res.status(400).json({ message: "Specialization is required" });
    }

    // Build query dynamically
    const query = {
      specialization: { $regex: specialization, $options: "i" } // case-insensitive
    };

    if (city) {
      query.city = { $regex: city, $options: "i" };
    }

    const doctors = await Doctor.find(query);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query;
    const doctorId = req.params.id;

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Generate all possible slots
    const allSlots = generateSlots(doctor.opdStartTime, doctor.opdEndTime);

    // Get booked appointments
    const bookedAppointments = await Appointment.find({ doctorId, date });

    // Function to convert 12-hour time to minutes
    const timeToMinutes = (timeStr) => {
      const [t, modifier] = timeStr.split(" ");
      let [hours, minutes] = t.split(":").map(Number);
      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;
      return hours * 60 + minutes;
    };

    // Convert booked appointments to minutes
    const bookedMinutes = bookedAppointments.map(a => timeToMinutes(a.time));

    // Filter out booked slots
    const availableSlots = allSlots.filter(
      slot => !bookedMinutes.includes(timeToMinutes(slot))
    );

    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};