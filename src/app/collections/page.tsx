import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import CollectionsClient from './CollectionsClient'

// Server Component → peut exporter metadata
export const metadata: Metadata = {
  title: 'Collections',
  description: `Découvrez les collections Famady — prêt-à-porter femme haut de gamme. Robes, ensembles, chemisiers. Commande par WhatsApp. ${siteConfig.contact.city}.`,
  openGraph: {
    title: `Collections — ${siteConfig.name}`,
    description: 'Robes, ensembles et pièces signature. Disponibles chez Famady.',
    images: [{ url: '/images/editorial/look-rouge.jpg', width: 1080, height: 1350 }],
  },
}

export default function CollectionsPage() {
  return <CollectionsClient />
}
