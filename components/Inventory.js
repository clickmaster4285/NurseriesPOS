'use client';
import { ShoppingCart, Filter, Search, ChevronDown, Tag, Box, Eye, Sparkles, Heart, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PlantGrowth from './animation/PlantGrowth';
import Watering from './animation/Watering';
import Leaves from './animation/Leaves';

export function ProductCard({ product, onAddToCart, onSeeDetails }) {
  const lowestPrice = Math.min(...product.variants.map(v => v.price));
  const totalStock = product.variants.reduce((acc, v) => acc + v.stock, 0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative flex flex-col h-full"
    >
      {/* Main Card */}
      <div className="relative bg-white rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl 
        hover:shadow-green-500/10 transition-all duration-500 border border-gray-100 h-full">
        
        {/* Animated Background Glow */}
        <div className={`absolute inset-0 bg-linear-to-br from-green-50 via-emerald-50 to-lime-50 
          opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Category & Stock Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-4 py-2 bg-linear-to-r from-green-600 to-emerald-600 text-white 
              rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
          >
            {product.category}
          </motion.div>
          {totalStock < 10 && (
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-4 py-2 bg-linear-to-r from-red-500 to-rose-500 text-white 
              rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg"
            >
              Low Stock
            </motion.div>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
          className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full 
            shadow-lg hover:bg-white transition-all group/wishlist"
        >
          <Heart size={18} className="text-gray-400 group-hover/wishlist:text-red-500 transition-colors" />
        </motion.button>

        {/* Image / Gallery Preview */}
        <div
          onClick={() => onSeeDetails(product)}
          className="relative aspect-4/5 overflow-hidden cursor-pointer bg-linear-to-br from-green-50 to-emerald-50"
        >
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
          
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 gap-4 relative z-10 bg-white group-hover:bg-transparent transition-colors duration-500">
          <div className="space-y-2">
            <h3 className="text-xl font-black tracking-tight text-gray-900 leading-tight 
              group-hover:text-green-700 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.size}</span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-bold text-green-600">{totalStock} in stock</span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Starting at</span>
              <span className="text-3xl font-black bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ${lowestPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-2">
               <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onSeeDetails(product)}
                className="p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 
                  transition-all shadow-md hover:shadow-lg"
                title="See Details"
              >
                <Eye size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onAddToCart(product)}
                className="p-3 bg-linear-to-r from-green-600 to-emerald-600 text-white 
                  rounded-xl hover:from-green-700 hover:to-emerald-700 shadow-lg 
                  shadow-green-500/30 transition-all"
                title="Quick Add to Cart"
              >
                <ShoppingCart size={20} />
              </motion.button>
            </div>
          </div>

          {/* Detailed CTA */}
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
             <motion.button
              whileHover={{ scale: 1.02, x: 4 }}
              onClick={() => onSeeDetails(product)}
              className="w-full py-3 bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 
                text-green-700 rounded-xl font-bold text-xs uppercase tracking-widest 
                hover:from-green-100 hover:to-emerald-100 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              View Botanical Specs
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Inventory({ products, onAddToCart, onSeeDetails }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Indoor', 'Rare', 'Tropical', 'Succulents', 'Floral', 'Supplies'];

  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                          p.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="inventory" className="py-32 px-6 bg-linear-to-b from-white to-green-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Living Collection</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            The Curated <span className="text-green-600 italic">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Hand-selected rare and indoor specimens, delivered from our greenhouse to your sanctuary.
          </p>
        </div>

        {/* Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 mb-20 flex flex-col lg:flex-row gap-6 items-center justify-between 
            sticky top-24 z-20 shadow-2xl shadow-black/5 rounded-3xl"
        >
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                  filter === cat
                    ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-xl shadow-green-500/30'
                    : 'bg-white text-gray-500 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full lg:w-1/3 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-green-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search the rare collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/50 border border-gray-200 rounded-2xl py-4 pl-14 pr-6 
                focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                transition-all font-bold text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard
                  product={p}
                  onAddToCart={onAddToCart}
                  onSeeDetails={onSeeDetails}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-green-200 shadow-lg"
          >
            <div className="mb-6 inline-flex p-8 bg-green-50 rounded-4xl w-48 h-48 mx-auto items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/47e8315a-17d6-476b-ba34-0919e1ece75c/ia8F7O65zZ.lottie"
                loop
                autoplay
              />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">No Specimens Found</h3>
            <p className="text-gray-500 font-bold max-w-md mx-auto">
              Our botanical search didn't harvest any results. Try adjusting your filters or keyword.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
