import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import Framer Motion components
import { ABOUT_TEXT } from '../constants'; // Adjust the path to your constants
import profilePicture from '../assets/photo.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% of the section is visible

  return (
    <div
      className="text-white py-20 px-4 lg:px-20"
      ref={ref} // Reference for in-view detection
    >
      <motion.h1
        className="text-center text-5xl font-semibold mb-12"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Profile Picture */}
        <motion.div
          className="w-64 h-64 flex-shrink-0 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover object-top" // Ensures cropping happens from the bottom
          />
        </motion.div>
        {/* About Text */}
        <motion.p
          className="text-lg text-neutral-300 leading-relaxed text-center lg:text-left"
          initial={{ opacity: 0, x: 150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          {ABOUT_TEXT}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
