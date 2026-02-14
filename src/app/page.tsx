import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SubscriptionSection } from "@/components/sections/subscription-section";
import { AdaptiveHeroMedia } from "@/components/ui/adaptive-hero-media";
import { absoluteUrl, siteConfig } from "@/config/site";

export default function HomePage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.brand.name,
    description: siteConfig.brand.description,
    url: absoluteUrl("/"),
    telephone: siteConfig.contacts.phoneRaw,
    email: siteConfig.contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Д. Конаева, 12/1, офис 518/1",
      addressLocality: "Астана",
      addressRegion: "район Есиль",
      addressCountry: "KZ",
    },
    areaServed: "Астана",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />

      <div className="relative -mt-[170px] min-h-[90vh] overflow-hidden pt-[170px] sm:-mt-[188px] sm:min-h-[88vh] sm:pt-[188px] lg:-mt-[206px] lg:min-h-[86vh] lg:pt-[206px]">
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_0%,#000_74%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_74%,transparent_100%)]">
          <AdaptiveHeroMedia videoSrc={siteConfig.media.heroVideo} posterSrc={siteConfig.media.heroImage} />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,8,8,0.62)_0%,rgba(8,8,8,0.48)_45%,rgba(8,8,8,0.65)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(to_bottom,rgba(7,7,7,0.88)_0%,rgba(7,7,7,0.35)_48%,rgba(7,7,7,0)_100%)] sm:h-44 lg:h-52" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,rgba(11,11,11,0)_0%,rgba(11,11,11,0.22)_34%,rgba(11,11,11,0.6)_70%,#0b0b0b_100%)] sm:h-44 lg:h-48" />
        </div>

        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>

      <main className="pt-8 sm:pt-10 lg:pt-12">
        <SubscriptionSection />
        <PackagesSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
