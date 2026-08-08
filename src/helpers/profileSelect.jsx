'use client';

import Image from 'next/image';
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
        <Image
          src={profile}
          alt="Ali Ahmed Rahi"
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover shadow-lg"
        />
      </GlowWrapper>
    </button>
  );
};

export default ProfileSelect;
