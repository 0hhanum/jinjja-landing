import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";
import BackgroundSpheres from "@/components/BackgroundSpheres";

export default function ServicePage() {
  return (
    <div className="relative">
      <BackgroundSpheres />
      {/* 섹션 1: 메인 히어로 */}
      <section className="section-container relative">
        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-4xl md:text-7xl font-bold text-jinjja-primary md:leading-20 leading-12">
              Jinjja,
              <br />
              your Korean Booster
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The best way to learn real Korean
            </p>
            {/* CTA */}
            <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
              <DownloadButton platform="ios" />
              <DownloadButton platform="android" />
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 2: Speak Play Learn - 좌측 이미지 */}
      <section className="section-container relative">
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center justify-items-center">
          <div className="relative order-2 md:order-1">
            <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
              <Image
                src="/images/screenshots/speak-play-learn.png"
                alt="Speak Play Learn feature"
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-3xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
      <section className="section-container relative">
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center justify-items-center">
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
              <Image
                src="/images/screenshots/learnInContext.png"
                alt="Learn in Context feature"
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-3xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>
      {/* 섹션 4: 2000 Authentic Korean Phrases - 좌측 이미지 */}
      <section className="section-container relative">
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center justify-items-center">
          <div className="relative order-2 md:order-1">
            <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
              <Image
                src="/images/screenshots/2000authentic-korean-phrase.png"
                alt="2000 Authentic Korean Phrases feature"
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-3xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
              dialogues, not from textbooks. From workplace politeness to casual
              slang, see how locals really speak in Korea.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 5: Just Start - 우측 이미지 */}
      <section className="section-container relative">
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center justify-items-center">
          <div className="flex flex-col screenshot-info-text-left gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
              Just <span className="text-jinjja-primary">Start</span>
            </h2>
            <p className="text-xl text-gray-300 text-center md:text-left">
              No course choices. Just tailored learning for you.
            </p>
            <p className="text-gray-400 text-center md:text-left">
              Forget complicated course catalogs and placement tests. We figure
              out your level for you, then serve up a daily learning plan you
              can jump into right away.
            </p>
          </div>
          <div className="relative">
            <div className="w-64 md:w-80 h-auto bg-transparent rounded-3xl mx-auto relative overflow-hidden shadow-2xl">
              <Image
                src="/images/screenshots/just-start.png"
                alt="Just Start feature"
                width={320}
                height={640}
                className="w-full h-auto object-contain rounded-3xl"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>
      {/* 섹션 7: CTA */}
      <section className="section-container relative">
        <div className="relative z-10 max-w-5xl mx-auto px-8 w-full text-center space-y-8 sm:space-y-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-jinjja-primary">
            Start with Jinjja.
          </h2>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
            <DownloadButton platform="ios" />
            <DownloadButton platform="android" />
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
