function StatusCards() {

  // Example system data (later connect to backend)
  const stats = [
    {
      title: "Active Alerts",
      value: 1,
      color: "bg-red-500",
      bg: "bg-red-100"
    },
    {
      title: "Total Users",
      value: 120,
      color: "bg-blue-500",
      bg: "bg-blue-100"
    },
    {
      title: "Security Staff",
      value: 12,
      color: "bg-green-500",
      bg: "bg-green-100"
    },
    {
      title: "System Status",
      value: "Normal",
      color: "bg-purple-500",
      bg: "bg-purple-100"
    }
  ];


  return (

    <div className="grid grid-cols-2 gap-4">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="
            bg-white
            rounded-xl
            shadow-sm
            p-4
            flex
            items-center
            justify-between
          "
        >

          {/* TEXT */}
          <div>

            <p className="text-sm text-gray-500">
              {stat.title}
            </p>

            <h3 className="text-xl font-semibold mt-1">
              {stat.value}
            </h3>

          </div>


          {/* ICON CIRCLE */}
          <div className={`
            w-10 h-10
            rounded-full
            flex
            items-center
            justify-center
            ${stat.bg}
          `}>

            <div className={`
              w-4 h-4
              rounded-full
              ${stat.color}
            `}></div>

          </div>


        </div>

      ))}

    </div>

  );

}

export default StatusCards;