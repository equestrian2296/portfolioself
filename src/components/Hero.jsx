import { HERO_CONTENT } from "../constants";
import graphicH from "../assets/graphic1.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-0 mt-0 relative z-10">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-56 space-y-6">
            {/* Animated Name */}
            <motion.h1
              className="pb-25 text-7xl font-thin tracking-tight text-white"
              style={{ fontWeight: "300" }}
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Slower animation
            >
              Atharva Sharma
            </motion.h1>

            {/* Animated Tagline */}
            <motion.span
              className="bg-gradient-to-r from-orange-300 via-slate-50 to-cyan-500 bg-clip-text text-2xl tracking-tight text-transparent"
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} // Increased delay
            >
              Computer Science Engineering Student @ VITV
            </motion.span>

            {/* Animated Hero Content */}
            <motion.p
              className="text-1.5xl font-thin tracking-tight text-white"
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }} // More delay
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-32">
          <div className="flex justify-center lg:justify-start">
            {/* Animated Image */}
            <motion.img
              src={graphicH}
              alt="Graphic"
              className="w-3/4 mt-6 ml-4"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }} // Slowest animation
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
