import { motion } from "framer-motion";

const GlowWrapper = ({ children }) => {
  const MotionSpan = motion.span;

  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px]">
      <MotionSpan
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] blur-md opacity-40 bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg,#EAB308_270deg,transparent_360deg)]"
      />
      <MotionSpan
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#EAB308_90deg,transparent_180deg,#EAB308_270deg,transparent_360deg)]"
      />

      <div className="relative z-10 h-full w-full overflow-hidden rounded-full">
        {children}
      </div>
    </div>
  );
};

export default GlowWrapper;
