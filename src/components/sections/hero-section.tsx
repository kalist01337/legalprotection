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
    "inline-flex h-[46px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border px-5 text-sm font-semibold leading-none transition sm:h-[50px] sm:w-[196px]";

  return (
    <section className="section-shell pb-12 pt-10 sm:pb-24 sm:pt-12 lg:pt-20">
      <Reveal replay>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-goldSoft/90">
          <ShieldIcon className="h-3.5 w-3.5" />
          {siteConfig.brand.subtitle}
        </p>
        <h1 className="font-serif text-[2rem] leading-tight text-ivory sm:text-4xl md:text-5xl xl:text-6xl">{siteConfig.hero.title}</h1>
        {siteConfig.hero.text ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ivory/75 sm:mt-7 sm:text-base md:text-lg">{siteConfig.hero.text}</p>
        ) : null}

        <div className="mt-8 grid gap-2.5 sm:mt-9 sm:flex sm:flex-wrap">
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

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-ivory/70 sm:mt-11 sm:gap-4">
          {siteConfig.hero.trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-3 py-1.5 sm:px-4 sm:py-2">
              <CheckCircleIcon className="h-4 w-4 text-goldSoft/95" />
              {point}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
