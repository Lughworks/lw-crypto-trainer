export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Layer_2_Expansion_v2.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Architecture_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">L2<br><span class="text-crypto">SCALING</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">The Blockchain Trilemma states that it is difficult to achieve Security, Scalability, and Decentralization simultaneously. Layer 2 (L2) solutions solve this by processing transactions 'off-chain', bundling them together, and sending a compressed proof back to Layer 1 (Ethereum).</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12 text-center">The_Modular_Stack</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div class="cyber-panel p-8 border-l-4 border-zinc-700">
                            <h4 class="text-xl font-black italic uppercase mb-2">Layer 1 (The Bedrock)</h4>
                            <p class="text-[10px] text-zinc-500 mb-6 uppercase">Focus: Security and Data Availability. Ethereum Mainnet acts as the supreme court where finality is reached.</p>
                            <div class="text-[9px] font-mono text-zinc-500 uppercase">CAPACITY: ~15 TRANSACTIONS PER SECOND</div>
                        </div>
                        <div class="cyber-panel p-8 border-l-4 border-crypto">
                            <h4 class="text-xl font-black italic uppercase mb-2 text-crypto">Layer 2 (The Fast Lane)</h4>
                            <p class="text-[10px] text-zinc-500 mb-6 uppercase">Focus: Execution. Rollups handle the heavy lifting, reducing fees by up to 100x while staying secured by L1.</p>
                            <div class="text-[9px] font-mono text-crypto uppercase">CAPACITY: 2,000+ TRANSACTIONS PER SECOND</div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Rollup_<span class="text-crypto">Archetypes</span></h3>
                            <div class="space-y-8">
                                <div class="border-l-2 border-crypto/30 pl-6">
                                    <h5 class="text-crypto font-bold text-xs uppercase italic">Optimistic Rollups</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Assumes transactions are valid by default. Only performs computation if a 'Fraud Proof' is submitted. This results in a 7-day withdrawal window to Mainnet.</p>
                                    <p class="text-[9px] font-mono text-zinc-600 mt-2">EXAMPLES: ARBITRUM, OPTIMISM, BASE</p>
                                </div>
                                <div class="border-l-2 border-purple-500/30 pl-6">
                                    <h5 class="text-purple-500 font-bold text-xs uppercase italic">ZK-Rollups (Zero-Knowledge)</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Uses complex mathematics (Validity Proofs) to prove transactions are correct instantly. No waiting period for withdrawals, but higher computational cost.</p>
                                    <p class="text-[9px] font-mono text-zinc-600 mt-2">EXAMPLES: ZKSYNC, STARKNET, POLYGON ZKEVM</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="cyber-panel bg-crypto/5 p-12 flex flex-col items-center justify-center font-mono border-crypto/20">
                            <div class="text-[10px] text-crypto/60 mb-8 uppercase tracking-[0.3em]">Data_Compression_Engine</div>
                            <div class="w-full space-y-2">
                                <div class="h-2 bg-crypto/40 w-full rounded-full"></div>
                                <div class="h-2 bg-crypto/20 w-3/4 rounded-full"></div>
                                <div class="h-2 bg-crypto/10 w-1/2 rounded-full"></div>
                            </div>
                            <div class="mt-8 text-center">
                                <span class="text-[20px] font-black italic text-white uppercase">98% REDUCTION</span>
                                <p class="text-[8px] text-zinc-500 uppercase mt-1">In on-chain data footprint</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">The_L2_Transaction_Path</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[9px] text-zinc-500 uppercase">
                        <div class="p-6 border border-white/5">
                            <span class="text-white block mb-2 font-bold italic">Step 01: Sequencer</span>
                            Collects and orders transactions on the L2.
                        </div>
                        <div class="p-6 border border-white/5">
                            <span class="text-white block mb-2 font-bold italic">Step 02: Batching</span>
                            Bundles hundreds of txs into a single cryptographic package.
                        </div>
                        <div class="p-6 border border-white/5">
                            <span class="text-white block mb-2 font-bold italic">Step 03: Settlement</span>
                            Publishes the batch to Ethereum Mainnet for permanent storage.
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_10_L2Scaling // Efficiency_Unlocked
                </footer>
            </div>
        </div>
    `;
}