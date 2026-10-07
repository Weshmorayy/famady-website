import Image from 'next/image'

export default function ManifestSection() {
  return (
    <section
      className="py-28 px-4 text-center"
      style={{ backgroundColor: 'var(--color-bg-accent)' }}
    >
      <blockquote
        className="font-heading italic text-3xl lg:text-4xl max-w-2xl mx-auto leading-relaxed"
        style={{ color: 'var(--color-text-dark)' }}
      >
        « Une femme qui se distingue naturellement. »
      </blockquote>

      <div className="flex justify-center mt-10">
        <Image
          src="/images/brand/logo-black.png"
          alt="Famady"
          width={80}
          height={80}
          className="opacity-60"
        />
      </div>
    </section>
  )
}
