export default function Roadmap() {
  return (
    <section className="w-full bg-bgDark text-textMain px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
        Roadmap
      </h2>

      <p className="text-center text-textMuted max-w-4xl mx-auto mb-20">
        The Alieus Coin project is organized into distinct phases designed to
        ensure strategic development, community engagement, and global expansion.
      </p>

      {/* ROADMAP GRID */}
      <div className="grid md:grid-cols-4 gap-10 relative">

        {/* ===== COLUMN 1 : 2025 ===== */}
        <div className="relative border border-gold/40 rounded-2xl p-8 min-h-[520px]">
          <div className="absolute -top-5 left-8 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            2025
          </div>

          <div className="space-y-12 mt-12 text-lg font-medium">
            <p>Q1 - 2025</p>
            <p>Q2 - 2025</p>
            <p>Q3 - 2025</p>
            <p>Q4 - 2025</p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* ===== COLUMN 2 : 2026 ===== */}
        <div className="relative border border-gold/40 rounded-2xl p-8 min-h-[520px]">
          <div className="absolute -top-5 left-8 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            2026
          </div>

          <div className="space-y-12 mt-12 text-lg font-medium">
            <p>Q2 - 2026</p>
            <p>Q3 - 2026</p>
            <p>Q4 - 2026</p>
          </div>

          <div className="mt-10 space-y-6 text-sm text-textMuted">
            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-white mt-1"></span>
              <p>
                Listing on CoinMarketCap (CMC) and CoinGecko – Increasing market
                transparency and attracting global investment.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-white mt-1"></span>
              <p>
                AI/ML Project Alpha & Developer SDK Release – Early access to AI
                tools and developer kits.
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* ===== COLUMN 3 : 2027 ===== */}
        <div className="relative border border-gold/40 rounded-2xl p-8 min-h-[520px]">
          <div className="absolute -top-5 left-8 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            2027
          </div>

          <div className="space-y-12 mt-12 text-lg font-medium">
            <p>Q1 - 2027</p>
            <p>Q2 - 2027</p>
            <p>Q4 - 2027</p>
          </div>

          <div className="mt-10 space-y-6 text-sm text-textMuted">
            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-white mt-1"></span>
              <p>
                Alieus Card Launch & Real Estate Marketplace Beta – Payment card
                system and real estate tokenization platform.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-gold mt-1"></span>
              <p>
                AI/ML Project Alpha Update – Continued enhancements and broader
                developer engagement.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-white mt-1"></span>
              <p>
                Full Blockchain Deployment & Cross-Chain Integrations – Seamless
                interoperability rollout.
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* ===== COLUMN 4 : 2028 ===== */}
        <div className="relative border border-gold/40 rounded-2xl p-8 min-h-[520px]">
          <div className="absolute -top-5 left-8 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            2028
          </div>

          <div className="space-y-12 mt-12 text-lg font-medium">
            <p>Q2 - 2028</p>
          </div>

          <div className="mt-10 space-y-6 text-sm text-textMuted">
            <div className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-white mt-1"></span>
              <p>
                Global Expansion & Enterprise Partnerships – Strategic
                international partnerships and enterprise-level adoption.
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 rounded-full bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
