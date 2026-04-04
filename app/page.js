'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Inventory from '../components/Inventory';
import POSSidebar from '../components/POSSidebar';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import AnimationShowcase from '../components/AnimationShowcase';

// Enhanced Mock Data for Storefront
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor',
    basePrice: 45.00,
    size: 'Large',
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?w=800&q=80',
      'https://images.unsplash.com/photo-1637967886160-fd7893769ec4?w=800&q=80'
    ],
    description: 'The Swiss Cheese plant is a classic favorite for any home. Its iconic split leaves create a lush tropical feel that thrives in indirect light.',
    variants: [
      { id: '1-s', name: '4" Nursery Pot', price: 25.00, stock: 15 },
      { id: '1-m', name: '6" Ceramic Pot', price: 45.00, stock: 12 },
      { id: '1-l', name: '10" Designer Pot', price: 85.00, stock: 5 }
    ],
    care: { light: 'Bright Indirect', water: 'Every 1-2 Weeks', humidity: 'High' }
  },
  {
    id: 2,
    name: 'Snake Plant Zeylanica',
    category: 'Indoor',
    basePrice: 25.00,
    size: 'Medium',
    images: [
      'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=800&q=80',
      'https://images.unsplash.com/photo-1596547609623-7a918231bb83?w=800&q=80'
    ],
    description: 'Virtually indestructible, the Sansevieria is the perfect companion for beginners. It filters indoor air and survives in low light.',
    variants: [
      { id: '2-s', name: '4" Nursery Pot', price: 15.00, stock: 40 },
      { id: '2-m', name: '6" Nursery Pot', price: 25.00, stock: 35 },
      { id: '2-l', name: '8" Planter Box', price: 55.00, stock: 10 }
    ],
    care: { light: 'Low to Bright', water: 'Every 3-4 Weeks', humidity: 'Any' }
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor',
    basePrice: 85.00,
    size: 'Extra Large',
    images: [
      'https://images.unsplash.com/photo-1545239351-ef35f43d514d?w=800&q=80',
      'https://images.unsplash.com/photo-1592150621344-22d50115deab?w=800&q=80'
    ],
    description: 'A striking statement piece with massive violin-shaped leaves. It demands attention and a consistent care routine.',
    variants: [
      { id: '3-m', name: '8" Decorative Pot', price: 85.00, stock: 8 },
      { id: '3-xl', name: '3-Feet Tree (12" Pot)', price: 175.00, stock: 3 }
    ],
    care: { light: 'Bright Filtered', water: 'Weekly', humidity: 'Moderate' }
  },
  {
    id: 4,
    name: 'Rare Alocasia Frydek',
    category: 'Rare',
    basePrice: 65.00,
    size: 'Medium',
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
      'https://images.unsplash.com/photo-1637967886160-fd7893769ec4?w=800&q=80'
    ],
    description: 'Features velvet-textured dark green leaves with contrasting white veins. A collector\'s dream plant.',
    variants: [
      { id: '4-s', name: 'Baby Frydek (4")', price: 45.00, stock: 4 },
      { id: '4-m', name: 'Full Foliage (6")', price: 65.00, stock: 3 }
    ],
    care: { light: 'Shaded Bright', water: 'Keep Moist', humidity: 'Very High' }
  },
  {
    id: 5,
    name: 'Peace Lily Wallisi',
    category: 'Floral',
    basePrice: 35.00,
    size: 'Medium',
    images: [
      'https://images.unsplash.com/photo-1593482815504-2428b7e2840c?w=800&q=80',
      'https://images.unsplash.com/photo-1596547609623-7a918231bb83?w=800&q=80'
    ],
    description: 'Elegant white spaths that signify peace. It is excellent at cleaning air and tells you exactly when it needs water.',
    variants: [
      { id: '5-m', name: 'Standard 6" Pot', price: 35.00, stock: 18 },
      { id: '5-l', name: 'Premium 8" Pot', price: 55.00, stock: 7 }
    ],
    care: { light: 'Medium Indirect', water: 'Bi-Weekly', humidity: 'Moderate' }
  },
  {
    id: 6,
    name: 'Golden Barrel Cactus',
    category: 'Succulents',
    basePrice: 22.00,
    size: 'Small',
    images: [
      'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=800&q=80',
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800&q=80'
    ],
    description: 'A structural centerpiece for any shelf. Slow-growing and requires minimal intervention.',
    variants: [
      { id: '6-s', name: 'Mini 3" Pot', price: 12.00, stock: 25 },
      { id: '6-m', name: 'Golden Barrel (6")', price: 22.00, stock: 14 }
    ],
    care: { light: 'Full Sun', water: 'Monthly', humidity: 'Low' }
  },
  { id: 7, name: 'String of Pearls', category: 'Succulents', basePrice: 18.00, size: 'Small', images: ['https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80'], description: 'Trailing beads of green beauty.', variants: [{ id: '7-s', name: '4" Hanging Pot', price: 18, stock: 20 }], care: { light: 'Bright', water: 'Sparse', humidity: 'Low' } },
  { id: 8, name: 'Calathea Orbifolia', category: 'Indoor', basePrice: 40.00, size: 'Medium', images: ['https://images.unsplash.com/photo-1593482815504-2428b7e2840c?w=800&q=80'], description: 'Silver-striped architectural leaves.', variants: [{ id: '8-s', name: '6" Pot', price: 40, stock: 6 }], care: { light: 'Shade', water: 'Regular', humidity: 'High' } },
  { id: 9, name: 'Bird of Paradise', category: 'Tropical', basePrice: 95.00, size: 'Large', images: ['https://images.unsplash.com/photo-1597055181300-e3633a917c9c?w=800&q=80'], description: 'The ultimate tropical statement plant.', variants: [{ id: '9-l', name: '10" Pot', price: 95, stock: 4 }], care: { light: 'Direct', water: 'Weekly', humidity: 'Moderate' } },
  { id: 10, name: 'Philodendron Pink Princess', category: 'Rare', basePrice: 125.00, size: 'Medium', images: ['https://images.unsplash.com/photo-1637967886160-fd7893769ec4?w=800&q=80'], description: 'Stunning pink variegation. Collector\'s Rarity.', variants: [{ id: '10-s', name: '4" Starter', price: 85, stock: 2 }, { id: '10-m', name: '6" Mature', price: 125, stock: 1 }], care: { light: 'Bright Indirect', water: 'When Dry', humidity: 'High' } },
  { id: 11, name: 'Organic Neem Spray', category: 'Supplies', basePrice: 15.00, size: '500ml', images: ['https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80'], description: 'Keep your sanctuary pest-free naturally.', variants: [{ id: '11-s', name: '500ml Spray', price: 15, stock: 100 }], care: { light: 'N/A', water: 'N/A', humidity: 'N/A' } },
  { id: 12, name: 'Terra Cotta Set', category: 'Supplies', basePrice: 30.00, size: 'Set of 3', images: ['https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80'], description: 'Authentic breathable Italian clay pots.', variants: [{ id: '12-s', name: 'Professional Set', price: 30, stock: 20 }], care: { light: 'N/A', water: 'N/A', humidity: 'N/A' } },
];

export default function Home() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isPOSOpen, setIsPOSOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load from LocalStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('blossom_products');
    const savedCart = localStorage.getItem('blossom_cart');
    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('blossom_products', JSON.stringify(products));
    localStorage.setItem('blossom_cart', JSON.stringify(cart));
  }, [products, cart]);

  // Cart Actions (Corrected for Variants)
  const addToCart = (product, variant) => {
    const cartItemId = `${product.id}-${variant.id}`;
    const existing = cart.find(item => item.cartId === cartItemId);

    if (existing) {
      setCart(cart.map(item =>
        item.cartId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, {
        ...product,
        cartId: cartItemId,
        selectedVariant: variant,
        price: variant.price,
        quantity: 1
      }]);
    }
    setIsPOSOpen(true);
  };

  const updateQuantity = (cartId, delta) => {
    setCart(cart.map(item => {
      if (item.cartId === cartId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handleCheckout = (sale) => {
    // Update Inventory Stock (Match variants)
    const updatedProducts = products.map(p => {
      const soldItemsForThisProduct = sale.items.filter(i => i.id === p.id);
      if (soldItemsForThisProduct.length > 0) {
        const updatedVariants = p.variants.map(v => {
          const soldVariant = soldItemsForThisProduct.find(si => si.selectedVariant.id === v.id);
          if (soldVariant) {
            return { ...v, stock: Math.max(0, v.stock - soldVariant.quantity) };
          }
          return v;
        });
        return { ...p, variants: updatedVariants };
      }
      return p;
    });

    setProducts(updatedProducts);
    setCart([]);
    // Global notification or toast could go here
  };

  return (
    <main className="min-h-screen">
      <Navbar onCartClick={() => setIsPOSOpen(true)} />

      <Hero onGetStarted={() => document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })} />

      <Features />

      <Inventory
        products={products}
        onAddToCart={(p) => addToCart(p, p.variants[0])} // Default to first variant if clicked from grid
        onSeeDetails={(p) => setSelectedProduct(p)}
      />

      <Testimonials />

      <AnimationShowcase />

      <div id="contact">
        <Footer />
      </div>

      {/* Detail Overlay */}
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      {/* POS Cart Sidebar */}
      <POSSidebar
        isOpen={isPOSOpen}
        onClose={() => setIsPOSOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
