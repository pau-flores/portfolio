import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiPhp,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiWordpress,
  SiCsharp,
  SiCplusplus,
} from "react-icons/si";

const SkillIcon: React.FC<{ icon: React.ElementType; name: string }> = ({
  icon: Icon,
  name,
}) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="text-6xl mb-2" />
    <span className="text-sm">{name}</span>
  </motion.div>
);

const Skills: React.FC = () => {
  const skills = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiLaravel, name: "Laravel" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiPython, name: "Python" },
    { icon: SiCsharp, name: "C#" },
    { icon: SiCplusplus, name: "C++" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden w-full">
      <div className="mx-auto px-20 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillIcon icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute h-[500px] w-full before:absolute before:h-[500px] before:w-full before:rounded-full before:bg-gradient-radial before:from-blue-600 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:from-sky-900 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[780px] sm:after:w-[340px] before:lg:h-[560px]"></div>
      </div>
    </section>
  );
};

export default Skills;
