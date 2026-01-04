import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    return (
        <span ref={ref} className="inline-flex">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    // Shared gradient styles
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    const values = [
        {
            icon: Target,
            title: "Mission-Driven",
            description: "Empowering businesses through innovative AI and software solutions"
        },
        {
            icon: Eye,
            title: "Visionary",
            description: "Leading the future of enterprise technology transformation"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Committed to the highest standards of quality and delivery"
        },
        {
            icon: Users,
            title: "Collaborative",
            description: "Building lasting partnerships with our clients"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40 z-10" />
                    <img
                        src="/assets/images/about/hero-team.png"
                        alt="Latex Infotech Team"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container-custom relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`block font-bold tracking-widest uppercase mb-4 text-sm ${gradientText}`}
                        >
                            About Us
                        </motion.span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-1 mb-8 ${gradientBg}`}
                        />
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Pioneering the Future of <br />
                            <span className={gradientText}>
                                Digital Innovation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            We are more than just a technology company. We are architects of digital transformation, bridging the gap between complex data challenges and elegant business solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-gray-900 border-b border-gray-800">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: 50, suffix: "+", label: "Global Clients" },
                            { value: 200, suffix: "+", label: "Projects Delivered" },
                            { value: 98, suffix: "%", label: "Client Retention" },
                            { value: 24, suffix: "/7", label: "Expert Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className={`text-3xl md:text-4xl font-bold mb-2 ${gradientText}`}>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story / Mission */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src="/assets/images/about/mission-vision.png"
                                    alt="Innovation and Vision"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                        <Target className={`w-6 h-6 text-blue-600`} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Focus</div>
                                        <div className="font-bold text-gray-900">Precision & Quality</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${gradientText}`}>Our Mission</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Defining the Future of Enterprise Solutions
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At Latex Infotech, we exist to solve the unsolvable. Since our inception, we have been driven by a singular purpose: to empower organizations with the intelligence and tools they need to thrive in a digital-first world.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We believe that technology should be an enabler, not a barrier. That's why we focus on creating intuitive, powerful, and scalable solutions that drive real business value from day one.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Innovation", desc: "Pushing boundaries daily" },
                                    { title: "Integrity", desc: "Trust in every line of code" },
                                    { title: "Excellence", desc: "Quality without compromise" },
                                    { title: "Collaboration", desc: "Success through partnership" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className={`w-1 h-full rounded-full ${gradientBg}`} />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Office Culture Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Where <span className={gradientText}>Innovation</span> happens</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Cultivating an environment where creativity meets technical expertise.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="grid gap-6">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Users className="text-blue-500" /> Collaborative Spirit
                                    </h3>
                                    <p className="text-gray-600">Our open-plan workspace is designed to foster communication and cross-pollination of ideas between potential teams.</p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Award className="text-blue-500" /> Continuous Learning
                                    </h3>
                                    <p className="text-gray-600">We invest heavily in our team's growth, providing access to the latest tools, workshops, and certifications.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/assets/images/about/office-culture.png"
                                alt="Modern Office Culture"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership/Team Image Banner */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px] group"
                    >
                        <img
                            src="/assets/images/about/leadership.png"
                            alt="Leadership Team"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                            <div className="text-center text-white p-8 max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Led by Industry Veterans</h2>
                                <p className="text-xl text-gray-200 mb-8">Guided by decades of experience in technology, strategy, and business innovation.</p>
                                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                    Meet the Board
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="relative py-28 overflow-hidden bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("/assets/images/about/cta-journey.png")' }}
            >
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                <div className="container-custom text-center relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Journey?</h2>
                        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                            Whether you're looking to partner with us or join our team, we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                className={`px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-white ${gradientBg}`}
                            >
                                Contact Us
                            </motion.a>
                            <motion.a
                                href="/careers"
                                whileHover={{ scale: 1.05 }}
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                View Careers
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
