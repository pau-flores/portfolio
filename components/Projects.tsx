import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-gray-900 text-white py-20 flex items-center justify-center overflow-hidden w-full">
      <div className="mx-auto px-20 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

        <motion.div
          ref={ref1}
          className="flex flex-col md:flex-row items-center mb-20"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Project One</h3>
            <p className="text-gray-300">
              This is a description of Project One. It showcases my skills in
              front-end development, utilizing React and Next.js to create a
              responsive and interactive user interface. The project
              demonstrates my ability to implement complex features while
              maintaining clean, efficient code.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          className="flex flex-col md:flex-row-reverse items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-semibold mb-4">Project Two</h3>
            <p className="text-gray-300">
              Project Two highlights my back-end development skills. It involves
              creating a robust API using Node.js and Express, integrating with
              a MongoDB database. This project showcases my ability to design
              efficient data models and implement secure authentication systems.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <div className="absolute h-[500px] w-full before:absolute before:h-[500px] before:w-full before:rounded-full before:bg-gradient-radial before:from-purple-600 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:from-sky-900 after:via-purple-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[780px] sm:after:w-[340px] before:lg:h-[560px]"></div>
      </div>
    </section>
  );
};

export default Projects;
