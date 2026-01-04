import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About Us' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: Facebook, label: 'Facebook', href: '#', disabled: true },
        { icon: Instagram, label: 'Instagram', href: '#', disabled: true },
        { icon: Linkedin, label: 'LinkedIn', href: '#', disabled: true },
    ];

    // Shared gradient styles
    const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <footer className="bg-gray-900 text-white">
            {/* Scrolling Banner - Eureka Style */}
            <div className={`py-4 overflow-hidden ${gradientBg}`}>
                <div className="animate-marquee whitespace-nowrap">
                    <span className="text-lg font-semibold mx-8">
                        Join our team and build the future of AI & Software 🚀
                    </span>
                    <span className="text-lg font-semibold mx-8">
                        We're hiring talented engineers and data scientists
                    </span>
                    <span className="text-lg font-semibold mx-8">
                        Join our team and build the future of AI & Software 🚀
                    </span>
                    <span className="text-lg font-semibold mx-8">
                        We're hiring talented engineers and data scientists
                    </span>
                </div>
            </div>

            {/* Contact Cards Section - Eureka Style with Diagonal Rounded Corners */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Phone Card */}
                    <div className="bg-gray-800 p-8 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl transition-all duration-300 group">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${gradientBg}`}>
                            <Phone className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <a
                            href="tel:+15155999131"
                            className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                        >
                            +1 (515)-599-9131
                        </a>
                    </div>

                    {/* Email Card */}
                    <div className="bg-gray-800 p-8 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl transition-all duration-300 group">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${gradientBg}`}>
                            <Mail className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <a
                            href="mailto:info@latexinfotech.com"
                            className="text-gray-300 hover:text-cyan-400 transition-colors text-lg break-all"
                        >
                            info@latexinfotech.com
                        </a>
                    </div>

                    {/* Address Card */}
                    <div className="bg-gray-800 p-8 rounded-tl-3xl rounded-br-3xl hover:shadow-2xl transition-all duration-300 group">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${gradientBg}`}>
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <p className="text-gray-300 text-lg">
                            6701 CORPORATE DR STE N,<br />
                            JOHNSTON, 50131, IA
                        </p>
                    </div>
                </div>

                {/* Newsletter/Consultation Box */}
                <div className="bg-gray-800 rounded-3xl p-8 md:p-12 mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-4">Request a Consultation</h3>
                        <p className="text-gray-300 mb-8">
                            Get in touch with our experts to discuss your project requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md"
                            />
                            <button className={`text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 ${gradientBg}`}>
                                Submit
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className={`text-2xl font-bold mb-4 ${gradientText}`}>Latex Infotech</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building intelligent AI & Software solutions for the modern enterprise.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>AI & ML Development</li>
                            <li>Data Engineering</li>
                            <li>Software Development</li>
                            <li>Data Analytics</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <div
                                        key={social.label}
                                        className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center opacity-50 cursor-not-allowed"
                                        title={`${social.label} (Coming Soon)`}
                                    >
                                        <Icon className="w-5 h-5 text-gray-500" />
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-gray-500 text-xs mt-3">Coming soon</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Latex Infotech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
