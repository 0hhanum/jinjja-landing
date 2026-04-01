import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";
import BackgroundSpheres from "@/components/BackgroundSpheres";

export default function Home() {
  // 구조화된 데이터 (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jinjja, Your Korean Booster | The best way to learn real Korean",
    description:
      "Hangul is easy, but Korean is hard. Master Korean in just 15 minutes a day. Learn over 2,000 authentic Korean expressions used in daily life.",
    url: "https://jinjja.app",
    applicationCategory: "EducationalApplication",
    operatingSystem: ["iOS", "Android"],
    inLanguage: ["en"],
    offers: [
      {
        "@type": "Offer",
        name: "Monthly Subscription",
        price: "9.99",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "9.99",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
      },
      {
        "@type": "Offer",
        name: "Annual Subscription",
        price: "49.99",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "49.99",
          priceCurrency: "USD",
          billingDuration: "P1Y",
        },
      },
    ],
    author: {
      "@type": "Organization",
      name: "OrganCow",
    },
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <BackgroundSpheres />
      <div className="min-h-screen flex flex-col relative">
        <main className="flex-grow flex items-center justify-center pt-12 pb-16">
          <div className="mx-auto relative z-10 sm:px-16 px-8 sm:py-12 pt-8 pb-8 text-left bg-black/30">
            <h1 className="text-4xl md:text-5xl font-bold  text-jinjja-primary tracking-tight mb-2">
              Hi there.
            </h1>

            <div className="text-lg md:text-xl leading-relaxed">
              <p>I'm Hanum, the founder of Jinjja.</p>
              <div>
                <p>
                  <br />
                  Jinjja is a Korean language learning app.
                  <br />I made it with the belief that{" "}
                  <span className="text-jinjja-primary">
                    language has its own way of being learned.
                  </span>
                  <br />
                  <br />
                  So rather than just memorizing things blindly, I designed the
                  review cycles to help you learn naturally.
                  <br />
                  If you keep following, you'll find your Korean improving
                  before you know it.
                  <br />
                  <br />
                </p>
                <p>
                  I hope you'll have fun learning by texting with the characters
                  in the app.
                  <br />
                  All of the expressions are based on things people actually say
                  in Korea.
                </p>
                <br />
                <p>Since this is my job, the service is subscription-based.</p>

                <p>
                  I'm constantly thinking about{" "}
                  <a
                    href="/news"
                    target="_blank"
                    className="text-blue-500 underline hover:text-blue-200"
                  >
                    how to make Korean easier to learn,
                  </a>{" "}
                  so feel free to reach out anytime.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mt-8">
              <DownloadButton platform="ios" />
              <DownloadButton platform="android" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
