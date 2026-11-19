# Yassine Benazzou — Portfolio Freelance (Next.js)

Portfolio bilingue (EN par défaut / FR) d'un développeur et web designer freelance, pensé pour attirer des clients au Maroc et à l'international.

## Stack

| Technologie | Version |
| --- | --- |
| Next.js (App Router, Turbopack) | 16.3.5 |
| React | 19.2.8 |
| TypeScript | 5.x (mode strict) |
| Tailwind CSS | 4.x |
| Framer Motion | 13.x |
| lucide-react, clsx | icônes, utilitaire de classes |

Polices (via `next/font/google`) : Bricolage Grotesque (titres), Inter (texte), JetBrains Mono (détails).

> **Attention** : cette version de Next.js a des changements majeurs (voir `AGENTS.md`). Consulter `node_modules/next/dist/docs/` avant de modifier l'architecture.

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # lance le build
npm run lint     # ESLint
npx tsc --noEmit # vérification TypeScript
```

## Structure du projet

```text
web-agence/
├── public/
│   ├── brand/                 # logos
│   ├── profile/               # photo (coveragence.png)
│   ├── projects/              # visuels SVG des projets (remplaçables par de vraies captures)
│   ├── contact-icons/, icons/ # icônes PNG
│   └── og.svg
├── src/
│   ├── app/                   # routes (App Router)
│   │   ├── layout.tsx         # layout racine : polices, metadata, Navbar, Footer
│   │   ├── page.tsx           # accueil (+ JSON-LD FAQ)
│   │   ├── globals.css        # thème sombre, .studio-card, variables
│   │   ├── a-propos/          # page À propos
│   │   ├── blog/              # page articles à venir
│   │   ├── contact/           # page contact
│   │   ├── tarifs/            # devis sur mesure
│   │   ├── services/          # liste + [slug]
│   │   ├── realisations/      # liste + [slug]
│   │   ├── creation-site-web-{maroc,casablanca,agadir,el-jadida}/  # pages SEO locales
│   │   ├── api/contact/route.ts  # API du formulaire de contact
│   │   ├── opengraph-image.tsx   # image Open Graph (PNG 1200x630)
│   │   ├── sitemap.ts, robots.ts
│   ├── components/
│   │   ├── sections/
│   │   │   ├── home-sections.tsx     # Hero, Trust bar, Bento, Projets, Process, Preuves, FAQ, Contact, FinalCta
│   │   │   ├── projects-views.tsx    # liste / détail des projets
│   │   │   ├── services-views.tsx    # liste / détail des services
│   │   │   └── local-seo-page.tsx    # pages SEO locales
│   │   ├── navbar.tsx, footer.tsx, floating-contact.tsx
│   │   ├── hero-visual.tsx, project-card.tsx, service-card.tsx
│   │   ├── contact-form.tsx, faq-accordion.tsx, breadcrumbs.tsx
│   │   ├── language-provider.tsx  # contexte EN/FR + toutes les traductions UI
│   │   ├── language-switcher.tsx
│   │   ├── reveal.tsx             # animation au scroll (respecte reduced-motion)
│   │   ├── ui.tsx                 # Container, SectionHeader, ButtonLink, PageHero
│   │   ├── brand-logo.tsx, social-icons.tsx, json-ld.tsx
│   ├── config/site.ts         # identité, contacts, réseaux, navLinks
│   ├── data/                  # contenu bilingue éditable
│   │   ├── projects.ts        # projets (featuredProjects + additionalProjects)
│   │   ├── services.ts        # 6 services
│   │   ├── content.ts         # avantages, étapes du process, technologies, marchés
│   │   ├── faq.ts, pricing.ts
│   │   └── testimonials.ts    # témoignages vérifiés (vide par défaut)
│   └── lib/
│       ├── seo.ts             # createMetadata, JSON-LD (Person, Service, FAQ, Breadcrumb)
│       └── utils.ts           # cn()
├── AGENTS.md / CLAUDE.md      # règles pour les agents IA
├── next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs
└── package.json
```

## Flux de la page d'accueil

Hero → Trust bar → Bénéfices (Bento) → Statement + Projets + À propos → Process (3 étapes) → Preuves / avis Google → FAQ → Contact.

Navbar : 4 liens (`Work`, `Benefits`, `Process`, `FAQ`) + un bouton principal + bascule EN/FR.

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Email, téléphone, WhatsApp, réseaux sociaux, liens de navigation | `src/config/site.ts` |
| Textes de l'interface (EN/FR), titre du hero, CTA | `src/components/language-provider.tsx` |
| Projets (nom, URL, description, technos) | `src/data/projects.ts` |
| Captures d'écran des projets | `public/projects/` puis champ `image` (et `isPlaceholderImage`) |
| Services | `src/data/services.ts` |
| Avantages, étapes du process, technologies | `src/data/content.ts` |
| FAQ / tarifs | `src/data/faq.ts`, `src/data/pricing.ts` |
| Témoignages réels (ex. avis Google) | `src/data/testimonials.ts` (`verifiedTestimonials`) |
| Couleurs, polices, cartes | `src/app/globals.css`, `src/app/layout.tsx` |

> Ne jamais inventer de témoignages, chiffres ou contacts : le tableau de témoignages reste vide tant qu'aucun avis réel n'est ajouté.

## Variables d'environnement

Créer `.env.local` (ignoré par git) :

| Variable | Rôle | Par défaut |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (sitemap, SEO) | `https://yassine-benazzou.vercel.app` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email affiché | `contact@example.com` (placeholder) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Téléphone affiché | `+212 7 02 73 62 93` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numéro WhatsApp | `+212702736293` |
| `CONTACT_WEBHOOK_URL` | Envoi du formulaire vers un webhook (optionnel) | — |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `RESEND_FROM_EMAIL` | Envoi par email via Resend (optionnel) | — |

Sans webhook ni Resend, `/api/contact` valide la demande et renvoie `deliveredVia: "prepared"` : l'utilisateur peut ensuite envoyer son brief via WhatsApp ou email.

## Internationalisation

- Anglais par défaut, français via le sélecteur EN/FR.
- Le choix est mémorisé dans `localStorage` (clé `site-language`) et un cookie.
- Les contenus de `src/data/*` sont de la forme `{ en, fr }`.
- Les pages `creation-site-web-*`, `blog`, `tarifs`, `a-propos` et `contact` ont encore une partie de leur texte en dur (non traduite dynamiquement).

## SEO

Metadata par page (`createMetadata`), Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (Person, ProfessionalService, WebSite, FAQPage, BreadcrumbList).

## Déploiement

Compatible Vercel : importer le dépôt, renseigner les variables d'environnement, puis déployer. Vérifier avant mise en ligne : `npm run lint`, `npx tsc --noEmit`, `npm run build`.
