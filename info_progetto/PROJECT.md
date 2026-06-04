# LovePhone — Project Overview

## Repository & Deploy

| | |
|---|---|
| **GitHub** | https://github.com/bolalocasrl/LovePhone |
| **Vercel URL** | Non configurato esplicitamente (vercel.json presente) |
| **Piattaforma dev** | Replit (porta 5000) |
| **Titolo sito** | Love Phone Goya — Riparazione Smartphone Madrid |

---

## Stack

### Frontend
| Tecnologia | Versione | Ruolo |
|---|---|---|
| React | 19.2.0 | Framework UI |
| TypeScript | 5.6.3 | Type safety |
| Vite | 7.1.9 | Build tool & dev server |
| Tailwind CSS | 4.1.14 | Styling (via @tailwindcss/vite) |
| shadcn/ui | — | Libreria componenti (60+ componenti, new-york style) |
| Radix UI | vari | Primitive UI headless |
| Wouter | 3.3.5 | Client-side routing |
| Framer Motion | 12.23.24 | Animazioni |
| TanStack React Query | 5.60.5 | Server state management |
| Lucide React | 0.545.0 | Icone |
| Sonner | 2.0.7 | Toast notifications |

### Backend
| Tecnologia | Versione | Ruolo |
|---|---|---|
| Express.js | 5.0.1 | Server HTTP |
| Passport.js | 0.7.0 | Autenticazione (local strategy) |
| Express Session | 1.18.1 | Gestione sessioni |
| Drizzle ORM | 0.39.3 | Database ORM |
| PostgreSQL (pg) | 8.16.3 | Database |
| Zod | 3.25.76 | Validazione schema |
| Memorystore | 1.6.7 | Session store in-memory |

### Tooling
| Strumento | Uso |
|---|---|
| esbuild | Bundle server per produzione |
| PostCSS + autoprefixer | Trasformazione CSS |
| drizzle-kit | Migrazioni database |
| tsx | Esecuzione TypeScript in dev |

---

## Struttura Progetto

```
LovePhone/
├── client/                         # React SPA
│   ├── src/
│   │   ├── pages/
│   │   │   ├── home.tsx            # Landing page principale
│   │   │   └── not-found.tsx       # Pagina 404
│   │   ├── components/ui/          # 60+ componenti shadcn/ui
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── assets/
│   │   │   ├── Lovephone.jpeg      # Logo
│   │   │   ├── hero-repair.jpg     # Immagine hero
│   │   │   └── location-map.png    # Mappa negozio
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css               # Tailwind + tema custom
│   ├── public/
│   │   ├── favicon.png
│   │   └── opengraph.jpg
│   └── index.html                  # Entry HTML (Google Fonts, OG tags)
├── server/
│   ├── index.ts                    # Entry point server Express
│   ├── routes.ts                   # API routes (vuoto)
│   ├── storage.ts                  # Storage in-memory (interfaccia + impl)
│   ├── static.ts                   # Serve file statici
│   └── vite.ts                     # Integrazione Vite dev
├── shared/
│   └── schema.ts                   # Schema Drizzle + Zod (tabella users)
├── attached_assets/                # Logo e immagini originali
├── script/build.ts                 # Script build produzione
├── info_progetto/
├── vercel.json
├── drizzle.config.ts
├── vite.config.ts
└── vite.config.prod.ts
```

---

## Pagine Esistenti

### `/` — Landing Page (`client/src/pages/home.tsx`)
SPA con sezioni concatenate:

| Sezione | Descrizione |
|---|---|
| **Navbar fissa** | Logo LovePhone, nome "LOVE PHONE GOYA", pulsante telefono |
| **Hero** | Headline "YOUR PHONE DESERVES LOVE." con cuore animato, CTA, immagine hero |
| **Servizi** | 3 card: Riparazione Schermo, Sostituzione Batteria, Riparazione Generale |
| **Contatti / Dove Siamo** | Indirizzo, telefono, orari, mappa con link Google Maps |
| **Footer** | Copyright, link legali |

Dettagli tecnici notevoli:
- Icona cuore che si alterna ogni 3 secondi (animazione Framer Motion)
- Smooth scroll tra sezioni
- Numero di telefono: **911 429 862**
- Indirizzo: **Calle de Goya, 113, Salamanca, 28009 Madrid**

### `*` — 404 Not Found (`client/src/pages/not-found.tsx`)
Pagina di errore con icona AlertCircle.

---

## Componenti Chiave

### UI Components (`client/src/components/ui/`)
60+ componenti shadcn/ui: `accordion`, `alert`, `alert-dialog`, `avatar`, `badge`, `button`, `calendar`, `card`, `carousel`, `chart`, `dialog`, `drawer`, `dropdown-menu`, `form`, `input`, `navigation-menu`, `pagination`, `select`, `sheet`, `sidebar`, `skeleton`, `sonner`, `table`, `tabs`, `textarea`, `tooltip`, e altri.

### Hooks (`client/src/hooks/`)
- **`use-mobile.tsx`** — Breakpoint mobile (soglia 768px)
- **`use-toast.ts`** — Sistema toast con gestione stato

### Lib (`client/src/lib/`)
- **`queryClient.ts`** — Configurazione TanStack Query con helper `apiRequest`
- **`utils.ts`** — Utility `cn()` per classname merging

---

## Tema Visivo

Definito in `client/src/index.css` (Tailwind v4 `@theme`):

| Token | Valore | Uso |
|---|---|---|
| Background | `#fff6ea` (crema) | Sfondo principale |
| Primary | `#bd2025` (rosso) | CTA, bordi, accenti |
| Foreground | Quasi nero | Testo |
| Border-radius | `0px` | Stile Swiss/minimal, spigoli vivi |
| Font display | Space Grotesk | Titoli |
| Font body | Inter | Testo corrente |

Bordi rossi su tutti gli elementi per uno stile editoriale netto.

---

## Stato Attuale

| Area | Stato |
|---|---|
| Landing page | ✅ Completa e funzionante |
| Hero con animazione cuore | ✅ Implementato |
| Sezione servizi (3 card) | ✅ Implementato |
| Sezione contatti + mappa | ✅ Implementato |
| Navbar fissa responsive | ✅ Implementato |
| Backend API | ⚠️ Setup presente, nessuna route implementata |
| Database PostgreSQL | ⚠️ Schema definito (tabella users), nessuna migrazione |
| Autenticazione | ⚠️ Passport configurato, non collegato a route |
| Deploy Vercel | ❓ vercel.json presente, URL non verificato |
| README | ❌ Assente |
| Test | ❌ Nessun test presente |

---

## Informazioni Negozio nel Sito

| Campo | Valore |
|---|---|
| Nome | Love Phone Goya |
| Indirizzo | Calle de Goya, 113, Salamanca, 28009 Madrid |
| Telefono | 911 429 862 |
| Servizi | Riparazione schermo, sostituzione batteria, riparazioni generali |

---

## Variabili d'Ambiente Richieste

| Variabile | Obbligatoria | Uso |
|---|---|---|
| `DATABASE_URL` | Sì (se DB attivo) | Connessione PostgreSQL |
| `NODE_ENV` | No | development / production |
| `PORT` | No | Porta server (default 5000) |

---

## Script NPM

```bash
npm run dev          # Avvia Express + Vite integrato
npm run dev:client   # Avvia solo Vite dev server (porta 5000)
npm run build        # Build completo: Vite (client) + esbuild (server)
npm start            # Avvia server produzione bundlato
npm run check        # Type checking TypeScript
npm run db:push      # Applica schema Drizzle al database
```

---

## Note di Deploy (Vercel)

Il `vercel.json` configura:
```json
{
  "buildCommand": "vite build --config vite.config.prod.ts",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "vite"
}
```

Il backend Express **non viene incluso** nel deploy Vercel statico. Per un deploy full-stack è necessario usare Vercel Functions o un hosting separato per il server Node.

---

*Aggiornato: 2026-05-23*
