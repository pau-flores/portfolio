import React from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref2, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-slate-800 text-white py-20 flex items-center justify-center overflow-hidden w-full">
      <div className="relative z-10 text-center mx-auto px-20">
        <motion.h3
          ref={ref3}
          className="text-xl font-bold uppercase mb-4 text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h3>
        <motion.h2
          ref={ref1}
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Let me introduce myself
        </motion.h2>
        <motion.p
          ref={ref2}
          className="text-normal leading-relaxed"
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
    </section>
  );
};

export default About;
