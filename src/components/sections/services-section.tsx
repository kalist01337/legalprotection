import { ScaleIcon } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell pb-24">
      <div className="mb-10">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
          <ScaleIcon className="h-4 w-4" />
          Практика
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Юридические услуги</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {siteConfig.services.map((service) => (
          <article
            key={service}
            className="card-premium rounded-2xl p-5 text-sm leading-relaxed text-ivory/80 transition duration-200 hover:-translate-y-1 hover:border-gold/55"
          >
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-goldSoft">
              <ScaleIcon className="h-4 w-4" />
            </div>
            <p>{service}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
