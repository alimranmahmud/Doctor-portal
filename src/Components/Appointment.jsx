import React from "react";

export default function AppointmentPage() {
  const [currentMonth, setCurrentMonth] = React.useState(3); // April index = 3
  const [currentYear, setCurrentYear] = React.useState(2022);
  const [selectedDate, setSelectedDate] = React.useState(30);

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push("");
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };

  return (
    <div className="min-h-screen bg-[#f9ffff] py-10 flex flex-col items-center">
      {/* Calendar + Image */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-6">
        {/* Calendar */}
        <div className="bg-black text-white p-5 rounded-xl shadow-md w-72">
          <h3 className="text-lg font-semibold mb-3">April 2022</h3>
          <table className="w-full text-center text-sm">
            <thead>
              <tr className="opacity-80">
                <th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 7 }).map((_, colIndex) => {
                    const date = rowIndex * 7 + colIndex - 3;
                    return (
                      <td
                        key={colIndex}
                        className={`p-2 rounded-md cursor-pointer hover:bg-gray-700 transition ${
                          date === 30 ? "bg-[#2cd4c0] text-black" : ""
                        }`}
                      >
                        {date > 0 && date <= 30 ? date : ""}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Image */}
        <img
          src="https://i.ibb.co/LPjRD7k/dental-chair.jpg"
          alt="Dental Chair"
          className="w-96 rounded-xl shadow-md"
        />
      </div>

      {/* Service Title */}
      <div className="mt-12 text-center">
        <div className="text-[#00b3a0] text-lg">Available Services on {selectedDate} {monthNames[currentMonth]}, {currentYear} April 30, 2022</div>
        <div className="text-sm opacity-60 mt-1">Please select a service.</div>
      </div>

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
          <div
            key={service}
            className="bg-white text-[#00b3a0] p-5 rounded-xl shadow-md cursor-pointer text-center text-[15px] transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}
