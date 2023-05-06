import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Sebastian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* this is gonna need a little more realism */}
            As a Full Stack Developer, I specialize in both front-end and
            back-end web development. I have expertise in HTML, CSS, JavaScript,
            React, Vue, databases, and APIs. I excel at creating visually
            appealing, intuitive, and scalable web applications. I am committed
            to staying up-to-date with the latest technologies and industry best
            practices, and dedicated to delivering high-quality solutions that
            exceed my clients&apos; expectations. If you&apos;re looking for a
            Full Stack Developer who can bring your web application vision to
            life, let&apos;s connect and discuss how I can help you achieve your
            business goals.
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2
          "
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
