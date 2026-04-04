'use client';
import { ShoppingCart, Eye, Sparkles, Heart, Star, ArrowUpRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function ProductCard({ product, onAddToCart, onSeeDetails }) {
  const lowestPrice = Math.min(...product.variants.map(v => v.price));
  const totalStock = product.variants.reduce((acc, v) => acc + v.stock, 0);
  const [isHovered, setIsHovered] = useState(false);

  const isLowStock = totalStock <= 5;
  const isVeryLowStock = totalStock <= 2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 
        hover:shadow-xl hover:-translate-y-2 border border-gray-100">
        
        {/* Image Container */}
        <div 
          onClick={() => onSeeDetails(product)}
          className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer"
        >
          {/* Product Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 
            group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top Left - Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 
              text-xs font-semibold rounded-full shadow-sm">
              {product.category}
            </span>
          </div>

          {/* Top Right - Wishlist */}
          <button className="absolute top-3 right-3 p-2 bg-white/95 backdrop-blur-sm rounded-full 
            shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 
            hover:bg-white hover:scale-110">
            <Heart size={16} className="text-gray-600" />
          </button>

          {/* Stock Badge - Bottom Left */}
          {isLowStock && (
            <div className="absolute bottom-3 left-3">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                isVeryLowStock 
                  ? 'bg-red-500 text-white' 
                  : 'bg-amber-400 text-gray-900'
              }`}>
                {isVeryLowStock ? `Only ${totalStock} left!` : 'Selling Fast'}
              </span>
            </div>
          )}

          {/* Quick Add Button - Appears on Hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 
            transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white 
                rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 
                transition-colors active:scale-95"
            >
              <ShoppingCart size={14} />
              Add
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Product Name */}
          <div>
            <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-1 
              group-hover:text-emerald-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{product.size}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  className={`${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-1">({totalStock > 10 ? '50+' : totalStock})</span>
          </div>

          {/* Price & Action Row */}
          <div className="flex items-end justify-between pt-2 border-t border-gray-50">
            {/* Price */}
            <div>
              <span className="text-xs text-gray-400 block">From</span>
              <span className="text-xl font-bold text-gray-900">${lowestPrice.toFixed(2)}</span>
            </div>

            {/* View Details Link */}
            <button
              onClick={() => onSeeDetails(product)}
              className="flex items-center gap-1 text-sm font-medium text-emerald-700 
                hover:text-emerald-800 transition-colors group/link"
            >
              Details
              <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 
                group-hover/link:-translate-y-0.5" />
            </button>
          </div>
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
    <section id="inventory" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Hand-selected rare and indoor specimens for your space
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center justify-between">
          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-full 
                text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 
                transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onSeeDetails={onSeeDetails}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 opacity-30">
              <DotLottieReact
                src="https://lottie.host/47e8315a-17d6-476b-ba34-0919e1ece75c/ia8F7O65zZ.lottie"
                loop
                autoplay
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No plants found</h3>
            <p className="text-gray-500">Try a different search or category</p>
          </div>
        )}
      </div>
    </section>
  );
}
