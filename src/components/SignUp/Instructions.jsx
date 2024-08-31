import { SectionWrapper } from "../../hoc"

import { motion } from 'framer-motion';
import { fadeIn } from "../../utils/motion";

const Instructions = () => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', 0.5)}
            initial="hidden"
            animate="show"
            className="lg:-mb-16 -mb-10"
        >
            <div className="text-center lg:mt-20 mt-20">
                <span className="text-neutral-400 text-sm font-medium px-2 py-1 uppercase bg-clip-text">
                    Complete your registration
                </span>
                <h4
                    className="text-2xl sm:text-2xl lg:text-3xl mt-5 tracking-wide bg-clip-text"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                >
                    Please follow the instructions below to complete<br className="sm:block lg:block" />
                    <span
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text mt-5 text-3xl sm:text-3xl lg:text-4xl"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}Your Registration
                    </span>
                </h4>
            </div>
        </motion.div>
    )
}

export default SectionWrapper(Instructions, "Instructions");