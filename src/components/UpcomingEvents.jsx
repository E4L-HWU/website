import { SectionWrapper } from "../hoc"

const UpcomingEvents = () => {
    return (
        <div className="text-center mb-[100px]">
            <span className="text-white text-sm font-medium px-2 py-1 uppercase bg-clip-text">
                Events
            </span>
            <h2
                className="text-5xl sm:text-5xl lg:text-6xl mt-5 tracking-wide bg-clip-text"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            >
                Learn more about our
                <span
                    className="bg-gradient-to-r from-slate-50 to-primaryBlue text-transparent bg-clip-text"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
                >
                    {" "}Upcoming Events
                </span>
            </h2>
            <div className="mt-10 flex justify-center">
                <div className="bg-slate-700 text-white px-8 py-4 rounded-md shadow-lg">
                    No upcoming events for now, Check in Later :)
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(UpcomingEvents, "events");