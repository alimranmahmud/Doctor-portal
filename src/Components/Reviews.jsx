import { motion } from "framer-motion";
{motion}
import { useState } from "react";

export default function Reviews() {
  const allReviews = [
    {
      name: "Ayesha Rahman",
      rating: 5,
      review:
        "The Doctor Portal has truly changed the way I book appointments. The UI is clean, fast, and extremely easy to use. Highly recommended!",
      date: "12 Feb 2025",
    },
    {
      name: "Mahmud Hasan",
      rating: 4,
      review:
        "Great experience overall. Booking an appointment takes less than a minute. Would love to see more specialists added soon!",
      date: "03 Mar 2025",
    },
    {
      name: "Sadia Afrose",
      rating: 5,
      review:
        "Very professional doctors and smooth service. The support team is also responsive. Amazing platform!",
      date: "18 Jan 2025",
    },
    {
      name: "Faisal Kabir",
      rating: 3,
      review:
        "Good platform but appointment reminders could be improved. Overall still great!",
      date: "22 Dec 2024",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredReviews = allReviews.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" ? true : r.rating === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-12 space-y-16"
      >
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Patient Reviews & Experiences
        </h1>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <input
            type="text"
            placeholder="Search by patient name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-5 py-3 w-full md:w-1/3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              All
            </button>
            <button
              onClick={() => setFilter(5)}
              className="px-4 py-2 rounded-lg bg-yellow-300 hover:bg-yellow-400"
            >
              5★
            </button>
            <button
              onClick={() => setFilter(4)}
              className="px-4 py-2 rounded-lg bg-yellow-200 hover:bg-yellow-300"
            >
              4★
            </button>
            <button
              onClick={() => setFilter(3)}
              className="px-4 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"
            >
              3★
            </button>
          </div>
        </div>

        {/* Expanded Intro */}
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Doctor Portal is trusted by thousands of patients nationwide. Every review shared here helps
          us improve our platform and provide even better service. We value transparency and aim to
          deliver a modern, seamless healthcare experience.
        </p>

        {/* Doctors Spotlight Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Rated Doctors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((d) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 p-6 rounded-2xl shadow-md text-center"
              >
                <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-800">Dr. John Doe {d}</h3>
                <p className="text-gray-600 mt-1">Cardiologist</p>
                <p className="text-yellow-500 text-xl mt-2">★★★★★</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {filteredReviews.length === 0 && (
            <p className="text-center text-gray-600 col-span-2 text-xl">No reviews found.</p>
          )}

          {filteredReviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">{r.name}</h3>
              <p className="text-yellow-500 text-lg mt-1 flex">
                {"★".repeat(r.rating)}
                <span className="text-gray-400 ml-2">({r.date})</span>
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">{r.review}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[{
              q: "How do I book an appointment?",
              a: "You can book through the appointment section, where you choose a doctor, date, and time.",
            },{
              q: "Can I edit or cancel my appointment?",
              a: "Yes! You can modify or cancel appointments anytime from your dashboard.",
            },{
              q: "Are all doctors verified?",
              a: "Yes, every doctor on Doctor Portal goes through a strict verification process.",
            }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-xl text-gray-800">{item.q}</h3>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-gray-600 mt-16 text-lg max-w-3xl mx-auto leading-relaxed">
          Thank you for taking the time to share your feedback. Your reviews help shape the future of
          Doctor Portal and allow us to deliver world-class medical service.
        </p>
      </motion.div>
    </div>
  );
}