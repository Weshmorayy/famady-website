# AGENTS.md — Famady Website

> Règles spécifiques au projet famady-website. Lire en plus de ~/atelier/AGENTS.md.

## Infos Projet

- **Client** : Famady
- **Slug** : famady
- **Type** : Boutique en ligne multi-pages prêt-à-porter femme haut de gamme
- **Stack** : Next.js 15 + React 18 + TypeScript + Tailwind CSS
- **Statut** : Build initial

## Palette

| Variable | Hex | Rôle |
|---|---|---|
| `--color-bg-primary` | `#0A0906` | Fond principal (noir chaud) |
| `--color-bg-secondary` | `#1C1917` | Fond intermédiaire (anthracite) |
| `--color-bg-accent` | `#F7F4EE` | Fond clair (ivoire) |
| `--color-or-clair` | `#CBA966` | Or clair métallique (accent principal) |
| `--color-or-reflet` | `#F4EFD8` | Or crème reflet |
| `--color-or-ombre` | `#725D32` | Or profond (bordures fines) |

## Pages

- `/` Accueil (Hero, Citation, Collections, Pièce vedette, Manifeste, Galerie)
- `/collections` Catalogue complet avec filtres catégories
- `/produits/[slug]` Fiche produit avec commande WhatsApp
- `/a-propos` Histoire de la marque & engagements
- `/contact` Informations pratiques & WhatsApp

## Architecture

- Données : `src/config/site.ts` uniquement
- Typographie : Playfair Display (titres) + DM Sans (corps)
- Commandes : WhatsApp direct (+221 77 609 64 16)
- Paiements : Wave · Orange Money · Paiement à la livraison

## Contacts Client

- WhatsApp : +221 77 609 64 16
- Instagram : @famady__woman_closet
- Facebook : Famadywomancloset
- Localisation : Dakar, Sénégal (Vente en ligne)
