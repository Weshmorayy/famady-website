import Image from 'next/image'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'

export default function FeaturedPiece() {
  return (
    <section style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Image — gauche */}
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src="/images/editorial/look-rouge.jpg"
            alt="Robe rouge brodée Famady — Pièce en vedette"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Texte — droite */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
          <SectionLabel>Pièce en vedette</SectionLabel>

          <h2
            className="font-heading text-4xl lg:text-5xl uppercase mt-3 leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Robe Rouge Brodée
          </h2>

          <div
            className="h-px w-16 mt-5"
            style={{ backgroundColor: 'var(--color-or-clair)' }}
          />

          <p
            className="font-body text-base mt-6 max-w-sm leading-relaxed"
            style={{ color: 'var(--color-text-body)' }}
          >
            Une silhouette fluide, des finitions raffinées. Une pièce pensée
            pour sublimer vos plus beaux moments.
          </p>

          <p
            className="font-body text-sm mt-4 italic"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Prix sur demande — Commander par WhatsApp
          </p>

          <div className="mt-8">
            <WhatsAppButton productName="Robe rouge brodée" />
          </div>
        </div>
      </div>
    </section>
  )
}
