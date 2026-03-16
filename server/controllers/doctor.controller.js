import Doctor from "../models/Doctor.model.js";

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
    const { specialization, city } = req.query;

    let filter = {};

    if (specialization) filter.specialization = specialization;
    if (city) filter.city = city;

    const doctors = await Doctor.find(filter);

    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};