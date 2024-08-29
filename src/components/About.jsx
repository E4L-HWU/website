import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { features } from "../constants";

const About = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <motion.div
                variants={textVariant()}
                className="text-center"
            >
                <span className="text-white text-sm font-medium px-2 py-1 uppercase bg-clip-text">
                    About E4L
                </span>
                <h2
                    className="text-5xl sm:text-5xl lg:text-6xl mt-5 tracking-wide bg-clip-text"
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
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-neutral-600 rounded-lg p-6 flex items-start transition-transform transform hover:-translate-y-2 hover:bg-white hover:shadow-lg hover:shadow-neutral-700 group">
                            <div className="flex-shrink-0 mx-4 h-12 w-12 p-2 bg-neutral-900 text-neutral-400 rounded-full flex justify-center items-center transition-colors">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl text-white transition-colors group-hover:text-neutral-700">
                                    {feature.text}
                                </h5>
                                <p className="text-md text-neutral-300 transition-colors group-hover:text-neutral-700">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "About");
