import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

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
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/latex-infotech/', disabled: false },
    ];

    // Shared gradient styles
    const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    // Consultation Form State
    const [consultationEmail, setConsultationEmail] = useState('');
    const [consultationStatus, setConsultationStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleConsultationSubmit = async (e) => {
        e.preventDefault();

        if (!consultationEmail || !/\S+@\S+\.\S+/.test(consultationEmail)) {
            setConsultationStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Please enter a valid email address'
            });
            return;
        }

        setConsultationStatus({ loading: true, success: false, error: false, message: '' });

        try {
            // Using the same API endpoint, providing default values for required fields
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Consultation Request',
                    email: consultationEmail,
                    phone: 'Not Provided',
                    message: 'User requested a consultation via the website footer form.'
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setConsultationStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: 'Request sent! We will contact you soon.'
                });
                setConsultationEmail('');

                // Reset status after 5 seconds
                setTimeout(() => {
                    setConsultationStatus({ loading: false, success: false, error: false, message: '' });
                }, 5000);
            } else {
                throw new Error(data.error || 'Failed to send request');
            }
        } catch (error) {
            console.error('Consultation error:', error);
            setConsultationStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Failed to send. Please try again.'
            });
        }
    };

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
                <div className="bg-gray-800 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                    {/* Background element for visual interest */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="max-w-2xl mx-auto text-center relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Request a Consultation</h3>
                        <p className="text-gray-300 mb-8">
                            Get in touch with our experts to discuss your project requirements
                        </p>

                        <form onSubmit={handleConsultationSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex-1 max-w-md relative">
                                <input
                                    type="email"
                                    value={consultationEmail}
                                    onChange={(e) => setConsultationEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    disabled={consultationStatus.loading || consultationStatus.success}
                                    className={`w-full px-6 py-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 transition-all ${consultationStatus.error ? 'ring-2 ring-red-500' : ''}`}
                                />
                                {consultationStatus.success && (
                                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={consultationStatus.loading || consultationStatus.success}
                                className={`text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 ${gradientBg} disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]`}
                            >
                                {consultationStatus.loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : consultationStatus.success ? (
                                    "Sent!"
                                ) : (
                                    <>
                                        Submit
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Status Messages */}
                        {consultationStatus.error && (
                            <p className="text-red-400 mt-4 text-sm flex items-center justify-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                {consultationStatus.message}
                            </p>
                        )}
                        {consultationStatus.success && (
                            <p className="text-green-400 mt-4 text-sm font-medium">
                                {consultationStatus.message}
                            </p>
                        )}
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

                                if (social.disabled) {
                                    return (
                                        <div
                                            key={social.label}
                                            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center opacity-50 cursor-not-allowed"
                                            title={`${social.label} (Coming Soon)`}
                                        >
                                            <Icon className="w-5 h-5 text-gray-500" />
                                        </div>
                                    );
                                }

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 group hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                    </a>
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
