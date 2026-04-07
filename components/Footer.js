'use client';
import { Leaf, Globe, Share2, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white/90 pt-20 pb-10 px-6 mt-20 relative overflow-hidden">
      {/* Decorative background leaf */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
        <Leaf size={400} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-xl">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Blossom<span className="text-accent-light">POS</span>
            </span>
          </div>
          <p className="text-white/60 text-lg leading-relaxed">
            Revolutionizing nursery management with cutting-edge technology and a passion for plants.
          </p>
          <div className="flex gap-4">
            {[Globe, Share2, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all hover:scale-110 active:scale-95"
                href="#"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-8 text-white">Navigation</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            {['Home', 'Inventory', 'POS Terminal', 'Reports', 'Settings'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary-light hover:translate-x-2 transition-all inline-block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-8 text-white">Contact Us</h4>
          <ul className="flex flex-col gap-5 text-white/60">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-primary" />
              <span>PWD, Islamabad, Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary" />
              <span>+92 (332) 5394285</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <span>sales@clickmasters.pk</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-8 text-white">Newsletter</h4>
          <p className="text-white/60 mb-6 font-medium">Subscribe for garden tips and software updates.</p>
          <div className="relative group">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-all text-white pr-16"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-light px-4 rounded-xl transition-all font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-medium">
        <p>© 2026 Blossom POS Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
