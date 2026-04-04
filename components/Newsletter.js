'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import PlantGrowth from './animation/PlantGrowth';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 left-10 w-48 h-48 opacity-20 hidden lg:block">
        <PlantGrowth className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-10 w-56 h-56 opacity-20 hidden lg:block">
        <PlantGrowth className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm 
            rounded-full mb-6">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Stay Updated</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get Plant Tips & Exclusive Offers
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join 10,000+ plant lovers receiving weekly care tips, early access to rare drops, 
            and members-only discounts.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Weekly Plant Tips', 'Early Access to Rare Plants', 'Exclusive Discounts', 'Free Shipping Codes'].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 px-4 py-2 bg-white/10 
                backdrop-blur-sm rounded-full">
                <CheckCircle size={14} className="text-green-300" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Email Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <CheckCircle size={48} className="text-green-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
              <p className="text-white/80">Check your inbox for a welcome surprise 🎉</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-900 
                      placeholder:text-gray-400 font-medium focus:outline-none focus:ring-4 
                      focus:ring-white/30 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 
                    text-white rounded-xl font-bold hover:bg-gray-800 transition-all 
                    hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-xs text-white/60 mt-4">
                No spam, ever. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
