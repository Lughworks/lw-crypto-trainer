export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Network_Intelligence_v2.1</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Intelligence_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">ON-CHAIN<br><span class="text-crypto">ANALYSIS</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Unlike traditional markets where institutional flow is hidden, blockchain is a public ledger. On-chain analysis involves monitoring the movement of assets to predict market shifts before they appear on price charts.</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-8">Supply_Flow_Dynamics</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="cyber-panel p-8 border-l-4 border-crypto">
                            <h4 class="text-xl font-black italic uppercase mb-2">Exchange Net Flow</h4>
                            <p class="text-[10px] text-zinc-500 mb-6 uppercase">The difference between coins entering and leaving exchanges.</p>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-crypto/5 p-4">
                                    <span class="text-red-500 text-[9px] font-bold uppercase tracking-widest">Inflow (High)</span>
                                    <p class="text-[10px] text-zinc-400 mt-1 uppercase">Bearish: Holders moving to sell.</p>
                                </div>
                                <div class="bg-crypto/5 p-4">
                                    <span class="text-crypto text-[9px] font-bold uppercase tracking-widest">Outflow (High)</span>
                                    <p class="text-[10px] text-zinc-400 mt-1 uppercase">Bullish: Holders moving to cold storage.</p>
                                </div>
                            </div>
                        </div>

                        

                        <div class="cyber-panel p-8 border-l-4 border-zinc-700">
                            <h4 class="text-xl font-black italic uppercase mb-2">HODL Waves</h4>
                            <p class="text-[10px] text-zinc-500 mb-6 uppercase">Visualizing the age of the coins being moved or held.</p>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center text-[10px]">
                                    <span class="text-zinc-400 uppercase">Young Supply (Day-Traders)</span>
                                    <span class="text-crypto font-mono">18.4%</span>
                                </div>
                                <div class="w-full bg-zinc-900 h-1">
                                    <div class="bg-crypto h-full w-[18%]"></div>
                                </div>
                                <div class="flex justify-between items-center text-[10px]">
                                    <span class="text-zinc-400 uppercase">Old Supply (Diamond Hands)</span>
                                    <span class="text-crypto font-mono">81.6%</span>
                                </div>
                                <div class="w-full bg-zinc-900 h-1">
                                    <div class="bg-crypto h-full w-[81%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40 font-mono">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-colors">
                            <span class="text-crypto text-[10px] font-bold italic tracking-widest">METRIC_01</span>
                            <h5 class="text-white text-lg font-black uppercase mt-2">NVT Ratio</h5>
                            <p class="text-[9px] text-zinc-500 mt-2 uppercase leading-relaxed">Network Value to Transactions. The P/E ratio of crypto. High NVT suggests overvaluation.</p>
                        </div>
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-colors">
                            <span class="text-crypto text-[10px] font-bold italic tracking-widest">METRIC_02</span>
                            <h5 class="text-white text-lg font-black uppercase mt-2">MVRV Z-Score</h5>
                            <p class="text-[9px] text-zinc-500 mt-2 uppercase leading-relaxed">Measures market value vs realized value to identify market tops and bottoms.</p>
                        </div>
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-colors">
                            <span class="text-crypto text-[10px] font-bold italic tracking-widest">METRIC_03</span>
                            <h5 class="text-white text-lg font-black uppercase mt-2">Hash Rate</h5>
                            <p class="text-[9px] text-zinc-500 mt-2 uppercase leading-relaxed">The total computational power securing the network. Price often follows hash rate.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div class="lg:col-span-7">
                            <h3 class="text-4xl font-black italic uppercase mb-8">Whale_Alert_<span class="text-crypto">Protocols</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">Whales (addresses holding >1,000 BTC) dictate market direction. Monitoring their "accumulation" or "distribution" phases is essential for risk management.</p>
                            <div class="cyber-panel bg-zinc-900/40 p-6 font-mono border-dashed border-crypto/30">
                                <div class="flex gap-4 items-center mb-4">
                                    <div class="w-2 h-2 bg-crypto rounded-full"></div>
                                    <span class="text-[10px] text-crypto uppercase tracking-tighter">Live_Feed_Simulation</span>
                                </div>
                                <div class="text-[9px] space-y-2 opacity-80">
                                    <p class="text-zinc-500">[14:22:01] <span class="text-white">5,000 BTC</span> TRANSFERRED FROM <span class="text-crypto">UNKNOWN WALLET</span> TO <span class="text-red-500">BINANCE</span></p>
                                    <p class="text-zinc-500">[14:25:44] <span class="text-white">12,400 ETH</span> STAKED IN <span class="text-crypto">LIDO_PROTOCOL</span></p>
                                    <p class="text-zinc-500">[14:30:12] <span class="text-white">1,200,000 USDC</span> MINTED AT <span class="text-crypto">TREASURY</span></p>
                                </div>
                            </div>
                        </div>

                        

                        <div class="lg:col-span-5 cyber-panel p-8 bg-crypto/5 flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-[10px] text-zinc-500 uppercase mb-4 tracking-[0.4em]">Realized_Cap</div>
                                <div class="text-5xl font-black italic text-crypto tracking-tighter">$428.2B</div>
                                <div class="text-[9px] text-zinc-600 mt-4 uppercase">Calculated by valuing each coin at the price it last moved.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_02_OnChain
                </footer>
            </div>
        </div>
    `;
}