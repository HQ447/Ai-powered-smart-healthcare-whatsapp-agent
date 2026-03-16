import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    patientPhone: { type: String, required: true },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },
    date: String,
    time: String,
    status: {
      type: String,
      default: "booked"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);