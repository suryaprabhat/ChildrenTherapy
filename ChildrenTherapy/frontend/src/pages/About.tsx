import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const doctors = [
    { name: "Dr. Sophia Williams", specialty: "Pediatric Therapist", image: "/images/doctor1.jpg" },
    { name: "Dr. Ryan Cooper", specialty: "Speech Therapist", image: "/images/doctor2.jpg" },
    { name: "Dr. Olivia Adams", specialty: "Behavioral Therapist", image: "/images/doctor3.jpg" },
    { name: "Dr. Ethan Carter", specialty: "Occupational Therapist", image: "/images/doctor4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-6 md:p-12 flex flex-col items-center text-center">
      
      About Us
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold text-blue-700">About Us</h1>
        <h2 className="text-2xl text-blue-600 font-semibold mt-4">
          Dedicated to Helping Children Through Therapy & Guidance
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        LITTLE WINGS-"Little Wings" symbolizes growth, empowerment, and the nurturing support children need to overcome challenges and reach their full potential.
Our multi-disciplinary development and therapy centre was established to create a safe, friendly and enriching environment for the children and whilst providing support and research for parents.
The backbone of our centre is a team of physio therapists, occupational therapists, clinical psychologists, special educator, speech therapist and counsellor that work collaboratively to design and practice goal oriented therapy for children with varied neurological, congenital, orthopaedical, sensory and mental conditions.
Our research has compelled us to understand that each child is different but all children blossom when parents and doctors/professionals collaborate to create a disciplined practise in a safe and happy environment & that is the only way to enable children to maximise their potential.
        </p>
      </motion.div>

      {/* Doctors Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="mt-16 w-full max-w-5xl"
      >
        <h2 className="text-4xl font-bold text-blue-700">Meet Our Top Doctors</h2>
        <p className="text-gray-600 mt-2">Highly experienced professionals dedicated to children's well-being.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-xl bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-0">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-56 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-blue-800">{doctor.name}</CardTitle>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
