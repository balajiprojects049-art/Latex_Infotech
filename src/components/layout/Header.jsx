import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Apply dark mode on initial load
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);


    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About Us' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Gradient styles
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBorder = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md' : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`text-2xl font-bold ${gradientText}`}
                        >
                            Latex Infotech
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 relative group py-2 ${isActive(link.path)
                                    ? `font-bold ${gradientText}`
                                    : isScrolled
                                        ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                                        : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-1/2 h-[3px] rounded-full transition-all duration-300 ease-out -translate-x-1/2 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        } ${gradientBg}`}
                                />
                            </Link>
                        ))}

                        <Link to="/contact">
                            <motion.button
                                whileHover="hover"
                                initial="initial"
                                className={`relative px-6 py-2.5 rounded-full overflow-hidden text-white font-bold text-sm tracking-wide group shadow-md ${gradientBg}`}
                                variants={{
                                    hover: {
                                        scale: 1.05,
                                        boxShadow: '0 10px 20px rgba(15, 98, 254, 0.3)'
                                    }
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600"
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 w-full h-full bg-white/20"
                                    style={{ skewX: '-20deg', x: '-150%' }}
                                    variants={{
                                        hover: { x: '150%' }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />

                                <span className="relative z-10">
                                    Get in Touch
                                </span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-md transition-colors ${isScrolled
                                ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                : 'hover:bg-white/10'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`} />
                            ) : (
                                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                        >
                            <div className="py-4 space-y-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`block px-4 py-2 rounded-md transition-colors ${isActive(link.path)
                                            ? `font-bold ${gradientText}`
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link to="/contact" className="block px-4 mt-4">
                                    <button
                                        className={`w-full text-white font-bold py-3 rounded-md shadow-md text-sm ${gradientBg}`}
                                    >
                                        Get in Touch
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
