import { useState } from "react";
import { logo } from "../assets";
import { navItems } from "../constants";

// Import icons from Lucid React
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="E4L logo" className="w-[100px] h-[100px] mr-2 md:w-[110px] md:h-[110px]" />
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="transition-colors duration-300 hover:text-primaryBlue">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleToggle} className="relative">
                            <Menu className={`w-[40px] h-[40px] absolute transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                            <X className={`w-[40px] h-[40px] transition-transform duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`} />
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="text-center">
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="transition-colors duration-300 hover:text-primaryBlue">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
