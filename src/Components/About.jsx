import { motion } from "framer-motion";
import { Link } from "react-router";
{motion}
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-10 space-y-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-gray-800"
        >
          About Our Doctors Portal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-600 text-lg leading-relaxed text-center"
        >
          Our Doctors Portal is built to simplify healthcare. You can easily book appointments, view
          specialist doctors, and access medical services anytime, anywhere.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To deliver a modern, reliable and easy healthcare experience with seamless appointment
              scheduling and trusted medical professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Fast & secure appointment booking</li>
              <li>Verified & experienced doctors</li>
              <li>User-friendly dashboard interface</li>
              <li>24/7 online medical support</li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          {[{
            title: "Registered Doctors",
            count: "120+",
          }, {
            title: "Daily Appointments",
            count: "300+",
          }, {
            title: "Active Users",
            count: "10,000+",
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-blue-600 text-white rounded-xl p-6 text-center shadow-lg"
            >
              <h3 className="text-3xl font-bold">{item.count}</h3>
              <p className="text-lg mt-2">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition-all"
          >
            <Link to='/appointment'>Book an Appointment</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
