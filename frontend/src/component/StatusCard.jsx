function StatusCard({ title, value, color }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      border
      border-gray-100
    ">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`
        text-2xl
        font-bold
        mt-2
        text-${color}-600
      `}>
        {value}
      </h2>

    </div>

  );

}

export default StatusCard;