import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";

export default function NewsPage() {
  const IMAGE_URL =
    "https://iqlzqpydoramjwsmnhvl.supabase.co/storage/v1/object/public/jinjja-web-assets";

  const newsData = [
    {
      title: "Jinjja News #5",
      date: "2025.11.25",
      images: [
        {
          src: "news_1125_1.png",
          alt: "Now you can check study time and progress.",
        },
        {
          src: "news_1125_2.png",
          alt: 'Added a "Like" feature for words.',
        },
      ],
      content: [
        "Now you can check study time and progress.",
        'Added a "Like" feature for words.',
      ],
    },
    {
      title: "Jinjja News #4",
      date: "2025.10.31",
      images: [
        {
          src: "news_1028.png",
          alt: "A word learning feature has been added.",
        },
      ],
      content: ["A word learning feature has been added.", "It's free!"],
    },
    {
      title: "Jinjja News #3",
      date: "2025.09.01",
      images: [
        {
          src: "news_0918_1.png",
          alt: "now you can check the meaning of any word in the quiz",
        },
        {
          src: "news_0918_2.png",
          alt: 'Tap "Words" to see. -> Check all the words and move on the next quiz.',
        },
      ],
      content: [
        "Now you can check the meaning of any word in the quiz.",
        'Tap "Words" to see. -> Check all the words and move on the next quiz.',
      ],
    },
    {
      title: "Jinjja News #2",
      date: "2025.09.12",
      images: [
        {
          src: "news_0912_1.png",
          alt: "now you can tap a word to see its meaning.",
        },
      ],
      content: ["Now you can tap a word to see its meaning."],
    },
    {
      title: "Jinjja News #1",
      date: "2025.09.01",
      images: [
        {
          src: "news_0901_1.png",
          alt: 'Correct letters now highlight when you tap "Show Answer" in keyboard mode.',
        },
        {
          src: "news_0901_2.png",
          alt: "In speaking mode, both blanks and the words you speak are now highlighted.",
        },
      ],
      content: [
        'Correct letters now highlight when you tap "Show Answer" in keyboard mode.',
        "In speaking mode, both blanks and the words you speak are now highlighted.",
      ],
    },
  ];

  return (
    <>
      <div className="relative pt-12 sm:pt-24 pb-12">
        {newsData.map((news) => (
          <NewsSection
            newsData={news}
            imageBaseUrl={IMAGE_URL}
            key={news.title}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
