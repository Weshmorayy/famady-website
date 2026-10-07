import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Clock, MessageCircle, Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { GoldDivider } from '@/components/shared/GoldDivider'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez Famady par WhatsApp ou sur Instagram. Vente en ligne, livraison à Dakar. WhatsApp : +221 77 609 64 16.`,
  openGraph: {
    title: `Contact — ${siteConfig.name}`,
    description: 'Écrivez-nous sur WhatsApp. Nous répondons 24 h/24.',
  },
}

export default function ContactPage() {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Bonjour Famady, je souhaite passer une commande.')}`

  return (
    <>
      <ContactPageClient />

      <main className="min-h-screen grid lg:grid-cols-[45%_55%]">
        {/* Colonne gauche — infos pratiques */}
        <div
          className="flex flex-col justify-center px-8 lg:px-16 py-24 lg:py-0"
          style={{ backgroundColor: 'var(--color-bg-secondary)' }}
        >
          <SectionLabel>Nous contacter</SectionLabel>

          <h1
            className="font-heading text-4xl lg:text-5xl text-white uppercase mt-3 leading-tight"
          >
            Un message suffit.
          </h1>

          <GoldDivider className="mt-5" />

          {/* Coordonnées */}
          <ul className="mt-10 flex flex-col gap-7">
            <li className="flex items-start gap-4">
              <MessageCircle
                size={20}
                className="mt-0.5 flex-shrink-0"
                style={{ color: 'var(--color-or-clair)' }}
              />
              <div>
                <p
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  WhatsApp
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-lg text-white hover:text-[var(--color-or-clair)] transition-colors"
                >
                  +221 77 609 64 16
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Instagram
                size={20}
                className="mt-0.5 flex-shrink-0"
                style={{ color: 'var(--color-or-clair)' }}
              />
              <div>
                <p
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Instagram
                </p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-lg text-white hover:text-[var(--color-or-clair)] transition-colors"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <MapPin
                size={20}
                className="mt-0.5 flex-shrink-0"
                style={{ color: 'var(--color-or-clair)' }}
              />
              <div>
                <p
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Localisation
                </p>
                <p className="font-body text-lg text-white">
                  Dakar, Sénégal · Vente en ligne
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Clock
                size={20}
                className="mt-0.5 flex-shrink-0"
                style={{ color: 'var(--color-or-clair)' }}
              />
              <div>
                <p
                  className="font-body text-xs uppercase tracking-[0.12em]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Disponibilité
                </p>
                <p className="font-body text-lg text-white">Ouvert 24 h/24</p>
              </div>
            </li>
          </ul>

          {/* Paiements */}
          <div className="mt-12">
            <SectionLabel>Paiements acceptés</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-4">
              {siteConfig.payments.labels.map((label) => (
                <span
                  key={label}
                  className="font-body text-xs tracking-[0.08em] px-3 py-1.5"
                  style={{
                    border: '1px solid var(--color-or-ombre)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite — image + CTA */}
        <div className="relative min-h-[60vh] lg:min-h-0">
          <Image
            src="/images/editorial/look-noir-scintillant.jpg"
            alt="Famady — Commander"
            fill
            className="object-cover object-top"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10,9,6,0.65)' }}
          />

          {/* Contenu centré */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <Image
              src="/images/brand/logo-white.png"
              alt="Famady"
              width={100}
              height={100}
            />
            <blockquote
              className="font-heading italic text-2xl text-white mt-6 max-w-xs leading-relaxed"
            >
              « Le chic dans sa plus belle expression »
            </blockquote>
          </div>

          {/* Bouton WhatsApp fixé en bas */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading uppercase tracking-[0.12em] px-10 py-4 transition-colors duration-300"
              style={{
                backgroundColor: 'var(--color-or-clair)',
                color: '#0A0906',
              }}
            >
              Écrire sur WhatsApp →
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
