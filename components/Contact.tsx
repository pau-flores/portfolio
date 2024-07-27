import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView4 = useInView(ref2, { once: true, amount: 0.3 });

  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    navigator.clipboard.writeText("pau@paulinaflores.net").then(() => {
      setMessage("Email copied!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    });
  };

  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden w-full">
      <div className="container mx-auto px-20 relative z-10">
        <motion.h3
          ref={ref3}
          className="text-xl font-bold uppercase mb-4 text-sky-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Me
        </motion.h3>
        <motion.h2
          ref={ref2}
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          ref={ref4}
          className="text-normal leading-relaxed text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Have a project in mind? If you need a website or a web application,
          feel free to contact me! I'll get back to you as soon as possible.
        </motion.p>

        <button
          type="button"
          className="px-4 py-3 bg-sky-600 hover:bg-sky-500 rounded-md text-white outline-none focus:ring-2 ring-sky-600 shadow-lg transform active:scale-75 transition-all duration-200 flex items-center font-semibold mx-auto"
          onClick={handleButtonClick}
        >
          <RiSendPlaneFill /> <span className="ml-2">Send Me An Email</span>
        </button>
        {message && (
          <div className="mt-3 text-blue-200 font-semibold text-center transition duration-200">
            {message}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
    </section>
  );
};

export default Contact;
