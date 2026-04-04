'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Features from '../../components/Features';
import POSSidebar from '../../components/POSSidebar';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, History, Award } from 'lucide-react';
import PlantGrowth from '../../components/animation/PlantGrowth';
import Leaves from '../../components/animation/Leaves';

export default function AboutPage() {
  const [cart, setCart] = useState([]);
  const [isPOSOpen, setIsPOSOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('blossom_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onCartClick={() => setIsPOSOpen(true)} />

      {/* Hero-like Header for About with Background Image */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden min-h-[80vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80"
            alt="Greenhouse background"
            className="w-full h-full object-cover"
          />
          {/* linear Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-black/30" />
          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-white/30 to-black/30" />
        </div>

        {/* Floating Animations */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-30 hidden xl:block">
          <PlantGrowth className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-10 w-48 h-48 opacity-20 hidden lg:block">
          <Leaves className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 rounded-full mb-8"
            >
              <Users className="w-4 h-4 text-green-700" />
              <span className="text-sm font-bold text-green-700">Our Story</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Our Roots Run <span className="text-green-600 italic underline decoration-green-600/30 underline-offset-8 transition-all hover:decoration-green-600">Deep</span>.
            </h1>
            <p className="text-gray-600 text-2xl font-medium leading-relaxed mb-12 max-w-2xl">
              For over 40 years, Blossom has been a sanctuary for rare botanical specimens and the horticulturists who love them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl bg-green-50">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                  alt="Founder working in greenhouse"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs"
            >
                <History className="text-green-600 mb-4" size={40} />
                <h3 className="text-xl font-black text-gray-900 mb-2">Since 1984</h3>
                <p className="text-gray-500 font-bold text-sm">Building a greener legacy one seedling at a time.</p>
             </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex gap-6 group p-6 rounded-3xl hover:bg-green-50 transition-colors"
            >
               <div className="shrink-0 p-4 bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Users size={32} />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Family Owned</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Passed down through three generations, Blossom remains a family-operated institution dedicated to the art of greenhouse preservation.
                  </p>
               </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex gap-6 group p-6 rounded-3xl hover:bg-green-50 transition-colors"
            >
               <div className="shrink-0 p-4 bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  <Award size={32} />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Certified Excellence</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Recognized as the premier rare-plant distributor in the tri-state area, we maintain the highest standards of botanical health and genetic purity.
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Features />

      {/* CTA Section with Animation */}
      <section className="py-32 px-6 bg-linear-to-br from-green-600 to-emerald-600 text-white text-center relative overflow-hidden">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-linear(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
         </div>
         
         {/* Floating Animation */}
         <div className="absolute top-10 left-10 w-48 h-48 opacity-20 hidden lg:block">
            <Leaves className="w-full h-full" />
         </div>
         <div className="absolute bottom-10 right-10 w-56 h-56 opacity-20 hidden lg:block">
            <PlantGrowth className="w-full h-full" />
         </div>

         <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Join the Greenhouse</h2>
              <p className="text-white/80 text-xl font-medium mb-12">
                 Be part of a growing community dedicated to the rare, the beautiful, and the botanical.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-green-700 rounded-2xl font-black text-xl shadow-2xl"
              >
                 Visit Our Gallery
              </motion.button>
            </motion.div>
         </div>
      </section>

      <Footer />

      <POSSidebar
        isOpen={isPOSOpen}
        onClose={() => setIsPOSOpen(false)}
        cart={cart}
        updateQuantity={() => {}}
        removeFromCart={() => {}}
        onCheckout={() => {}}
      />
    </main>
  );
}
