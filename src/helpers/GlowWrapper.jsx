// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const GlowWrapper = ({ children }) => {
  return (
    <div className="relative p-[1.5px] overflow-hidden rounded-full inline-flex items-center justify-center group">
      {/* 1. The Blurry Glow (Dual Beam) */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] blur-md bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg,#EAB308_270deg,transparent_360deg)] opacity-40"
      />

      {/* 2. The Sharp Rotating Beam (Dual Beam) */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg,#EAB308_270deg,transparent_360deg)]"
      />

      {/* 3. The Content */}
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default GlowWrapper;