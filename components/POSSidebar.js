'use client';
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard, ChevronRight, CheckCircle2, Leaf, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function POSSidebar({ isOpen, onClose, cart, updateQuantity, removeFromCart, onCheckout }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onCheckout({
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toISOString()
    });

    setIsProcessing(false);
    setIsSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1b5e20', '#4c8c4a', '#8d6e63']
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/20 backdrop-blur-md z-110"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-120 flex flex-col border-l border-primary/5"
          >
            {/* Header */}
            <div className="p-8 border-b border-primary/5 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-xl">
                  <ShoppingCart className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-primary leading-none">Your Nursery</h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mt-1">Collecting {cart.length} specimens</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-primary/10 rounded-full transition-colors text-primary"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {cart.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-10"
                  >
                    <div className="p-8 bg-primary/5 rounded-full text-primary/20 mb-6 scale-150">
                      <Leaf size={48} strokeWidth={1} />
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-2">Sanctuary is Empty</h3>
                    <p className="text-foreground/40 font-bold max-w-xs mx-auto">Browse the gallery to select your next botanical companion.</p>
                  </motion.div>
                ) : (
                  cart.map((item) => (
                    <motion.div 
                      key={item.cartId}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-4 bg-white border border-primary/5 rounded-3xl mb-4 flex gap-4 group hover:border-primary/20 transition-all shadow-sm"
                    >
                      <div className="w-20 h-24 bg-primary/5 rounded-2xl overflow-hidden shrink-0">
                        <img src={item.images[0]} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h4 className="font-black text-primary leading-tight line-clamp-1">{item.name}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            <Box size={10} className="text-accent" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-accent">{item.selectedVariant.name}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-black text-lg text-primary">${item.price.toFixed(2)}</span>
                          <div className="flex items-center gap-3 bg-primary/5 rounded-xl px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.cartId, -1)}
                              className="p-1 hover:bg-white rounded-lg transition-colors text-primary"
                            >
                              <Minus size={14} strokeWidth={3} />
                            </button>
                            <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, 1)}
                              className="p-1 hover:bg-white rounded-lg transition-colors text-primary"
                            >
                              <Plus size={14} strokeWidth={3} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 transition-all rounded-xl self-start"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-primary/5 shadow-2xl">
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm font-bold text-foreground/40">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-foreground/40">
                    <span>Eco-Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-primary pt-3 border-t border-primary/5">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full bg-green-500 py-6 rounded-3xl flex flex-col items-center justify-center text-white"
                    >
                      <div className="w-24 h-24 mb-2">
                        <DotLottieReact
                          src="https://lottie.host/47e8315a-17d6-476b-ba34-0919e1ece75c/ia8F7O65zZ.lottie"
                          loop={false}
                          autoplay
                        />
                      </div>
                      <span className="font-black text-xl">Sanctuary Secured</span>
                      <span className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Order confirmed</span>
                    </motion.div>
                  ) : (
                    <motion.button 
                      key="active"
                      onClick={handleCheckout}
                      disabled={isProcessing}
                      className={`w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl transition-all active:scale-95 ${
                        isProcessing ? 'bg-primary/20 text-primary cursor-wait' : 'bg-primary text-white shadow-primary/20 btn-glow'
                      }`}
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard size={24} />
                          Secure & Checkout
                          <ChevronRight size={20} />
                        </>
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
                
                <p className="text-center text-[10px] font-black uppercase tracking-widest text-primary/30 mt-6 flex items-center justify-center gap-2">
                  <Leaf size={10} />
                  Plastic-free packaging included
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
