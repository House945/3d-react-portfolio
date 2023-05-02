import React from "react";
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
            Hi, I'm <span className="text-[#915eff]">Sebastian</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* this is gonna need a little more realism */}
            As a Full Stack Developer, I bring a wealth of experience and
            expertise to the table. With my proficiency in both front-end and
            back-end web development, I am able to create end-to-end solutions
            that meet the unique needs of my clients.
            <br className="sm:hidden" />
            <br />
            I have a deep understanding of a wide range of programming languages
            and web frameworks, including HTML, CSS, JavaScript, React, Vue,
            Python and FastAPI. I also have experience with database management,
            APIs, and cloud platforms like Azure.
            <br className="sm:hidden" />
            <br />
            One of my greatest strengths as a Full Stack Developer is my ability
            to see the big picture while also paying attention to the smallest
            details. I understand that a great web application requires more
            than just functional code - it must also be visually appealing,
            intuitive to use, and capable of handling high volumes of traffic
            without slowing down.
            <br className="sm:hidden" />
            <br />
            I am passionate about staying up-to-date with the latest
            technologies and industry best practices, and I am always looking
            for new challenges that will push me to grow and expand my skills.
            Above all, I am committed to delivering top-quality solutions that
            exceed my clients' expectations and help them achieve their business
            goals.
            <br className="sm:hidden" />
            <br />
            If you're looking for a Full Stack Developer who can bring your web
            application vision to life, look no further. Let's connect and
            discuss how I can help you create a solution that is efficient,
            effective, and tailored to your specific needs.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
