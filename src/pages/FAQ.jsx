export default function FAQ() {
  return (
    <section className="w-full bg-bgDark text-textMain px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
        FAQ
      </h2>

      {/* CATEGORY TABS */}
      <div className="flex justify-center mb-20">
        <div className="flex gap-2 border border-gold/40 rounded-xl p-2 bg-black/60">
          <button className="px-6 py-2 rounded-lg bg-gold text-black font-medium">
            General Question
          </button>
          <button className="px-6 py-2 rounded-lg text-textMuted hover:text-white">
            Card Utility
          </button>
          <button className="px-6 py-2 rounded-lg text-textMuted hover:text-white">
            Listings
          </button>
          <button className="px-6 py-2 rounded-lg text-textMuted hover:text-white">
            Real Estate
          </button>
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="space-y-6 max-w-6xl mx-auto">

        {/* Q1 – OPEN */}
        <div className="border border-gold/40 rounded-xl bg-black/60 p-8 relative">
          <h4 className="text-lg font-medium mb-4">
            01- What is Alieus Coin (AHF2)?
          </h4>
          <p className="text-textMuted leading-relaxed">
            Alieus Coin (AHF2) is a next-gen digital asset built on the Binance
            Smart Chain, designed to power real-world utilities like AI, real
            estate, and blockchain transactions.
          </p>

          <div className="absolute right-6 top-8 text-gold text-xl">
            ↑
          </div>
        </div>

        {/* Q2 – OPEN */}
        <div className="border border-gold/40 rounded-xl bg-black/60 p-8 relative">
          <h4 className="text-lg font-medium mb-4">
            02- What is the total supply of AHF2?
          </h4>
          <p className="text-textMuted leading-relaxed">
            AHF2 has a fixed supply of 1 billion tokens, each priced at $1 USD.
          </p>

          <div className="absolute right-6 top-8 text-gold text-xl">
            ↑
          </div>
        </div>

        {/* Q3 – OPEN */}
        <div className="border border-gold/40 rounded-xl bg-black/60 p-8 relative">
          <h4 className="text-lg font-medium mb-4">
            03- What makes Alieus different from other crypto projects?
          </h4>
          <p className="text-textMuted leading-relaxed">
            Alieus combines practical use cases—like a crypto card, property
            buying, and an AI marketplace—into one unified token ecosystem.
          </p>

          <div className="absolute right-6 top-8 text-gold text-xl">
            ↑
          </div>
        </div>

        {/* Q4 – OPEN */}
        <div className="border border-gold/40 rounded-xl bg-black/60 p-8 relative">
          <h4 className="text-lg font-medium mb-4">
            04- Is there a whitepaper for Alieus Coin?
          </h4>
          <p className="text-textMuted leading-relaxed">
            Yes, the whitepaper details the full vision, tokenomics, and roadmap
            of AHF2.
          </p>

          <div className="absolute right-6 top-8 text-gold text-xl">
            ↑
          </div>
        </div>

        {/* Q5 – OPEN */}
        <div className="border border-gold/40 rounded-xl bg-black/60 p-8 relative">
          <h4 className="text-lg font-medium mb-4">
            05- Where can I store my AHF2 tokens?
          </h4>
          <p className="text-textMuted leading-relaxed">
            You can store AHF2 in any BSC-compatible wallet such as MetaMask,
            Trust Wallet, or the Alieus Wallet (coming soon).
          </p>

          <div className="absolute right-6 top-8 text-gold text-xl">
            ↑
          </div>
        </div>

      </div>
    </section>
  );
}
