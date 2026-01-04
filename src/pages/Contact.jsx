import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        error: false
    });

    const [errors, setErrors] = useState({});

    // Shared gradient styles
    const gradientText = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";


    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormStatus({ submitted: true, success: true, error: false });
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setFormStatus({ submitted: false, success: false, error: false });
            }, 3000);
        } else {
            setFormStatus({ submitted: false, success: false, error: true });
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Call Us',
            description: "Speak directly with our support team",
            value: '+1 (515) 599-9131',
            href: 'tel:+15155999131',
            color: 'bg-blue-500'
        },
        {
            icon: Mail,
            title: 'Email Us',
            description: "We usually reply within 24 hours",
            value: 'info@latexinfotech.com',
            href: 'mailto:info@latexinfotech.com',
            color: 'bg-indigo-500'
        },
        {
            icon: Clock,
            title: 'Working Hours',
            description: "Available from Mon-Fri",
            value: '9:00 AM - 6:00 PM EST',
            href: null,
            color: 'bg-purple-500'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply z-10" />
                    <img
                        src="/assets/images/contact/hero-connect.png"
                        alt="Global Connection"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container-custom relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Let's Start a <br />
                            <span className={gradientText}>
                                Conversation
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Whether you have a question about our services, pricing, or just want to say hello, we're ready to answer all your questions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Get in Touch Grid */}
            <section className="py-20 bg-gray-50 -mt-20 relative z-30">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 mb-4">{item.description}</p>

                                    {item.href ? (
                                        <a href={item.href} className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2">
                                            {item.value} <ArrowRight className="w-4 h-4" />
                                        </a>
                                    ) : (
                                        <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Main Contact Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Office Location & Details */}
                        <motion.div
                            className="lg:w-1/2 space-y-12"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Headquarters</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Experience innovation firsthand. Our modern office is designed to foster creativity and collaboration. Come have a coffee with us!
                                </p>

                                <div className="rounded-3xl overflow-hidden shadow-2xl h-80 relative group">
                                    <img
                                        src="/assets/images/contact/modern-office.png"
                                        alt="Office Building"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-lg">Latex Infotech HQ</h4>
                                                <p className="text-gray-300 text-sm">6701 CORPORATE DR STE N, JOHNSTON, 50131, IA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex items-center gap-6">
                                <img
                                    src="/assets/images/contact/customer-support.png"
                                    alt="Support Agent"
                                    className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
                                />
                                <div>
                                    <blockquote className="text-lg font-medium text-blue-900 italic mb-2">
                                        "We believe in building relationships, not just client lists."
                                    </blockquote>
                                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">- Customer Success Team</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:w-1/2 w-full"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
                                    <p className="text-gray-500">Fill out the form below and we'll be in touch shortly.</p>
                                </div>

                                <AnimatePresence>
                                    {formStatus.success && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                            <p className="text-green-800 font-medium">Message sent successfully! We'll allow 24 hours.</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-5 py-4 bg-gray-50 border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                                                placeholder="Your Full Name"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-5 py-4 bg-gray-50 border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                                                placeholder="your.email@company.com"
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-gray-50 border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all`}
                                            placeholder="Your Phone Number"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-5 py-4 bg-gray-50 border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none`}
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group ${gradientBg}`}
                                    >
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
