/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import ProjectCard from "./ProjectsCard";



const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#e7f7e9]`}>My Work</p>
        <h2 className={`${styles.sectionHeadTextLight} text-[#c4ebc8]`}>
          Projects.
        </h2>
        <p className={`${styles.sectionSubText} text-[#e7f7e9]`}>
          Tackling real-life problems one solution at a time.
        </p>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These project(s) demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live links. They showcase my ability to provide
          elegant solution and oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
