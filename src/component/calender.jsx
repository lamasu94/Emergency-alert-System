import { useState } from "react";

function Calendar() {
 
  // STATE: controls current visible month
  const [currentDateObj, setCurrentDateObj] = useState(new Date());

  // TODAY (real current date)
  const today = new Date();

  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();


  // CURRENT VIEW MONTH/YEAR
  const currentMonth = currentDateObj.getMonth();
  const currentYear = currentDateObj.getFullYear();


  // MONTH NAMES
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];


  // NUMBER OF DAYS IN MONTH
  const daysInMonth =
    new Date(currentYear, currentMonth + 1, 0).getDate();


  // FIRST DAY OF MONTH (0-6)
  const firstDayOfMonth =
    new Date(currentYear, currentMonth, 1).getDay();


  // ARRAY OF DAYS
  const daysArray =
    Array.from({ length: daysInMonth }, (_, i) => i + 1);


  // PREVIOUS MONTH BUTTON
  function goToPreviousMonth() {
    setCurrentDateObj(
      new Date(currentYear, currentMonth - 1, 1)
    );
  }


  // NEXT MONTH BUTTON
  function goToNextMonth() {
    setCurrentDateObj(
      new Date(currentYear, currentMonth + 1, 1)
    );
  }


  return (

    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">

        <button
          onClick={goToPreviousMonth}
          className="px-2 py-1 hover:bg-gray-100 rounded"
        >
          ←
        </button>

        <h3 className="font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h3>

        <button
          onClick={goToNextMonth}
          className="px-2 py-1 hover:bg-gray-100 rounded"
        >
          →
        </button>

      </div>


      {/* DAYS NAMES */}
      <div className="grid grid-cols-7 text-xs text-gray-400 mb-2 text-center">

        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>

      </div>


      {/* CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-1 text-sm">

        {/* EMPTY SPACES */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={"empty-" + i}></div>
        ))}


        {/* DAYS */}
        {daysArray.map((day) => {

          const isToday =
            day === todayDate &&
            currentMonth === todayMonth &&
            currentYear === todayYear;

          return (

            <div
              key={day}
              className="flex items-center justify-center"
            >

              <div
                className={`
                  w-9 h-9 flex items-center justify-center
                  cursor-pointer text-sm
                  transition duration-200
                  ${isToday
                    ? "bg-gradient-to-r from-[#1e3a5f] via-[#2c5282] to-[#3b82f6] text-white rounded-full shadow"
                    : "hover:bg-indigo-100 rounded-full"
                  }
                `}
              >
                {day}
              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Calendar;