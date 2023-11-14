/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full  p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#4d718b] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#e6ebee] text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#66859b]`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#003459]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Experienced Web Developer with a proven track record of five years in the industry. Proficient in both front-end and back-end technologies, specializing in HTML, CSS, JavaScript, and popular frameworks like React. Adept at creating responsive and performant web applications, with a strong foundation in database management and API integration. Skilled in version control, testing, and deployment, emphasizing security best practices. Well-versed in collaborating with cross-functional teams and contributing to all phases of the development lifecycle. Committed to continuous learning and staying abreast of emerging trends. Bring a combination of technical expertise, problem-solving skills, and effective communication to drive successful web development projects
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        My software development journey began with a fascination for how
        lines of code turn into powerful tools that can change how we live and work.
        Over the years I have specialized in full stack development and
        contributed to numerous projects that have made meaningful impact.
        <br />
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        What keeps me motivated is the ever-evolving nature of technology and
        the boundless possibilities it offers. I&apos;m driven by the bringing to life of a vision through lines of code and creating user-friendly
        applications that make a real difference in people&apos;s lives.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        When I&apos;m not coding, i&apos;m either playing soccer or basketball
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
