import { siteConfig } from "@/config/site";

export function SubscriptionSection() {
  return (
    <section id="about-service" className="section-shell pb-24">
      <div className="card-premium rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-ivory md:text-4xl">{siteConfig.subscription.heading}</h2>
          <p className="mt-5 leading-relaxed text-ivory/75">{siteConfig.subscription.text}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.subscription.benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl border border-gold/20 bg-white/0 p-4 text-sm text-ivory/80">
              <p className="gold-dot leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <a
          href="#packages"
          className="mt-8 inline-flex rounded-full border border-gold/45 px-6 py-3 text-sm font-medium text-goldSoft transition hover:bg-gold/10"
        >
          Выбрать пакет
        </a>
      </div>
    </section>
  );
}
