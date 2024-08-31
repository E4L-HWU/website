/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { SectionWrapper } from "../../hoc"

import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion";

const Welcome = () => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', 0.5)}
            initial="hidden"
            animate="show"
            className="mb-20"
        >
            <div className="text-center lg:mt-20 mt-20">
                <span className="text-white text-sm font-medium px-2 py-1 uppercase bg-clip-text">
                    Welcome
                </span>
                <h2
                    className="text-7xl sm:text-7xl lg:text-8xl mt-5 tracking-wide bg-clip-text"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                >
                    Welcome to
                    <span
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}E4L
                    </span>
                </h2>
            </div>
            <motion.div
                variants={fadeIn('up', 'spring', 0.7)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center mt-6 lg:mt-20"
            >
                <p className="sm:text-md text-center text-slate-400 max-2-4xl lg:-mt-10">
                    Thank you for joining E4L! We're excited to have you on board.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default SectionWrapper(Welcome, "Welcome");