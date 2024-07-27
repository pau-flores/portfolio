import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    >
      <h3 className="text-2xl font-bold mb-3 text-sky-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView4 = useInView(ref2, { once: true, amount: 0.3 });

  const projects = [
    {
      title: "Blake Vet Portal",
      description:
        "Developed a full-stack web application for veterinary practices. Implemented features such as patient management, appointment scheduling, note taking and more. Built with Laravel, React, and MySQL.",
    },
    {
      title: "Vet Booking App",
      description:
        "A web application that allows users to book veterinary appointments for their pets. Built with Laravel, Livewire, Alpine.js and TailwindCSS.",
    },
    {
      title: "Cat Food Finder",
      description:
        "Created a simple web application that allows users to search for cat food, based on dietary requirements and special needs. Built with React, Node.js, Express, and MongoDB.",
    },
    {
      title: "The Incredible Journey",
      description:
        "Lost in a campsite, this is a single player, procedurally generated adventure game where you must find your way back home. Built with C# and Unity. Four person developer team.",
    },
  ];

  return (
    <section className="relative bg-slate-800 text-white py-40 overflow-hidden w-full">
      <div className="container mx-auto px-20 relative z-10">
        <motion.h3
          ref={ref3}
          className="text-xl font-bold uppercase mb-4 text-sky-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Highlight Projects
        </motion.h3>
        <motion.h2
          ref={ref2}
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What I've Been Working On
        </motion.h2>
        <motion.p
          ref={ref4}
          className="text-normal leading-relaxed text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Here you'll find a showcase of my latest work, from websites and web
          applications, to games and more. Each project reflects my commitment
          to quality and user-friendly design. Dive in to see how I bring ideas
          to life!
        </motion.p>
        <div className="max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
