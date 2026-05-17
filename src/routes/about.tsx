import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import hug from "@/assets/hug-dog.jpg";
import ceremony from "@/assets/ceremony-setup.jpg";
import shelf from "@/assets/memorial-shelf.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact — AiPet Pet Memorial" },
      { name: "description", content: "AiPet Pet Memorial is a non-religious pet farewell home in Cheras, Kuala Lumpur. Visit us, call 016-444 4919, or message on WhatsApp." },
      { property: "og:title", content: "About & Contact — AiPet Pet Memorial" },
      { property: "og:description", content: "Visit our memorial home in Bandar Damai Perdana, Cheras." },
    ],
  }),
  component: AboutPage,
});

const hours = [
  ["Monday", "10:30 am – 5:30 pm"],
  ["Tuesday", "10:30 am – 5:30 pm"],
  ["Wednesday", "10:30 am – 5:30 pm"],
  ["Thursday", "10:30 am – 5:30 pm"],
  ["Friday", "10:30 am – 5:00 pm"],
  ["Saturday", "10:30 am – 5:30 pm"],
  ["Sunday", "10:30 am – 5:30 pm"],
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-sky">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About AiPet</p>
            <h1 className="mt-5 font-serif text-5xl text-foreground md:text-6xl">
              They were a part of your life.<br />You were their whole world.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              AiPet Pet Memorial was founded with one quiet promise — that every
              pet deserves a farewell as loving as the life they gave us. We are a
              non-religious memorial home, so families of every belief can find a
              place to grieve, to honour, and to remember.
            </p>
          </div>
          <img src={hug} alt="A person tenderly holding their small dog" className="w-full rounded-2xl shadow-soft" />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <img src={ceremony} alt="A farewell ceremony being arranged with care" className="w-full rounded-2xl shadow-soft" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Promise</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">
              Unhurried, private, and full of care.
            </h2>
            <div className="mt-6 space-y-5 text-sm text-foreground/80">
              <p className="flex gap-3"><Heart className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span><strong className="text-foreground">Private by appointment.</strong> Every family receives an exclusive time slot. You will never share your goodbye.</span>
              </p>
              <p className="flex gap-3"><Heart className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span><strong className="text-foreground">Made by hand, in-house.</strong> Malaysia's first pet memorial brand to craft custom jewellery and urns on site.</span>
              </p>
              <p className="flex gap-3"><Heart className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span><strong className="text-foreground">No religious rites.</strong> A warm, dignified ceremony shaped around your pet — never around doctrine.</span>
              </p>
              <p className="flex gap-3"><Heart className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span><strong className="text-foreground">All beings welcome.</strong> Dogs, cats, rabbits, hamsters, hedgehogs, reptiles — every companion is family here.</span>
              </p>
            </div>
            <p className="mt-8 font-serif italic text-foreground/70">
              "It is a part of your life. You are its whole world. Goodbye is not the end —
              love will live on in our hearts."
            </p>
          </div>
        </div>
      </section>

      {/* Memorial photo strip */}
      <section className="mx-auto max-w-6xl px-5">
        <img src={shelf} alt="Memorial shelves filled with figurines and keepsakes" className="w-full rounded-3xl shadow-soft" />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact Us</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">We're here when you need us.</h2>
            <p className="mt-4 text-muted-foreground">
              The quickest way to reach us is on WhatsApp — we'll respond personally
              and walk you through every step.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><Phone className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Hotline · WhatsApp</p>
                  <a href="tel:+60164444919" className="font-serif text-2xl text-foreground hover:text-primary">016-444 4919</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><MapPin className="h-4 w-4" /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Visit our memorial home</p>
                  <p className="text-foreground">
                    1-1, Jln Damai Perdana 6/1B,<br />
                    Bandar Damai Perdana,<br />
                    56000 Cheras, Wilayah Persekutuan Kuala Lumpur
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">(Above 99 Speedmart · Waze: AiPet Pet Memorial)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><Clock className="h-4 w-4" /></div>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Business hours</p>
                  <ul className="mt-2 divide-y divide-border/60">
                    {hours.map(([d, h]) => (
                      <li key={d} className="flex justify-between py-1.5 text-sm">
                        <span className="text-foreground/80">{d}</span>
                        <span className="text-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-border p-2.5 text-foreground/70 hover:border-primary hover:text-primary">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://instagram.com/aipet_petmemorial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2.5 text-foreground/70 hover:border-primary hover:text-primary">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppButton label="Start a conversation on WhatsApp" />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="AiPet Pet Memorial location map"
              src="https://www.google.com/maps?q=1-1%2C%20Jln%20Damai%20Perdana%206%2F1B%2C%20Bandar%20Damai%20Perdana%2C%2056000%20Cheras&output=embed"
              loading="lazy"
              className="h-full min-h-[420px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
