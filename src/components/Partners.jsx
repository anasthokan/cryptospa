import { motion } from "framer-motion";

const partners = [
  "CoinMarketCap",
  "BINANCE",
  "Alieus Fund",
  "CoinGecko",
  "WBTC",
];

export default function Partners() {
  return (
    <section className="py-24 overflow-hidden bg-bgDark2">
      <div className="max-w-7xl mx-auto px-8">

        <h3 className="text-center text-sm tracking-widest text-gold mb-12">
          • OUR TOP PARTNER •
        </h3>

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="min-w-[260px] h-[90px] flex items-center justify-center
              border border-gold/60 rounded-xl
              bg-black/60 backdrop-blur
              text-textMain font-semibold tracking-wide"
            >
              {name}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
