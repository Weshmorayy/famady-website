import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <p
        className="font-body text-xs uppercase tracking-[0.3em] mb-4"
        style={{ color: 'var(--color-or-reflet)' }}
      >
        Erreur 404
      </p>
      <h1
        className="font-heading text-5xl lg:text-7xl uppercase"
        style={{ color: 'var(--color-or-clair)', letterSpacing: '0.15em' }}
      >
        Page introuvable
      </h1>
      <p
        className="font-body text-base mt-6 max-w-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="font-body text-sm uppercase tracking-[0.15em] mt-10 relative group inline-block"
        style={{ color: 'var(--color-or-clair)' }}
      >
        Retour à l&apos;accueil
        <span
          className="block h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"
          style={{ backgroundColor: 'var(--color-or-clair)' }}
        />
      </Link>
    </main>
  )
}
