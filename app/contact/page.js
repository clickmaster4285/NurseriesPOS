'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import POSSidebar from '../../components/POSSidebar';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Watering from '../../components/animation/Watering';
import PlantGrowth from '../../components/animation/PlantGrowth';
import Success from '../../components/animation/Success';

export default function ContactPage() {
   const [cart, setCart] = useState([]);
   const [isPOSOpen, setIsPOSOpen] = useState(false);
   const [formState, setFormState] = useState('idle');

   useEffect(() => {
      const savedCart = localStorage.getItem('blossom_cart');
      if (savedCart) setCart(JSON.parse(savedCart));
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormState('submitting');
      setTimeout(() => setFormState('success'), 2000);
   };

   return (
      <main className="min-h-screen bg-white">
         <Navbar onCartClick={() => setIsPOSOpen(true)} />

         {/* Header with Background Image */}
         <section className="pt-48 pb-24 px-6 relative overflow-hidden min-h-[80vh] flex items-end">
            {/* Background Image */}
            <div className="absolute inset-0">
               <img
                  src="https://images.unsplash.com/photo-1459411552884-841db988248e?w=1600&q=80"
                  alt="Contact us background"
                  className="w-full h-full object-cover"
               />
               {/* linear Overlays */}
               <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-white/30" />
               <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-transparent" />
            </div>

            {/* Floating Animations */}
            <div className="absolute top-20 right-32 w-56 h-56 opacity-25 hidden xl:block">
               <Watering className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-20 w-40 h-40 opacity-20 hidden lg:block">
               <PlantGrowth className="w-full h-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pb-12">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl"
               >
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 }}
                     className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 rounded-full mb-8"
                  >
                     <Mail className="w-4 h-4 text-green-700" />
                     <span className="text-sm font-bold text-green-700">Get In Touch</span>
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                     Reach Out to our <span className="text-green-600 underline decoration-green-600/30 underline-offset-8">Greenhouse</span>.
                  </h1>
                  <p className="text-gray-600 text-2xl font-medium leading-relaxed mb-4 max-w-xl">
                     Need plant care advice? Tracking a rare specimen? Or just want to say hi?
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Contact Content */}
         <section className="py-32 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">

               {/* Info Side */}
               <div className="flex flex-col gap-12">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-12"
                  >
                     <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-6 group cursor-default p-6 rounded-3xl hover:bg-green-50 transition-colors"
                     >
                        <div className="p-5 bg-linear-to-br from-green-600 to-emerald-600 rounded-3xl text-white shadow-xl shadow-green-500/30">
                           <Mail size={32} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-gray-900 mb-2">Email Address</h3>
                           <p className="text-gray-500 font-bold mb-1">General: sales@clickmasters.pk</p>
                           // <p className="text-gray-500 font-bold">Rare Finds: rare@blossompos.com</p>
                        </div>
                     </motion.div>

                     <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-6 group cursor-default p-6 rounded-3xl hover:bg-green-50 transition-colors"
                     >
                        <div className="p-5 bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl text-white shadow-xl shadow-emerald-500/30">
                           <MapPin size={32} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-gray-900 mb-2">Visit the Office</h3>
                           <p className="text-gray-500 font-bold mb-1">PWD</p>
                           <p className="text-gray-500 font-bold">Islamabad, PK</p>
                        </div>
                     </motion.div>

                     <motion.div
                        whileHover={{ x: 8 }}
                        className="flex items-start gap-6 group cursor-default p-6 rounded-3xl hover:bg-green-50 transition-colors"
                     >
                        <div className="p-5 bg-linear-to-br from-teal-600 to-cyan-600 rounded-3xl text-white shadow-xl shadow-teal-500/30">
                           <Clock size={32} />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-gray-900 mb-2">Office Hours</h3>
                           <p className="text-gray-500 font-bold mb-1">Tue – Fri: 10am – 6pm</p>
                           <p className="text-gray-500 font-bold">Sat – Sun: 11am – 4pm</p>
                        </div>
                     </motion.div>
                  </motion.div>

                  {/* Premium Announcement Card */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mt-12 p-10 relative overflow-hidden bg-linear-to-br from-green-50 to-emerald-50 
                rounded-3xl shadow-2xl border border-green-200"
                  >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-[60px]" />
                     <div className="relative z-10 flex flex-col gap-4">
                        <h3 className="text-2xl font-black text-gray-900 leading-tight">Join Our <span className="text-green-600 underline decoration-green-600/20">Exclusive</span> Growing Community.</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">
                           Subscribe to our catalog and receive a monthly dose of rare plant news and propagation secrets.
                        </p>
                        <button className="flex items-center gap-2 font-black text-green-700 hover:text-green-800 transition-colors">
                           Learn More <ArrowRight size={20} />
                        </button>
                     </div>
                  </motion.div>
               </div>

               {/* Form Side */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
               >
                  <motion.div
                     className="p-12 bg-white shadow-2xl border border-gray-100 rounded-[3rem]"
                  >
                     <div className="flex items-center gap-3 mb-10">
                        <div className="p-3 bg-green-100 rounded-2xl">
                           <MessageSquare size={32} className="text-green-700" />
                        </div>
                        <h2 className="text-3xl font-black text-gray-900">Send a <span className="text-green-600">Seedling</span> Message</h2>
                     </div>

                     <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="flex flex-col gap-2">
                              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Full Name</label>
                              <input
                                 required
                                 type="text"
                                 placeholder="Jane Doe"
                                 className="bg-green-50 border border-gray-200 px-6 py-4 rounded-2xl 
                            focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                            transition-all font-bold placeholder:text-gray-400"
                              />
                           </div>
                           <div className="flex flex-col gap-2">
                              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                              <input
                                 required
                                 type="email"
                                 placeholder="jane@example.com"
                                 className="bg-green-50 border border-gray-200 px-6 py-4 rounded-2xl 
                            focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                            transition-all font-bold placeholder:text-gray-400"
                              />
                           </div>
                        </div>

                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject</label>
                           <select className="bg-green-50 border border-gray-200 px-6 py-4 rounded-2xl 
                      focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                      transition-all font-bold text-gray-700">
                              <option>General Plant Care Advice</option>
                              <option>Ordering Rare Specimens</option>
                              <option>Partnership & Wholesale</option>
                              <option>Community Inquiry</option>
                           </select>
                        </div>

                        <div className="flex flex-col gap-2">
                           <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Gardening Story</label>
                           <textarea
                              rows="5"
                              placeholder="Tell us about your green goals..."
                              className="bg-green-50 border border-gray-200 px-6 py-4 rounded-2xl 
                          focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                          transition-all font-bold resize-none placeholder:text-gray-400"
                           ></textarea>
                        </div>

                        <AnimatePresence mode="wait">
                           {formState === 'success' ? (
                              <motion.div
                                 key="success"
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 className="bg-green-100 text-green-700 py-10 rounded-3xl flex flex-col items-center justify-center font-black"
                              >
                                 <div className="w-32 h-32 mb-4">
                                    <Success className="w-full h-full" />
                                 </div>
                                 Message Rooted Successfully!
                              </motion.div>
                           ) : (
                              <motion.button
                                 key="idle"
                                 type="submit"
                                 disabled={formState === 'submitting'}
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 className={`w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl transition-all ${formState === 'submitting'
                                       ? 'bg-gray-200 text-gray-500 cursor-wait'
                                       : 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-green-500/30 hover:from-green-700 hover:to-emerald-700'
                                    }`}
                              >
                                 {formState === 'submitting' ? 'Sending Roots...' : <>Send Message <Send size={24} /></>}
                              </motion.button>
                           )}
                        </AnimatePresence>
                     </form>
                  </motion.div>
               </motion.div>

            </div>
         </section>

         <Footer />

         <POSSidebar
            isOpen={isPOSOpen}
            onClose={() => setIsPOSOpen(false)}
            cart={cart}
            updateQuantity={() => { }}
            removeFromCart={() => { }}
            onCheckout={() => { }}
         />
      </main>
   );
}
