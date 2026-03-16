import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    clinicName: { type: String, required: true },
    clinicAddress: { type: String, required: true },
    city: { type: String, default: "Hangu" },
    opdDays: [String],
    opdStartTime: String,
    opdEndTime: String,
    phone: String,
    locationLink: String
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);