export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Proof_of_Work_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Infrastructure_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">MINING &<br><span class="text-crypto">CONCENSUS</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Mining is the decentralized process of validating transactions and securing the network. It requires specialized hardware to solve 'SHA-256' cryptographic puzzles. Successful miners are rewarded with newly minted tokens and transaction fees, making it the heartbeat of the Bitcoin network.</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">The_Hash_Race</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div class="space-y-6">
                            <div class="cyber-panel p-6 border-l-2 border-crypto/40">
                                <h5 class="text-xs font-bold text-white uppercase italic">1. Hashing Entropy</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Hardware takes transaction data and adds a random string (the 'Nonce'). It runs this through an algorithm to produce a fixed-length output called a Hash.</p>
                            </div>
                            <div class="cyber-panel p-6 border-l-2 border-crypto/40">
                                <h5 class="text-xs font-bold text-white uppercase italic">2. Difficulty Adjustment</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">To win the block, the resulting Hash must start with a specific number of zeros. The network adjusts this difficulty every 2,016 blocks to ensure blocks are found every 10 minutes.</p>
                            </div>
                        </div>
                        <div class="bg-crypto/5 p-8 border border-crypto/20 font-mono">
                            <div class="text-[10px] text-crypto mb-6 uppercase tracking-widest">Target_Hash_Simulation</div>
                            <div class="space-y-2 opacity-80">
                                <p class="text-zinc-500 text-[9px] line-through italic">0043a2... (Fail)</p>
                                <p class="text-zinc-500 text-[9px] line-through italic">19f2c4... (Fail)</p>
                                <p class="text-crypto text-[9px] font-bold">000000... (Success! Block Won)</p>
                            </div>
                            <div class="mt-8 pt-8 border-t border-crypto/20 text-center">
                                <span class="text-[10px] text-zinc-400 uppercase">Block Reward: 3.125 BTC</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="border border-white/10 p-8 text-center">
                            <h5 class="text-white text-sm font-black uppercase mb-4">CPU / GPU Era</h5>
                            <p class="text-[9px] text-zinc-500 uppercase leading-relaxed">The early days of Bitcoin (2009-2012). Mining was possible on home computers and gaming cards.</p>
                        </div>
                        <div class="border border-white/10 p-8 text-center bg-crypto/5">
                            <h5 class="text-crypto text-sm font-black uppercase mb-4">ASIC Revolution</h5>
                            <p class="text-[9px] text-zinc-500 uppercase leading-relaxed">Application-Specific Integrated Circuits. Hardware designed solely for SHA-256 hashing. Millions of times faster than GPUs.</p>
                        </div>
                        <div class="border border-white/10 p-8 text-center">
                            <h5 class="text-white text-sm font-black uppercase mb-4">Industrial Pools</h5>
                            <p class="text-[9px] text-zinc-500 uppercase leading-relaxed">Large-scale operations and 'Mining Pools' where thousands of miners combine hash power to share rewards predictably.</p>
                        </div>
                    </div>
                    
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Hash_Rate_<span class="text-crypto">Security</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">Hash rate is the total computational power being used to mine. A higher hash rate makes the network more secure against a '51% Attack' because the cost of overpowering the network becomes prohibitively expensive.</p>
                        </div>
                        <div class="cyber-panel p-8 flex items-center justify-center border-dashed border-crypto/30 bg-zinc-900/40">
                            <div class="text-center">
                                <div class="text-[10px] text-zinc-500 uppercase mb-2 tracking-[0.4em]">Current_Network_Hashrate</div>
                                <div class="text-4xl font-black italic text-crypto tracking-tighter">650.4 EH/s</div>
                                <div class="text-[8px] text-zinc-600 mt-2 font-mono uppercase">Exahashes per second</div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_07_Mining // Secure_the_Chain
                </footer>
            </div>
        </div>
    `;
}