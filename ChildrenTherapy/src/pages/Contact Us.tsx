import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* 📞 Phone & Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                📞 Phone & Email
              </h2>
              <p className="text-gray-600">📞 +1 123-456-7890</p>
              <p className="text-gray-600">📞 +1 987-654-3210</p>
              <p className="text-gray-600 mt-2">📧 info@childtherapycenter.com</p>
              <p className="text-gray-600">📧 support@childtherapycenter.com</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 📍 Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                📍 Our Address
              </h2>
              <p className="text-gray-600">
                Children's Therapy Center, <br />
                123 Wellness Street, <br />
                Cityville, ST 56789, <br />
                USA
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 🗺 Google Maps Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                🗺 Our Location
              </h2>
              <iframe
                title="Google Maps Location"
                className="w-full h-48 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1687873894525!2d-122.4194163846817!3d37.77492927975932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c2a44b3d1%3A0x9a6e3e4d4b1d4c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632934742366!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;