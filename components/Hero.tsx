import React from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView4 = useInView(ref2, { once: true, amount: 0.3 });

  const scrollToAbout = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="relative z-10 text-center mx-auto px-20">
        <motion.h3
          ref={ref3}
          className="text-xl font-bold uppercase mb-4 text-sky-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hey there!
        </motion.h3>
        <motion.h1
          ref={ref1}
          className="text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          I'm Paulina Flores
        </motion.h1>
        <motion.h2
          ref={ref2}
          className="text-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Software Engineer & Full-Stack Developer
        </motion.h2>

        <motion.button
          ref={ref4}
          type="button"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }}
          className="mt-12 px-8 py-4 border-2 border-sky-300 text-white bg-transparent rounded-md flex items-center mx-auto"
          onClick={scrollToAbout}
        >
          <span className="ml-2">Learn More About Me</span>
        </motion.button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-slate-800"></div>
    </section>
  );
};

export default Hero;
