'use client'

import React, { useState, useMemo } from 'react'
import { siteConfig } from '@/config/site'
import { Header } from '@/components/layout/Header'
import { MobileDrawer } from '@/components/layout/MobileDrawer'
import { Footer } from '@/components/layout/Footer'
import FilterBar from '@/components/collections/FilterBar'
import ProductGrid from '@/components/collections/ProductGrid'

export default function CollectionsClient() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return siteConfig.products
    return siteConfig.products.filter((p) => p.collection === activeFilter)
  }, [activeFilter])

  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        {/* Hero typographie seule — pas d'image */}
        <section className="pt-40 pb-20 text-center px-4">
          <p
            className="font-body text-xs uppercase tracking-[0.35em] mb-4"
            style={{ color: 'var(--color-or-reflet)' }}
          >
            Famady · Dakar
          </p>
          <h1
            className="font-heading text-5xl lg:text-7xl uppercase leading-none"
            style={{ color: 'var(--color-or-clair)', letterSpacing: '0.2em' }}
          >
            Nos Collections
          </h1>
          <p
            className="font-body text-base mt-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Prêt-à-porter femme · Vente en ligne
          </p>
        </section>

        {/* Filtres sticky */}
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Grille produits filtrée */}
        <ProductGrid products={filteredProducts} />
      </main>

      <Footer />
    </>
  )
}
