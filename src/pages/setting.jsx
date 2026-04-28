import { User, Globe, Monitor, Shield, Lock } from "lucide-react";
import femaleAvatar from "../assets/femaleAvatar.svg";

export default function SecuritySettings() {
  return (
    <div
      className="
      min-h-screen     
      bg-cover
      bg-center
      p-4 sm:p-6     
    "
  
    >
      {/* CENTER CONTAINER */}
      <div className="
  w-full
  max-w-sm
  sm:max-w-md
  md:max-w-xl
  lg:max-3xl
  space-y-6
    mx-auto
    
  ">
        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Settings
        </h1>

        {/* PROFILE CARD */}
        <div
          className="
          bg-white
          rounded-2xl
          shadow-sm
          p-5 sm:p-6
          text-center
        "
        >
          <img
            src={femaleAvatar}
            alt="profile"
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              rounded-full
              mx-auto
              mb-4
              border-4
              border-blue-100
            "
          />

          <h2 className="text-base sm:text-lg font-semibold">Jane Smith</h2>

          <p className="text-gray-500 text-sm">jane.smith@security.com</p>

          <p className="text-gray-400 text-sm mb-4">Security Staff</p>

          <button
            className="
            bg-[#1E3A5F]
            hover:bg-[#112240]
            text-white
            px-4 sm:px-5
            py-2
            rounded-xl
            text-sm sm:text-base
          "
          >
            Edit Profile
          </button>
        </div>

        {/* SETTINGS LIST */}
        <div
          className="
          bg-white
          rounded-2xl
          shadow-sm
          overflow-hidden
        "
        >
          <SettingItem icon={<User size={18} />} title="Account" />
          <SettingItem icon={<Globe size={18} />} title="Language" />
          <SettingItem icon={<Monitor size={18} />} title="Appearance" />
          <SettingItem icon={<Shield size={18} />} title="Security" />
          <SettingItem icon={<Lock size={18} />} title="Change Password" />
        </div>
      </div>
    </div>
  );
}

function SettingItem({ icon, title }) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      p-4
      hover:bg-blue-100
      cursor-pointer
      transition
      border-b
      last:border-none
    "
    >
      <div className="flex items-center gap-3">
        <div className="text-blue-700">{icon}</div>

        <span className="text-sm sm:text-base font-medium text-gray-700">
          {title}
        </span>
      </div>

      <span className="text-gray-400 text-lg">›</span>
    </div>
  );
}
