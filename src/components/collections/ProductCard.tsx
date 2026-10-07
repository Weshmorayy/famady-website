import Image from 'next/image'
import Link from 'next/link'
import { buildWhatsAppUrl, buildOrderMessage } from '@/lib/whatsapp'
import type { Product } from '@/config/site'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const waUrl = buildWhatsAppUrl(buildOrderMessage({ productName: product.name }))

  return (
    <article className="relative overflow-hidden group">
      {/* Image */}
      <div className="relative h-[380px] sm:h-[440px] lg:h-[500px] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={`${product.name} — Famady`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Info overlay bas */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5"
        style={{
          background: 'linear-gradient(to top, rgba(10,9,6,0.95) 0%, rgba(10,9,6,0.4) 60%, transparent 100%)',
        }}
      >
        <p
          className="font-body text-xs uppercase tracking-[0.2em] mb-1"
          style={{ color: 'var(--color-or-reflet)' }}
        >
          {product.collection}
        </p>
        <h3
          className="font-heading text-lg uppercase text-white leading-tight"
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <p
            className="font-body text-xs italic"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {product.price !== null
              ? `${product.price.toLocaleString('fr-FR')} FCFA`
              : 'Prix sur demande'}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-[0.12em] transition-colors duration-200"
            style={{ color: 'var(--color-or-clair)' }}
          >
            Commander →
          </a>
        </div>
      </div>
    </article>
  )
}
