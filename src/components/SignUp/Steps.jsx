import { SectionWrapper } from "../../hoc";
import { registration } from "../../constants";

const Steps = () => {
    return (
        <div className="relative border-neutral-800 min-h-[800px]">
            <div className="flex flex-wrap justify-center">
                {registration.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <a href={feature.url} target="_blank">
                            <div className="bg-neutral-600 rounded-lg p-6 flex items-start transition-transform transform hover:-translate-y-2 hover:bg-primaryBlue hover:shadow-lg hover:shadow-neutral-700 group duration-300 h-[250px]">
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
    );
};

export default SectionWrapper(Steps, "Steps");
