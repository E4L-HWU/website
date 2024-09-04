import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const Hero = () => {
    return (
        <div className="flex flex-col items-center lg:mt-20 mt-20">
            <motion.div
                variants={fadeIn('up', 'spring', 0.5)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center mt-6 lg:mt-20"
            >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Empowering
                    <span
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}Engineers for Life
                    </span>
                </h1>
            </motion.div>
            <motion.div
                variants={fadeIn('up', 'spring', 0.7)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center mt-6 lg:mt-20"
            >
                <p className="sm:text-md text-center text-slate-400 max-2-4xl lg:-mt-10">
                    We believe that the spirit of engineering shouldn't just be limited to the science students.
                    <br className="hidden md:block" />
                    We're here to help you learn, grow, and create.
                </p>
            </motion.div>
            <motion.div
                variants={fadeIn('up', 'spring', 0.9)}
                initial="hidden"
                animate="show"
                className="flex justify-center my-10"
            >
                <a
                    href="#"
                    className="bg-gradient-to-r from-slate-50 to-primaryBlue py-3 px-7 mx-3 rounded-md text-black hover:from-slate-400 hover:to-primaryBlue hover:text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
                >
                    Contact Us!
                </a>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Hero, "Hero");
