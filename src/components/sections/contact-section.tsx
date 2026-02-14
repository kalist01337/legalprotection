"use client";

import { useMemo, useState } from "react";
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

  return (
    <section id="contacts" className="section-shell pb-20">
      <div className="mb-8">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
          <PhoneIcon className="h-4 w-4" />
          Контакты
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Контактная информация</h2>
      </div>

      <div className="card-premium rounded-3xl p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <aside>
            <div className="rounded-2xl border border-gold/30 bg-white/[0.02] p-4 sm:p-5">
              <dl className="space-y-4">
                <div className="grid grid-cols-[18px_1fr] items-start gap-x-3">
                  <PhoneIcon className="mt-1 h-4 w-4 text-goldSoft/90" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-goldSoft/70">Телефон</dt>
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
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-goldSoft/70">Адрес</dt>
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
                Позвонить
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
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-4 py-2 text-goldSoft transition hover:bg-gold/10"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">График</p>
                <p className="mt-1.5 text-sm text-ivory/85">Ежедневно с 09:00 до 20:00</p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">Ответ</p>
                <p className="mt-1.5 text-sm text-ivory/85">В мессенджерах обычно 10-20 минут</p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5">
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">Формат</p>
                <p className="mt-1.5 text-sm text-ivory/85">Очная и онлайн консультация</p>
              </div>

              <a
                href={twoGisDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-gold/25 bg-white/[0.02] p-3.5 text-left transition hover:bg-gold/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-goldSoft/75">Маршрут</p>
                <p className="mt-1.5 text-sm text-ivory/85">Открыть в 2ГИС</p>
              </a>
            </div>
          </aside>

          <div className="overflow-hidden rounded-2xl border border-gold/30 bg-[#0b0b0b] lg:min-h-[500px]">
            {isMapVisible ? (
              <TwoGisMap lat={mapCenter.lat} lon={mapCenter.lon} className="h-[320px] w-full sm:h-[350px] lg:h-full" />
            ) : (
              <div className="flex h-[320px] w-full flex-col items-center justify-center gap-4 bg-[#0b0b0b] px-4 text-center sm:h-[350px] lg:h-full">
                <p className="max-w-sm text-sm text-ivory/75">Карта 2ГИС загружается по клику</p>
                <button
                  type="button"
                  onClick={() => setIsMapVisible(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/45 px-5 py-2 text-sm text-goldSoft transition hover:bg-gold/10"
                >
                  Показать карту 2ГИС
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
