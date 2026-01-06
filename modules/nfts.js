export function render() {
    return `
        <div class="fixed inset-0 bg-void text-white p-6 md:p-12 blueprint-grid overflow-y-auto z-[100]">
            <div class="max-w-7xl mx-auto">
                <div class="w-full border-b border-crypto/20 pb-4 mb-12 flex justify-between items-end font-mono">
                    <div class="text-[10px] text-crypto animate-pulse uppercase">● Protocol: Non_Fungible_Registry_v1.0</div>
                    <button onclick="window.closeModule()" class="border border-crypto text-crypto py-1 px-6 text-[10px] hover:bg-crypto hover:text-black transition-all uppercase font-bold italic">Return_to_Dashboard</button>
                </div>

                <div class="mb-24">
                    <span class="text-xs font-black uppercase tracking-[0.5em] text-crypto">Ownership_Series</span>
                    <h1 class="text-7xl font-black uppercase italic mt-4 tracking-tighter leading-none mb-6">NFTS &<br><span class="text-crypto">DIGITAL_ASSETS</span></h1>
                    <div class="h-1 w-32 bg-crypto mb-8"></div>
                    <p class="max-w-2xl text-[11px] text-zinc-400 leading-relaxed uppercase">Non-Fungible Tokens (NFTs) are unique cryptographic tokens that exist on a blockchain and cannot be replicated. By utilizing smart contracts, NFTs provide a transparent and immutable record of authenticity and ownership for both digital and physical assets.</p>
                </div>

                <section class="mb-40">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-crypto/10">
                        <div class="bg-void p-8 border-r border-crypto/10">
                            <h4 class="text-xl font-black italic uppercase mb-4">Fungible</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-4">Mutually interchangeable. One Bitcoin is exactly the same as another Bitcoin. Similar to $1 bills.</p>
                            <div class="text-crypto font-mono text-[9px]">BTC // ETH // USDC</div>
                        </div>
                        <div class="bg-void p-8">
                            <h4 class="text-xl font-black italic uppercase mb-4 text-crypto">Non-Fungible</h4>
                            <p class="text-[10px] text-zinc-500 leading-relaxed uppercase mb-4">Unique and distinct. One NFT cannot be traded for another and be "the same." Similar to a plane ticket or a painting.</p>
                            <div class="text-crypto font-mono text-[9px]">ERC-721 // ERC-1155</div>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 class="text-4xl font-black italic uppercase mb-8">Metadata &<br><span class="text-crypto">Storage</span></h3>
                            <p class="text-[11px] text-zinc-400 uppercase leading-relaxed mb-8">An NFT is essentially a smart contract containing a pointer. This pointer leads to the 'Metadata'—a JSON file describing the asset's name, traits, and the location of the actual image or file.</p>
                            
                            <div class="space-y-4">
                                <div class="cyber-panel p-4 border-l-2 border-crypto bg-crypto/5">
                                    <h5 class="text-[10px] font-bold text-white uppercase italic">On-Chain Data</h5>
                                    <p class="text-[9px] text-zinc-500 uppercase mt-1">The TokenID and Contract Address that prove you own the item.</p>
                                </div>
                                <div class="cyber-panel p-4 border-l-2 border-zinc-700">
                                    <h5 class="text-[10px] font-bold text-white uppercase italic">IPFS / Decentralized Storage</h5>
                                    <p class="text-[9px] text-zinc-500 uppercase mt-1">Where the actual media file is stored to ensure it doesn't disappear if a website goes down.</p>
                                </div>
                            </div>
                        </div>

                        

                        <div class="cyber-panel bg-zinc-900/40 p-8 font-mono border border-dashed border-crypto/30">
                            <div class="text-[10px] text-crypto mb-4 uppercase tracking-widest">JSON_Metadata_Sample</div>
                            <pre class="text-[8px] text-zinc-400 leading-tight">
{
  "name": "Lughworks_Sentinel #01",
  "description": "Genesis Access Key",
  "image": "ipfs://QmXoyp...",
  "attributes": [
    { "trait_type": "Access", "value": "Alpha" },
    { "trait_type": "Power", "value": "Overclocked" }
  ]
}
                            </pre>
                        </div>
                    </div>
                </section>

                <section class="mb-40">
                    <h3 class="text-2xl font-black italic uppercase mb-12">Utility_Paradigms</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-all">
                            <h5 class="text-white text-xs font-bold uppercase mb-2">Digital Art</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Provenance and royalties for creators, automatically paid on secondary sales.</p>
                        </div>
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-all">
                            <h5 class="text-white text-xs font-bold uppercase mb-2">Gaming Assets</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">True ownership of in-game items that can be traded across different platforms.</p>
                        </div>
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-all">
                            <h5 class="text-white text-xs font-bold uppercase mb-2">Identity (ENS)</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Readable domain names (name.eth) that serve as your decentralized profile.</p>
                        </div>
                        <div class="border border-white/10 p-6 hover:bg-crypto/5 transition-all">
                            <h5 class="text-white text-xs font-bold uppercase mb-2">Real World Assets</h5>
                            <p class="text-[9px] text-zinc-500 uppercase">Tokenizing real estate, car titles, or physical collectibles for instant settlement.</p>
                        </div>
                    </div>
                </section>

                <footer class="mt-20 opacity-20 font-mono text-[9px] uppercase tracking-widest text-center">
                    End_of_File // Module_09_NFTs // Verify_Everything
                </footer>
            </div>
        </div>
    `;
}