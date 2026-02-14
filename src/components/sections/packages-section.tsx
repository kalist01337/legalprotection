import { BriefcaseIcon, CheckCircleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function PackagesSection() {
  return (
    <section id="packages" className="section-shell scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32 pb-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
            <BriefcaseIcon className="h-4 w-4" />
            Тарифы
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Пакеты сопровождения</h2>
        </div>
        <div className="hidden h-px w-48 bg-gold-line md:block" />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {siteConfig.packages.map((plan) => (
          <article
            key={plan.name}
            className="card-premium relative rounded-3xl p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.3)]"
          >
            {plan.recommended ? (
              <span className="absolute right-5 top-5 rounded-full border border-gold/50 bg-gold/15 px-3 py-1 text-xs uppercase tracking-wider text-goldSoft">
                Рекомендуем
              </span>
            ) : null}
            <h3 className="pr-28 font-serif text-2xl text-ivory">{plan.name}</h3>
            <p className="mt-3 text-2xl text-goldSoft">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex w-full items-start gap-2 leading-relaxed">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-goldSoft/95" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contacts"
              className="mt-8 inline-flex rounded-full border border-gold/45 px-4 py-2 text-sm text-goldSoft transition hover:bg-gold/10"
            >
              Оставить заявку
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
