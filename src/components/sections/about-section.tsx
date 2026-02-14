import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="section-shell pb-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-[#0b0b0b]">
        <img
          src={siteConfig.media.officeImage}
          alt="Офис Legal Protection"
          className="absolute -inset-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)] object-cover object-center brightness-[1.18] contrast-[0.98] saturate-[0.98]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 13%, black 87%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to right, transparent 0%, black 13%, black 87%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 bg-black/14" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(to_bottom,#0b0b0b_0%,rgba(11,11,11,0.78)_32%,rgba(11,11,11,0)_100%)] sm:h-72" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-[linear-gradient(to_top,#0b0b0b_0%,rgba(11,11,11,0.82)_38%,rgba(11,11,11,0)_100%)] sm:h-96" />
        <div className="absolute inset-y-0 left-0 w-60 bg-[linear-gradient(to_right,#0b0b0b_0%,rgba(11,11,11,0.76)_36%,rgba(11,11,11,0)_100%)] sm:w-72" />
        <div className="absolute inset-y-0 right-0 w-60 bg-[linear-gradient(to_left,#0b0b0b_0%,rgba(11,11,11,0.76)_36%,rgba(11,11,11,0)_100%)] sm:w-72" />
        <div className="absolute inset-x-0 top-[58%] h-24 bg-[linear-gradient(to_bottom,rgba(11,11,11,0),rgba(11,11,11,0.22),rgba(11,11,11,0))]" />

        <div className="relative z-10 max-w-3xl px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.25em] text-goldSoft/85">О центре</p>
          <h2 className="mt-2 font-serif text-3xl text-ivory md:text-4xl">{siteConfig.about.title}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ivory/90">{siteConfig.about.intro}</p>
          <ul className="mt-7 space-y-3 text-sm text-ivory/90">
            {siteConfig.about.approach.map((item) => (
              <li key={item} className="gold-dot">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
