/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import profile from "../assets/profile-logo.jpg";
import GlowWrapper from "./GlowWrapper";


const ProfileSelect = () => {
  const [zoom, setZoom] = useState(false);
  return (
    <div
            className={`relative cursor-pointer transition-all duration-300 ${
              zoom ? "scale-150" : "scale-100"
            }`}
            onClick={() => setZoom(!zoom)}
          >
            <GlowWrapper>
            <img
              src={profile}
              alt="Ali Ahmed Rahi"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            </GlowWrapper>
          </div>
  );
};

export default ProfileSelect;