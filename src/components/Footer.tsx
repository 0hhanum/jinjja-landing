import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-4 left-0 right-0 ">
      <div className="text-center text-gray-400 sm:text-s text-xs ">
        <p>© 2024 OrganCow. All rights reserved.</p>
        <div className="flex justify-center  gap-4">
          <a
            href="/privacy-policy.html"
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
  );
}
