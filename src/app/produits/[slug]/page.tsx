import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { generatePageMetadata } from '@/lib/seo'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { GoldDivider } from '@/components/shared/GoldDivider'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { Footer } from '@/components/layout/Footer'
import ProductPageClient from './ProductPageClient'

// ─── Génération statique des paramètres ──────────────────────────────────────
export function generateStaticParams() {
  return siteConfig.products.map((p) => ({ slug: p.slug }))
}

// ─── Métadonnées dynamiques ───────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = siteConfig.products.find((p) => p.slug === slug)
  if (!product) return {}

  return generatePageMetadata({
    title: product.name,
    description: product.description,
    path: `/produits/${product.slug}`,
    image: product.images[0],
  })
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = siteConfig.products.find((p) => p.slug === slug)

  if (!product) notFound()

  return (
    <>
      <ProductPageClient />

      <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Colonne gauche — image */}
          <div className="relative h-[60vh] lg:h-auto lg:min-h-screen">
            <Image
              src={product.images[0]}
              alt={`${product.name} — Famady`}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Colonne droite — infos produit */}
          <div
            className="flex flex-col justify-center px-8 lg:px-16 py-16"
            style={{ backgroundColor: 'var(--color-bg-secondary)' }}
          >
            <SectionLabel>{product.collection}</SectionLabel>

            <h1
              className="font-heading text-3xl lg:text-5xl uppercase mt-3 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {product.name}
            </h1>

            <GoldDivider className="mt-5" />

            <p
              className="font-body text-base mt-6 max-w-sm leading-relaxed"
              style={{ color: 'var(--color-text-body)' }}
            >
              {product.description}
            </p>

            {/* Prix */}
            <div className="mt-5">
              {product.price !== null ? (
                <p
                  className="font-heading text-2xl"
                  style={{ color: 'var(--color-or-clair)' }}
                >
                  {product.price.toLocaleString('fr-FR')} FCFA
                </p>
              ) : (
                <p
                  className="font-body text-sm italic"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Prix sur demande — contactez-nous par WhatsApp
                </p>
              )}
            </div>

            {/* CTA */}
            <WhatsAppButton productName={product.name} className="mt-8 w-full" />

            {/* Lien retour */}
            <Link
              href="/collections"
              className="font-body text-sm mt-6 inline-block transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
            >
              ← Toutes les collections
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
