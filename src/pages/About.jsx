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
                AHF is designed to be a store of value and a tool for financial empowerment. With a limited supply, decentralized governance, and increasing demand, it has the potential for long-term value appreciation. AHF offers both accessibility and security, making it a powerful asset for wealth preservation and growth.
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

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-gold/20 blur-3xl rounded-full"></div>
            <div className="w-[340px] h-[420px] rounded-2xl border border-gold/40 bg-black/60 flex items-center justify-center">
              IMAGE_HERE
            </div>
          </div>
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

      {/* 4️⃣ WHY AHF IS WORTH BUYING TODAY */}
      <div className="py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Why AHF is Worth Buying Today?
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-8">
            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Real Use, Real Value</h4>
              <p className="text-textMuted text-sm">
                AHF works in real life—payments, real estate, smart apps. Not just hype, but real utility.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Early Growth Stage</h4>
              <p className="text-textMuted text-sm">
                Get in early. AHF is building fast, with room to grow in value and use.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Limited Supply</h4>
              <p className="text-textMuted text-sm">
                Only a fixed amount. More demand, higher value. AHF is built to hold strong.
              </p>
            </div>
          </div>

          {/* RIGHT – STATIC ROI */}
          <div className="border border-gold/40 rounded-2xl bg-gradient-to-br from-[#2a0a3d]/90 to-[#14051f]/90 p-8 backdrop-blur">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              ROI Calculator
            </h3>

            <div className="mb-6">
              <div className="flex justify-between mb-3 text-sm">
                <span>Initial Capital</span>
                <span>$100,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20 relative">
                <div className="h-2 w-[70%] bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-1 left-[70%]"></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-3 text-sm">
                <span>Expected Monthly Return</span>
                <span>100%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/20 relative">
                <div className="h-2 w-[85%] bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full absolute -top-1 left-[85%]"></div>
              </div>
            </div>

            <div className="mt-8 flex justify-between text-lg font-semibold">
              <span>Projected Monthly Profit:</span>
              <span>$100000.00</span>
            </div>
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
                Use it for payments, real estate, staking, and accessing dApps—true everyday use.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Early Growth Stage</h4>
              <p className="text-textMuted text-sm">
                Get in early with strong upside potential.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Limited Supply</h4>
              <p className="text-textMuted text-sm">
                
Limited Supply, High Potential
Fixed supply means long-term value. Early adoption = early gains.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-[260px] h-[360px] border border-gold/40 rounded-2xl bg-black/60 flex items-center justify-center">
              IMAGE_HERE
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">AI-Driven Ecosystem</h4>
              <p className="text-textMuted text-sm">
                
AI-Driven Ecosystem
Powered by AI/ML for smart features like Agents Marketplace and automated tools.
              </p>
            </div>

            <div className="p-6 border border-gold/40 rounded-xl bg-black/60">
              <h4 className="font-semibold mb-2">Secure & Scalable</h4>
              <p className="text-textMuted text-sm">
                Built on a strong blockchain that supports smart contracts and cross-chain use.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
