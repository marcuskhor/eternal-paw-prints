# AiPet Pet Memorial

A loving farewell website for **AiPet Pet Memorial** — a pet cremation and memorial service based in Cheras, Kuala Lumpur. Built to help grieving families learn about farewell ceremonies, individual cremation options, and bespoke memorial keepsakes for their beloved companions.

🌐 **Live preview:** https://id-preview--50788f7f-f9c2-42c2-b00d-bf4bb00925dd.lovable.app

---

## About the Business

**AiPet Pet Memorial** provides compassionate end-of-life care for pets of all sizes, from hamsters to large dogs.

- 📍 **Address:** 1-1, Jln Damai Perdana 6/1B, Bandar Damai Perdana, 56000 Cheras, Wilayah Persekutuan Kuala Lumpur
- 📞 **Phone / WhatsApp:** [016-444 4919](https://wa.me/60164444919)
- 🕒 **Hours:** Mon–Thu & Sat–Sun 10:30am–5:30pm · Fri 10:30am–5:00pm

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero, brand story, and a gentle "What to do when your pet has passed away" guide |
| **Our Services** | Six farewell packages (Tiny · Mini · Air · Pro · Pro Max) with weight-based pricing tiers |
| **About Us** | Studio story, values, location, business hours, and contact details |

A floating WhatsApp button is available on every page for immediate enquiries.

---

## Tech Stack

- ⚛️ **React 19** + **TypeScript**
- 🛣️ **TanStack Start** (file-based routing, SSR)
- ⚡ **Vite 7**
- 🎨 **Tailwind CSS v4** with semantic design tokens (warm cream / earth palette)
- 🧩 **shadcn/ui** components
- ☁️ Deployed on Cloudflare Workers via Lovable

---

## Getting Started

```bash
# install dependencies
bun install

# start the dev server
bun run dev

# build for production
bun run build
```

The site runs locally at `http://localhost:5173`.

---

## Project Structure

```
src/
├── assets/          # Images: hero, package photos, keepsakes, guides
├── components/      # Header, Footer, WhatsAppButton, shadcn/ui
├── routes/          # index.tsx · services.tsx · about.tsx · __root.tsx
└── styles.css       # Design tokens (cream, earth tones, serif headings)
```

---

## Built With

This project was crafted with [Lovable](https://lovable.dev) — the AI editor for building beautiful, production-ready web apps.

## License

© AiPet Pet Memorial. All rights reserved.
