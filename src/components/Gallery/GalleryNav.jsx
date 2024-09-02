import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { SectionWrapper } from '../../hoc';

const navItems = [
    { id: 'gallery-2021-2022', label: '2021-2022' },
    { id: '3d-print', label: '3D Print' },
    { id: 'cad-workshop', label: 'Cad Workshop' },
    { id: 'f1-cars', label: 'F1 Cars' },
    { id: 'holograms', label: 'Holograms' },
    { id: 'iftaar-party', label: 'Iftaar Party' },
    { id: 'marsh-tower', label: 'Marsh Tower' },
    { id: 'meet-the-robots', label: 'Meet the Robots' },
    { id: 'movie-night', label: 'Movie Night' },
    { id: 'prom-night', label: 'Prom Night' },
    { id: 'RL', label: 'Rocket League' },
    { id: 'robowars', label: 'RoboWars' },
];

const HorizontalScrollNav = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto flex items-center px-4">
            <button
                onClick={() => scroll('left')}
                className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                style={{ marginLeft: '-40px' }}
            >
                &larr;
            </button>
            <button
                onClick={() => scroll('left')}
                className="md:hidden absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                style={{ marginLeft: '-30px' }}
            >
                &lt;
            </button>

            <button
                onClick={() => scroll('right')}
                className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                style={{ marginRight: '-40px' }}
            >
                &rarr;
            </button>
            <button
                onClick={() => scroll('right')}
                className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                style={{ marginRight: '-30px' }}
            >
                &gt;
            </button>

            <div
                ref={scrollContainerRef}
                className="flex space-x-4 py-2 whitespace-nowrap overflow-x-auto scrollbar-hidden w-full max-w-full"
            >
                {navItems.map((item) => (
                    <ScrollLink
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer transition-colors duration-300 text-white hover:text-primaryBlue px-5"
                    >
                        {item.label}
                    </ScrollLink>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(HorizontalScrollNav, 'gallery-nav');
