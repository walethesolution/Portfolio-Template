import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto bg-[#003459]">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div
            className="w-screen flex flex-col items-start gap-4 transform translate-y-8
            justify-center sm:-ml-[3rem] xxs:mt-4 xs:transform"
          >
            <p
              className={`${styles.heroHeadText} text-[#b3c2cd] font-poppins opacity-30`}
            >
              Hi, I am
            </p>
            <h1
              className="text-[#c4ebc8] sm:text-[90px] 
                 text-[50px] font-mova
                font-extrabold uppercase"
            >
              Olawale Ayejuyone
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#e7f7e9] text-xl`}>
              Software Engineer / Web developer
              <br />
            </p>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french  flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
