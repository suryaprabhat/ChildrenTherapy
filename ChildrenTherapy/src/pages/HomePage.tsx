import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function HomePage() {
  // State to store previous feedbacks
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Fetch feedback from the API when page loads
  useEffect(() => {
    fetch("http://localhost:5000/api/feedback")  // Replace with actual backend API
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Error fetching feedback:", err));
  }, []);

  // Handle feedback submission
  const handleSubmit = async () => {
    if (!name || !comment) {
      alert("Please fill out both fields.");
      return;
    }

    const newFeedback = { name, comment };

    const response = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    if (response.ok) {
      const savedFeedback = await response.json();
      setFeedbacks([...feedbacks, savedFeedback]); // Update UI
      setName("");
      setComment("");
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat bg-center" 
      style={{ backgroundImage: "url('/assets/HomeBg.jpg')" }}
    >
      {/* Card Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Card className="w-full max-w-lg mb-6 shadow-lg text-center">
            <CardHeader>
              <CardTitle>What is a Children's Therapy Center?</CardTitle>
            </CardHeader>
            <CardContent>
              A children's therapy center provides specialized therapeutic support to kids with developmental, emotional, or physical challenges, helping them improve their overall well-being.
              <Button className="mt-4" asChild>
                <a href="https://en.wikipedia.org/wiki/Child_psychotherapy" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Card className="w-full max-w-lg mb-6 shadow-lg text-center">
            <CardHeader>
              <CardTitle>What is Our Main Motto?</CardTitle>
            </CardHeader>
            <CardContent>
              Our main goal is to empower children through personalized therapy, fostering their cognitive, emotional, and physical growth for a brighter future.
              <Button className="mt-4" asChild>
                <a href="https://en.wikipedia.org/wiki/Child_development" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Card className="w-full max-w-lg mb-6 shadow-lg text-center">
            <CardHeader>
              <CardTitle>What Can This Center Cure?</CardTitle>
            </CardHeader>
            <CardContent>
              Our therapy center provides support for speech disorders, behavioral challenges, occupational therapy needs, and developmental delays, ensuring a better future for children.
              <Button className="mt-4" asChild>
                <a href="https://en.wikipedia.org/wiki/Speech_therapy" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Most Useful Comments Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-blue-700 text-center">Most Useful Comments</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4">
          {feedbacks.length > 0 ? (
            feedbacks.map((fb, index) => (
              <p key={index} className="text-gray-700 italic mt-2">
                "{fb.comment}" - <span className="font-semibold">{fb.name}</span>
              </p>
            ))
          ) : (
            <p className="text-gray-500 italic">No feedback yet. Be the first to leave a comment!</p>
          )}
        </div>
      </motion.div>

      {/* Feedback Input Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-700">Leave Your Feedback</h2>
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 flex flex-col gap-4">
          <Input 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="p-2 border rounded-lg" 
          />
          <Textarea 
            placeholder="Write your feedback..." 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            className="p-2 border rounded-lg h-24" 
          />
          <Button 
            onClick={handleSubmit} 
            className="bg-blue-600 text-white p-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit Feedback
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 bg-blue-900 text-white p-6 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
        </div>
        <p>Little Wings Therapy Center</p>
        <p>123 Therapy St, Childcare City, 98765</p>
        <p>Phone: +1 (555) 123-4567</p>
      </footer>
    </div>
  );
}
