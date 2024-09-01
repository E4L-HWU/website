import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from "react-scroll";
import { navItems } from "../constants";
import { logo } from "../assets";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavLinkClick = (href) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true, state: { scrollTo: href } });
        } else {
            scroller.scrollTo(href.substring(1), {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    setActiveSection(section.getAttribute("id"));
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();  // Trigger scroll to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo.substring(1), {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <a href="/">
                            <img src={logo} alt="Logo" className="w-[100px] h-[100px] mr-2 md:w-[110px] md:h-[110px]" />
                        </a>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative">
                                {item.href.startsWith('#') ? (
                                    <ScrollLink
                                        to={item.href.substring(1)}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => handleNavLinkClick(item.href)}
                                        className={`cursor-pointer transition-colors duration-300 hover:text-primaryBlue navbar-link ${item.href.substring(1) === activeSection ? "active" : ""}`}
                                    >
                                        {item.label}
                                    </ScrollLink>
                                ) : (
                                    <a href={item.href} className="transition-colors duration-300 hover:text-primaryBlue">
                                        {item.label}
                                    </a>
                                )}
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
                                    {item.href.startsWith('#') ? (
                                        <ScrollLink
                                            to={item.href.substring(1)}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => handleNavLinkClick(item.href)}
                                            className={`cursor-pointer transition-colors duration-300 hover:text-primaryBlue navbar-link ${item.href.substring(1) === activeSection ? "active" : ""}`}
                                        >
                                            {item.label}
                                        </ScrollLink>
                                    ) : (
                                        <a href={item.href} className="transition-colors duration-300 hover:text-primaryBlue">
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
