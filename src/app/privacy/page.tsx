import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section-shell py-12 sm:py-16">
        <section className="card-premium rounded-3xl p-6 sm:p-8">
          <h1 className="font-serif text-2xl text-ivory sm:text-3xl">{siteConfig.privacy.title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-ivory/75 sm:text-base">{siteConfig.privacy.text}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
