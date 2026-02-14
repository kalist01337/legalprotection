import Link from "next/link";
import { MessageIcon, PhoneIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 pt-1 sm:pt-1.5">
      <div className="section-shell">
        <div className="site-header-frame mx-auto w-full max-w-[1240px] overflow-hidden rounded-[1.7rem] border border-gold/35 bg-[#080808]/92 shadow-[0_12px_26px_rgba(0,0,0,0.38)] backdrop-blur-[2px] sm:shadow-[0_22px_55px_rgba(0,0,0,0.5)] sm:backdrop-blur-xl">
          <div className="relative px-3 py-0.5 sm:px-6 sm:py-1">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gold-line" />
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gold-line" />

            <div className="flex h-[96px] items-center justify-between gap-2 sm:h-[130px] lg:h-[146px]">
              <Link href="/" prefetch={false} className="flex items-center">
                <img
                  src={siteConfig.media.logo}
                  alt={`${siteConfig.brand.name} logo`}
                  className="-my-3 block h-auto w-[168px] max-w-full object-contain brightness-[0.82] contrast-90 saturate-75 blur-0 [transform:translateZ(0)] sm:-my-4 sm:w-[282px] sm:blur-[0.35px] lg:-my-5 lg:w-[366px] xl:w-[440px]"
                  style={{ imageRendering: "auto" }}
                />
              </Link>

              <div className="flex items-center gap-1.5 sm:gap-3">
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="hidden items-center gap-2 rounded-full border border-gold/35 px-4 py-0.5 text-[13px] text-ivory/90 transition hover:border-gold/55 hover:text-goldSoft lg:inline-flex"
                >
                  <PhoneIcon className="h-4 w-4 text-goldSoft/95" />
                  {siteConfig.contacts.phoneDisplay}
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/55 bg-gold/15 px-3 py-1 text-[12px] font-semibold text-goldSoft transition hover:bg-gold/25 sm:px-4 sm:py-0.5 sm:text-[13px]"
                >
                  <MessageIcon className="h-4 w-4" />
                  Консультация
                </a>
              </div>
            </div>

            <nav className="mt-0">
              <div className="w-full overflow-x-auto rounded-2xl border border-gold/25 bg-white/[0.02] p-[2px]">
                <div className="mx-auto flex min-w-max items-center justify-center">
                  {siteConfig.nav.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group relative shrink-0 rounded-xl px-3 py-1 text-center font-serif text-[0.64rem] uppercase tracking-[0.18em] text-ivory/90 transition hover:bg-gold/10 hover:text-goldSoft sm:px-5 sm:py-0.5 sm:text-[0.74rem]"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px scale-x-0 bg-gold/80 transition-transform duration-300 group-hover:scale-x-100" />
                      {index < siteConfig.nav.length - 1 ? (
                        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gold/35">|</span>
                      ) : null}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
