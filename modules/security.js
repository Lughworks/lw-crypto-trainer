export function render() {
    return `
        <div class="fixed inset-0 bg-obsidian text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-red-500/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-red-500 animate-pulse uppercase">● Protocol: Zero_Trust_Environment_v4.2</div>
                    <button onclick="window.closeModule()" class="border border-red-500 text-red-500 py-1 px-6 text-[10px] hover:bg-red-500 hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-red-500">Defense_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6 text-white">OP<span class="text-red-500">SEC</span></h1>
                    <div class="h-1 w-32 bg-red-500 mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">In a decentralized world, you are your own bank. There is no 'Forgot Password' button. This module covers the cryptographic and physical protocols required to protect assets from terminal loss and sophisticated adversaries.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-red-500/10 border border-red-500/20">
                        <div class="bg-obsidian p-8">
                            <span class="text-red-500 font-mono text-[9px]">RULE_01</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4 text-white">Cold Storage</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Never keep significant capital on an exchange. Use hardware wallets (Ledger/Trezor) to keep private keys entirely offline and away from internet-facing malware.</p>
                        </div>
                        <div class="bg-obsidian p-8 border-x border-red-500/10">
                            <span class="text-red-500 font-mono text-[9px]">RULE_02</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4 text-white">Seed Integrity</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Your 12/24-word seed phrase is your master key. Never type it on a keyboard. Never take a photo of it. Store it on steel, offline, in multiple physical locations.</p>
                        </div>
                        <div class="bg-obsidian p-8">
                            <span class="text-red-500 font-mono text-[9px]">RULE_03</span>
                            <h4 class="text-xl font-black italic uppercase mt-2 mb-4 text-white">2FA Isolation</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase">Discard SMS-based 2FA. Use hardware keys (YubiKey) or app-based authenticators. Attackers can 'Sim-Swap' your phone number in minutes.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-4xl font-black italic uppercase mb-12">Active_Threat_<span class="text-red-500">Vectors</span></h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div class="space-y-4">
                            <div class="cyber-panel p-6 border-l-2 border-red-500/40 bg-red-500/5">
                                <h5 class="text-xs font-bold text-white uppercase italic">Address Poisoning</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Attackers send dust to your wallet from a vanity address that mimics yours. They hope you'll copy it from your history for your next transaction.</p>
                            </div>
                            <div class="cyber-panel p-6 border-l-2 border-red-500/40 bg-red-500/5">
                                <h5 class="text-xs font-bold text-white uppercase italic">Phishing / Social Engineering</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Fake support agents or malicious dApps that prompt you to 'Approve' a transaction that gives them permission to drain your entire wallet.</p>
                            </div>
                            <div class="cyber-panel p-6 border-l-2 border-red-500/40 bg-red-500/5">
                                <h5 class="text-xs font-bold text-white uppercase italic">Malicious Approvals</h5>
                                <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Smart contracts can have hidden functions. Use tools like Revoke.cash regularly to clean up token allowances on your hot wallets.</p>
                            </div>
                        </div>

                        
                        <div class="cyber-panel p-8 bg-red-900/10 border border-red-500/30 flex flex-col justify-center">
                            <div class="text-[10px] text-red-500 font-mono mb-6 uppercase tracking-widest text-center">Emergency_Kill_Switch_Protocol</div>
                            <div class="space-y-4 text-[9px] font-mono text-zinc-400">
                                <p>> SECURE_NEW_WALLET_HARDWARE</p>
                                <p>> GENERATE_OFFLINE_ENTROPY_SEED</p>
                                <p>> SWEEP_ALL_LIQUID_ASSETS_IMMEDIATELY</p>
                                <p>> REVOKE_ALL_SMART_CONTRACT_PERMISSIONS</p>
                                <p>> DISCONNECT_COMPROMISED_METAMASK_SESSION</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-8">Tiered_Wallet_Infrastructure</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
                        <div class="border border-white/5 p-6 hover:bg-white/5 transition-all">
                            <div class="w-8 h-1 bg-red-500 mb-4"></div>
                            <h5 class="text-white text-sm uppercase mb-2">Vault (Cold)</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">95% of Net Worth. Hardware wallet. Air-gapped. Seed stored on steel. Never connects to dApps.</p>
                        </div>
                        <div class="border border-white/5 p-6 hover:bg-white/5 transition-all">
                            <div class="w-8 h-1 bg-orange-500 mb-4"></div>
                            <h5 class="text-white text-sm uppercase mb-2">Trading (Warm)</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">4% of Net Worth. Multi-sig or secondary hardware. Connected only to trusted DEXs like Uniswap.</p>
                        </div>
                        <div class="border border-white/5 p-6 hover:bg-white/5 transition-all">
                            <div class="w-8 h-1 bg-green-500 mb-4"></div>
                            <h5 class="text-white text-sm uppercase mb-2">Burner (Hot)</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">1% of Net Worth. Browser wallet (MetaMask). Used for new mints, airdrops, and experimental protocols.</p>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_04_Security // Eternal_Vigilance
                </footer>
            </div>
        </div>
    `;
}