export default function Tokenomics() {
  return (
    <section className="w-full bg-bgDark text-textMain px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
        AHF Tokenomics
      </h2>

      <div className="grid md:grid-cols-3 gap-16 items-start">

        {/* LEFT – DISTRIBUTION */}
        <div className="space-y-6">

          {[
            ["10%", "Advisory, Marketing & Development", "100000000"],
            ["10%", "Liquidity Provision", "100000000"],
            ["10%", "ICO (Initial Coin Offering)", "100000000"],
            ["2%", "Charity", "20000000"],
            ["3%", "Reserve Fund", "30000000"],
            ["45%", "Staking Rewards", "450000000"],
            ["20%", "Ecosystem Development", "200000000"],
          ].map(([pct, title, amount], i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-b border-gold/30 pb-4"
            >
              <div className="min-w-[60px] text-center px-3 py-2 rounded-md bg-gold text-black font-semibold">
                {pct}
              </div>
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-sm text-textMuted">[{amount}]</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER – COIN VISUAL */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[360px] h-[360px] bg-purple-500/20 blur-3xl rounded-full"></div>

          <div className="w-[260px] h-[260px] flex items-center justify-center">
            {/* Replace with coin image if you want */}
            <div className="w-[220px] h-[220px] rounded-full border border-gold/40 bg-black/60 flex items-center justify-center">
              COIN IMAGE
            </div>
          </div>
        </div>

        {/* RIGHT – TOKEN INFO */}
        <div className="space-y-6">

          {[
            ["Total Supply", "1B AHF2"],
            ["Technology", "Binance Smart Chain"],
            ["Token Name", "Alieus 2.0"],
            ["Ticker", "AHF2"],
          ].map(([title, value], i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl border border-gold/40 bg-black/60"
            >
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
                🪙
              </div>
              <div>
                <p className="text-sm text-textMuted">{title}</p>
                <p className="font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BSC SCAN BUTTON */}
      <div className="flex justify-center mt-24">
        <a
          href="#"
          className="px-10 py-4 rounded-xl border border-gold
                     bg-gradient-to-r from-yellow-500 to-orange-500
                     text-black font-semibold tracking-wide
                     hover:scale-105 transition"
        >
          ← BSC SCAN →
        </a>
      </div>

    </section>
  );
}
