/**
 * site.ts — Source unique de vérité des données métier Famady
 * Toutes les données visibles sur le site viennent d'ici.
 */

export const siteConfig = {
  // ─── Identité ────────────────────────────────────────────────
  name: 'Famady',
  tagline: 'Le chic dans sa plus belle expression',
  description: 'Boutique en ligne prêt-à-porter femme haut de gamme. Robes, ensembles et pièces signature disponibles à Dakar. Commande par WhatsApp.',
  url: 'https://famady.com',

  // ─── Contact ─────────────────────────────────────────────────
  contact: {
    phone: '77 609 64 16',
    whatsapp: '221776096416',
    whatsappUrl: 'https://wa.me/221776096416',
    email: '',
    address: 'Vente en ligne',
    neighborhood: '',
    city: 'Dakar',
    country: 'Sénégal',
  },

  // ─── Réseaux sociaux ─────────────────────────────────────────
  social: {
    facebook: 'https://www.facebook.com/famadywomancloset',
    instagram: 'https://www.instagram.com/famady__woman_closet',
    instagramHandle: '@famady__woman_closet',
    tiktok: '',
  },

  // ─── Horaires ────────────────────────────────────────────────
  hours: {
    label: 'Ouvert 24 h/24',
  },

  // ─── Paiements ───────────────────────────────────────────────
  payments: {
    wave: true,
    orangeMoney: true,
    deliveryPayment: true,    // Paiement à la livraison
    cash: false,
    labels: ['Wave', 'Orange Money', 'Paiement à la livraison'],
  },

  // ─── Livraison ───────────────────────────────────────────────
  delivery: {
    available: true,
    label: 'Livraison disponible',
    // Zones et tarifs à renseigner dès confirmation client
    zones: [] as string[],
    fee: null as number | null,
    freeFrom: null as number | null,
  },

  // ─── Catalogue produits ───────────────────────────────────────
  // Prix non disponibles pour le moment — à compléter par le client
  collections: [
    {
      slug: 'robes',
      label: 'Robes',
      description: 'Robes longues, robes de soirée, robes brodées.',
    },
    {
      slug: 'ensembles',
      label: 'Ensembles',
      description: 'Coordonnés deux et trois pièces, ensembles fluides.',
    },
    {
      slug: 'chemisiers',
      label: 'Chemisiers',
      description: 'Chemisiers et hauts habillés.',
    },
  ],

  // ─── Produits ─────────────────────────────────────────────────
  // Prix à renseigner dès validation client
  products: [
    {
      slug: 'look-noir-scintillant',
      name: 'Ensemble noir scintillant',
      collection: 'ensembles',
      description: 'Un ensemble deux pièces au tombé fluide, délicatement scintillant, pensé pour celles qui aiment les pièces rares et raffinées.',
      price: null as number | null,        // À confirmer par le client
      images: ['/images/editorial/look-noir-scintillant.jpg'],
      featured: true,
    },
    {
      slug: 'robe-rouge-brodee',
      name: 'Robe rouge brodée',
      collection: 'robes',
      description: 'Une silhouette fluide, des finitions raffinées et une qualité qui fait toute la différence. Une pièce pensée pour sublimer vos plus beaux moments.',
      price: null as number | null,
      images: ['/images/editorial/look-rouge.jpg'],
      featured: true,
    },
    {
      slug: 'robe-noire-brodee',
      name: 'Robe noire brodée',
      collection: 'robes',
      description: 'Le noir, toujours intemporel. Une robe raffinée, sublimée par ses détails délicats et sa coupe fluide.',
      price: null as number | null,
      images: ['/images/editorial/look-noir-brode.jpg'],
      featured: false,
    },
    {
      slug: 'ensemble-floral-bleu',
      name: 'Ensemble floral bleu',
      collection: 'ensembles',
      description: 'Bleu intense. Une pièce qui attire le regard par son imprimé floral, ses volants délicats et sa coupe parfaitement structurée.',
      price: null as number | null,
      images: ['/images/editorial/look-floral-bleu.jpg'],
      featured: false,
    },
    {
      slug: 'ensemble-corail',
      name: 'Ensemble corail',
      collection: 'ensembles',
      description: 'Une combinaison qui allie caractère, finesse et qualité jusque dans les moindres détails.',
      price: null as number | null,
      images: ['/images/editorial/look-corail.jpg'],
      featured: false,
    },
  ],

  // ─── SEO ─────────────────────────────────────────────────────
  seo: {
    keywords: [
      'boutique mode femme Dakar',
      'prêt-à-porter Dakar',
      'robes élégantes Dakar',
      'tenues de soirée Sénégal',
      'Famady fashion',
      'ensembles femme Dakar',
      'commande vêtements WhatsApp Dakar',
    ],
    ogImage: '/images/brand/og-image.jpg',
  },
}

export type SiteConfig = typeof siteConfig
export type Product = (typeof siteConfig.products)[number]
export type Collection = (typeof siteConfig.collections)[number]
