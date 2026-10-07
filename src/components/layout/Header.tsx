'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';

interface HeaderProps {
  setDrawerOpen: (open: boolean) => void;
}

export const Header = ({ setDrawerOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[50] transition-colors duration-300 ${
        scrolled ? 'bg-[#0A0906]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <Image src="/images/brand/logo-gold.png" alt="Famady" width={120} height={48} priority />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/collections" className="font-body text-sm tracking-[0.08em] text-white hover:text-[var(--color-or-clair)] transition-colors">
            Collections
          </Link>
          <Link href="/a-propos" className="font-body text-sm tracking-[0.08em] text-white hover:text-[var(--color-or-clair)] transition-colors">
            À Propos
          </Link>
          <Link href="/contact" className="font-body text-sm tracking-[0.08em] text-white hover:text-[var(--color-or-clair)] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-white hover:text-[var(--color-or-clair)] transition-colors" aria-label="Panier">
            <ShoppingBag size={24} />
          </button>
          <button 
            className="md:hidden text-white hover:text-[var(--color-or-clair)] transition-colors" 
            onClick={() => setDrawerOpen(true)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
