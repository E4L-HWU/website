import { FaInstagram, FaGlobe, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
    { href: 'https://www.instagram.com/e4l_hwu/', icon: <FaInstagram className='text-3xl' /> },
    { href: 'https://www.hwudcouncil.com/organisation/e4l/', icon: <FaGlobe className='text-3xl' /> },
    { href: 'https://chat.whatsapp.com/IeXFtsxiww14E5tKivQcic', icon: <FaWhatsapp className='text-3xl' /> }
];

const SocialLinks = () => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Social Links</h2>
            <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primaryBlue transition-colors duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;
