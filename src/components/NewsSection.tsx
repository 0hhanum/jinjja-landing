import Image from "next/image";

interface NewsData {
  title: string;
  date: string;
  images: {
    src: string;
    alt: string;
  }[];
  content: string[];
}

interface NewsSectionProps {
  newsData: NewsData;
  imageBaseUrl: string;
}

export default function NewsSection({
  newsData,
  imageBaseUrl,
}: NewsSectionProps) {
  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

  return (
    <section className="relative max-w-7xl mx-auto flex justify-center sm:bg-[#1a1a1a] sm:py-16 py-8 mb-8">
      <div className="relative z-10 mx-auto sm:px-48 px-4">
        <div className="flex flex-col w-full ">
          <div className="mb-4">
            <h1 className="text-2xl sm:text-4xl font-bold text-jinjja-primary">
              {newsData.title}
            </h1>
            <span className="text-gray-400 text-md sm:text-xl">
              {newsData.date}
            </span>
          </div>
          <div>
            <div className="overflow-x-auto">
              <div className="flex gap-4 mb-4 sm:flex-row flex-col">
                {newsData.images.map((image, index) => (
                  <a
                    key={index}
                    href={`${imageBaseUrl}/${image.src}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={`${imageBaseUrl}/${image.src}`}
                      alt={image.alt}
                      width={380}
                      height={640}
                      className="w-auto h-auto object-contain"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </a>
                ))}
              </div>
            </div>
            <ol className="text-gray-100 text-md sm:text-lg list-decimal list-inside">
              {newsData.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
