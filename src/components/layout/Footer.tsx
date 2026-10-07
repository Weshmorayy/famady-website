import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0906] pt-16 pb-8 px-4 border-t border-[var(--color-bg-secondary)]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Link href="/">
            <Image src="/images/brand/logo-white.png" alt="Famady" width={100} height={40} />
          </Link>
          <div className="h-[1px] w-full max-w-[200px] bg-[var(--color-or-clair)] opacity-30 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          <div>
            <h3 className="font-heading text-white uppercase tracking-[0.15em] mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/collections" className="font-body text-[var(--color-text-body)] hover:text-[var(--color-or-clair)] transition-colors">Collections</Link></li>
              <li><Link href="/a-propos" className="font-body text-[var(--color-text-body)] hover:text-[var(--color-or-clair)] transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="font-body text-[var(--color-text-body)] hover:text-[var(--color-or-clair)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white uppercase tracking-[0.15em] mb-6">Informations</h3>
            <ul className="flex flex-col gap-4">
              <li className="font-body text-[var(--color-text-body)]">Vente en ligne</li>
              <li className="font-body text-[var(--color-text-body)]">Dakar</li>
              <li className="font-body text-[var(--color-text-body)]">Ouvert 24h/24</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-white uppercase tracking-[0.15em] mb-6">Contact & Réseaux</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://instagram.com/famady__woman_closet" target="_blank" rel="noopener noreferrer" className="font-body text-[var(--color-text-body)] hover:text-[var(--color-or-clair)] transition-colors">
                  @famady__woman_closet
                </a>
              </li>
              <li>
                <a href="https://wa.me/221776096416" target="_blank" rel="noopener noreferrer" className="font-body text-[var(--color-text-body)] hover:text-[var(--color-or-clair)] transition-colors">
                  WhatsApp +221 77 609 64 16
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 pt-8">
          <p className="font-body text-sm text-[var(--color-text-muted)] mb-4 text-center">
            Wave · Orange Money · Paiement à la livraison
          </p>
          <p className="font-body text-xs text-white/40">
            © 2026 Famady. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
