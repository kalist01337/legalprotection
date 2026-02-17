"use client";

import type { MouseEvent } from "react";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { label: "WhatsApp", href: siteConfig.contacts.whatsappHref, icon: WhatsAppIcon },
  { label: "Instagram", href: siteConfig.contacts.instagramHref, icon: InstagramIcon },
  { label: "Telegram", href: siteConfig.contacts.telegramHref, icon: TelegramIcon },
];

const instagramAndroidIntent =
  "intent://instagram.com/_u/legal_protectionkz/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=https%3A%2F%2Fwww.instagram.com%2Flegal_protectionkz%2F;end";

export function FloatingSocial() {
  const handleInstagramClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined" || !/Android/i.test(navigator.userAgent)) return;
    event.preventDefault();
    window.location.href = instagramAndroidIntent;
  };

  return (
    <aside className="pointer-events-none fixed right-2 bottom-24 z-40 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <div className="pointer-events-auto flex flex-col gap-2 rounded-2xl border border-gold/25 bg-[#0a0a0a]/80 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          const isExternal = item.href.startsWith("http");
          const openInCurrentTab = item.label === "Instagram";

          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              target={isExternal && !openInCurrentTab ? "_blank" : undefined}
              rel={isExternal && !openInCurrentTab ? "noreferrer" : undefined}
              onClick={item.label === "Instagram" ? handleInstagramClick : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-white/[0.02] text-ivory/85 transition hover:-translate-x-0.5 hover:border-gold/60 hover:bg-gold/12 hover:text-goldSoft"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
