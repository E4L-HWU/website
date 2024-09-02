import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

const GalleryHero = () => {
    return (
        <div className="flex flex-col items-center lg:mt-20 mt-20 mb-10">
            <motion.div
                variants={fadeIn('up', 'spring', 0.5)}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center mt-6 lg:mt-20"
            >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Explore our most precious
                    <span
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}Moments
                    </span>
                </h1>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(GalleryHero, "gallery-hero");