import Image from 'next/image'
import { SectionLabel } from '@/components/shared/SectionLabel'

const GALLERY_IMAGES = [
  {
    src: '/images/editorial/look-noir-scintillant.jpg',
    alt: 'Ensemble noir scintillant Famady',
    className: 'lg:row-span-2',
  },
  {
    src: '/images/editorial/look-rouge.jpg',
    alt: 'Robe rouge brodée Famady',
    className: '',
  },
  {
    src: '/images/editorial/look-noir-brode.jpg',
    alt: 'Robe noire brodée Famady',
    className: '',
  },
  {
    src: '/images/editorial/look-floral-bleu.jpg',
    alt: 'Ensemble floral bleu Famady',
    className: '',
  },
  {
    src: '/images/editorial/look-corail.jpg',
    alt: 'Ensemble corail Famady',
    className: '',
  },
]

export default function GalleryMosaic() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="container-site">
        <div className="mb-8">
          <SectionLabel>Galerie</SectionLabel>
        </div>

        {/* Desktop — mosaïque non-uniforme */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-3 h-[700px]">
          {/* Grande image — 1 colonne, 2 rangées */}
          <div className="relative row-span-2 overflow-hidden group">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* 4 petites images */}
          {GALLERY_IMAGES.slice(1).map((img) => (
            <div key={img.src} className="relative overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Mobile — scroll horizontal snap */}
        <div className="flex lg:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className="relative flex-shrink-0 w-[85vw] h-[420px] snap-start overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
