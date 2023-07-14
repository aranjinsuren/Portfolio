import React from "react"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import CVDoc from "../assets/Aranjinsuren_Enkhbat_2024.pdf"

const Resume = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
        <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] p-8 rounded-2xl'
        >
            <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[10px]`}>
        <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          For employers
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Resume.
        </h2>
        </div>
      </div>
        
        <div className="bg-black-200 p-10 rounded-xl w-full">
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
            <a href={CVDoc} download>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px]">
                Download Resume
              </button>
            </a>
          </div>
        </div>
       </motion.div>      
    </div>

  )
}

export default SectionWrapper(Resume, "resume")