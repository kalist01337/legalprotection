import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.brand.name}</p>
        <a href="/privacy" className="text-goldSoft hover:underline">
          Политика конфиденциальности
        </a>
        <p>{siteConfig.legalNotice}</p>
      </div>
    </footer>
  );
}
