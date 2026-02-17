"use client";

import { type MouseEvent, useMemo, useState } from "react";
import {
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageIcon,
  PhoneIcon,
  TelegramIcon,
} from "@/components/ui/icons";
import { TwoGisMap } from "@/components/ui/two-gis-map";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const fullAddress = useMemo(() => siteConfig.contacts.addressLines.join(" "), []);
  const mapCenter = useMemo(() => ({ lat: 51.130526, lon: 71.428731 }), []);
  const twoGisDirectionsUrl =
    "https://2gis.kz/astana/directions/points/%7C71.428731%2C51.130526%3B70000001052001652?m=71.545689%2C51.086376%2F12.86";
  const instagramAndroidIntent =
    "intent://instagram.com/_u/legal_protectionkz/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.instagram.com%2Flegal_protectionkz%2F;end";

  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined" || !/Android/i.test(navigator.userAgent)) return;
    event.preventDefault();
    window.location.href = instagramAndroidIntent;
  };

  return (
    <section id="contacts" className="section-shell pb-20">
      <div className="mb-8">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
          <PhoneIcon className="h-4 w-4" />
          РљРѕРЅС‚Р°РєС‚С‹
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">РљРѕРЅС‚Р°РєС‚РЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ</h2>
      </div>

      <div className="card-premium rounded-3xl p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <aside>
            <div className="rounded-2xl border border-gold/30 bg-white/[0.02] p-4 sm:p-5">
              <dl className="space-y-4">
                <div className="grid grid-cols-[18px_1fr] items-start gap-x-3">
                  <PhoneIcon className="mt-1 h-4 w-4 text-goldSoft/90" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-goldSoft/70">РўРµР»РµС„РѕРЅ</dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.contacts.phoneHref}
                        className="font-serif text-xl leading-none text-ivory transition hover:text-goldSoft"
                      >
                        {siteConfig.contacts.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="grid grid-cols-[18px_1fr] items-start gap-x-3">
                  <MailIcon className="mt-1 h-4 w-4 text-goldSoft/90" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-goldSoft/70">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={siteConfig.contacts.emailHref}
                        className="font-serif text-[15px] tracking-[0.01em] text-ivory/92 transition hover:text-goldSoft hover:underline"
                      >
                        {siteConfig.contacts.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="grid grid-cols-[18px_1fr] items-start gap-x-3">
                  <MapPinIcon className="mt-1 h-4 w-4 text-goldSoft/90" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-goldSoft/70">РђРґСЂРµСЃ</dt>
                    <dd className="mt-1 font-serif text-[15px] leading-relaxed tracking-[0.01em] text-ivory/92">
                      {fullAddress}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
              <a
                href={siteConfig.contacts.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-goldSoft transition hover:bg-gold/10"
              >
                <PhoneIcon className="h-4 w-4" />
                РџРѕР·РІРѕРЅРёС‚СЊ
              </a>
              <a
                href={siteConfig.contacts.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-goldSoft transition hover:bg-gold/10"
              >
                <MessageIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={siteConfig.contacts.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-goldSoft transition hover:bg-gold/10"
              >
                <TelegramIcon className="h-4 w-4" />
                Telegram
              </a>
              <a
                href={siteConfig.contacts.instagramHref}
                onClick={handleInstagramClick}
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-goldSoft transition hover:bg-gold/10"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">Р“СЂР°С„РёРє</p>
                <p className="mt-1.5 text-sm text-ivory/85">Р•Р¶РµРґРЅРµРІРЅРѕ СЃ 09:00 РґРѕ 20:00</p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">РћС‚РІРµС‚</p>
                <p className="mt-1.5 text-sm text-ivory/85">Р’ РјРµСЃСЃРµРЅРґР¶РµСЂР°С… РѕР±С‹С‡РЅРѕ 10-20 РјРёРЅСѓС‚</p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">Р¤РѕСЂРјР°С‚</p>
                <p className="mt-1.5 text-sm text-ivory/85">РћС‡РЅР°СЏ Рё РѕРЅР»Р°Р№РЅ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ</p>
              </div>

              <a
                href={twoGisDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5 text-left transition hover:bg-gold/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">РњР°СЂС€СЂСѓС‚</p>
                <p className="mt-1.5 text-sm text-ivory/85">РћС‚РєСЂС‹С‚СЊ РІ 2Р“РРЎ</p>
              </a>
            </div>
          </aside>

          <div className="overflow-hidden rounded-2xl border border-gold/30 bg-[#0b0b0b] lg:min-h-[500px]">
            {isMapVisible ? (
              <TwoGisMap lat={mapCenter.lat} lon={mapCenter.lon} className="h-[320px] w-full sm:h-[350px] lg:h-full" />
            ) : (
              <div className="flex h-[320px] w-full flex-col items-center justify-center gap-4 bg-[#0b0b0b] px-4 text-center sm:h-[350px] lg:h-full">
                <p className="max-w-sm text-sm text-ivory/75">РљР°СЂС‚Р° 2Р“РРЎ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ РїРѕ РєР»РёРєСѓ</p>
                <button
                  type="button"
                  onClick={() => setIsMapVisible(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-5 py-2 text-sm text-goldSoft transition hover:bg-gold/10"
                >
                  РџРѕРєР°Р·Р°С‚СЊ РєР°СЂС‚Сѓ 2Р“РРЎ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
