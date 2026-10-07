/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_OUTPUT === 'export'

const nextConfig = {
  // Standalone pour Coolify / Docker, ou export statique
  output: isExport ? 'export' : 'standalone',

  // Optimisation images — désactivée en mode export statique
  images: {
    unoptimized: isExport,
  },

  // Trailing slash pour l'export statique
  trailingSlash: isExport,

  // Strict mode React
  reactStrictMode: true,

  // Headers de sécurité (uniquement en standalone / serveur)
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
              ],
            },
          ]
        },
      }),
}

export default nextConfig
