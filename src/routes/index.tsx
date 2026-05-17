import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, Flower2, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-illustration.jpg";
import ceremony from "@/assets/ceremony-room.jpg";
import farewell from "@/assets/farewell-cat.jpg";
import urns from "@/assets/custom-urns.jpg";
import noseprint from "@/assets/noseprint-pendant.jpg";
import guideWipe from "@/assets/guide-wipe.jpg";
import guideBox from "@/assets/guide-box.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AiPet Pet Memorial — Loving Pet Farewells in Kuala Lumpur" },
      { name: "description", content: "A gentle, private farewell for your beloved pet. Cremation, ceremony and handcrafted keepsakes in Cheras, KL." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-sky">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">AiPet · 愛寵</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.1] text-foreground md:text-6xl">
              A gentle farewell for the one who was your whole world.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              At AiPet Pet Memorial, every goodbye is held in quiet, unhurried care —
              with private ceremonies, individual cremation and keepsakes made by hand,
              so love stays close long after.
            </p>
            <p className="mt-4 font-serif italic text-foreground/70">
              爱在心中，宠伴永恒 — Love in our hearts, pets forever with us.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton label="Arrange a Farewell" />
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[var(--blush)]/40 blur-3xl" />
            <img
              src={hero}
              alt="Illustration of pets and a guardian fairy on a path of clouds"
              className="w-full rounded-[2rem] shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "By appointment, always private",
              body: "Each family is given an exclusive time slot, so your farewell is never rushed or shared.",
            },
            {
              icon: Flower2,
              title: "Non-religious & gentle",
              body: "A warm, dignified ceremony that honours your bond without any specific religious rite.",
            },
            {
              icon: Sparkles,
              title: "Keepsakes made in-house",
              body: "Malaysia's first pet memorial brand to craft custom jewellery and urns on site.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/70 bg-card p-7 shadow-card">
              <f.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
              <h3 className="mt-4 text-xl text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story strip */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img src={ceremony} alt="Cozy ceremony room with framed pet portraits" className="w-full rounded-2xl shadow-soft" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Pet Farewell Ceremony</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground">A room kept warm for goodbyes.</h2>
            <p className="mt-5 text-muted-foreground">
              Our private farewell space is cozy and spacious — a quiet sanctuary where
              your family can gather, light a candle, lay flowers, and say everything
              that needs to be said. The pace belongs to you.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li>· 60–180 minute private farewell sessions</li>
              <li>· Fresh flowers, candles & obituary design</li>
              <li>· Body bathing, grooming and gentle preparation</li>
              <li>· Pawprint keepsake & AI portrait design</li>
            </ul>
            <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Explore farewell packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Keepsakes */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">AiPet Trace</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground">Memories you can hold.</h2>
          <p className="mt-4 text-muted-foreground">
            Handcrafted in our own atelier — nose-print pendants, fur memorial beads,
            custom urns and pawprint frames. Each keepsake is one of a kind, just like them.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: noseprint, title: "Nose Print Pendant", body: "A sterling silver pendant embossed with their unique nose print." },
            { img: urns, title: "Custom Memorial Urns", body: "Malaysia's first customised urns — designed to live beautifully in your home." },
            { img: farewell, title: "Farewell Photography", body: "Soft, candlelit portraits of your pet at rest, beside the flowers they loved." },
          ].map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide: What to do */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid items-start gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">A Gentle Guide</p>
              <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                What to do when your pet has passed away
              </h2>
              <p className="mt-2 font-serif italic text-foreground/70">宠物突然离世该怎么办？</p>
              <p className="mt-5 max-w-lg text-muted-foreground">
                The first hours can feel overwhelming. These four small steps will
                help keep your pet comfortable and at peace until we arrive.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <img src={guideWipe} alt="Gently wiping a pet's body with a soft tissue" className="aspect-square w-full rounded-2xl object-cover shadow-card" />
                <img src={guideBox} alt="A pet resting peacefully inside a covered box" className="aspect-square w-full rounded-2xl object-cover shadow-card" />
              </div>
            </div>

            <ol className="space-y-5">
              {[
                {
                  t: "Gently clean their body",
                  b: "Use wet or dry tissues to wipe your pet's body. If there are any fluids from the mouth, nose, or any excretions, wipe them softly and keep the area dry.",
                },
                {
                  t: "Prepare a soft resting box",
                  b: "Line a box with a cloth or pet pee-pad. If possible, add a small pillow to support their head so they look as though they are sleeping.",
                },
                {
                  t: "Lay them down with love",
                  b: "Place your pet in the box and cover them with a soft cloth. You may add their favourite toys or treats to keep them company.",
                },
                {
                  t: "Keep them cool, then contact us",
                  b: "Move the box into an air-conditioned room set to the coldest temperature. Then message AiPet on WhatsApp — we will take care of everything from there.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-5 rounded-2xl border border-border/60 bg-card p-5 shadow-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-lg text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground">{s.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
            <p className="text-sm text-foreground/80">
              Need help right now? We answer WhatsApp anytime — day or night.
            </p>
            <WhatsAppButton label="WhatsApp 016-444 4919" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-warm px-8 py-14 text-center shadow-soft md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl text-foreground md:text-4xl">
            When the time comes, you don't have to face it alone.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/80">
            Reach us any hour, any day. We'll guide you gently through every step.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="WhatsApp 016-444 4919" />
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-6 py-3 text-sm text-foreground hover:border-foreground/40">
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
