import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Where Curiosity Meets Creation. Empowering
                <span className="bg-gradient-to-r from-slate-50 to-slate-500 text-transparent bg-clip-text">
                    {" "}Engineers for Life
                </span>
            </h1>
            <p className="mt-5 sm:text-md text-center text-neutral-500 max-2-4xl">
                We believe that the spirit of engineering shouldn't just be limited to the science students. We're here to help you learn, grow, and create.
            </p>
            <div className="flex justify-center my-10">
                <a
                    href="#"
                    className="bg-gradient-to-r from-slate-50 to-slate-500 py-3 px-7 mx-3 rounded-md text-black hover:from-slate-400 hover:to-slate-700 hover:text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.4)]"
                >
                    Contact Us!
                </a>
            </div>
        </div>
    )
}

export default SectionWrapper(Hero, "Hero");
