export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Asset_Interface_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Interface_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">WALLETS &<br><span class="text-crypto">CUSTODY</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">A crypto wallet doesn't actually 'store' your coins—they live on the blockchain. The wallet stores your Private Keys, which are the digital signatures required to move your assets. Choosing the right custody model is the most important decision a participant makes.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div class="cyber-panel p-8 border-t-2 border-zinc-800">
                            <h4 class="text-xl font-black italic uppercase mb-4">Custodial (Exchange)</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-6">Third parties (Coinbase, Binance) hold the keys for you. You login with an email and password. Convenient, but subject to exchange insolvency and 'Not your keys, not your coins' risk.</p>
                            <div class="text-[9px] font-mono text-red-500/70 uppercase">Risk Profile: Centralized Failure Point</div>
                        </div>
                        <div class="cyber-panel p-8 border-t-2 border-crypto">
                            <h4 class="text-xl font-black italic uppercase mb-4 text-crypto">Non-Custodial (Self)</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-6">You hold the 12-24 word seed phrase. You have total control and total responsibility. If you lose the keys, the assets are gone forever. No support desk exists to help you.</p>
                            <div class="text-[9px] font-mono text-crypto uppercase">Risk Profile: Personal Operational Security</div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-4xl font-black italic uppercase mb-12 text-center underline decoration-crypto/30 underline-offset-8">Key_Logic_Flow</h3>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 font-mono text-center">
                        <div class="p-6">
                            <div class="text-crypto text-2xl mb-2 italic">01</div>
                            <h5 class="text-xs font-bold uppercase mb-2 text-white">Private Key</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">The secret number. It allows you to spend your funds. Never share this.</p>
                        </div>
                        <div class="p-6">
                            <div class="text-crypto text-2xl mb-2 italic">02</div>
                            <h5 class="text-xs font-bold uppercase mb-2 text-white">Public Key</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Derived from the private key. Used to prove ownership of the address.</p>
                        </div>
                        <div class="p-6">
                            <div class="text-crypto text-2xl mb-2 italic">03</div>
                            <h5 class="text-xs font-bold uppercase mb-2 text-white">Wallet Address</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">A hashed version of the public key. This is your 'IBAN' you share with others.</p>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Hardware vs.<br><span class="text-crypto">Software</span></h3>
                            <div class="space-y-6">
                                <div class="border-l-2 border-zinc-700 pl-6">
                                    <h5 class="text-white font-bold text-xs uppercase italic tracking-widest">Hot Wallets (Software)</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Browser extensions (MetaMask) or Mobile Apps. Always connected to the internet. High convenience, medium security. Best for daily dApp interactions.</p>
                                </div>
                                <div class="border-l-2 border-crypto pl-6">
                                    <h5 class="text-crypto font-bold text-xs uppercase italic tracking-widest">Cold Wallets (Hardware)</h5>
                                    <p class="text-[10px] text-zinc-400 mt-2 uppercase leading-relaxed">Physical devices (Ledger, Trezor). Keys never touch an internet-connected computer. Maximum security. Required for long-term storage.</p>
                                </div>
                            </div>
                        </div>

                        <div class="cyber-panel bg-crypto/5 p-12 border-crypto/20 flex flex-col items-center">
                             <div class="w-24 h-40 border-2 border-crypto/40 rounded-lg flex flex-col items-center justify-center gap-4 relative">
                                <div class="w-12 h-12 bg-crypto/20 rounded-full flex items-center justify-center">
                                    <div class="w-6 h-6 border border-crypto rounded-sm italic text-[8px] flex items-center justify-center">KEY</div>
                                </div>
                                <div class="w-16 h-1 bg-crypto/20"></div>
                                <div class="w-16 h-1 bg-crypto/20"></div>
                                <div class="absolute -top-2 -right-2 w-4 h-4 bg-crypto animate-ping rounded-full opacity-20"></div>
                             </div>
                             <p class="text-[8px] font-mono mt-8 text-crypto/60 uppercase">Hardware_Enclave_Simulated</p>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_06_Wallets // Sovereignty_Restored
                </footer>
            </div>
        </div>
    `;
}