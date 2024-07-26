import React from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-gray-900 text-white py-20 flex items-center justify-center overflow-hidden w-full">
      <div className="relative z-10 text-center mx-auto px-20">
        <motion.h2
          ref={ref1}
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        <motion.p
          ref={ref2}
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          I'm a passionate software engineer with expertise in full-stack
          development. With a strong foundation in JavaScript, TypeScript, and
          modern frameworks like React and Next.js, I love building efficient,
          scalable, and user-friendly web applications. My experience spans from
          crafting responsive front-end interfaces to designing robust back-end
          systems. I'm always eager to learn new technologies and tackle
          challenging projects that push the boundaries of what's possible in
          web development.
        </motion.p>
      </div>
      <div className="absolute z-0 flex items-center justify-center">
        <div className="absolute h-[300px] w-full before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-900 after:via-[#0141ff] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      </div>
    </section>
  );
};

export default About;
