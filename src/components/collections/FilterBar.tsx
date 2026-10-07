'use client'

import React from 'react'

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const FILTERS = [
  { slug: 'all', label: 'Tout' },
  { slug: 'robes', label: 'Robes' },
  { slug: 'ensembles', label: 'Ensembles' },
  { slug: 'chemisiers', label: 'Chemisiers' },
]

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div
      className="sticky top-0 z-40 py-4"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="container-site flex items-center gap-8 overflow-x-auto scrollbar-hide">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.slug
          return (
            <button
              key={filter.slug}
              onClick={() => onFilterChange(filter.slug)}
              className="font-body text-sm tracking-[0.08em] whitespace-nowrap pb-1 transition-colors duration-200 focus-ring"
              style={{
                color: isActive ? 'var(--color-or-clair)' : 'var(--color-text-muted)',
                borderBottom: isActive ? '1px solid var(--color-or-clair)' : '1px solid transparent',
              }}
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
