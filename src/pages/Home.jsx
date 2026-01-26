import { motion } from "framer-motion";
import FloatingIcons from "../components/FloatingIcons";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen pt-12 flex items-center relative overflow-hidden">
        <FloatingIcons />

        {/* FULL WIDTH CONTAINER */}
        <div className="w-full grid md:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="pl-6 md:pl-12 lg:pl-20 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-gold">Alieus Coin</span> —
              <br />
              World’s First Hedge Fund Backed
              <br />
              Crypto Currency
            </h1>

            <p className="mt-6 text-textMuted max-w-xl">
              Alieus Coin (AHF2) isn’t just a digital currency — it’s the world’s
              first hedge fund–backed cryptocurrency designed for real-world
              use. From AI agents and real estate to metaverse access and global
              payments, AHF2 powers a complete ecosystem built for the future.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-3 rounded-full bg-gold text-black font-semibold glow-gold hover:scale-105 transition">
                Buy Now
              </button>
              <button className="px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 transition">
                Explorer
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL – IMAGE */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* glow */}
            <div className="absolute w-[520px] h-[520px] bg-gold/20 blur-3xl rounded-full"></div>

            {/* image */}
            <img
              src="https://www.alieuscoin.com/assets/images/hero.webp"
              alt="AHF Ecosystem"
              className="relative z-10 w-[380px] md:w-[450px] lg:w-[520px] animate-float"
            />
          </motion.div>

        </div>
      </section>

      {/* PARTNERS */}
      <Partners />
    </>
  );
}
