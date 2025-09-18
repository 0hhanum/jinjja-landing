"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const tabs = [
    { name: "Jinjja", href: "/" },
    { name: "Service", href: "/service" },
    { name: "News", href: "/news" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 ">
      <div className="max-w-7xl px-4">
        <div className="flex items-center justify-start h-12 gap-2 sm:gap-4">
          <Image
            src="/images/navIcon.png"
            alt="App icon"
            width={18}
            height={18}
            className="w-auto h-auto object-contain  mr-2"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`py-2 text-base font-medium ${
                pathname === tab.href
                  ? "text-jinjja-primary"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
