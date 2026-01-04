import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    // Shared gradient styles
    const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500";
    const gradientBg = "bg-gradient-to-r from-blue-600 to-cyan-500";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/40" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-4"
                    >
                        <h1 className={`text-9xl md:text-[12rem] font-bold leading-none ${gradientText}`}>
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Page Not Found
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            Oops! The page you're looking for doesn't exist or has been moved.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${gradientBg}`}
                            >
                                <Home className="w-5 h-5" />
                                Go to Homepage
                            </motion.button>
                        </Link>

                        <motion.button
                            onClick={() => window.history.back()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border text-gray-700 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </motion.button>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
