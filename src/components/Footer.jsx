import React from "react";
import {
  FaTelegram,
  FaXTwitter,
  FaMedium,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#070a12] text-gray-300 relative">
      
      {/* TOP LINK BAR */}
      <div className="border-t border-b border-yellow-500/30 py-10">
        <ul className="flex flex-wrap justify-center gap-10 text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">ABOUT AHF</li>
          <li className="hover:text-yellow-400 cursor-pointer">FEATURES</li>
          <li className="hover:text-yellow-400 cursor-pointer">TOKENOMICS</li>
          <li className="hover:text-yellow-400 cursor-pointer">ROADMAP</li>
          <li className="hover:text-yellow-400 cursor-pointer">WHITEPAPER</li>
        </ul>
      </div>

      {/* MAIN FOOTER */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-16 py-14 border-b border-yellow-500/30">

        {/* SOCIAL */}
        <div>
          <h4 className="mb-6 font-semibold">JOIN OUR SOCIAL GROUP</h4>
          <div className="flex gap-4">
            {[FaTelegram, FaXTwitter, FaMedium, FaGithub].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-center">
          <h4 className="mb-4 font-semibold">CONTACT US</h4>
          <p className="flex justify-center items-center gap-2 text-lg">
            <FaWhatsapp className="text-green-500" />
            447413074655
          </p>
        </div>

        {/* CTA */}
        <div className="text-right">
          <h4 className="mb-6 font-semibold">
            LET’S AHF GREAT TOGETHER.
          </h4>
          <button className="px-8 py-3 border border-yellow-500 rounded-lg text-yellow-400 hover:bg-yellow-500 hover:text-black transition font-semibold">
            ⇐ Purchase a Token ⇒
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-6 text-sm text-gray-400">
        Copyright © 2025 AHF. All rights reserved.
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#0b0e14] border border-yellow-500 text-yellow-400 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
