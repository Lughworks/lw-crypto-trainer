export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Decentralized_Governance_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Social_Layer_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">DAOS &<br><span class="text-crypto">GOVERNANCE</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">A DAO (Decentralized Autonomous Organization) is an entity with no central leadership. Decisions are governed by proposals and voting, ensuring that every stakeholder has a voice proportional to their commitment. It is 'Community Management' enforced by smart contracts.</p>
                </div>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">The_Governance_Stack</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="cyber-panel p-8 border-t-2 border-crypto">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Token-Based Voting</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">1 Token = 1 Vote. This is the most common model. It aligns the power of the decision with the economic risk held by the voter.</p>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-zinc-700">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Quadratic Voting</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">A mathematical model that minimizes the influence of 'Whales' by making additional votes exponentially more expensive.</p>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-zinc-700">
                            <h4 class="text-lg font-black italic uppercase mb-4 text-white">Delegated Proof</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Token holders delegate their voting power to 'Experts' or 'Delegates' who study proposals full-time on the community's behalf.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Proposal_<span class="text-crypto">Lifecycle</span></h3>
                            <div class="space-y-6 font-mono text-[10px]">
                                <div class="flex gap-4">
                                    <span class="text-crypto">[01]</span>
                                    <p class="text-zinc-400 uppercase leading-relaxed"><span class="text-white font-bold">Temperature Check:</span> Discussing the idea on forums (Discord/Discourse) to gauge community sentiment.</p>
                                </div>
                                <div class="flex gap-4">
                                    <span class="text-crypto">[02]</span>
                                    <p class="text-zinc-400 uppercase leading-relaxed"><span class="text-white font-bold">Formal Proposal:</span> Submitting a 'Snapshot' or on-chain proposal with specific code changes or treasury spends.</p>
                                </div>
                                <div class="flex gap-4">
                                    <span class="text-crypto">[03]</span>
                                    <p class="text-zinc-400 uppercase leading-relaxed"><span class="text-white font-bold">Voting Period:</span> A set window (usually 3-7 days) where the community casts their votes.</p>
                                </div>
                                <div class="flex gap-4">
                                    <span class="text-crypto">[04]</span>
                                    <p class="text-zinc-400 uppercase leading-relaxed"><span class="text-white font-bold">Execution:</span> If Quorum is met and the vote passes, the smart contract automatically executes the change.</p>
                                </div>
                            </div>
                        </div>

                        

                        <div class="cyber-panel bg-crypto/5 p-8 border border-crypto/20">
                            <div class="text-[10px] text-crypto mb-6 font-mono uppercase tracking-widest">Live_Proposal_Simulation</div>
                            <div class="space-y-6">
                                <div>
                                    <div class="flex justify-between text-[9px] mb-2 uppercase">
                                        <span>PIP-42: Increase_Liquidity_Rewards</span>
                                        <span class="text-crypto">88% PASSED</span>
                                    </div>
                                    <div class="w-full bg-zinc-900 h-1">
                                        <div class="bg-crypto h-full w-[88%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-[9px] mb-2 uppercase">
                                        <span>PIP-43: Treasury_Buyback_Program</span>
                                        <span class="text-red-500">12% FAILED</span>
                                    </div>
                                    <div class="w-full bg-zinc-900 h-1">
                                        <div class="bg-red-500 h-full w-[12%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-8">On-Chain vs. Off-Chain</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
                        <div class="border border-white/10 p-8">
                            <h5 class="text-crypto text-sm mb-4 italic">Off-Chain (Snapshot)</h5>
                            <p class="text-[9px] text-zinc-500 leading-relaxed uppercase">Votes are signed with a wallet but not written to the blockchain. Cost-effective (gas-free) but requires the team to manually implement the result.</p>
                        </div>
                        <div class="border border-white/10 p-8">
                            <h5 class="text-crypto text-sm mb-4 italic">On-Chain (Tally)</h5>
                            <p class="text-[9px] text-zinc-500 leading-relaxed uppercase">Every vote is a transaction. Higher cost (Gas fees), but the code update is trustless and automatic upon success. No humans can stop it.</p>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_08_Governance // Power_to_the_Nodes
                </footer>
            </div>
        </div>
    `;
}