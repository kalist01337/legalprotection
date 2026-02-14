import { siteConfig } from "@/config/site";

export function PrivacySection() {
  return (
    <section id="privacy" className="section-shell pb-16">
      <div className="card-premium rounded-3xl p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-ivory">{siteConfig.privacy.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-ivory/75">{siteConfig.privacy.text}</p>
      </div>
    </section>
  );
}
