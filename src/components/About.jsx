import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { useMediaQuery } from 'react-responsive';
import { about } from "../constants";

const ServiceCard = ({ title, point, index }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className=""
        >
            {isSmallScreen ? (
                <div className="md:mt-0 -mt-2">
                    <div className="bg-neutral-400 p-10 rounded-2xl h-[200px] sm:w-[360px] w-full shadow-card flex items-center justify-center bg-opacity-55">
                        <div className="text-center">
                            <h3
                                className="text-[30px] bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text font-semibold"
                                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                            >{title}</h3>
                            <p className="text-white text-[14px]">{point}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-neutral-400 p-5 rounded-2xl h-[200px] sm:w-[300px] w-full shadow-card flex items-center justify-center"
                >
                    <div className="text-center">
                        <h3
                            className="text-[30px] bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text font-semibold"
                            style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                        >{title}</h3>
                        <p className="text-white text-[14px]">{point}</p>
                    </div>
                </Tilt>
            )}
        </motion.div>
    );
}

const About = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <motion.div
                variants={textVariant()}
                className="text-center"
            >
                <span
                    className="text-white text-sm font-medium px-2 py-1 uppercase bg-clip-text"
                >
                    About E4L
                </span>
                <h2
                    className="text-5xl sm:text-5xl lg:6xl mt-5 tracking-wide bg-clip-text"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                >
                    Know more about
                    <span
                        className="bg-gradient-to-r from-slate-50 to-slate-500 text-transparent bg-clip-text"
                        style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                    >
                        {" "}what we do
                    </span>
                </h2>
            </motion.div>
            <div className="flex flex-wrap gap-7 justify-center mt-20">
                {about[0].subpoints.map((subpoint, index) => (
                    <ServiceCard key={index} index={index} title={subpoint.title} point={subpoint.description} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, "About");