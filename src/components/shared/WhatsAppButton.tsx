'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, buildOrderMessage } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  productName: string;
  className?: string;
}

export const WhatsAppButton = ({ productName, className = '' }: WhatsAppButtonProps) => {
  const handleOrder = () => {
    const message = buildOrderMessage({ productName });
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleOrder}
      className={`flex items-center justify-center gap-2 bg-[var(--color-or-clair)] text-black font-heading uppercase tracking-[0.15em] px-8 py-4 hover:bg-[var(--color-or-reflet)] transition-colors duration-300 ${className}`}
    >
      <MessageCircle size={20} />
      <span>Commander via WhatsApp</span>
    </button>
  );
};
