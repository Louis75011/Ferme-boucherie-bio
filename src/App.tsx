/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ShoppingBasket, 
  Search, 
  User, 
  Menu, 
  Facebook, 
  Instagram, 
  Twitter, 
  Share2, 
  Truck, 
  ShieldCheck, 
  Snowflake, 
  CreditCard,
  ChevronRight,
  ArrowRight,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';

// --- Types ---
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  { id: 1, name: "Tournedos de Boeuf Bio (200g)", price: 11.39, image: "https://picsum.photos/seed/beef1/400/400", category: "Boeuf", isNew: true },
  { id: 2, name: "Entrecôte de Boeuf Bio (400g)", price: 22.78, image: "https://picsum.photos/seed/beef2/400/400", category: "Boeuf" },
  { id: 3, name: "Faux Filet de Boeuf Bio (300g)", price: 16.48, image: "https://picsum.photos/seed/beef3/400/400", category: "Boeuf" },
  { id: 4, name: "Chipolatas de Porc Fermier (1kg)", price: 27.95, image: "https://picsum.photos/seed/pork1/400/400", category: "Porc", isNew: true },
  { id: 5, name: "Veau Fermier Bio - Rôti (800g)", price: 42.95, image: "https://picsum.photos/seed/veal1/400/400", category: "Veau" },
  { id: 6, name: "Poulet Fermier Bio Entier", price: 18.50, image: "https://picsum.photos/seed/chicken1/400/400", category: "Volailles" },
];

const CATEGORIES = [
  { name: "Volailles Bio", image: "https://picsum.photos/seed/chicken/600/400", count: "12 produits" },
  { name: "Boeuf Français", image: "https://picsum.photos/seed/cow/600/400", count: "24 produits" },
  { name: "Veau Fermier", image: "https://picsum.photos/seed/calf/600/400", count: "8 produits" },
  { name: "Porc Fermier", image: "https://picsum.photos/seed/pig/600/400", count: "15 produits" },
];

// --- Components ---

const PromoBanner = () => (
  <div className="bg-green-800 text-white py-2 px-4 text-center text-sm font-medium relative overflow-hidden">
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: '-100%' }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="whitespace-nowrap inline-block"
    >
      🥩 OFFRE PROMOTIONNELLE BEAUVINE : -15% sur toute la gamme Boeuf d'Herbe Bio ce weekend ! • Livraison offerte dès 250€ d'achat • Qualité Fermière Directe • 
    </motion.div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white shadow-lg">
              <ShoppingBasket size={24} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green-800 leading-tight">LA FERME BIO</h1>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">De Normandie</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-green-500 transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex p-2 text-gray-600 hover:text-green-700 transition-colors" title="Partager">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700 transition-colors">
              <User size={22} />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700 transition-colors relative">
              <ShoppingBasket size={22} />
              <span className="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </button>
            <button className="md:hidden p-2 text-gray-600">
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mt-4 gap-8 border-t border-gray-100 pt-4">
          {['ACCUEIL', 'VOLAILLES', 'BOEUF', 'VEAU', 'PORC', 'ÉPICERIE', 'NOUS TROUVER'].map((item) => (
            <a key={item} href="#" className="text-xs font-bold text-gray-600 hover:text-green-700 tracking-wider transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[600px] overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://picsum.photos/seed/farm-hero/1920/1080" 
        alt="Normandie Farm" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-3 py-1 bg-green-600 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
          Direct Producteur
        </span>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Le Goût Vrai de la <br />
          <span className="text-green-400">Normandie Bio</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100 font-light max-w-lg">
          Découvrez nos viandes d'exception, élevées en plein air dans le respect de l'animal et de la terre.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-lg flex items-center gap-2">
            VOIR LA BOUTIQUE <ArrowRight size={18} />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 transition-all">
            NOTRE HISTOIRE
          </button>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
    </motion.div>
  </section>
);

const CategoryCard: React.FC<{ category: { name: string; image: string; count: string } }> = ({ category }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md"
  >
    <img 
      src={category.image} 
      alt={category.name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-1">{category.count}</p>
      <h3 className="text-2xl font-bold">{category.name}</h3>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Découvrir <ChevronRight size={16} />
      </div>
    </div>
  </motion.div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className="relative aspect-square overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {product.isNew && (
        <span className="absolute top-4 left-4 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">NOUVEAU</span>
      )}
      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={18} />
      </button>
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-full py-2 bg-green-700 text-white text-xs font-bold rounded-lg shadow-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
          <ShoppingBasket size={14} /> AJOUTER AU PANIER
        </button>
      </div>
    </div>
    <div className="p-4">
      <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">{product.category}</p>
      <h4 className="text-sm font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h4>
      <div className="flex justify-between items-center">
        <span className="text-lg font-black text-gray-900">{product.price.toFixed(2)}€</span>
        <span className="text-[10px] text-gray-400 font-medium">Prix TTC</span>
      </div>
    </div>
  </motion.div>
);

const TrustSection = () => (
  <section className="bg-white border-y border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { icon: ShieldCheck, title: "Traçabilité", desc: "100% de notre ferme" },
        { icon: Snowflake, title: "Chaîne du Froid", desc: "Respectée par Chronofresh" },
        { icon: CreditCard, title: "Paiement Sécurisé", desc: "Transactions 100% sûres" },
        { icon: Truck, title: "Livraison Domicile", desc: "Partout en France" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center group">
          <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-700 mb-4 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
            <item.icon size={28} />
          </div>
          <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
              <ShoppingBasket size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">LA FERME BIO</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Producteur de viandes biologiques en Normandie depuis 25 ans. Nous livrons le meilleur de notre terroir directement chez vous.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h6>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-colors">Nos Produits</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">La Ferme</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Livraison</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Informations</h6>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-green-500 transition-colors">Mentions Légales</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">CGV</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-green-500 transition-colors">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Newsletter</h6>
          <p className="text-sm mb-4">Recevez nos offres et actualités de la ferme.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="flex-1 bg-white/5 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              OK
            </button>
          </form>
          <div className="mt-8 flex items-center gap-2 text-xs">
            <Share2 size={14} /> Partager la boutique
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2026 LA FERME BIO DE NORMANDIE. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex gap-6">
          <span>PAIEMENT SÉCURISÉ</span>
          <span>LIVRAISON CHRONOFRESH</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-green-100 selection:text-green-900">
      <PromoBanner />
      <Navbar />
      
      <main>
        <Hero />

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Catégories</h2>
              <p className="text-gray-500">Le meilleur de notre terroir sélectionné pour vous.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold text-green-700 hover:gap-3 transition-all">
              TOUT VOIR <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={i} category={cat} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-green-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Sélection du moment</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nouveaux Produits Bio</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-10 py-4 border-2 border-green-700 text-green-700 font-bold rounded-xl hover:bg-green-700 hover:text-white transition-all">
                DÉCOUVRIR TOUS NOS PRODUITS
              </button>
            </div>
          </div>
        </section>

        {/* Promo Section Beauvine */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="bg-green-900 rounded-[2rem] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://picsum.photos/seed/beef-texture/1200/800" 
                alt="Texture" 
                className="w-full h-full object-cover mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative grid md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 border border-white/20">
                  Offre Limitée
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  La Qualité <span className="italic text-green-400">Beauvine</span> <br />
                  à Prix Fermier
                </h2>
                <p className="text-green-100 text-lg mb-8 leading-relaxed">
                  Profitez de notre offre exceptionnelle sur le Boeuf d'Herbe Bio de Normandie. Une viande tendre, persillée et riche en goût.
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  <button className="px-8 py-4 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition-all shadow-xl">
                    PROFITER DE L'OFFRE
                  </button>
                  <div className="text-white">
                    <p className="text-2xl font-black">-15%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Sur la sélection</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img 
                    src="https://picsum.photos/seed/steak/800/800" 
                    alt="Beauvine Beef" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-green-900 rotate-12">
                  <span className="text-xs font-bold">BIO</span>
                  <span className="text-xl font-black">AB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSection />
      </main>

      <Footer />
    </div>
  );
}
