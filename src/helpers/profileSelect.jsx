/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import profile from "../assets/profile-logo.jpg";


const ProfileSelect = () => {
  const [zoom, setZoom] = useState(false);
  return (
    <div
            className={`relative cursor-pointer transition-all duration-300 ${
              zoom ? "scale-150" : "scale-100"
            }`}
            onClick={() => setZoom(!zoom)}
          >
            <img
              src={profile}
              alt="Ali Ahmed Rahi"
              className="w-40 h-40 rounded-full border-4 border-gray-300 object-cover shadow-lg"
            />
          </div>
  );
};

export default ProfileSelect;