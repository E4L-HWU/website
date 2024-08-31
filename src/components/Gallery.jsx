import { CheckCircle2 } from "lucide-react";
import { gallery } from "../assets";
import { gallerypoints } from "../constants";

import { SectionWrapper } from "../hoc";

import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";

const Gallery = () => {
    return (
        <div className="text-center lg:-mt-16 md:-mt-16 mt-5">
            <span className="text-white text-sm font-medium px-2 py-1 uppercase bg-clip-text">
                Gallery
            </span>
            <h2
                className="text-5xl sm:text-5xl lg:text-6xl mt-5 tracking-wide bg-clip-text"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            >
                Explore
                <span
                    className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                >
                    {" "}Our Gallery
                </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={gallery} alt="3D printing workshop image" className="w-[90%] h-auto mx-auto mt-10 lg:mt-20" />
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {gallerypoints.map((point, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-primaryBlue mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl text-left">
                                    {point.title}
                                </h5>
                                <p className="text-md text-neutral-500 text-left">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <motion.div
                    variants={fadeIn('up', 'spring', 0.9)}
                    initial="hidden"
                    animate="show"
                    className="flex justify-center my-10"
                >
                    <a
                        href="#"
                        className="bg-gradient-to-r from-slate-50 to-primaryBlue py-3 px-7 mx-3 rounded-md text-black transition-all duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primaryBlue hover:to-white hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
                    >
                        Visit our Gallery!
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default SectionWrapper(Gallery, "Gallery");