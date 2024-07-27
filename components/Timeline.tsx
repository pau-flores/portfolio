import React from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineItemProps {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: "work" | "education";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  location,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="flex mb-8 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex-1 pr-8 text-right">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <div className="w-20 flex justify-center">
        <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center relative z-10">
          {icon === "work" ? (
            <FaBriefcase className="text-2xl text-white" />
          ) : (
            <FaGraduationCap className="text-2xl text-white" />
          )}
        </div>
      </div>
      <div className="flex-1 pl-8">
        <p className="text-gray-200 font-bold">{location}</p>
        <p className="text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<{ title: string; items: TimelineItemProps[] }> = ({
  title,
  items,
}) => (
  <div className="mb-20">
    <h3 className="text-4xl font-bold mb-12 text-center">{title}</h3>
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
      <div className="absolute h-full w-0.5 bg-sky-500 left-1/2 transform -translate-x-1/2 top-0 z-0" />
    </div>
  </div>
);

const Experience: React.FC = () => {
  const workExperiences = [
    {
      title: "Software Engineer Fellow",
      date: "2024 - Present",
      location: "Headstarter AI",
      description:
        "Building 5 AI projects with the latest technologies and best practices in software engineering.",
      icon: "work" as const,
    },
    {
      title: "Software Engineer",
      date: "2013 - Present",
      location: "Self-Employed",
      description:
        "Developed and maintained web applications, using a diverse tech-stack.",
      icon: "work" as const,
    },
    {
      title: "Full-Stack Web Developer",
      date: "2015 - Present",
      location: "iwebcontent",
      description:
        "Collaborated with a cross-functional team to deliver high-quality web solutions.",
      icon: "work" as const,
    },
  ];

  const educationExperiences = [
    {
      title: "Master of Science in Computer Science",
      date: "",
      location: "Georgia Institute of Technology, USA",
      description:
        "Interactive Intelligence specialization. Focused on Computing Systems, as well as Artificial Intelligence and Human Interaction.",
      icon: "education" as const,
    },
    {
      title: "Bachelor of Science in Graphic Design",
      date: "",
      location: "CETYS Universidad, Mexico",
      description:
        "Focused on graphic design, user experience, web and game development.",
      icon: "education" as const,
    },
    {
      title: "Bachelor of Arts in Management",
      date: "",
      location: "City University of Seattle, USA",
      description:
        "Focused on organizational skills, leadership, and communication.",
      icon: "education" as const,
    },
  ];

  const ref1 = React.useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });

  return (
    <section className="relative bg-gray-900 text-white py-40 overflow-hidden w-full">
      <div className="container mx-auto px-20 relative z-10">
        <motion.h3
          ref={ref1}
          className="text-xl font-bold uppercase text-sky-300 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Resume
        </motion.h3>
        <Timeline title="Work Experience" items={workExperiences} />
        <Timeline title="Education" items={educationExperiences} />
      </div>

      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <div className="absolute h-[800px] w-full before:absolute before:h-[700px] before:w-full before:rounded-full before:bg-gradient-radial before:from-purple-600 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:from-sky-900 after:via-purple-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-700 before:dark:opacity-10 after:dark:opacity-40 sm:before:w-[780px] sm:after:w-[340px] before:lg:h-[560px]"></div>
      </div>
    </section>
  );
};

export default Experience;
