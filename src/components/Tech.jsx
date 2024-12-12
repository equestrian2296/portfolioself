import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaJava, FaAndroid } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger animation when 50% of the section is visible

  const handleClick = (techName) => {
    alert(`You clicked on ${techName}. It's a popular technology used in various fields!`);
  };

  // Animation Variants
  const iconVariants = {
    hidden: (corner) => {
      const positions = {
        topLeft: { x: '-100vw', y: '-100vh' },
        topRight: { x: '100vw', y: '-100vh' },
        bottomLeft: { x: '-100vw', y: '100vh' },
        bottomRight: { x: '100vw', y: '100vh' },
      };
      return {
        opacity: 0,
        ...positions[corner],
      };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        duration: 45, // Slow animation
      },
    },
    oscillate: {
      y: [0, -10, 0, 10, 0], // Oscillation effect
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 2.5, // Slow oscillation
      },
    },
  };

  return (
    <div ref={ref} className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { Icon: FaPython, color: '#306998', name: 'Python', corner: 'topLeft' },
          { Icon: SiC, color: '#A8B9CC', name: 'C', corner: 'topRight' },
          { Icon: SiCplusplus, color: '#00599C', name: 'C++', corner: 'bottomLeft' },
          { Icon: FaReact, color: '#61DAFB', name: 'React', corner: 'bottomRight' },
          { Icon: FaNodeJs, color: '#83CD29', name: 'Node.js', corner: 'topLeft' },
          { Icon: FaJava, color: '#007396', name: 'Java', corner: 'bottomRight' },
          { Icon: FaAndroid, color: '#3DDC84', name: 'Android', corner: 'topRight' },
        ].map(({ Icon, color, name, corner }, index) => (
          <motion.button
            key={name}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            onClick={() => handleClick(name)}
            custom={corner} // Custom corner for animation
            initial="hidden"
            animate={isInView ? ['visible', 'oscillate'] : 'hidden'}
            variants={iconVariants}
          >
            <Icon className="text-7xl" style={{ color }} />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tech;
