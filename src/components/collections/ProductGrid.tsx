import ProductCard from './ProductCard'
import type { Product } from '@/config/site'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="container-site py-20 text-center">
        <p
          className="font-body text-base"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Aucune pièce dans cette catégorie pour le moment.
        </p>
      </div>
    )
  }

  return (
    <div className="container-site py-12">
      {/* Grille avec décalage vertical pour casser l'uniformité */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {products.map((product, index) => (
          <div
            key={product.slug}
            className={
              // Décale les cartes impaires vers le bas sur desktop
              index % 2 !== 0 ? 'lg:mt-10' : ''
            }
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
