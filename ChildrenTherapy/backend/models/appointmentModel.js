import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  childName: String,
  motherName: String,
  fatherName: String,
  age: Number,
  sex: String,
  dob: String,
  schoolName: String,
  grade: String,
  atHome: String,
  atSchool: String,
  diagnosis: String,
  phoneNumber: String,
  email: String,
  address: String,
  preferredDay: String,
  preferredTime: String,
}, { timestamps: true });

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
