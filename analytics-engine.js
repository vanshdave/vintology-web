// js/analytics-engine.js
// The structural computation layer that maps database matrices to the visual UI.

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("wine-selector");
    const vault = window.WINE_VAULT; // Safely read from our central db.js script

    // 1. Structural Guard: Make sure the database exists before writing data
    if (!vault) {
        console.error("Critical Error: Core data asset matrix (db.js) failed to load.");
        return;
    }

    // 2. Populate Dropdown Options dynamically from our database array
    vault.forEach(wine => {
        const option = document.createElement("option");
        option.value = wine.id;
        option.textContent = wine.name;
        selector.appendChild(option);
    });

    // 3. Mathematical Vector Mapping Function to draw the asset trend line
    function renderAssetPerformance(wineId) {
        const wine = vault.find(item => item.id === wineId);
        if (!wine) return;

        // A. Inject raw string details cleanly into your display elements
        document.getElementById("stat-price").textContent = `$${wine.currentPrice.toLocaleString()}`;
        document.getElementById("stat-rarity").textContent = wine.rarityScore;
        document.getElementById("stat-category").textContent = wine.category;

        // B. Calculate Chart Scaling boundaries to make any pricing array fit beautifully
        const chart = document.getElementById("analytics-chart");
        const prices = wine.historicalPrices;
        
        const minPrice = Math.min(...prices) * 0.95; // Add clean padding to baseline floor
        const maxPrice = Math.max(...prices) * 1.05; // Add clean padding to ceiling roof
        const totalRange = maxPrice - minPrice;

        // C. Transform raw values into clean coordinate structures on our 500x200 graph grid
        const visualPoints = prices.map((price, index) => {
            const xCoord = 50 + (index * 100); // Spaces out our 5 data nodes evenly across 500px width
            
            // Scaled height calculation (Subtracting from 180 because SVG Y-axis 0 starts at the very top)
            const yCoord = 180 - ((price - minPrice) / totalRange) * 140; 
            return `${xCoord},${yCoord}`;
        }).join(" ");

        // D. Render vectors and grid markers directly onto the page layout
        chart.innerHTML = `
            <line x1="50" y1="30" x2="450" y2="30" stroke="#222" stroke-dasharray="4,4" />
            <line x1="50" y1="105" x2="450" y2="105" stroke="#222" stroke-dasharray="4,4" />
            <line x1="50" y1="180" x2="450" y2="180" stroke="#333" stroke-width="1.5" />
            
            <polyline points="${visualPoints}" fill="none" stroke="#d4af37" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            
            ${prices.map((price, index) => {
                const xCoord = 50 + (index * 100);
                const yCoord = 180 - ((price - minPrice) / totalRange) * 140;
                return `
                    <circle cx="${xCoord}" cy="${yCoord}" r="5" fill="#111" stroke="#d4af37" stroke-width="2.5" />
                    <text x="${xCoord}" y="${yCoord - 15}" fill="#888" font-size="11" font-family="sans-serif" text-anchor="middle">$${price}</text>
                `;
            }).join("")}
        `;
    }

    // 4. Reactive Event Handler Interface
    selector.addEventListener("change", (event) => {
        renderAssetPerformance(event.target.value);
    });

    // 5. Initial Boot Sequence: Load dashboard variables for the first item on startup
    if (vault.length > 0) {
        renderAssetPerformance(vault[0].id);
    }
});