import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Let's connect.
        </h2>
        <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
          <a href="https://www.linkedin.com/in/aranjin/"
            className="py-3 px-8">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
          <a href="https://github.com/aranjinsuren"
            className="py-3 px-8">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
      </div>
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
