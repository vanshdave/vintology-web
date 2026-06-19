// js/ledger-blockchain.js
// Simulates an unalterable chain-of-custody tracking interface using database strings.

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("ledger-selector");
    const vault = window.WINE_VAULT; // Connect to our data shield safely

    if (!vault) {
        console.error("Ledger engine failure: Data matrix unavailable.");
        return;
    }

    // 1. Populate the Asset Contract drop-down select menu
    vault.forEach(wine => {
        const option = document.createElement("option");
        option.value = wine.id;
        option.textContent = `Deed Contract: ${wine.name}`;
        selector.appendChild(option);
    });

    // 2. Helper Function: Generates a simulated random SHA-256 style hash ID
    function generateMockHash(index) {
        const chars = "abcdef0123456789";
        let mockHash = "0x";
        for (let i = 0; i < 40; i++) {
            mockHash += chars[Math.floor(Math.random() * chars.length)];
        }
        return mockHash;
    }

    // 3. Timeline Rendering Core Engine
    function renderProvenanceChain(wineId) {
        const wine = vault.find(item => item.id === wineId);
        if (!wine) return;

        // Populate Static Metadata
        document.getElementById("ledger-asset-name").textContent = wine.name;
        document.getElementById("ledger-asset-id").textContent = `SECURE CONTRACT ID: GEN-${wine.id.toUpperCase()}`;

        const stream = document.getElementById("timeline-stream");
        stream.innerHTML = ""; // Wipe past visual tracking history cleanly

        // 4. Loop through the array of historical owners/locations inside db.js
        wine.provenance.forEach((location, index) => {
            const block = document.createElement("div");
            block.className = "ledger-block";

            // Create fake block dates counting backward from the current year 2026
            const simulatedYear = 2026 - (wine.provenance.length - 1 - index);

            // Generate structural internal HTML formatting for the block card
            block.innerHTML = `
                <div class="block-indicator"></div>
                <div class="block-content">
                    <div class="block-meta">
                        <span class="block-node">NODE #00${index + 1}</span>
                        <span class="block-timestamp">VERIFIED: DEC ${simulatedYear}</span>
                    </div>
                    <h3 class="block-location">${location}</h3>
                    <p class="block-hash">Block Cryptographic Signature:<br><code>${generateMockHash(index)}</code></p>
                    <div class="block-status">✓ Provenance Authenticated</div>
                </div>
            `;
            
            stream.appendChild(block);
        });
    }

    // 5. Reactive Event Handlers
    selector.addEventListener("change", (event) => {
        renderProvenanceChain(event.target.value);
    });

    // 6. Bootstrap Initial Setup State
    if (vault.length > 0) {
        renderProvenanceChain(vault[0].id);
    }
});