import { logo } from '../assets'; // Make sure the logo path is correct
import { navItems } from '../constants'; // Assuming you have these in your constants file
import SocialLinks from './SocialLinks';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Logo Section */}
                <div className="flex justify-center md:justify-start -mt-5">
                    <img src={logo} alt="Logo" className="w-[150px] h-[150px]" />
                </div>

                {/* Links Section */}
                <div className="flex justify-center mt-5">
                    <ul className="space-y-2 text-center md:text-left">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-primaryBlue transition-colors duration-300">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center md:justify-end space-x-4 mt-5">
                    <SocialLinks />
                </div>
            </div>
            <div className="text-center mt-[50px]">
                <p>© {currentYear} <span className='font-bold'>E4L</span> All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
