import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

const PrevYear = () => {
    return (
        <div className="flex flex-col items-center mb-10 -mt-10">
            <motion.div
                variants={textVariant()}
                className="flex flex-col items-center mt-6 lg:mt-20"
            >
                <h1 className="text-2xl sm:text-2xl lg:text-3xl text-center tracking-wide">
                    2021 -
                    <span
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}2022
                    </span>
                </h1>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(PrevYear, "gallery-2021-2022");