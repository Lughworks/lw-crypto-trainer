export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Value_Stability_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Liquidity_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">STABLE<br><span class="text-crypto">COINS</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Stablecoins are the bridge between traditional finance and the blockchain. By pegging their value to a stable asset like the USD, they eliminate the volatility of crypto while retaining the speed and transparency of blockchain technology.</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">The_Stability_Spectrum</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="cyber-panel p-8 border-t-2 border-crypto">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Fiat-Backed</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-6">1:1 reserves held in traditional bank accounts (Cash, Treasuries). Requires trust in the central issuer.</p>
                            <div class="text-[9px] font-mono text-crypto uppercase">Examples: USDC, USDT</div>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-zinc-700">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Crypto-Collateralized</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-6">Backed by other crypto-assets (ETH) in over-collateralized smart contracts. Transparent but complex.</p>
                            <div class="text-[9px] font-mono text-zinc-500 uppercase">Examples: DAI, LUSD</div>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-red-900/40">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Algorithmic</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-6">Maintains peg through supply/demand code logic and incentive loops. Highest risk profile.</p>
                            <div class="text-[9px] font-mono text-red-500/50 uppercase">Examples: FRAX, (Historical: UST)</div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">The_Peg_<span class="text-crypto">Defense</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">A stablecoin stays at $1.00 through arbitrage. If the price drops to $0.99 on an exchange, market makers buy the 'cheap' coin and redeem it with the issuer for $1.00, pocketing the difference and pushing the price back up.</p>
                            
                            <div class="space-y-4 font-mono text-[10px]">
                                <div class="flex items-center gap-4">
                                    <div class="w-2 h-2 rounded-full bg-crypto"></div>
                                    <span class="text-zinc-500 uppercase">Redemption Flow: Asset -> Burn -> Fiat/Collateral Out</span>
                                </div>
                                <div class="flex items-center gap-4">
                                    <div class="w-2 h-2 rounded-full bg-crypto"></div>
                                    <span class="text-zinc-500 uppercase">Minting Flow: Fiat/Collateral In -> Mint -> Asset Out</span>
                                </div>
                            </div>
                        </div>

                        
                        <div class="cyber-panel bg-crypto/5 p-8 border border-crypto/20">
                            <div class="flex justify-between items-center mb-6">
                                <span class="text-[10px] text-crypto font-mono uppercase">Peg_Deviation_Monitor</span>
                                <span class="text-[10px] text-zinc-500 font-mono">REF: 1.0000 USD</span>
                            </div>
                            <div class="relative h-24 flex items-end gap-1">
                                <div class="w-full bg-crypto/40 h-[98%]"></div>
                                <div class="w-full bg-crypto/40 h-[99%]"></div>
                                <div class="w-full bg-crypto h-[100%]"></div>
                                <div class="w-full bg-crypto/40 h-[99%]"></div>
                                <div class="w-full bg-crypto/40 h-[101%]"></div>
                            </div>
                            <div class="mt-4 text-center font-mono text-[9px] text-zinc-600 uppercase">Real-time Arbitrage Pressure</div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="border-l-4 border-crypto bg-zinc-900/50 p-12">
                        <h3 class="text-2xl font-black italic uppercase mb-4 italic">Why_Stability_Matters</h3>
                        <p class="text-[11px] text-zinc-400 uppercase leading-relaxed max-w-3xl">Without stablecoins, decentralized finance (DeFi) cannot function. They provide a reliable 'Unit of Account' for lending, a 'Medium of Exchange' for trading pairs, and a 'Store of Value' during market crashes. They are the oxygen of the ecosystem.</p>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_11_Stablecoins // Liquidity_Sustained
                </footer>
            </div>
        </div>
    `;
}