'use client';
import { X, Save, Upload, Tag, Package, Ruler, DollarSign, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ProductModal({ isOpen, onClose, onSave, editingProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Indoor',
    price: 0,
    stock: 0,
    size: 'Medium',
    sku: '',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514d?w=400&h=400&fit=crop'
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        name: '',
        category: 'Indoor',
        price: 0,
        stock: 0,
        size: 'Medium',
        sku: '',
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514d?w=400&h=400&fit=crop'
      });
    }
  }, [editingProduct, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: editingProduct ? editingProduct.id : Date.now()
    });
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
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-100"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl glass p-8 z-110 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 text-accent rounded-2xl">
                  {editingProduct ? <Edit2 size={24} /> : <Package size={24} />}
                </div>
                <h3 className="text-2xl font-black text-primary">
                  {editingProduct ? 'Edit Botanical Entry' : 'New Plant Inventory'}
                </h3>
              </div>
              <button onClick={onClose} className="p-2 text-foreground/30 hover:text-red-500 transition-colors">
                <X size={28} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-foreground/50 uppercase tracking-widest">General Information</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"><Tag size={18} /></span>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Plant Name" 
                    className="w-full bg-white/40 border border-primary/10 rounded-xl py-3 pl-12 pr-6 focus:border-primary transition-all font-bold"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"><Package size={18} /></span>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-white/40 border border-primary/10 rounded-xl py-3 pl-12 pr-6 focus:border-primary transition-all font-bold appearance-none cursor-pointer"
                  >
                    {['Indoor', 'Outdoor', 'Succulents', 'Tools', 'Floral'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"><DollarSign size={16} /></span>
                    <input 
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                      placeholder="Price" 
                      className="w-full bg-white/40 border border-primary/10 rounded-xl py-3 pl-12 pr-6 focus:border-primary transition-all font-bold"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"><Box size={16} /></span>
                    <input 
                      type="number"
                      required
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})}
                      placeholder="Stock" 
                      className="w-full bg-white/40 border border-primary/10 rounded-xl py-3 pl-12 pr-6 focus:border-primary transition-all font-bold"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-foreground/50 uppercase tracking-widest">Specifications</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30"><Ruler size={18} /></span>
                  <input 
                    value={formData.size}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                    placeholder="Size (e.g. 10 inch pot)" 
                    className="w-full bg-white/40 border border-primary/10 rounded-xl py-3 pl-12 pr-6 focus:border-primary transition-all font-bold"
                  />
                </div>
                <div className="relative h-32 w-full bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 transition-all overflow-hidden group">
                  <Upload size={32} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-primary/40 uppercase tracking-widest mt-2">Upload Botanical Photo</span>
                  {formData.image && (
                    <img src={formData.image} alt="preview" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                  )}
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4 btn-glow"
                >
                  <Save size={20} />
                  {editingProduct ? 'Update Inventory' : 'Add to Stock'}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper icons
function Edit2(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
      <path d="m15 5 4 4"/>
    </svg>
  );
}
