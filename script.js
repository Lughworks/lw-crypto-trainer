const TRADING_MODULES = [
  "blockchain", "onchain", "defi", "security", "tokenomics", 
  "wallets", "mining", "governance", "nfts", "l2scaling", 
  "stablecoins", "risk"
];

async function initLughworks() {
  const bootOverlay = document.getElementById("boot-loader");
  const chartLine = document.getElementById("chart-line");
  const chartHead = document.getElementById("chart-head");
  const percText = document.getElementById("perc-text");
  const statusText = document.getElementById("status-text");

  if (!bootOverlay || !chartLine || !percText) return;

  let currentX = 0;
  let points = "0,100";

  const stages = [
    { progress: 25, text: "Connecting_to_Mainnet_Node", y: 70 },
    { progress: 45, text: "Syncing_Mempool_Data", y: 85 },
    { progress: 70, text: "Validating_Genesis_Hash", y: 40 },
    { progress: 100, text: "Ledger_Synchronized", y: 20 },
  ];

  for (const stage of stages) {
    await new Promise((r) => setTimeout(r, 600));
    
    currentX += 100;
    points += ` ${currentX},${stage.y}`;

    chartLine.setAttribute("points", points);
    chartHead.setAttribute("cx", currentX);
    chartHead.setAttribute("cy", stage.y);

    percText.innerText = `${stage.progress}.00%`;
    statusText.innerText = stage.text;
  }

  setTimeout(() => {
    bootOverlay.style.opacity = "0";
    setTimeout(() => {
      bootOverlay.classList.add("hidden");
    }, 1000);
  }, 500);
}

window.closeModule = function () {
  const overlay = document.getElementById('module-overlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

window.openModule = async function (moduleId) {
  const overlay = document.getElementById('module-overlay');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  try {
    const module = await import(`./modules/${moduleId}.js`);
    overlay.innerHTML = module.render();
  } catch (err) {
    console.error("Failed to load module:", err);
    overlay.innerHTML = `
      <div class="fixed inset-0 bg-void flex items-center justify-center font-mono">
        <div class="text-center">
          <p class="text-red-500">ERROR: MODULE_NOT_FOUND [${moduleId}.js]</p>
          <button onclick="window.closeModule()" class="mt-4 border border-white/20 px-4 py-2 text-[10px] text-white">BACK</button>
        </div>
      </div>`;
  }
};

initLughworks();