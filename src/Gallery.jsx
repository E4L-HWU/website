import { CADWorkshop, F1, Footer, GalleryHero, GalleryNav, Holograms, Iftaar, MarshTower, MovieNight, Navbar, PrevYear, PrintingWorkshop, PromNight, RL, RoboWars, TheRobots } from "./components"

const GalleryPage = () => {
    return (
        <>
            <Navbar />
            <GalleryHero />
            <GalleryNav />
            <PrevYear />
            <PrintingWorkshop />
            <CADWorkshop />
            <F1 />
            <Holograms />
            <Iftaar />
            <MarshTower />
            <TheRobots />
            <MovieNight />
            <PromNight />
            <RL />
            <RoboWars />
            <Footer />
        </>
    )
}

export default GalleryPage