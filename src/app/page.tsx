import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import HeroSection from '@/components/home/HeroSection'
import EditorialQuote from '@/components/home/EditorialQuote'
import CollectionsGrid from '@/components/home/CollectionsGrid'
import FeaturedPiece from '@/components/home/FeaturedPiece'
import ManifestSection from '@/components/home/ManifestSection'
import GalleryMosaic from '@/components/home/GalleryMosaic'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero cinématographique — inclut Header + MobileDrawer */}
      <HeroSection />

      {/* Citation éditoriale — fond ivoire */}
      <EditorialQuote />

      {/* Grille collections asymétrique — fond noir */}
      <CollectionsGrid />

      {/* Pièce en vedette split 50/50 — fond anthracite */}
      <FeaturedPiece />

      {/* Manifeste de marque — fond ivoire */}
      <ManifestSection />

      {/* Galerie mosaïque — fond noir */}
      <GalleryMosaic />

      <Footer />
    </main>
  )
}
