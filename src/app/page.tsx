// SEO 최적화를 위해 서버 사이드 렌더링 사용
import Script from "next/script";

// 앱스토어/플레이스토어 버튼 컴포넌트
const AppStoreButton = ({ platform }: { platform: "ios" | "android" }) => {
  const isIOS = platform === "ios";

  return (
    <a
      href={
        isIOS
          ? "https://apps.apple.com/us/app/jinjja-your-korean-booster/id6746579913?l=en-GB"
          : "https://play.google.com/store/apps/details?id=com.hanum.jinjja"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 hover:scale-105 hover:opacity-80"
      aria-label={`Download Jinjja Korean on ${
        isIOS ? "App Store" : "Google Play"
      }`}
    >
      {isIOS ? (
        <img
          src="/images/appstore-badge.svg"
          alt="Download on the App Store"
          className="h-12 w-auto"
        />
      ) : (
        <img
          src="/images/google-play-badge.png"
          alt="Get it on Google Play"
          className="h-12 w-auto"
        />
      )}
    </a>
  );
};

export default function Home() {
  // 구조화된 데이터 (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jinjja: Your Korean Booster",
    description:
      "Hangul is easy, but Korean is hard, right? Master Korean in just 15 minutes a day. Learn over 2,000 authentic Korean expressions used in daily life.",
    url: "https://jinjja-landing.vercel.app",
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
      {/* 구조화된 데이터 추가 */}
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <div className="scroll-container">
        {/* 섹션 1: 메인 히어로 */}
        <section className="section-container bg-black relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-large md:-top-64 md:-right-40 sm:-top-24 sm:-right-24 -top-24 -right-24"></div>
          <div className="gradient-bg-circle gradient-bg-circle-medium  md:-bottom-48 md:-left-24 sm:-bottom-20 sm:-left-5 -bottom-20 -left-5"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6 w-full">
            <div className="gap-2 flex flex-col items-center">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-jinjja-primary">
                Jinjja,
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-jinjja-primary">
                your Korean Booster
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mb-4">
                The best way to learn real Korean
              </p>
              {/* CTA */}
              <div className="flex flex-row gap-4 justify-center items-center h-24">
                <AppStoreButton platform="ios" />
                <AppStoreButton platform="android" />
              </div>
            </div>
          </div>
        </section>

        {/* 섹션 2: Speak Play Learn - 좌측 이미지 */}
        <section className="section-container bg-[#111111] relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-medium sm:top-10 sm:left-20 -top-16 -left-20"></div>
          <div className="gradient-bg-circle gradient-bg-circle-small sm:bottom-20 sm:right-32 -bottom-8 -right-16"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                <img
                  src="/images/screenshots/speak-play-learn.png"
                  alt="Speak Play Learn feature"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
            <div className="flex flex-col order-1 md:order-2 screenshot-info-text-right gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-jinjja-primary text-center md:text-left">
                Speak, Play, Learn
              </h2>
              <p className="text-2xl text-gray-300 text-center md:text-left">
                Interactive Learning Experience
              </p>
              <span>
                <p className="text-gray-400 text-center md:text-left">
                  Make learning Korean fun with interactive speaking exercises,
                  gamified lessons, and streak tracking to keep you motivated.
                </p>
                <p className="text-gray-400 text-center md:text-left">
                  Our smart review system uses the forgetting curve to help you
                  remember what you learn and build lasting memory.
                </p>
              </span>
            </div>
          </div>
        </section>

        {/* 섹션 3: Learn in Context - 우측 이미지 */}
        <section className="section-container bg-black relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-large md:-top-64 md:-right-40 sm:-top-24 sm:-right-24 -top-24 -right-24"></div>
          <div className="gradient-bg-circle gradient-bg-circle-medium  md:-bottom-48 md:-left-24 sm:-bottom-20 sm:-left-5 -bottom-20 -left-5"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="gap-4 flex flex-col screenshot-info-text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                Learn in <span className="text-jinjja-primary">Context</span>
              </h2>
              <p className="text-xl text-gray-300 text-center md:text-left">
                Hangul is easy, but Korean is hard
              </p>
              <p className="text-gray-400 text-center md:text-left">
                Context-based learning helps you speak naturally in any Korean
                conversation. Every phrase is taught through real-life
                conversations and situations.
              </p>
            </div>
            <div className="relative">
              <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                <img
                  src="/images/screenshots/learn-in-context.png"
                  alt="Learn in Context feature"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 섹션 4: 2000 Authentic Korean Phrases - 좌측 이미지 */}
        <section className="section-container bg-[#111111] relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-medium sm:top-10 sm:left-20 -top-16 -left-20"></div>
          <div className="gradient-bg-circle gradient-bg-circle-small sm:bottom-20 sm:right-32 -bottom-8 -right-16"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                <img
                  src="/images/screenshots/2000authentic-korean-phrase.png"
                  alt="2000 Authentic Korean Phrases feature"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
            <div className="flex flex-col order-1 md:order-2 screenshot-info-text-right gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                <span className="text-jinjja-primary">2000+</span> Authentic
                Korean Phrases
              </h2>
              <p className="text-xl text-gray-300 text-center md:text-left">
                No more textbook Korean
              </p>
              <p className="text-gray-400 text-center md:text-left">
                Learn over 2,000 authentic Korean phrases through real-life
                dialogues, not from textbooks. From workplace politeness to
                casual slang, see how locals really speak in Korea.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 5: Just Start - 우측 이미지 */}
        <section className="section-container bg-black relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-large md:-top-64 md:-right-40 sm:-top-24 sm:-right-24 -top-24 -right-24"></div>
          <div className="gradient-bg-circle gradient-bg-circle-medium  md:-bottom-48 md:-left-24 sm:-bottom-20 sm:-left-5 -bottom-20 -left-5"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center justify-items-center">
            <div className="flex flex-col screenshot-info-text-left gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                Just <span className="text-jinjja-primary">Start</span>
              </h2>
              <p className="text-xl text-gray-300 text-center md:text-left">
                No course choices. Just tailored learning for you.
              </p>
              <p className="text-gray-400 text-center md:text-left">
                Forget complicated course catalogs and placement tests. We
                figure out your level for you, then serve up a daily learning
                plan you can jump into right away.
              </p>
            </div>
            <div className="relative">
              <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
                <img
                  src="/images/screenshots/just-start.png"
                  alt="Just Start feature"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
        {/* 섹션 6: 타겟 사용자 */}
        <section className="section-container bg-[#111111] relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-medium sm:top-10 sm:left-20 -top-16 -left-20"></div>
          <div className="gradient-bg-circle gradient-bg-circle-small sm:bottom-20 sm:right-32 -bottom-8 -right-16"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center gap-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-jinjja-primary mb-16">
              Looking for advanced Korean?
            </h2>
            <div className="grid md:grid-cols-3 md:gap-16 gap-4">
              {[
                {
                  icon: "🎭",
                  title: "K-Drama & K-Pop Fans",
                  text: "Want to understand your favorite content without subtitles? ",
                },
                {
                  icon: "💼",
                  title: "Working Professionals",
                  text: "Working with Korean colleagues or clients?",
                },
                {
                  icon: "✈️",
                  title: "Travel Enthusiasts",
                  text: "Heading to Korea?",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black p-8 rounded-2xl border border-gray-600 hover:border-jinjja-primary/50 transition-colors flex flex-col justify-center gap-4"
                  style={{
                    padding: "16px",
                  }}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
            {/* 추가 정보 섹션 */}
            <div>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                With Jinjja, speak naturally in every conversation.
              </p>
            </div>
          </div>
        </section>

        {/* 섹션 7: CTA */}
        <section className="section-container relative overflow-hidden">
          {/* 배경 그라디언트 원들 */}
          <div className="gradient-bg-circle gradient-bg-circle-large md:-top-64 md:-right-40 sm:-top-24 sm:-right-24 -top-24 -right-24"></div>
          <div className="gradient-bg-circle gradient-bg-circle-medium  md:-bottom-48 md:-left-24 sm:-bottom-20 sm:-left-5 -bottom-20 -left-5"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center gap-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-jinjja-primary mb-8">
              Start with Jinjja.
            </h2>
            <div className="flex flex-row gap-6 justify-center items-center mb-12 h-24">
              <AppStoreButton platform="ios" />
              <AppStoreButton platform="android" />
            </div>
          </div>
          <footer className="absolute bottom-4 left-0 right-0 ">
            <div className="text-center text-gray-400 text-s">
              <p className="mb-4">© 2024 OrganCow. All rights reserved.</p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://0hhanum.github.io/jinjja-policy/"
                  className="hover:text-jinjja-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  className="hover:text-jinjja-primary transition-colors"
                >
                  Terms of Use
                </a>
                <div>Contact: jinjja.ko@gmail.com</div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}
