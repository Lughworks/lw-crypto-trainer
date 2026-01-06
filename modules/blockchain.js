export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Distributed_Ledger_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Infrastructure_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">BLOCK<span class="text-crypto">CHAIN</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">At its core, a blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. It is the fundamental trust layer for the modern internet.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-crypto/10">
                        <div class="bg-void p-8">
                            <span class="text-crypto font-mono text-[9px]">PILLAR_01</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4">Decentralization</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Unlike traditional banks, there is no central authority. The network is maintained by thousands of independent nodes globally.</p>
                        </div>
                        <div class="bg-void p-8">
                            <span class="text-crypto font-mono text-[9px]">PILLAR_02</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4">Immutability</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Once a transaction is recorded and confirmed, it cannot be altered. This is achieved through cryptographic hashing.</p>
                        </div>
                        <div class="bg-void p-8">
                            <span class="text-crypto font-mono text-[9px]">PILLAR_03</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4">Transparency</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Every transaction ever executed is publicly viewable on the ledger, providing a level of auditability never before possible.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Anatomy_of_a_<span class="text-crypto">Block</span></h3>
                            <div class="space-y-6">
                                <div class="border-l-2 border-crypto/30 pl-6">
                                    <h5 class="text-crypto font-bold text-xs uppercase italic">1. Block Header</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Contains metadata: Version, Timestamp, Difficulty Target, and the Nonce used for Proof of Work.</p>
                                </div>
                                <div class="border-l-2 border-crypto/30 pl-6">
                                    <h5 class="text-crypto font-bold text-xs uppercase italic">2. Prev_Hash</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">The cryptographic link to the parent block. This chain of hashes is what makes the ledger secure.</p>
                                </div>
                                <div class="border-l-2 border-crypto/30 pl-6">
                                    <h5 class="text-crypto font-bold text-xs uppercase italic">3. Merkle Root</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">A digital fingerprint of all the transactions contained within the block.</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        <div class="cyber-panel bg-crypto/5 p-12 flex flex-col items-center justify-center font-mono border-crypto/20">
                            <div class="text-[10px] text-crypto/60 mb-4 uppercase tracking-[0.3em]">Hashed_Data_Simulation</div>
                            <div class="text-[9px] break-all text-zinc-500">
                                00000000000000000005af...fb823e1
                            </div>
                            <div class="w-full h-px bg-crypto/20 my-4"></div>
                            <div class="text-[9px] break-all text-crypto">
                                f3a4e1b2...9c8d7e6f5a4b3c2d1
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12 text-center">Consensus_Mechanisms</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="cyber-panel p-8 border-t-2 border-crypto">
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Proof of Work (PoW)</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed mb-6">Miners solve complex mathematical puzzles using hardware energy to secure the network. Used by Bitcoin.</p>
                            <div class="text-[9px] font-mono text-crypto">SECURITY: EXTREME // COST: HIGH</div>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-zinc-700">
                            <h5 class="text-lg font-black italic uppercase mb-4 text-white">Proof of Stake (PoS)</h5>
                            <p class="text-[10px] text-zinc-400 uppercase leading-relaxed mb-6">Validators lock up (stake) their tokens to be chosen to create the next block. Used by Ethereum.</p>
                            <div class="text-[9px] font-mono text-zinc-500">EFFICIENCY: HIGH // SECURITY: ECONOMIC</div>
                        </div>
                    </div>
                    
                    
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_01_Blockchain
                </footer>
            </div>
        </div>
    `;
}