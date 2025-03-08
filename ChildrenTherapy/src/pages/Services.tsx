import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cognitive Behavioral Therapy (CBT)",
    description:
      "CBT helps children and parents understand and manage difficulties. Therapists teach coping skills for challenging situations.",
    link: "https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy",
  },
  {
    title: "Dialectical Behavior Therapy (DBT)",
    description:
      "DBT helps manage emotions, improve relationships, and reduce self-destructive behaviors. Often used for BPD treatment.",
    link: "https://en.wikipedia.org/wiki/Dialectical_behavior_therapy",
  },
  {
    title: "Play Therapy",
    description:
      "Play therapy helps children express their feelings and work through challenges using play-based techniques.",
    link: "https://en.wikipedia.org/wiki/Play_therapy",
  },
  {
    title: "Family Therapy",
    description:
      "Family therapy helps improve relationships and behaviors within families, addressing mental health, addiction, and conflicts.",
    link: "https://en.wikipedia.org/wiki/Family_therapy",
  },
  {
    title: "Physical Therapy (PT)",
    description:
      "PT uses exercise, massage, and other techniques to improve movement and manage pain, also known as physiotherapy.",
    link: "https://en.wikipedia.org/wiki/Physical_therapy",
  },
  {
    title: "Group Therapy",
    description:
      "Group therapy is a psychotherapy form where a therapist treats multiple individuals together to manage mental health conditions.",
    link: "https://en.wikipedia.org/wiki/Group_psychotherapy",
  },
];

const Services = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Our Therapy Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="mt-4">
                <Button
                  variant="outline"
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => window.open(service.link, "_blank")}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;