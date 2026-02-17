import { ScaleIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell pb-24">
      <Reveal className="mb-10" amount={0.12}>
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-goldSoft/80">
          <ScaleIcon className="h-4 w-4" />
          Практика
        </p>
        <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">Юридические услуги</h2>
      </Reveal>

      <Reveal amount={0.12}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {siteConfig.services.map((service) => (
            <article
              key={service}
              className="card-premium h-[144px] rounded-2xl p-4 text-sm leading-relaxed text-ivory/80 transition duration-200 hover:-translate-y-1 hover:border-gold/55"
            >
              <div className="mb-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-goldSoft">
                <ScaleIcon className="h-3.5 w-3.5" />
              </div>
              <p>{service}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
