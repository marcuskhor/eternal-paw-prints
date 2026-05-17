import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-serif text-2xl text-foreground">AiPet</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Pet Memorial
          </div>
          <p className="mt-4 font-serif italic text-foreground/80">
            爱在心中，宠伴永恒
          </p>
          <p className="text-sm text-muted-foreground">
            Love in our hearts, pets forever with us.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground">Visit</h4>
          <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              1-1, Jln Damai Perdana 6/1B,<br />
              Bandar Damai Perdana,<br />
              56000 Cheras, Kuala Lumpur
            </span>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground">Contact</h4>
          <a href="tel:+60164444919" className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> 016-444 4919
          </a>
          <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 text-primary" />
            <span>
              Mon – Thu, Sat – Sun: 10:30 – 17:30<br />
              Friday: 10:30 – 17:00
            </span>
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-border p-2 text-foreground/70 hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/aipet_petmemorial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2 text-foreground/70 hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Our Services</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About & Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AiPet Pet Memorial. A non-religious pet farewell service in Kuala Lumpur.
        </div>
      </div>
    </footer>
  );
}
