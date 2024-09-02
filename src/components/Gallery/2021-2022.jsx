import { SectionWrapper } from "../../hoc"

import Slider from "react-slick";
import { motion } from "framer-motion";

import { textVariant } from "../../utils/motion";

import { ge1, ge2, ge3, ge4, ge5, ge6, ge7, ge8, ge9, ge10, ge11, ge12, ge13 } from "../../assets";
const images = [ge1, ge2, ge3, ge4, ge5, ge6, ge7, ge8, ge9, ge10, ge11, ge12, ge13];

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevYear = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

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
            <Slider {...settings} className="w-full max-w-4xl mt-8">
                {images.map((img, index) => (
                    <div key={index} className="px-2 flex justify-center">
                        <img
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SectionWrapper(PrevYear, "gallery-2021-2022");