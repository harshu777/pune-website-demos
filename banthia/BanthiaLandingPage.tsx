'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Gem, 
  Scissors, 
  ShieldCheck, 
  Navigation, 
  Menu, 
  X, 
  ExternalLink 
} from 'lucide-react';

export default function BanthiaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#1F1A1C] font-sans antialiased selection:bg-[#6B1E2B] selection:text-[#FFF8F3]">
      
      {/* 1. TASTEFUL NOTIFICATION RIBBON (Bespoke Concept Header) */}
      <aside className="relative z-50 bg-[#2D0B12] text-[#F7EFE5] border-b border-[#C8A45C]/30 py-3 text-xs md:text-sm">
        <div className="w-full px-6 md:px-12 lg:px-[100px] flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C8A45C]/20 text-[#C8A45C] text-xs">✨</span>
            <p className="font-medium tracking-wide">
              <span className="text-[#C8A45C] font-semibold">Concept Website Prepared Exclusively for Banthia's Siddharth Collection.</span>
              <span className="text-[#F7EFE5]/80 hidden lg:inline ml-1">This preview demonstrates how your official website could look. Crafted by Harshal Baviskar.</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <a 
              href="https://wa.me/918459461141?text=Hi%20Harshal,%20I'm%20impressed%20by%20the%20Banthia's%20Siddharth%20Collection%20website%20concept!%20Let's%20launch%20our%20official%20website." 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#C8A45C] to-[#E5C98B] text-[#360b13] px-4 py-1.5 rounded-full font-semibold text-xs shadow-sm hover:brightness-105 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch My Website</span>
            </a>
            <a 
              href="https://wa.me/918459461141?text=Hi%20Harshal,%20I%20have%20a%20few%20questions%20regarding%20the%20website%20concept%20for%20Banthia's%20Siddharth%20Collection." 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#C8A45C]/40 text-[#C8A45C] px-3.5 py-1.5 rounded-full font-medium text-xs hover:bg-[#C8A45C]/10 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat with Harshal</span>
            </a>
          </div>
        </div>
      </aside>

      {/* 2. TOP MARQUEE BAR */}
      <div className="bg-[#521622] text-[#F7EFE5]/90 py-2 text-[11px] md:text-xs tracking-widest uppercase text-center font-medium border-b border-[#6B1E2B]">
        <span>Handcrafted Banarasi, Kanjivaram & Paithani Silks</span>
        <span className="mx-3 text-[#C8A45C]">•</span>
        <span>Groom Sherwanis & Bundis</span>
        <span className="mx-3 text-[#C8A45C]">•</span>
        <span>Beside Hanuman Temple, Aundhgaon</span>
      </div>

      {/* 3. STICKY NAVIGATION (FULL STRETCH WITH 100PX PADDING) */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${isScrolled ? 'bg-[#FFF8F3]/95 backdrop-blur-md shadow-md border-[#C8A45C]/20' : 'bg-[#FFF8F3]/80 backdrop-blur-sm border-transparent'}`}>
        <div className="w-full px-6 md:px-12 lg:px-[100px] h-20 md:h-24 flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#C8A45C]/60 flex items-center justify-center bg-gradient-to-br from-[#FFF8F3] to-[#F4ECE4] shadow-sm">
              <span className="font-serif text-xl md:text-2xl text-[#6B1E2B] font-bold">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#6B1E2B] leading-none">
                Banthia's
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-[#C8A45C] font-semibold mt-1">
                Siddharth Collection
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#home" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Home</a>
            <a href="#collections" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Collections</a>
            <a href="#mens" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Men's Wear</a>
            <a href="#materials" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Dress Materials</a>
            <a href="#stitching" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Stitching</a>
            <a href="#about" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">About</a>
            <a href="#location" className="text-[#1F1A1C] hover:text-[#6B1E2B] transition-colors">Visit Boutique</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+919420132081" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#6B1E2B]">
              <Phone className="w-4 h-4 text-[#C8A45C]" />
              <span>+91 94201 32081</span>
            </a>

            <a 
              href="https://wa.me/919420132081?text=Hi%20Banthia's%20Siddharth%20Collection,%20I'm%20viewing%20your%20website%20and%20would%20like%20to%20enquire" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6B1E2B] hover:bg-[#521622] text-[#FFF8F3] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A45C]" />
              <span>WhatsApp</span>
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#6B1E2B]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF8F3] border-t border-[#C8A45C]/20 px-6 py-6 space-y-4 shadow-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Home</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Collections</a>
            <a href="#mens" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Men's Wear</a>
            <a href="#materials" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Dress Materials</a>
            <a href="#stitching" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Custom Stitching</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">About Banthia's</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium">Store Location</a>
          </div>
        )}
      </header>

      {/* 4. HERO SECTION */}
      <section id="home" className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#FFF8F3] overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2.5 self-start bg-[#F7EFE5] border border-[#C8A45C]/40 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B1E2B]"></span>
                <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#6B1E2B]">
                  Aundh's Premier Ethnic Wear Destination
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.05] text-[#521622] font-semibold tracking-tight mb-6">
                Tradition Meets <span className="italic font-normal text-[#6B1E2B]">Style.</span>
              </h1>

              <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#C8A45C] mb-5">
                Premium Sarees • Designer Wear • Men's Ethnic Collection • Custom Stitching
              </p>

              <p className="text-base md:text-lg text-[#1F1A1C]/80 leading-relaxed font-normal max-w-xl mb-10">
                Discover timeless ethnic fashion crafted for weddings, festivals and every special occasion. From handloom Paithani silks to opulent bridal lehengas and royal groom sherwanis, experience couture elegance in Aundh.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <a href="#collections" className="inline-flex items-center justify-center gap-2.5 bg-[#6B1E2B] hover:bg-[#521622] text-[#FFF8F3] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5">
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45C]" />
                </a>

                <a href="#location" className="inline-flex items-center justify-center gap-2.5 border border-[#6B1E2B]/30 hover:border-[#6B1E2B] text-[#6B1E2B] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all hover:bg-[#6B1E2B]/5">
                  <MapPin className="w-4 h-4 text-[#C8A45C]" />
                  <span>Visit Store</span>
                </a>
              </div>

              <div className="pt-8 border-t border-[#C8A45C]/30 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <span className="font-serif text-2xl md:text-3xl font-bold text-[#6B1E2B] block">4.2★</span>
                  <span className="text-xs text-[#1F1A1C]/60 uppercase tracking-wider font-medium">100+ Reviews</span>
                </div>
                <div>
                  <span className="font-serif text-2xl md:text-3xl font-bold text-[#6B1E2B] block">100%</span>
                  <span className="text-xs text-[#1F1A1C]/60 uppercase tracking-wider font-medium">Pure Handloom Silk</span>
                </div>
                <div>
                  <span className="font-serif text-2xl md:text-3xl font-bold text-[#6B1E2B] block">Aundh</span>
                  <span className="text-xs text-[#1F1A1C]/60 uppercase tracking-wider font-medium">Beside Hanuman Mandir</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-[#F4ECE4] border border-[#C8A45C]/40">
                <img 
                  src="assets/hero.jpg" 
                  alt="Model in maroon saree at Banthia's Siddharth Collection boutique Pune" 
                  className="w-full h-[540px] md:h-[620px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#360b13]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFF8F3]/95 backdrop-blur-md border border-[#C8A45C]/40 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C8A45C] block">Handcrafted Excellence</span>
                    <h4 className="font-serif text-base font-semibold text-[#521622]">Pure Zari Banarasi Silk</h4>
                  </div>
                  <a 
                    href="https://wa.me/919420132081" 
                    target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#6B1E2B] text-[#C8A45C] flex items-center justify-center shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 4 PILLARS FEATURE ICONS */}
      <section className="bg-[#F7EFE5]/60 border-y border-[#C8A45C]/25 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8F3] border border-[#C8A45C]/40 flex items-center justify-center text-[#6B1E2B] shadow-sm">
                <Gem className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#521622]">Premium Collection</h4>
                <p className="text-xs text-[#1F1A1C]/70">Exclusive handpicked weavings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8F3] border border-[#C8A45C]/40 flex items-center justify-center text-[#6B1E2B] shadow-sm">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#521622]">Custom Stitching</h4>
                <p className="text-xs text-[#1F1A1C]/70">Master tailoring & blouse artistry</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8F3] border border-[#C8A45C]/40 flex items-center justify-center text-[#6B1E2B] shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#521622]">Designer Wear</h4>
                <p className="text-xs text-[#1F1A1C]/70">Bridal lehengas & festive edits</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8F3] border border-[#C8A45C]/40 flex items-center justify-center text-[#6B1E2B] shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#521622]">Trusted Since Years</h4>
                <p className="text-xs text-[#1F1A1C]/70">Aundh's beloved boutique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATEGORY CARDS (6 LUXURY CARDS) */}
      <section id="collections" className="py-24 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A45C] block mb-2">Curated Elegance</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#521622] mb-4">
              Our Signature Categories
            </h2>
            <div className="w-16 h-0.5 bg-[#C8A45C] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Sarees', image: 'assets/saree.jpg', tag: 'Pure Handloom', desc: 'Yeola Paithani, Kanjivaram silks, Banarasi brocades with pure zari.' },
              { title: 'Bridal Collection', image: 'assets/bridal.jpg', tag: 'Signature Bridal', desc: 'Opulent crimson velvet lehengas, zardozi embroidery & trousseau.' },
              { title: "Men's Ethnic Wear", image: 'assets/mens.jpg', tag: 'Royal Groom', desc: 'Regal groom sherwanis, jacquard bundis & raw silk kurtas.' },
              { title: 'Dress Materials', image: 'assets/dress_materials.jpg', tag: 'Unstitched Luxury', desc: 'Pure Chanderi, modal silk, Kota Doria & Lucknowi Chikankari.' },
              { title: 'Designer Wear', image: 'assets/hero.jpg', tag: 'Contemporary Edit', desc: 'Pre-stitched concept sarees, Indo-Western fusion capes & gowns.' },
              { title: 'Custom Stitching', image: 'assets/tailoring.jpg', tag: 'In-House Atelier', desc: 'Bespoke blouse stitching, Maggam/Aari beadwork & bridal fittings.' },
            ].map((cat, idx) => (
              <div key={idx} className="group relative rounded-[24px] overflow-hidden bg-[#F4ECE4] border border-[#C8A45C]/30 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="relative h-[360px] overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#360b13]/90 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#FFF8F3]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#6B1E2B] border border-[#C8A45C]/40">
                    {cat.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-[#521622] mb-2">{cat.title}</h3>
                  <p className="text-xs md:text-sm text-[#1F1A1C]/70 leading-relaxed mb-6">{cat.desc}</p>
                  <a 
                    href={`https://wa.me/919420132081?text=Hi%20Banthia's%20Siddharth%20Collection,%20I'd%20like%20to%20enquire%20about%20${encodeURIComponent(cat.title)}`} 
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#6B1E2B] group-hover:text-[#C8A45C] transition-colors"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION WITH 2X2 COLLAGE */}
      <section id="about" className="py-24 bg-[#F7EFE5]/40 border-y border-[#C8A45C]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A45C] block mb-3">Our Heritage & Craft</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#521622] mb-6 leading-tight">
                Where Heritage Weaves Meet Modern Elegance
              </h2>
              <div className="w-16 h-0.5 bg-[#C8A45C] mb-8"></div>
              
              <p className="text-base md:text-lg text-[#1F1A1C]/85 leading-relaxed font-serif italic mb-6">
                "Banthia's Siddharth Collection has become a trusted destination for premium ethnic fashion in Aundh. Our carefully curated collections blend traditional craftsmanship with modern elegance."
              </p>

              <p className="text-sm md:text-base text-[#1F1A1C]/75 leading-relaxed mb-6">
                Nestled beside the historic Hanuman Temple on Aundhgaon Main Road, our boutique was founded on an unwavering commitment to pure fabrics, authentic Indian handlooms, and personalized family service.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#C8A45C]/30">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#6B1E2B]">100% Authentic</h4>
                  <p className="text-xs text-[#1F1A1C]/70 mt-1">Direct artisan silk sourcing from Paithan, Varanasi & Kanchipuram</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#6B1E2B]">In-Store Master Tailors</h4>
                  <p className="text-xs text-[#1F1A1C]/70 mt-1">Perfect fit guarantee with dedicated trial rooms</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-64 border border-[#C8A45C]/30">
                  <img src="assets/hero.jpg" alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-64 border border-[#C8A45C]/30 mt-6">
                  <img src="assets/saree.jpg" alt="Sarees" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-64 border border-[#C8A45C]/30">
                  <img src="assets/bridal.jpg" alt="Bridal" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52 md:h-64 border border-[#C8A45C]/30 mt-6">
                  <img src="assets/tailoring.jpg" alt="Tailoring" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section id="location" className="py-24 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C8A45C] block mb-2">Visit In Person</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#521622] mb-6">
                Our Boutique in Aundh
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4ECE4] border border-[#C8A45C]/30">
                  <MapPin className="w-5 h-5 text-[#6B1E2B] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#521622]">Store Address</h4>
                    <p className="text-sm text-[#1F1A1C]/80 mt-1">Beside Hanuman Temple, Aundhgaon Main Road, Aundh, Pune – 411007</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4ECE4] border border-[#C8A45C]/30">
                  <Phone className="w-5 h-5 text-[#6B1E2B] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#521622]">Direct Contact</h4>
                    <p className="text-sm text-[#1F1A1C]/80 mt-1">+91 94201 32081 • Available Daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4ECE4] border border-[#C8A45C]/30">
                  <Clock className="w-5 h-5 text-[#6B1E2B] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#521622]">Store Hours</h4>
                    <p className="text-sm text-[#1F1A1C]/80 mt-1">10:00 AM – 9:00 PM (All 7 Days)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://maps.google.com/?cid=9988389822388524741" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#6B1E2B] hover:bg-[#521622] text-[#FFF8F3] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4 text-[#C8A45C]" />
                  <span>Get Directions</span>
                </a>
                <a 
                  href="tel:+919420132081" 
                  className="inline-flex items-center gap-2.5 border border-[#6B1E2B]/30 hover:border-[#6B1E2B] text-[#6B1E2B] px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase"
                >
                  <Phone className="w-4 h-4 text-[#C8A45C]" />
                  <span>Call +91 94201 32081</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#C8A45C]/40 shadow-2xl bg-[#360b13] text-[#FFF8F3] p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6">Boutique Visiting Info</h3>
                <div className="space-y-3 text-sm text-[#F7EFE5]/90 mb-8">
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span>Timings</span>
                    <span className="font-bold text-[#C8A45C]">10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span>Parking</span>
                    <span>Easy parking available</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/10">
                    <span>Landmark</span>
                    <span>Beside Hanuman Mandir</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Google Rating</span>
                    <span className="font-bold text-[#C8A45C]">4.2★ (100+ Reviews)</span>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?cid=9988389822388524741" target="_blank" rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C8A45C] to-[#E5C98B] text-[#360b13] py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. LUXURY DARK FOOTER */}
      <footer className="bg-[#360b13] text-[#F7EFE5] pt-20 pb-12 border-t border-[#C8A45C]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            <div className="md:col-span-5">
              <span className="font-serif text-2xl font-bold tracking-tight block">Banthia's Siddharth Collection</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A45C] font-semibold mt-1 block">Aundh, Pune</span>
              <p className="text-xs md:text-sm text-[#F7EFE5]/70 leading-relaxed max-w-sm mt-4">
                Pune's boutique for pure handloom sarees, designer bridal lehengas, men's ethnic sherwanis, and precision custom stitching.
              </p>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-serif text-lg font-semibold text-[#C8A45C] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#F7EFE5]/80">
                <li><a href="#collections">Collections</a></li>
                <li><a href="#mens">Men's Wear</a></li>
                <li><a href="#materials">Dress Materials</a></li>
                <li><a href="#stitching">Custom Stitching</a></li>
                <li><a href="#location">Store Location</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-serif text-lg font-semibold text-[#C8A45C] mb-4">Contact</h4>
              <p className="text-xs md:text-sm text-[#F7EFE5]/80 mb-2">+91 94201 32081</p>
              <p className="text-xs md:text-sm text-[#F7EFE5]/80">Beside Hanuman Temple, Aundhgaon Main Road, Aundh, Pune – 411007</p>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7EFE5]/60 gap-4">
            <p>© 2026 Banthia's Siddharth Collection. All rights reserved.</p>
            <p className="text-[#C8A45C]/80">Bespoke Concept & Web Architecture by Harshal Baviskar • Pune</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CTA */}
      <a 
        href="https://wa.me/919420132081?text=Hi%20Banthia's%20Siddharth%20Collection,%20I'm%20viewing%20your%20website%20and%20would%20like%20to%20enquire" 
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="text-xs md:text-sm font-bold tracking-wide">WhatsApp Us</span>
      </a>

    </div>
  );
}
