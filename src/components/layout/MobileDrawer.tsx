'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[999998] transition-opacity"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A0906] z-[999999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-[var(--color-or-clair)] transition-colors"
          aria-label="Fermer"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link 
            href="/collections" 
            onClick={onClose}
            className="font-heading text-[32px] text-white hover:text-[var(--color-or-clair)] transition-colors"
          >
            Collections
          </Link>
          <Link 
            href="/a-propos" 
            onClick={onClose}
            className="font-heading text-[32px] text-white hover:text-[var(--color-or-clair)] transition-colors"
          >
            À Propos
          </Link>
          <Link 
            href="/contact" 
            onClick={onClose}
            className="font-heading text-[32px] text-white hover:text-[var(--color-or-clair)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
