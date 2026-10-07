'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { MobileDrawer } from '@/components/layout/MobileDrawer'

export default function HeroSection() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Image de fond — ensemble noir scintillant */}
        <div className="absolute inset-0">
          <Image
            src="/images/editorial/look-noir-scintillant.jpg"
            alt="Famady — Collection femme haut de gamme"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Vignettage — assombrit les bords pour faire ressortir le texte */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, transparent 25%, #0A0906 90%), linear-gradient(to top, #0A0906 0%, transparent 50%)',
          }}
        />

        {/* Texte — bas gauche, jamais centré */}
        <div className="relative z-10 container-site pb-20 lg:pb-28">
          <p
            className="font-body text-xs uppercase tracking-[0.35em] mb-4 opacity-0 animate-fade-up delay-100"
            style={{ color: 'var(--color-or-reflet)' }}
          >
            Nouvelle Collection
          </p>

          <h1
            className="font-heading text-6xl sm:text-7xl lg:text-9xl uppercase mb-4 leading-none opacity-0 animate-fade-up delay-200"
            style={{ color: 'var(--color-or-clair)', letterSpacing: '0.12em' }}
          >
            FAMADY
          </h1>

          <p
            className="font-body text-lg lg:text-xl italic text-white mb-8 opacity-0 animate-fade-up delay-300"
          >
            Le chic dans sa plus belle expression
          </p>

          <Link
            href="/collections"
            className="font-body text-sm tracking-[0.15em] text-white uppercase relative group inline-block opacity-0 animate-fade-up delay-300"
          >
            Découvrir la collection
            <span className="block h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
