export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-red-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-red-500 animate-pulse uppercase">● Protocol: Survival_Security_v4.0</div>
                    <button onclick="window.closeModule()" class="border border-red-500 text-red-500 py-1 px-6 text-[10px] hover:bg-red-500 hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-red-500">Survival_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6 text-white">RISK<br><span class="text-red-500">MITIGATION</span></h1>
                    <div class="h-1 w-32 bg-red-500 mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">In crypto, you are your own bank. Risk management is not just about choosing the right trade—it is about ensuring that your capital remains under your control, protected from market volatility, code exploits, and social engineering.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="cyber-panel p-6 border-l-2 border-red-500/50 bg-red-500/5">
                            <h5 class="text-red-500 text-[10px] font-bold uppercase mb-2">Smart Contract Risk</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Code is Law. Bugs in protocols can lead to total drainage of funds. Only use audited protocols.</p>
                        </div>
                        <div class="cyber-panel p-6 border-l-2 border-orange-500/50 bg-orange-500/5">
                            <h5 class="text-orange-500 text-[10px] font-bold uppercase mb-2">Custodial Risk</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">"Not your keys, not your crypto." Leaving funds on exchanges exposes you to insolvency or hacks.</p>
                        </div>
                        <div class="cyber-panel p-6 border-l-2 border-yellow-500/50 bg-yellow-500/5">
                            <h5 class="text-yellow-500 text-[10px] font-bold uppercase mb-2">Slippage & Depth</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">In low liquidity markets, a large buy/sell can move the price against you by 10% instantly.</p>
                        </div>
                        <div class="cyber-panel p-6 border-l-2 border-zinc-500/50 bg-zinc-500/5">
                            <h5 class="text-zinc-300 text-[10px] font-bold uppercase mb-2">Regulatory Risk</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Sudden legal shifts can lock your assets or prevent you from accessing liquidity in your region.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">The_Golden_<br><span class="text-red-500">Rule_of_1%</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">Never risk more than 1% of your total portfolio on a single trade idea. If you have $10,000, your max loss per trade is $100. This allows you to survive a 10-trade losing streak and still have 90% of your capital intact.</p>
                            
                            <div class="space-y-4 font-mono">
                                <div class="p-4 bg-zinc-900 border border-white/5 flex justify-between items-center">
                                    <span class="text-[10px] text-zinc-500 uppercase">Account Balance</span>
                                    <span class="text-sm text-white">$10,000</span>
                                </div>
                                <div class="p-4 bg-zinc-900 border border-white/5 flex justify-between items-center">
                                    <span class="text-[10px] text-zinc-500 uppercase">Risk (1%)</span>
                                    <span class="text-sm text-red-500">$100</span>
                                </div>
                                <div class="p-4 bg-red-500/10 border border-red-500/20 flex justify-between items-center">
                                    <span class="text-[10px] text-red-500 uppercase">Stop Loss Placement</span>
                                    <span class="text-sm text-white">Entry - 5%</span>
                                </div>
                                <div class="p-4 bg-zinc-900 border border-white/5 flex justify-between items-center">
                                    <span class="text-[10px] text-zinc-500 uppercase">Required Position Size</span>
                                    <span class="text-sm text-white">$2,000</span>
                                </div>
                            </div>
                        </div>

                        

                        <div class="cyber-panel bg-red-900/10 p-12 border border-red-500/30">
                            <div class="text-[10px] text-red-500 font-mono mb-4 uppercase text-center">Ruin_Probability_Simulation</div>
                            <div class="relative h-48 border-b border-l border-white/10 flex items-center justify-center italic text-red-500/40 font-black text-6xl">
                                DANGER
                            </div>
                            <p class="mt-4 text-[9px] text-zinc-500 text-center uppercase">Above 3% risk per trade, the probability of account ruin increases exponentially during high-volatility events.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="border border-white/10 p-12">
                        <h3 class="text-2xl font-black italic uppercase mb-8">Rug_Pull_Red_Flags</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <span class="text-red-500 font-mono text-xs">01</span>
                                    <div>
                                        <h6 class="text-white text-xs font-bold uppercase">Unlocked Liquidity</h6>
                                        <p class="text-[9px] text-zinc-500 uppercase mt-1">If the developers can withdraw the LP tokens at any time, they can drain the pool and leave you with worthless tokens.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <span class="text-red-500 font-mono text-xs">02</span>
                                    <div>
                                        <h6 class="text-white text-xs font-bold uppercase">Concentrated Supply</h6>
                                        <p class="text-[9px] text-zinc-500 uppercase mt-1">Check the 'Holders' tab on Etherscan. If 5 wallets hold 80% of the supply, you are the exit liquidity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <span class="text-red-500 font-mono text-xs">03</span>
                                    <div>
                                        <h6 class="text-white text-xs font-bold uppercase">Honeypot Logic</h6>
                                        <p class="text-[9px] text-zinc-500 uppercase mt-1">Some contracts allow you to buy but have a hidden function that prevents you from selling.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <span class="text-red-500 font-mono text-xs">04</span>
                                    <div>
                                        <h6 class="text-white text-xs font-bold uppercase">No Audit / Hidden Devs</h6>
                                        <p class="text-[9px] text-zinc-500 uppercase mt-1">Anonymous teams are common, but high-value protocols should have reputable 3rd-party security audits.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    System_Complete // All_Modules_Loaded // Survive_And_Thrive
                </footer>
            </div>
        </div>
    `;
}