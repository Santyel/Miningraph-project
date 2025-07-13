let provider;
let signer;

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById("status").innerText = "Connected: " + address;
    document.getElementById("username").innerText =
      address.slice(0, 6) + "..." + address.slice(-4);
  } else {
    alert("MetaMask nie je dostupný.");
  }
}

async function claim() {
  alert("Simulovaný CLAIM — napojené na kontrakt (logika sa dá rozšíriť).");
}

async function buyMiner() {
  alert("Simulovaný NÁKUP Minera — napojené na kontrakt (logika sa dá doplniť).");
}

document.getElementById("connectButton").addEventListener("click", connectWallet);
