import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";


dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Feedback Schema
const FeedbackSchema = new mongoose.Schema({
  name: String,
  comment: String,
});
const Feedback = mongoose.model("Feedback", FeedbackSchema);

// API Routes
app.get("/api/feedback", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

app.post("/api/feedback", async (req, res) => {
  const newFeedback = new Feedback(req.body);
  await newFeedback.save();
  res.json(newFeedback);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/appointments", appointmentRoutes);