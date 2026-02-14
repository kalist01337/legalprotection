import {
  CheckCircleIcon,
  MessageIcon,
  PenSquareIcon,
  PhoneIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const actionButtonBase =
    "inline-flex h-[50px] w-[196px] items-center justify-center gap-2 whitespace-nowrap rounded-full border px-5 text-sm font-semibold leading-none transition";

  return (
    <section className="section-shell pb-24 pt-12 lg:pt-20">
      <Reveal replay>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-goldSoft/90">
          <ShieldIcon className="h-3.5 w-3.5" />
          {siteConfig.brand.subtitle}
        </p>
        <h1 className="font-serif text-4xl leading-tight text-ivory md:text-5xl xl:text-6xl">{siteConfig.hero.title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">{siteConfig.hero.text}</p>

        <div className="mt-9 flex flex-wrap gap-2.5">
          <a
            href={siteConfig.contacts.phoneHref}
            className={`${actionButtonBase} border-gold/60 bg-[#0f0f0f]/80 text-goldSoft shadow-[0_8px_26px_rgba(0,0,0,0.35)] hover:bg-gold/20`}
          >
            <PhoneIcon className="h-4 w-4" />
            Позвонить
          </a>
          <a
            href={siteConfig.contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`${actionButtonBase} border-gold/60 bg-[#0f0f0f]/80 text-goldSoft shadow-[0_8px_26px_rgba(0,0,0,0.35)] hover:bg-gold/20`}
          >
            <MessageIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#contacts"
            className={`${actionButtonBase} border-gold/60 bg-[#0f0f0f]/80 text-goldSoft shadow-[0_8px_26px_rgba(0,0,0,0.35)] hover:bg-gold/20`}
          >
            <PenSquareIcon className="h-4 w-4" />
            Оставить заявку
          </a>
        </div>

        <div className="mt-11 flex flex-wrap gap-4 text-sm text-ivory/70">
          {siteConfig.hero.trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2">
              <CheckCircleIcon className="h-4 w-4 text-goldSoft/95" />
              {point}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
