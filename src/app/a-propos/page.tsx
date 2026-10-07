import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { GoldDivider } from '@/components/shared/GoldDivider'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { Footer } from '@/components/layout/Footer'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Famady — boutique prêt-à-porter femme haut de gamme basée à Dakar. Des pièces rares, soigneusement sélectionnées pour une femme qui se distingue naturellement.',
  openGraph: {
    title: `À Propos — ${siteConfig.name}`,
    description: 'Notre histoire, nos engagements, nos collections.',
  },
}

const ENGAGEMENTS = [
  {
    num: '01',
    title: 'Sélection rigoureuse',
    desc: 'Chaque pièce est choisie pour sa qualité et son élégance.',
  },
  {
    num: '02',
    title: 'Service direct',
    desc: 'Commandez directement par WhatsApp, sans intermédiaire.',
  },
  {
    num: '03',
    title: 'Disponible 24 h/24',
    desc: 'Nous sommes joignables à tout moment pour vous conseiller.',
  },
  {
    num: '04',
    title: 'Livraison à Dakar',
    desc: 'Votre commande livrée directement chez vous.',
  },
]

export default function AProposPage() {
  return (
    <>
      <AboutPageClient />

      <main>
        {/* Hero — image + texte bas-gauche */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/editorial/look-corail.jpg"
              alt="Famady — Notre histoire"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #0A0906 0%, rgba(10,9,6,0.5) 50%, transparent 100%)',
            }}
          />
          <div className="relative z-10 container-site pb-16">
            <h1
              className="font-heading italic text-4xl lg:text-6xl text-white leading-tight"
            >
              Notre Histoire
            </h1>
            <p
              className="font-body text-lg mt-3 italic"
              style={{ color: 'var(--color-or-reflet)' }}
            >
              « MERCI pour votre fidélité »
            </p>
          </div>
        </section>

        {/* Présentation — fond ivoire */}
        <section
          className="py-24"
          style={{ backgroundColor: 'var(--color-bg-accent)' }}
        >
          <div className="container-site grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <SectionLabel className="text-[var(--color-or-ombre)]">
                La Marque
              </SectionLabel>
              <GoldDivider className="mt-4" />
              <div
                className="font-body text-base mt-8 leading-loose space-y-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                <p>
                  Famady est une boutique de mode féminine basée à Dakar.
                  Nous sélectionnons des pièces élégantes, modernes et
                  soigneusement choisies pour une femme qui se distingue
                  naturellement.
                </p>
                <p>
                  Chaque tenue est pensée pour sublimer vos moments
                  importants — de la cérémonie au quotidien habillé.
                  Disponibles en vente en ligne, livrées directement
                  chez vous.
                </p>
                <p>
                  Commandez sur WhatsApp, nous vous répondons 24 h/24.
                </p>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/images/brand/logo-gold.png"
                alt="Famady — Monogramme"
                width={200}
                height={200}
                className="opacity-90"
              />
            </div>
          </div>
        </section>

        {/* Engagements — fond anthracite */}
        <section
          className="py-20"
          style={{ backgroundColor: 'var(--color-bg-secondary)' }}
        >
          <div className="container-site">
            <h2
              className="font-heading text-3xl uppercase text-center mb-14"
              style={{ color: 'var(--color-or-clair)', letterSpacing: '0.15em' }}
            >
              Nos Engagements
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ENGAGEMENTS.map((eng) => (
                <div key={eng.num}>
                  <p
                    className="font-heading text-5xl leading-none"
                    style={{ color: 'var(--color-or-clair)' }}
                  >
                    {eng.num}
                  </p>
                  <p
                    className="font-body font-medium text-white mt-3"
                  >
                    {eng.title}
                  </p>
                  <p
                    className="font-body text-sm mt-2 leading-relaxed"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {eng.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final — fond noir */}
        <section
          className="py-24 text-center"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <div className="container-site flex flex-col items-center">
            <Image
              src="/images/brand/logo-gold.png"
              alt="Famady"
              width={80}
              height={80}
              className="opacity-90"
            />
            <h2
              className="font-heading text-3xl text-white mt-6 uppercase"
              style={{ letterSpacing: '0.1em' }}
            >
              Découvrez la collection
            </h2>
            <WhatsAppButton
              productName="Bonjour, je souhaite découvrir votre collection."
              className="mt-8"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
