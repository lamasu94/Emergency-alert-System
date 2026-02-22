import maleAvatar from "../assets/maleAvatar.svg";
function AdminProfileCard() {

  // Example admin data (later connect to real user system)
  const admin = {
    name: "John Smith",
    role: "System Administrator",
    email: "john.smith@admin.com",
    status: "Online"
  };

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      flex
      flex-col
      items-center
      text-center
    ">

      {/* PROFILE IMAGE */}
      <div className="
        w-20 h-20
        rounded-full
        flex
        items-center
        justify-center
      ">
        <img src={maleAvatar} alt="Admin avatar"className="w-full h-full object-cover"></img>
      </div>


      {/* NAME */}
      <h3 className="mt-4 font-semibold text-lg">
        {admin.name}
      </h3>


      {/* ROLE */}
      <p className="text-gray-500 text-sm">
        {admin.role}
      </p>


      {/* STATUS */}
      <div className="mt-2 flex items-center space-x-2">

        <div className="w-2 h-2 bg-green-500 rounded-full"></div>

        <span className="text-sm text-gray-500">
          {admin.status}
        </span>

      </div>


      {/* EMAIL */}
      <p className="mt-3 text-xs text-gray-400">
        {admin.email}
      </p>


      {/* BUTTONS */}
      <div className="flex space-x-3 mt-4">

        <button className="
          bg-orange-800
          hover:bg-orange-700
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
        ">
          Profile
        </button>

        <button className="
          bg-gray-100
          px-4
          py-2
          rounded-lg
          text-sm
          hover:bg-gray-200
        ">
          Settings
        </button>

      </div>

    </div>

  );

}

export default AdminProfileCard;