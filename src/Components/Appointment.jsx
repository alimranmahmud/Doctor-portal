import React from "react";
import { motion, AnimatePresence } from "framer-motion";

{motion}
export default function AppointmentPage() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = React.useState(null);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push("");
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  const nextMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    setSelectedDate(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9ffff] py-10 flex flex-col items-center">

      {/* Calendar + Image */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-6">

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-5 rounded-xl shadow-xl w-72"
        >
          {/* Month Controls */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={prevMonth}
              className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600"
            >
              ◀
            </button>

            <motion.h3 
              key={currentMonth}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              {monthNames[currentMonth]} {currentYear}
            </motion.h3>

            <button 
              onClick={nextMonth}
              className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600"
            >
              ▶
            </button>
          </div>

          {/* Dynamic Table Calendar */}
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="opacity-80">
                <th>SU</th><th>MO</th><th>TU</th><th>WE</th>
                <th>TH</th><th>FR</th><th>SA</th>
              </tr>
            </thead>

            <tbody>
              <AnimatePresence>
                {Array.from({ length: Math.ceil(calendarCells.length / 7) }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {calendarCells.slice(rowIndex * 7, rowIndex * 7 + 7).map((date, colIndex) => (
                      <motion.td
                        key={colIndex}
                        onClick={() => date && setSelectedDate(date)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.85 }}
                        className={`p-2 rounded-md cursor-pointer transition 
                          ${date === selectedDate ? "bg-[#2cd4c0] text-black" : "hover:bg-gray-700"}
                        `}
                      >
                        {date || ""}
                      </motion.td>
                    ))}
                  </tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="chair.png"
          alt="Dental Chair"
          className="w-96 rounded-xl shadow-md"
        />
      </div>

      {/* Service Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 text-center"
      >
        {selectedDate ? (
          <>
            <div className="text-[#00b3a0] text-lg">
              Available Services on {selectedDate} {monthNames[currentMonth]}, {currentYear}
            </div>
            <div className="text-sm opacity-60 mt-1">Please select a service.</div>
          </>
        ) : (
          <div className="text-[#00b3a0] text-lg">Please select a date.</div>
        )}
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10 w-full max-w-4xl">
        {[
          "Teeth Orthodontics",
          "Cosmetic Dentistry",
          "Teeth Cleaning",
          "Cavity Protection",
          "Pediatric Dental",
          "Oral Surgery",
        ].map((service) => (
          <motion.div
            key={service}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#00b3a0] p-5 rounded-xl shadow-lg cursor-pointer text-center text-[15px] transition"
          >
            {service}
          </motion.div>
        ))}
      </div>

    </div>
  );
}
