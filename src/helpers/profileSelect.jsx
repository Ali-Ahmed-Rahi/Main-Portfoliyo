import { useState } from "react";
import profile from "../assets/profile-logo.jpg";
import GlowWrapper from "./GlowWrapper";

const ProfileSelect = () => {
  const [zoom, setZoom] = useState(false);

  return (
    <button
      type="button"
      className={`relative cursor-pointer transition-all duration-300 ${
        zoom ? "scale-150" : "scale-100"
      }`}
      onClick={() => setZoom((value) => !value)}
      aria-label="Toggle profile zoom"
    >
      <GlowWrapper>
        <img
          src={profile}
          alt="Ali Ahmed Rahi"
          className="h-40 w-40 rounded-full object-cover shadow-lg"
        />
      </GlowWrapper>
    </button>
  );
};

export default ProfileSelect;
