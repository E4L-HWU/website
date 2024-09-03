/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { SectionWrapper } from "../../hoc";
import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion";
import { Link } from 'react-scroll';

import { registration } from "../../constants";

const Welcome = () => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', 0.5)}
            initial="hidden"
            animate="show"
            className="-mt-10"
        >
            <div className="text-center mb-10">
                <h2
                    className="text-4xl sm:text-4xl lg:text-5xl mt-5 tracking-wide bg-clip-text"
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
            {/* <motion.div
                variants={fadeIn('up', 'spring', 0.7)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center mt-6 lg:mt-20"
            > */}
            {/* <p className="sm:text-sm text-sm text-center text-slate-400 max-2-4xl lg:-mt-10">
                    Thank you for joining E4L! We're excited to have you on board. Follow the steps below to continue with your registration.
                </p> */}
            {/* <Link
                    to="Steps"
                    smooth={true}
                    duration={500}
                    className="mt-10 flex flex-col items-center cursor-pointer"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center text-slate-400 animate-bounce mt-[40px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="text-sm mt-2 mb-2">Scroll Down</span>
                    </motion.div>
                </Link> */}
            {/* </motion.div> */}
            <div className="relative border-neutral-800 min-h-[800px]">
                <div className="flex flex-wrap justify-center">
                    {registration.map((feature, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <a href={feature.url} target="_blank">
                                <div className="bg-neutral-600 rounded-lg p-6 flex items-start transition-transform transform hover:-translate-y-2 hover:bg-primaryBlue hover:shadow-lg hover:shadow-neutral-700 group duration-300 h-[250px] md:h-[210px]">
                                    <div className="flex-shrink-0 mx-4 h-12 w-12 p-2 bg-neutral-900 text-neutral-400 rounded-full flex justify-center items-center transition-colors duration-300 group-hover:text-primaryBlue">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h5 className="mt-1 mb-2 text-xl text-white transition-colors duration-300 group-hover:text-white">
                                            {feature.text}
                                        </h5>
                                        <p className="text-md text-neutral-300 transition-colors duration-300 group-hover:text-white text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default SectionWrapper(Welcome, "Welcome");
