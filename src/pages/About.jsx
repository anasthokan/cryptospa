import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-bgDark text-textMain">

      {/* 1️⃣ INTRODUCING AHF */}
      <div className="pt-20 pb-16 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12">
          Introducing <span className="text-gold">AHF</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-14">
            <div className="relative pl-6 border-l border-gold">
              <h3 className="text-xl font-semibold mb-4">What is AHF?</h3>
              <p className="text-textMuted leading-relaxed">
                AHF is a next-generation decentralized digital currency designed to power seamless, secure, and borderless peer-to-peer transactions. Built to support real-world applications and futureready innovations, AHF is more than just a cryptocurrency—it's the foundation of a growing ecosystem that bridges digital finance with practical utility.
              </p>
            </div>

            <div className="relative pl-6 border-l border-gold">
              <h3 className="text-xl font-semibold mb-4">Why AHF is Needed</h3>
              <p className="text-textMuted leading-relaxed">
                In a world where financial systems are often restrictive, AHF offers an open, decentralized alternative. It enables fast, transparent, and cost-effective transactions without reliance on banks or central authorities. By returning control to users, AHF promotes true financial freedom and inclusion on a global scale.
              </p>
            </div>

            <div className="relative pl-6 border-l border-gold">
              <h3 className="text-xl font-semibold mb-4">
                Why AHF Represents Wealth
              </h3>
              <p className="text-textMuted leading-relaxed">
                AHF is designed to be a store of value and a tool for financial empowerment. With a limited supply, decentralized governance, and increasing demand, it has the potential for long-term value appreciation. AHF offers both accessibility and security, making it a powerful asset for wealth preservation and growth.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute w-[420px] h-[420px] bg-gold/20 blur-3xl rounded-full"></div>

            <div className="w-[340px] h-[420px] rounded-2xl border border-gold/40 bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Umtwv00tvwXhVK3phTgmtWCukB_jQCQMOw&s"
                alt="AHF Coin"
                className="w-full h-full object-contain p-6 animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2️⃣ PROBLEM & SOLUTION */}
      <div className="py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          AHF Problem & Solution
        </h2>

        <div className="grid md:grid-cols-2 border border-gold/40 rounded-2xl overflow-hidden">
          <div className="p-10 border-b md:border-b-0 md:border-r border-gold/40 bg-black/50">
            <h3 className="text-2xl font-semibold mb-8">AHF Problem</h3>
            <ul className="space-y-4 text-textMuted">
              <li>Limited real-world use</li>
              <li>Lack of trust</li>
              <li>No ecosystem link</li>
              <li>Complex access</li>
              <li>Slow adoption</li>
            </ul>
          </div>

          <div className="p-10 bg-black/50">
            <h3 className="text-2xl font-semibold mb-8">AHF Solution</h3>
            <ul className="space-y-4 text-textMuted">
              <li>Real utility</li>
              <li>Trusted vision</li>
              <li>All-in-one platform</li>
              <li>Simple access</li>
              <li>Future-ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3️⃣ WHY YOU CHOOSE ALIEUS COIN */}
      <div className="py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Why You Choose <span className="text-gold">Alieus Coin</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="space-y-8">
            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Real-World Utility</h4>
              <p className="text-textMuted text-sm">
                Use it for payments, real estate, staking, and accessing dApps.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Early Growth Stage</h4>
              <p className="text-textMuted text-sm">
                Get in early with strong upside potential.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-[260px] h-[360px] border border-gold/40 rounded-2xl bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Umtwv00tvwXhVK3phTgmtWCukB_jQCQMOw&s"
                alt="AHF Coin"
                className="w-full h-full object-contain p-6 animate-float"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">AI-Driven Ecosystem</h4>
              <p className="text-textMuted text-sm">
                Powered by AI/ML for smart automation and agents marketplace.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Secure & Scalable</h4>
              <p className="text-textMuted text-sm">
                Built on strong blockchain infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
