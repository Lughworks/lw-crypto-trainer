export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-electric/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-electric animate-pulse uppercase">● Protocol: Economic_Architecture_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-electric text-electric py-1 px-6 text-[10px] hover:bg-electric hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-electric">System_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">TOKEN<span class="text-electric">OMICS</span></h1>
                    <div class="h-1 w-32 bg-electric mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Tokenomics is the study of the economic models governing cryptocurrency tokens. It defines how tokens are created, distributed, and removed from circulation, aligning incentives between developers, investors, and users to ensure long-term sustainability.</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-4xl font-black italic uppercase mb-12">Supply_Logic_<span class="text-electric">Architecture</span></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div class="space-y-8">
                            <div class="cyber-panel p-6 bg-zinc-900/20 border-l-2 border-electric/40">
                                <h5 class="text-xs font-bold text-white uppercase italic">Maximum vs. Circulating Supply</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">The Max Supply is the absolute ceiling (e.g., Bitcoin's 21M). Circulating Supply is what's liquid in the market today. A large gap often signals impending dilution from team or investor unlocks.</p>
                            </div>
                            <div class="cyber-panel p-6 bg-zinc-900/20 border-l-2 border-electric/40">
                                <h5 class="text-xs font-bold text-white uppercase italic">Inflationary Models</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">New tokens are continuously minted to reward miners or validators (PoW/PoS), incentivizing network security but potentially diluting value if demand doesn't keep pace.</p>
                            </div>
                            <div class="cyber-panel p-6 bg-zinc-900/20 border-l-2 border-electric/40">
                                <h5 class="text-xs font-bold text-white uppercase italic">Deflationary Mechanisms</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Mechanisms like 'Token Burning' permanently remove tokens from circulation (e.g., BNB burns), increasing scarcity and theoretically boosting price over time.</p>
                            </div>
                        </div>
                        
                                            </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-8">Distribution_&_Vesting_Schedules</h3>
                    <p class="text-[10px] text-zinc-400 uppercase mb-12 max-w-3xl">Strategic allocation prevents market manipulation. Modern benchmarks allocate ~40% to community incentives, ~20% to the core team, and ~15-20% to private investors.</p>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 font-mono">
                        <div class="border border-white/10 p-8">
                            <h5 class="text-electric text-sm mb-4 italic">The Cliff</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">A 'lock-up' period (typically 6-12 months) where no tokens are released. This ensures the team and early investors remain committed to building before they can sell.</p>
                        </div>
                        <div class="border border-white/10 p-8">
                            <h5 class="text-electric text-sm mb-4 italic">Linear Vesting</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Tokens are released gradually over 3-4 years after the cliff. This prevents sudden 'supply shocks' that could crash the token price.</p>
                        </div>
                        <div class="border border-white/10 p-8">
                            <h5 class="text-electric text-sm mb-4 italic">Ecosystem Reserve</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Tokens held in a treasury for future development, partnerships, and airdrops to bootstrap new users and maintain the network effect.</p>
                        </div>
                    </div>

                                    </section>

                <section class="mb-40">
                    <h3 class="text-4xl font-black italic uppercase mb-12">Utility_&_Value_<span class="text-electric">Accrual</span></h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div class="bg-electric/5 p-6 border border-electric/10">
                            <span class="block text-electric text-[10px] mb-2 font-bold italic uppercase">Governance</span>
                            <p class="text-[9px] text-zinc-400 uppercase">Holders vote on protocol upgrades, fee structures, and treasury spends.</p>
                        </div>
                        <div class="bg-electric/5 p-6 border border-electric/10">
                            <span class="block text-electric text-[10px] mb-2 font-bold italic uppercase">Staking</span>
                            <p class="text-[9px] text-zinc-400 uppercase">Locking tokens to secure the network or earn a percentage of protocol revenue.</p>
                        </div>
                        <div class="bg-electric/5 p-6 border border-electric/10">
                            <span class="block text-electric text-[10px] mb-2 font-bold italic uppercase">Gas Fees</span>
                            <p class="text-[9px] text-zinc-400 uppercase">The token is required to pay for transactions or smart contract interactions.</p>
                        </div>
                        <div class="bg-electric/5 p-6 border border-electric/10">
                            <span class="block text-electric text-[10px] mb-2 font-bold italic uppercase">Access</span>
                            <p class="text-[9px] text-zinc-400 uppercase">Tokens act as a key to unlock premium features, content, or services.</p>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_05_Tokenomics // Incentives_Aligned
                </footer>
            </div>
        </div>
    `;
}