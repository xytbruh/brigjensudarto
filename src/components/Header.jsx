import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMap,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
export default function Header() {
  return (
    <header className="bg-[#ff5001] text-white hidden lg:block">
      <div className="max-w-6xl mx-auto rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="items-center mx-auto flex justify-between">
          <div className="flex items-center gap-4">
            <FaPhone />
            <span>08383712371</span>
            <span className="font-bold">|</span>
            <FaMap />
            <span>dimasnugraha@gmail.com</span>
          </div>

          <div>
            <ul className="flex gap-2">
              <li>
                <Link
                  href=""
                  className="hover:text-black transition-all duration-300"
                >
                  <FaInstagram size="20" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-black transition-all duration-300"
                >
                  <FaFacebook size="20" />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-black transition-all duration-300"
                >
                  <FaTiktok size="20" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
