import { MessageCircle } from "lucide-react";

const WA_NUMBER = "60164444919";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi AiPet, I would like to enquire about your pet memorial services."
)}`;

export function WhatsAppFloating() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-4 text-white shadow-soft transition-transform hover:scale-105 hover:shadow-lg"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp Us</span>
    </a>
  );
}

export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-medium text-white shadow-card transition hover:opacity-95 hover:shadow-soft ${className}`}
    >
      <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
      {label}
    </a>
  );
}
