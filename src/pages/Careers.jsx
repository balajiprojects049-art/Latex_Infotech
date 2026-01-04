import { motion } from 'framer-motion';
import { Briefcase, Users, Trophy, TrendingUp, Heart, Globe, Zap, Coffee, ArrowRight } from 'lucide-react';

const Careers = () => {
    const benefits = [
        {
            icon: Users,
            title: "Collaborative Culture",
            description: "Work with talented professionals in a supportive environment where ideas flow freely."
        },
        {
            icon: TrendingUp,
            title: "Growth Opportunities",
            description: "Continuous learning paths, certifications, and career development programs."
        },
        {
            icon: Heart,
            title: "Health & Wellness",
            description: "Comprehensive health coverage and wellness initiatives for you and your family."
        },
        {
            icon: Zap,
            title: "Innovation First",
            description: "Work on cutting-edge AI and software solutions that challenge the status quo."
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Contribute to projects that reach millions of users worldwide."
        },
        {
            icon: Coffee,
            title: "Work-Life Balance",
            description: "Flexible working hours and remote options to maintain a healthy lifestyle."
        }
    ];

    const openPositions = [
        {
            title: "Senior Full Stack Developer",
            dept: "Engineering",
            type: "Full-time",
            location: "Remote / Hybrid"
        },
        {
            title: "AI/ML Engineer",
            dept: "Data Science",
            type: "Full-time",
            location: "Headquarters"
        },
        {
            title: "DevOps Specialist",
            dept: "Infrastructure",
            type: "Full-time",
            location: "Remote"
        }
    ];

    // Shared gradient styles
    const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
                    <img
                        src="/assets/images/careers/hero-excitement.png"
                        alt="Latex Infotech Team"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container-custom relative z-20 md:pt-0">
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
                            Careers
                        </motion.span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`h-1 mb-8 ${gradientBg}`}
                        />
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Build the Future <br />
                            <span className={gradientText}>
                                With Us
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            Join a team of innovators, dreamers, and doers. We're shaping the future of technology, one line of code at a time.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className={`mt-10 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-blue-500/30 shadow-lg ${gradientBg}`}
                        >
                            View Open Roles
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Life at Latex Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={`text-sm font-bold uppercase tracking-widest mb-4 ${gradientText}`}>Life at Latex Infotech</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                More Than Just a Workplace
                            </h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that great work comes from happy people. That's why we foster a culture of inclusivity, creativity, and collaboration.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether we're brainstorming in our open lounges or collaborating on complex algorithms, every moment is an opportunity to learn and grow together.
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 bg-blue-50 rounded-xl">
                                    <h4 className={`font-bold text-2xl ${gradientText}`}>4.8/5</h4>
                                    <p className="text-sm text-gray-600">Employee Satisfaction</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-xl">
                                    <h4 className={`font-bold text-2xl ${gradientText}`}>95%</h4>
                                    <p className="text-sm text-gray-600">Retention Rate</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                                <img
                                    src="/assets/images/careers/office-life.png"
                                    alt="Office Life"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Growth & Impact Section */}
            <section className="section-padding bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 blur-3xl rounded-full transform translate-x-1/2" />

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Grow Without Limits</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Your career trajectory is in your hands. We provide the platform; you provide the passion.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800 relative group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/assets/images/careers/growth-path.png"
                                alt="Growth Path"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="p-8 bg-gray-800 relative z-10">
                                <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
                                <p className="text-gray-400">Access to premium courses, conferences, and internal workshops to keep your skills sharp.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800 relative group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                src="/assets/images/careers/global-impact.png"
                                alt="Global Impact"
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="p-8 bg-gray-800 relative z-10">
                                <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
                                <p className="text-gray-400">Work on projects that transcend borders and make a tangible difference in the digital world.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Perks Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Perks & Benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We take care of our own.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
                        <p className="text-gray-600">Ready to make your mark? Check out our current openings.</p>
                    </div>

                    <div className="space-y-4">
                        {openPositions.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> {job.type}</span>
                                        <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {job.location}</span>
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:text-white transition-all group-hover:${gradientBg.replace('bg-', 'bg-')} group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500`}>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl">
                        <p className="text-lg text-gray-700 mb-4">Don't see a role that fits? We're always looking for talent.</p>
                        <a href="mailto:careers@latexinfotech.com" className={`font-bold hover:underline ${gradientText}`}>Send us your resume &rarr;</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
