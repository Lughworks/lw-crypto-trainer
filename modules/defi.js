export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Decentralized_Finance_v3.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Economy_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">DE<span class="text-crypto">FI</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Decentralized Finance (DeFi) replaces intermediaries like banks and brokers with autonomous smart contracts. This open-source financial system allows for 24/7 global access to capital without permission or centralized custody.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div class="lg:col-span-5">
                            <h3 class="text-4xl font-black italic uppercase mb-8">Automated_Market_<span class="text-crypto">Makers</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">DEXs like Uniswap don't use order books. Instead, they use Liquidity Pools and a mathematical formula to determine price. The constant product formula ensures a pool always has liquidity, regardless of trade size.</p>
                            
                            <div class="cyber-panel p-6 bg-crypto/5 font-mono border-crypto/20">
                                <div class="text-[10px] text-crypto mb-4 uppercase tracking-widest">Pricing_Algorithm</div>
                                <div class="text-3xl font-black italic text-white mb-2">X * Y = K</div>
                                <p class="text-[9px] text-zinc-500 uppercase">X = Token A Inventory // Y = Token B Inventory // K = Constant Product</p>
                            </div>
                        </div>

                        

                        <div class="lg:col-span-7 cyber-panel p-8 bg-zinc-900/20">
                            <h4 class="text-xl font-black italic uppercase mb-6 text-crypto">The Liquidity Provider (LP) Cycle</h4>
                            <div class="space-y-6">
                                <div class="flex gap-6">
                                    <div class="text-crypto font-mono text-lg italic">01</div>
                                    <div>
                                        <h5 class="text-xs font-bold uppercase italic">Deposit</h5>
                                        <p class="text-[10px] text-zinc-500 uppercase">User provides equal values of two tokens (e.g., ETH and USDC) to a pool.</p>
                                    </div>
                                </div>
                                <div class="flex gap-6">
                                    <div class="text-crypto font-mono text-lg italic">02</div>
                                    <div>
                                        <h5 class="text-xs font-bold uppercase italic">LP Tokens</h5>
                                        <p class="text-[10px] text-zinc-500 uppercase">The protocol issues LP tokens representing the user's share of the pool's total value.</p>
                                    </div>
                                </div>
                                <div class="flex gap-6">
                                    <div class="text-crypto font-mono text-lg italic">03</div>
                                    <div>
                                        <h5 class="text-xs font-bold uppercase italic">Fee Collection</h5>
                                        <p class="text-[10px] text-zinc-500 uppercase">Every time a trader swaps tokens in that pool, a small fee is distributed to all LP holders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="cyber-panel p-12 border-t-4 border-red-500/50 bg-red-500/5">
                        <h3 class="text-2xl font-black italic uppercase mb-4 text-red-500/80">Hazard_Warning: Impermanent_Loss</h3>
                        <p class="text-[10px] text-zinc-400 uppercase leading-relaxed max-w-3xl mb-8">Impermanent loss occurs when the price of your deposited assets changes compared to when you deposited them. The larger the change, the more you are exposed to this loss relative to simply holding the assets in a wallet.</p>
                        
                        

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div class="border border-red-500/20 p-4 text-center">
                                <span class="block text-[10px] text-zinc-500 uppercase">2x Price Change</span>
                                <span class="text-red-500 font-mono text-xs">-5.7% LOSS</span>
                            </div>
                            <div class="border border-red-500/20 p-4 text-center">
                                <span class="block text-[10px] text-zinc-500 uppercase">3x Price Change</span>
                                <span class="text-red-500 font-mono text-xs">-13.4% LOSS</span>
                            </div>
                            <div class="border border-red-500/20 p-4 text-center">
                                <span class="block text-[10px] text-zinc-500 uppercase">4x Price Change</span>
                                <span class="text-red-500 font-mono text-xs">-20.0% LOSS</span>
                            </div>
                            <div class="border border-red-500/20 p-4 text-center">
                                <span class="block text-[10px] text-zinc-500 uppercase">5x Price Change</span>
                                <span class="text-red-500 font-mono text-xs">-25.5% LOSS</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">Lending_&_Borrowing_Logic</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                        <div class="border border-white/10 p-8">
                            <h5 class="text-crypto text-sm mb-4">Over-Collateralization</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">To borrow $1000 in stablecoins, you must deposit ~$1500 in ETH. This ensures the protocol remains solvent even if prices crash.</p>
                        </div>
                        <div class="border border-white/10 p-8 text-red-500/80">
                            <h5 class="text-sm mb-4">Liquidation_Threshold</h5>
                            <p class="text-[9px] text-zinc-400 leading-relaxed uppercase">If the value of your collateral drops below a certain point, the protocol automatically sells your assets to repay the loan.</p>
                        </div>
                    </div>
                    
                    
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_03_DeFi
                </footer>
            </div>
        </div>
    `;
}