import { GoldDivider } from '@/components/shared/GoldDivider'

export default function EditorialQuote() {
  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: 'var(--color-bg-accent)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <blockquote
          className="font-heading italic text-3xl lg:text-4xl leading-relaxed"
          style={{ color: 'var(--color-text-dark)' }}
        >
          « Des pièces rares pour une femme qui se distingue naturellement. »
        </blockquote>
        <GoldDivider className="mx-auto mt-8" />
      </div>
    </section>
  )
}
