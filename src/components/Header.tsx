import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/about", label: "About & Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AiPet Pet Memorial logo" className="h-11 w-11 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-foreground">AiPet</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pet Memorial</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+60164444919"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-3.5 w-3.5" /> 016-444 4919
          </a>
        </nav>

        <button
          className="md:hidden rounded-full p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-muted"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+60164444919"
              className="mt-1 inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> 016-444 4919
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
