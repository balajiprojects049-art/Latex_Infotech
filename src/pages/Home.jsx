import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, Target, Users, Award, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const NumberCounter = ({ from, to, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Use framer-motion spring for smooth counting
    const springValue = useSpring(from, {
        stiffness: 50,
        damping: 15,
        duration: duration * 1000
    });

    const displayValue = useTransform(springValue, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            springValue.set(to);
        }
    }, [inView, springValue, to]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    // Shared gradient styles
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section - Eureka Style with Background Image */}
            <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url(/assets/images/hero-background.png)' }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-0" />

                <div className="container-custom relative z-10 pt-20 md:pt-0 pb-12 md:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        {/* Gradient Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '80px' }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className={`h-1 mb-6 ${gradientBg}`}
                        />

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Empowering Businesses with <span className={gradientText}>Tech and Talent</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                            We insist on timely and flawless execution of deliverables by making the most of leading
                            technology and innovative solutions keeping in mind our client's business challenges and
                            aspiration to be a leader in the service sector.
                        </p>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative overflow-hidden px-10 py-4 rounded-full font-bold text-lg text-white shadow-lg group ${gradientBg}`}
                            >
                                {/* Shine effect overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    style={{
                                        transform: 'translateX(-150%) skewX(-20deg)',
                                        transition: 'transform 0.7s ease-in-out'
                                    }}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    Request Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section - Two Column with Badge */}
            <section className="py-20 md:py-28 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Team collaboration image */}
                            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/team-collaboration.png"
                                    alt="Professional team collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badge - Compact & Hanging Off */}
                            <motion.div
                                className={`absolute -bottom-8 right-4 md:-right-8 backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl shadow-2xl z-20 ${gradientBg}`}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold leading-none mb-1">20+</div>
                                        <div className="text-xs font-medium opacity-90">Years Experience</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`h-1 w-20 mb-6 ${gradientBg}`} />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                We are <span className={gradientText}>Latex Infotech</span>
                            </h2>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Amalgamation of Digital Engineering and Human Intelligence
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                We are a leading information technology consulting and services organization, providing
                                AI & ML solutions, software development, data engineering, and comprehensive IT staffing
                                services to enterprise clients.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our mission is to transform businesses through cutting-edge artificial intelligence,
                                advanced data engineering, and enterprise-grade software development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section - Staggered Grid with Diagonal Rounded Corners (Eureka Style) */}
            <section className="py-20 md:py-28 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className={`h-1 w-20 mx-auto mb-6 ${gradientBg}`} />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our <span className={gradientText}>Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </motion.div>

                    {/* Staggered Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            // Highlight index 1 (middle one on 3-col grid) or modify logic as needed. Removed fixed highlight for uniform premium feel or keep it.
                            // Let's keep one highlighted but update gradient.
                            const isHighlighted = index === 1;

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                        type: "spring",
                                        bounce: 0.4
                                    }}
                                    whileHover={{ y: -8 }}
                                    className={`p-8 transition-all duration-300 group shadow-md ${isHighlighted ? gradientBg : 'bg-white'}`}
                                    style={{
                                        marginTop: index % 2 === 0 ? '0' : '2rem',
                                        borderTopLeftRadius: '24px',
                                        borderBottomRightRadius: '24px',
                                        borderTopRightRadius: '8px',
                                        borderBottomLeftRadius: '8px',
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                                        style={{
                                            backgroundColor: isHighlighted ? 'rgba(255,255,255,0.2)' : 'rgba(15, 98, 254, 0.1)' // Light blue bg for non-highlighted
                                        }}
                                    >
                                        <Icon
                                            className="w-8 h-8"
                                            style={{ color: isHighlighted ? '#ffffff' : '#0F62FE' }} // Blue color for icon
                                        />
                                    </div>

                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ color: isHighlighted ? '#ffffff' : '#111827' }}
                                    >
                                        {service.title}
                                    </h3>

                                    <p
                                        className="leading-relaxed mb-6"
                                        style={{ color: isHighlighted ? 'rgba(255,255,255,0.9)' : '#4B5563' }}
                                    >
                                        {service.description}
                                    </p>

                                    <div
                                        className="flex items-center gap-2 font-semibold"
                                        style={{ color: isHighlighted ? '#ffffff' : '#0F62FE' }}
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Dark Section (Eureka Style High Contrast) */}
            <section className="py-20 md:py-28 bg-gray-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`h-1 w-20 mb-6 ${gradientBg}`} />
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                For Over <span className={gradientText}>20 Years</span> in Tech Industry
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: CheckCircle2,
                                        title: 'Top Quality',
                                        desc: 'Providing the finest solutions backed by consistent top-quality service.'
                                    },
                                    {
                                        icon: Users,
                                        title: 'Teamwork',
                                        desc: 'We promote and support a diverse, yet unified, team. We work together to meet your goals.'
                                    },
                                    {
                                        icon: Target,
                                        title: 'Client First Approach',
                                        desc: 'Treating our clients as we expect to be treated ourselves. Placing our clients first - and we mean it.'
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: 'Efficient & Effective',
                                        desc: 'Delivering solutions and services efficiently and effectively.'
                                    }
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="flex gap-4"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${gradientBg}`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Innovation technology image */}
                            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/innovation-tech.png"
                                    alt="Innovation and technology"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className={`h-1 w-20 mx-auto mb-6 ${gradientBg}`} />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            How It <span className={gradientText}>Works</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            An insistence on flawless execution and timely delivery
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                number: '01',
                                title: 'Explore',
                                desc: 'We begin by understanding your business challenges and objectives through comprehensive analysis.'
                            },
                            {
                                number: '02',
                                title: 'Consult and Execute',
                                desc: 'Our team designs tailored solutions and executes them with precision and expertise.'
                            },
                            {
                                number: '03',
                                title: 'Support',
                                desc: 'We provide ongoing support and optimization to ensure long-term success.'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="text-center group"
                            >
                                <div className={`text-6xl font-bold mb-4 opacity-30 ${gradientText}`}>
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics/Achievements Section */}
            <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: 500, suffix: '+', label: 'Projects Completed' },
                            { number: 200, suffix: '+', label: 'Happy Clients' },
                            { number: 20, suffix: '+', label: 'Years Experience' },
                            { number: 50, suffix: '+', label: 'Team Members' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center text-white"
                            >
                                {/* Gradient Text for Numbers */}
                                <div className={`text-5xl md:text-6xl font-bold mb-2 flex justify-center items-center ${gradientText}`}>
                                    <NumberCounter from={0} to={stat.number} duration={2.5} />
                                    <span>{stat.suffix}</span>
                                </div>
                                <div className="text-lg md:text-xl opacity-90 text-gray-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className={`h-1 w-20 mx-auto mb-6 ${gradientBg}`} />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Technology <span className={gradientText}>Stack</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Cutting-edge technologies powering innovative solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {['Python', 'TensorFlow', 'AWS', 'React', 'Node.js', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Azure', 'GCP', 'Spark'].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="p-6 bg-gray-50 rounded-2xl text-center font-semibold text-gray-800 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                            >
                                <span className={`absolute top-0 left-0 w-1 h-full ${gradientBg}`} />
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Premium Consultation CTA Section - Enterprise Grade */}
            <section
                className="relative overflow-hidden"
                style={{
                    minHeight: '80vh',
                    backgroundImage: 'url(/assets/images/premium-cta-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Subtle Mirror/Glass Overlay - Fully Transparent */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)',
                        backdropFilter: 'blur(2px)'
                    }}
                />

                {/* Content Container */}
                <div className="container-custom relative z-10 h-full flex items-center justify-center" style={{ minHeight: '80vh' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto px-4"
                    >
                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-bold mb-6"
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                lineHeight: '1.2',
                                color: '#FFFFFF',
                                fontFamily: "'Inter', 'IBM Plex Sans', sans-serif",
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Want to explore <span className={gradientText}>more with us?</span>
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-12 text-gray-300 text-xl md:text-2xl"
                        >
                            Get a consultation
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            {/* Primary CTA Button */}
                            <Link to="/contact">
                                <motion.button
                                    whileHover="hover"
                                    initial="initial"
                                    className={`relative group overflow-hidden rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${gradientBg}`}
                                    style={{
                                        color: '#FFFFFF',
                                        padding: '1.25rem 3.5rem',
                                        boxShadow: '0 10px 30px rgba(15, 98, 254, 0.3)',
                                    }}
                                    variants={{
                                        hover: {
                                            scale: 1.05,
                                            boxShadow: '0 15px 40px rgba(15, 98, 254, 0.5)',
                                        }
                                    }}
                                >
                                    <span className="relative z-10">Get a Free Consultation</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            {/* Secondary CTA Button */}
                            <Link to="/contact">
                                <motion.button
                                    whileHover="hover"
                                    className="relative overflow-hidden rounded-full font-bold text-lg transition-all duration-300 bg-transparent border border-white text-white hover:bg-white/10"
                                    style={{
                                        padding: '1.25rem 3.5rem',
                                    }}
                                >
                                    <span>Contact Us</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
