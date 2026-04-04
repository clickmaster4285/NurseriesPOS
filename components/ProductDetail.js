'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Droplets, Sun, Wind, ChevronLeft, ChevronRight, Check, Package, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProductDetail({ product, onClose, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  // Set initial variant when product changes
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-primary/20 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-6xl bg-white/90 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-200"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 bg-white/50 backdrop-blur-md rounded-full text-primary hover:bg-white transition-all shadow-xl"
          >
            <X size={24} strokeWidth={3} />
          </button>

          {/* Left: Image Gallery */}
          <div className="w-full md:w-1/2 relative bg-primary/5 flex flex-col">
            <div className="relative flex-1 overflow-hidden group">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)}
                    className="p-3 bg-white/80 rounded-full text-primary pointer-events-auto hover:bg-white shadow-xl"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setSelectedImage((prev) => (prev + 1) % product.images.length)}
                    className="p-3 bg-white/80 rounded-full text-primary pointer-events-auto hover:bg-white shadow-xl"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="p-6 flex gap-3 overflow-x-auto bg-white/30 backdrop-blur-sm">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === idx ? 'border-primary shadow-lg scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content & Selection */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-white">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-accent font-black tracking-[0.2em] mb-4 uppercase text-xs">
                <Leaf size={14} />
                {product.category} COLLECTION
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-none mb-6">
                {product.name}
              </h2>
              <p className="text-foreground/50 text-lg leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Care Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/5 text-center">
                <Sun className="mx-auto text-primary mb-2" size={24} />
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Light</div>
                <div className="font-bold text-xs text-primary">{product.care.light}</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/5 text-center">
                <Droplets className="mx-auto text-primary mb-2" size={24} />
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Watering</div>
                <div className="font-bold text-xs text-primary">{product.care.water}</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/5 text-center">
                <Wind className="mx-auto text-primary mb-2" size={24} />
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Humidity</div>
                <div className="font-bold text-xs text-primary">{product.care.humidity}</div>
              </div>
            </div>

            {/* Variant Selector */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <label className="text-xs font-black uppercase tracking-widest text-foreground/40">Select Pot Size</label>
                {selectedVariant && (
                   <span className={`text-xs font-bold ${selectedVariant.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {selectedVariant.stock} units in stock
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex-1 min-w-35 px-6 py-4 rounded-2xl border-2 transition-all text-left group ${
                      selectedVariant?.id === v.id
                        ? 'border-primary bg-primary text-white shadow-xl shadow-primary/20'
                        : 'border-primary/5 hover:border-primary/20 bg-white'
                    }`}
                  >
                    <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                      selectedVariant?.id === v.id ? 'text-white/60' : 'text-foreground/30'
                    }`}>
                      {v.name.split(' ')[0]}
                    </div>
                    <div className="font-black text-sm mb-1">{v.name}</div>
                    <div className={`font-black text-lg ${
                      selectedVariant?.id === v.id ? 'text-white' : 'text-primary'
                    }`}>
                      ${v.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Group */}
            <div className="flex gap-4 sticky bottom-0 bg-white pt-6 border-t border-primary/5">
              <button 
                onClick={handleAddToCart}
                disabled={!selectedVariant || selectedVariant.stock === 0}
                className={`flex-2 flex items-center justify-center gap-4 py-5 rounded-3xl font-black text-xl shadow-2xl transition-all active:scale-95 ${
                  selectedVariant?.stock > 0
                    ? isAdded ? 'bg-green-500 text-white' : 'bg-primary text-white shadow-primary/20 btn-glow'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={24} strokeWidth={3} />
                    Added to Nursery
                  </>
                ) : (
                  <>
                    <ShoppingCart size={24} />
                    Collect Specimen
                  </>
                )}
              </button>
              
              <div className="flex-1 flex flex-col items-center justify-center bg-primary/5 rounded-3xl border border-primary/5">
                <Package className="text-primary mb-1" size={20} />
                <div className="text-[10px] font-black uppercase tracking-tight text-primary/40 leading-none">FREE SHIP</div>
                <div className="text-[10px] font-black uppercase tracking-tight text-primary/40 leading-none">OVER $50</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
