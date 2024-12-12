import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAndroid } from "react-icons/fa";
import { SiOpencv, SiDjango, SiTailwindcss } from "react-icons/si";

const PROJECTS = [
  {
    title: "Driving Behavior Monitoring App",
    description:
      "An application designed to monitor and analyze driving behavior using sensors and machine learning algorithms. Currently in progress.",
    technologies: [
      { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
      { name: "Android Studio", icon: <FaAndroid className="text-green-500 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-blue-600 text-3xl" /> },
    ],
  },
  {
    title: "Social Media for Researchers",
    description:
      "A platform to connect researchers, share ideas, and collaborate on projects. Features include user profiles, messaging, and project management tools. Currently in progress.",
    technologies: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: "Django", icon: <SiDjango className="text-green-800 text-3xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    ],
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { triggerOnce: true, margin: "0px 0px" }); // Trigger when heading is in view

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 }, // Start below the screen
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Heading with ref attached */}
      <h1 ref={headingRef} className="my-20 text-center text-4xl text-white">
        Projects
      </h1>
      
      {/* Animating the entire projects list */}
      <motion.div
        className="space-y-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate only when the heading is in view
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-8 p-6 border border-neutral-700 rounded-lg bg-neutral-900"
            variants={itemVariants}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-neutral-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="rounded-full p-3 bg-neutral-800 hover:bg-neutral-700 transition-transform transform hover:scale-105"
                  title={tech.name}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
