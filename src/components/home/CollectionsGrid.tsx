import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/shared/SectionLabel'

export default function CollectionsGrid() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="container-site">
        {/* Titre section */}
        <div className="mb-10">
          <SectionLabel>Collections</SectionLabel>
          <h2
            className="font-heading text-4xl lg:text-5xl uppercase mt-2"
            style={{ color: 'var(--color-or-clair)', letterSpacing: '0.15em' }}
          >
            Nos Collections
          </h2>
        </div>

        {/* Grille asymétrique desktop — 3 colonnes de 5 unités */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4">

          {/* Carte principale gauche — 3 colonnes, grande */}
          <Link
            href="/collections?cat=robes"
            className="relative overflow-hidden group lg:col-span-3 h-[450px] lg:h-[540px] block"
          >
            <Image
              src="/images/editorial/look-rouge.jpg"
              alt="Robes Famady — Robe rouge brodée"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p
                className="font-body text-xs uppercase tracking-[0.2em] mb-1"
                style={{ color: 'var(--color-or-reflet)' }}
              >
                Robes
              </p>
              <p className="font-heading text-xl text-white uppercase">
                Robes de cérémonie
              </p>
            </div>
          </Link>

          {/* Deux petites cartes droite — 2 colonnes, empilées */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 lg:gap-4">
            <Link
              href="/collections?cat=robes"
              className="relative overflow-hidden group flex-1 h-[220px] lg:h-[260px] block"
            >
              <Image
                src="/images/editorial/look-noir-brode.jpg"
                alt="Robe noire brodée Famady"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p
                  className="font-body text-xs uppercase tracking-[0.2em] mb-1"
                  style={{ color: 'var(--color-or-reflet)' }}
                >
                  Robes
                </p>
                <p className="font-heading text-base text-white uppercase">
                  Soirée & Gala
                </p>
              </div>
            </Link>

            <Link
              href="/collections?cat=ensembles"
              className="relative overflow-hidden group flex-1 h-[220px] lg:h-[268px] block"
            >
              <Image
                src="/images/editorial/look-corail.jpg"
                alt="Ensemble corail Famady"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p
                  className="font-body text-xs uppercase tracking-[0.2em] mb-1"
                  style={{ color: 'var(--color-or-reflet)' }}
                >
                  Ensembles
                </p>
                <p className="font-heading text-base text-white uppercase">
                  Coordonnés
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA voir tout */}
        <div className="mt-10 text-center">
          <Link
            href="/collections"
            className="font-body text-sm tracking-[0.15em] uppercase relative group inline-block"
            style={{ color: 'var(--color-or-clair)' }}
          >
            Voir toutes les collections
            <span
              className="block h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"
              style={{ backgroundColor: 'var(--color-or-clair)' }}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
