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

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView4 = useInView(ref2, { once: true, amount: 0.3 });

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
    <section className="relative bg-slate-800 text-white py-40 overflow-hidden w-full">
      <div className="mx-auto px-20 relative z-10">
        <motion.h3
          ref={ref3}
          className="text-xl font-bold uppercase mb-4 text-blue-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h3>
        <motion.h2
          ref={ref2}
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Personal Objective & Skills
        </motion.h2>
        <motion.p
          ref={ref4}
          className="text-normal leading-relaxed text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          I'm a passionate Software Engineer with years of freelancing
          experience, creating responsive websites and web apps for small and
          medium businesses. My tech-stack includes frameworks like Laravel for
          backend development, and React for smooth, user-friendly experiences.
          I have a strong interest in AI and I'm always seeking to grow my
          skills and learn new technologies.
        </motion.p>
        <motion.div
          ref={ref1}
          className="grid grid-cols-3 md:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillIcon icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
