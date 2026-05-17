import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import jewellery from "@/assets/jewellery-craft.jpg";
import noseprint from "@/assets/noseprint-pendant.jpg";
import keychain from "@/assets/keychain.jpg";
import sculpture from "@/assets/sculpture.jpg";
import ring from "@/assets/ring.jpg";
import pawframe from "@/assets/pawprint-frame.jpg";
import furBead from "@/assets/fur-bead.jpg";
import urns from "@/assets/custom-urns.jpg";
import pkgTiny from "@/assets/pkg-tiny.jpg";
import pkgMini from "@/assets/pkg-mini.jpg";
import pkgLite from "@/assets/farewell-cat.jpg";
import pkgAir from "@/assets/pkg-air.jpg";
import pkgPro from "@/assets/farewell-pro.jpg";
import pkgProMax from "@/assets/pkg-promax.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — AiPet Pet Memorial" },
      { name: "description", content: "Private farewell ceremonies, individual cremation, body grooming, transport and handcrafted memorial keepsakes for your pet." },
      { property: "og:title", content: "Our Services — AiPet Pet Memorial" },
      { property: "og:description", content: "Farewell packages, cremation, bathing, transport and bespoke keepsakes." },
    ],
  }),
  component: ServicesPage,
});

type Pkg = {
  name: string;
  weight: string;
  price: string;
  tagline?: string;
  included: string[];
  keepsakes: string[];
  featured?: boolean;
  img: string;
  blurb: string;
};

const packages: Pkg[] = [
  {
    name: "AiPet Tiny",
    weight: "Below 500g",
    price: "RM 269",
    included: [
      "60-min Private Farewell (no ceremony)",
      "Pet remains cleaning & care",
      "Photo printing & obituary design",
      "Fresh flowers",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "1× Urn + Memorial Charm + Fur Vial",
      "1× 4R + 2× 2R photo prints",
      "1× Memorial Photo Frame (~8 × 8 cm)",
      "1× AI Portrait Photo Design",
    ],
    img: pkgTiny,
    blurb: "A quiet, intimate farewell for the smallest companions — hamsters, hedgehogs, lizards and other tiny ones.",
  },
  {
    name: "AiPet Mini",
    weight: "Below 800g",
    price: "RM 399",
    included: [
      "60-min Private Farewell with Ceremony",
      "Pet remains cleaning & care",
      "Photo printing & obituary design",
      "Fresh flowers",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "1× Urn + Memorial Charm + Fur Vial",
      "1× 4R + 2× 2R photo prints",
      "1× Paw Print Frame (~23 × 15 cm)",
      "1× Memorial Photo Frame (~8 × 8 cm)",
      "1× Fur / Ash Memorial Bead",
      "1× AI Portrait Photo Design",
    ],
    img: pkgMini,
    blurb: "Includes a proper farewell ceremony with fresh flowers and a pawprint frame to remember them by.",
  },
  {
    name: "AiPet Lite",
    weight: "0.8 – 2 kg",
    price: "RM 599",
    included: [
      "60-min Private Farewell with Ceremony",
      "Pet remains cleaning & care",
      "Photo printing & obituary design",
      "Fresh flowers",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "1× Urn + Memorial Charm + Fur Vial",
      "1× 4R + 2× 2R photo prints",
      "1× Fur Memorial Glass Ball",
      "1× Memorial Photo Frame",
      "1× Fur / Ash Peace Pendant",
      "1× AI Portrait Photo Design",
    ],
    img: pkgLite,
    blurb: "A loving farewell for cats, small dogs and rabbits — including a fur memorial glass ball and peace pendant.",
  },
  {
    name: "AiPet Air",
    weight: "2 – 10+ kg",
    price: "from RM 899",
    tagline: "Warm farewell",
    included: [
      "60-min Private Farewell with Ceremony",
      "Pet remains cleaning & care",
      "Photo printing & obituary design",
      "Fresh flowers",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "1× Urn + 2× Memorial Charm + Fur Vial",
      "1× 4R + 2× 2R photo prints",
      "1× Paw Print Frame (~23 × 15 cm)",
      "1× 925 Silver Fur/Ash Pendant",
      "1× Fur/Ash Peace Pendant",
      "2× AI Portrait Photo Design",
    ],
    img: pkgAir,
    blurb: "Our most-chosen package. A heartfelt farewell with a 925 silver fur/ash pendant and two AI portraits.",
  },
  {
    name: "AiPet Pro",
    weight: "2 – 10+ kg",
    price: "from RM 1,899",
    tagline: "Eternal care",
    included: [
      "120-min Private Farewell with Ceremony",
      "Premium remains care & grooming",
      "Photo printing & obituary design",
      "Fresh flowers & memorial setup",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "Premium Urn + Multiple Memorial Charms",
      "Photo prints & paw print frame",
      "Stone or fur memorial pendant",
      "Multiple AI portrait designs",
    ],
    img: pkgPro,
    blurb: "A longer 120-minute ceremony, premium grooming and a curated keepsake set built around your pet.",
  },
  {
    name: "AiPet Pro Max",
    weight: "2 – 10+ kg",
    price: "from RM 3,899",
    tagline: "Treasured forever",
    included: [
      "180-min Private Farewell with Ceremony",
      "Signature remains care & grooming",
      "Bespoke obituary & photo design",
      "Premium fresh-flower arrangement",
      "Individual cremation",
      "14-day ashes storage",
    ],
    keepsakes: [
      "Signature urn collection",
      "Curated jewellery set (silver pendant + glass ball)",
      "Premium paw print frame & photo album",
      "Full AI portrait series",
    ],
  },
];

const cremation = [
  ["< 1 kg", "RM 300"],
  ["1 – 9.9 kg", "RM 500"],
  ["10 – 19.9 kg", "RM 900"],
  ["20 – 29.9 kg", "RM 1,050"],
  ["30 – 39.9 kg", "RM 1,300"],
  ["40 – 49.9 kg", "RM 1,450"],
  ["50 kg & above", "RM 1,500"],
];

const bathing = [
  ["< 500 g", "RM 60"],
  ["501 g – 999 g", "RM 80"],
  ["1 – 5 kg", "RM 100"],
  ["5 – 10 kg", "RM 150"],
  ["10 kg & above", "from RM 200"],
];

const keepsakes = [
  { img: noseprint, title: "Pet Nose Print Pendant" },
  { img: sculpture, title: "Pet Memorial Sculpture" },
  { img: furBead, title: "Fur Memorial Bead" },
  { img: keychain, title: "Customised Keychain" },
  { img: ring, title: "Memorial Ring" },
  { img: pawframe, title: "Pawprint Keepsake Frame" },
  { img: urns, title: "Custom Memorial Urn" },
  { img: jewellery, title: "Handcrafted Silver Jewellery" },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-sky">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Services</p>
          <h1 className="mt-5 font-serif text-5xl text-foreground md:text-6xl">
            Care, ceremony & keepsakes — every detail attended to.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            From the gentle bathing of your pet's body to the final cremation and
            the keepsakes you'll hold for years, every part of our service is
            shaped to honour your bond.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Farewell Packages</p>
            <h2 className="mt-2 font-serif text-4xl text-foreground">All-inclusive farewells</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Each package includes private ceremony time, individual cremation,
            ashes storage and a curated set of memorial keepsakes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border bg-card p-7 shadow-card ${
                p.featured ? "border-primary/50 ring-1 ring-primary/30" : "border-border/70"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-primary">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{p.weight}</p>
              <div className="mt-4 font-serif text-3xl text-primary">{p.price}</div>
              {p.tagline && (
                <p className="font-serif italic text-foreground/60">{p.tagline}</p>
              )}

              <div className="mt-6 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Services</p>
                {p.included.map((i) => (
                  <p key={i} className="flex gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" /> {i}
                  </p>
                ))}
              </div>

              <div className="mt-5 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Keepsakes</p>
                {p.keepsakes.map((i) => (
                  <p key={i} className="flex gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--blush)]" /> {i}
                  </p>
                ))}
              </div>

              <div className="mt-7">
                <WhatsAppButton label={`Enquire about ${p.name}`} className="w-full" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          * Pricing varies by weight bracket. After-hours sessions: 6–8 pm + RM 100, 9–11 pm + RM 150.
        </p>
      </section>

      <section className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <img src={farewell} alt="Cat resting peacefully with candles" className="w-full rounded-2xl shadow-soft" />
          <img src={pro} alt="Sleeping pet in a wooden box surrounded by flowers" className="w-full rounded-2xl shadow-soft" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Pet Cremation</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">Individual cremation (includes urn)</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              For families who only need cremation service. Urn included; decorative
              figurines are not part of standalone cremation.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {cremation.map(([w, p], i) => (
                    <tr key={w} className={i % 2 ? "bg-muted/40" : ""}>
                      <td className="px-5 py-3 text-foreground/80">{w}</td>
                      <td className="px-5 py-3 text-right font-medium text-primary">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Every additional 10 kg above 50 kg: + RM 100.</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Body Bathing</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">Pet body bathing & care</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Some pets need extra care before farewell. We groom every body
              with tenderness so they look serene and clean.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {bathing.map(([w, p], i) => (
                    <tr key={w} className={i % 2 ? "bg-muted/40" : ""}>
                      <td className="px-5 py-3 text-foreground/80">{w}</td>
                      <td className="px-5 py-3 text-right font-medium text-primary">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { title: "Pet Pick-Up Service", body: "Gentle transport from your home to our memorial space, charged per kilometre from our store." },
            { title: "Remains Preservation", body: "Safe, cool storage from RM 15/day so families can travel back or gather before the farewell." },
            { title: "On-site Ceremony Setup", body: "Flower basket, photo display, candles and an unhurried ritual you can shape together with us." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
              <h3 className="text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">AiPet Trace · Keepsakes</p>
            <h2 className="mt-2 font-serif text-4xl text-foreground">Handcrafted in our own atelier.</h2>
            <p className="mt-4 text-muted-foreground">
              Malaysia's first pet memorial brand to design and craft custom jewellery
              and urns on site. Each piece carries a part of them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {keepsakes.map((k) => (
              <div key={k.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <div className="aspect-square overflow-hidden">
                  <img src={k.img} alt={k.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{k.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            * Custom handmade items require ~1 month of production time. Memorial beads (Mball) take ~2 months.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-gradient-warm px-8 py-14 text-center shadow-soft md:px-16">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Tell us about your pet.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/80">
            We'll help you choose the right package and walk through every detail on WhatsApp.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton label="Message us on WhatsApp" />
          </div>
        </div>
      </section>
    </>
  );
}
