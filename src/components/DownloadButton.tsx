import Image from "next/image";

interface DownloadButtonProps {
  platform: "ios" | "android";
}

export default function DownloadButton({ platform }: DownloadButtonProps) {
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
        <Image
          src="/images/appstore-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={48}
          className="h-12 w-auto"
          priority
        />
      ) : (
        <Image
          src="/images/google-play-badge.png"
          alt="Get it on Google Play"
          width={135}
          height={48}
          className="h-12 w-auto"
          priority
        />
      )}
    </a>
  );
}
