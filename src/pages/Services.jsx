import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';

const Services = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    // Shared gradient styles
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 min-h-[500px] flex items-center bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed" style={{ backgroundImage: 'url("/assets/images/services-hero.png")' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-0" />
                <div className="container-custom relative z-10 pt-20 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/50 backdrop-blur-sm text-sm font-semibold mb-6"
                        >
                            End-to-End Technology Solutions
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 pt-2">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Empowering your business with comprehensive AI, data, and software engineering capabilities tailored for digital excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="space-y-32">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            const isEven = index % 2 === 0;

                            // Define features based on service ID
                            const featuresMap = {
                                1: ["Predictive Modelling", "Natural Language Processing (NLP)", "Computer Vision Solutions", "Recommendation Systems"],
                                2: ["Enterprise Data Warehousing", "Real-time ETL Pipelines", "Big Data Architecture", "Data Lake Implementation"],
                                3: ["Statistical Analysis", "Pattern Recognition", "Algorithmic Optimization", "Predictive Forecasting"],
                                4: ["Interactive BI Dashboards", "Custom Reporting Suites", "Trend Analysis", "Operational Metrics"],
                                5: ["Full-Stack Development", "Cloud-Native Applications", "API-First Architecture", "Microservices"],
                                6: ["DevOps Automation", "CI/CD Implementation", "Automated Testing", "Code Quality Assurance"]
                            };

                            // Map service IDs to images
                            const imagesMap = {
                                1: "/assets/images/services/ai-ml.png",
                                2: "/assets/images/services/data-engineering.png",
                                3: "/assets/images/services/data-science.png",
                                4: "/assets/images/services/data-analytics.png",
                                5: "/assets/images/services/software-dev.png",
                                6: "/assets/images/services/software-eng.png"
                            };

                            const features = featuresMap[service.id] || ["Strategic Consulting", "Implementation Support", "24/7 Monitoring", "Performance Optimization"];
                            const serviceImage = imagesMap[service.id] || "/assets/images/services/ai-ml.png"; // Fallback


                            // Animation variants for staggered reveal
                            const containerVariants = {
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut",
                                        when: "beforeChildren",
                                        staggerChildren: 0.1
                                    }
                                }
                            };

                            const childVariants = {
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, ease: "easeOut" }
                                }
                            };

                            return (
                                <motion.div
                                    key={service.id}
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } gap-16 items-center`}
                                >
                                    {/* Image Section */}
                                    <motion.div
                                        variants={childVariants}
                                        whileHover={{ scale: 1.02 }}
                                        className="w-full lg:w-1/2 flex justify-center relative group"
                                    >
                                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                                            <img
                                                src={serviceImage}
                                                alt={service.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                            <motion.div
                                                className="absolute bottom-6 left-6 right-6"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                                    <Icon className="w-5 h-5 text-white" />
                                                    <span className="text-white text-sm font-medium">Professional Service</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <div className="lg:w-1/2">
                                        <motion.div variants={childVariants} className="flex items-center gap-4 mb-4">
                                            <span className={`text-5xl font-bold opacity-30 ${gradientText}`}>0{index + 1}</span>
                                            <div className="h-px bg-gray-300 flex-1" />
                                        </motion.div>

                                        <motion.h2 variants={childVariants} className="text-4xl font-bold text-gray-900 mb-6">
                                            {service.title}
                                        </motion.h2>

                                        <motion.p variants={childVariants} className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                                            {service.description}
                                        </motion.p>

                                        <motion.div variants={childVariants} className="mb-8">
                                            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${gradientText}`}>Key Capabilities</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className={`w-2 h-2 rounded-full ${gradientBg}`} />
                                                        <span className="text-gray-700 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        <motion.p variants={childVariants} className="text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
                                            "{service.details}"
                                        </motion.p>

                                        <motion.div variants={childVariants}>
                                            <motion.button
                                                whileHover={{ x: 10 }}
                                                className={`mt-8 font-bold flex items-center gap-2 group text-lg ${gradientText}`}
                                            >
                                                Explore Solutions
                                                <span className={`p-2 rounded-full group-hover:text-white transition-all duration-300 group-hover:${gradientBg.replace('bg-', 'bg-')} bg-blue-50 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500`}>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </span>
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-neutral-gray">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                            Our <span className={gradientText}>Approach</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A proven methodology that delivers results
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "Understanding your business goals and technical requirements"
                            },
                            {
                                step: "02",
                                title: "Strategy",
                                description: "Designing scalable architecture and implementation roadmap"
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Building solutions with agile methodology and best practices"
                            },
                            {
                                step: "04",
                                title: "Deployment",
                                description: "Launching with support, monitoring, and continuous optimization"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="card p-8 hover:shadow-xl transition-shadow duration-300 bg-white rounded-2xl"
                            >
                                <div className={`text-6xl font-bold opacity-20 mb-4 ${gradientText}`}>
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold text-text-dark mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
