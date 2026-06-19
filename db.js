// js/db.js
// This is the absolute single source of truth for all Vintology assets.

const WINE_VAULT = [
    {
        id: "vint-01",
        name: "Château Lafite Rothschild 1982",
        category: "Bordeaux Red",
        currentPrice: 4200,
        historicalPrices: [2800, 3100, 3500, 3900, 4200], // Used for your upcoming Analytics graph
        rarityScore: "99/100",
        provenance: ["Winery Release", "London Cellar", "Vintology Vault"] // Used for your upcoming Ledger
    },
    {
        id: "vint-02",
        name: "Dom Pérignon Rose Gold 2002",
        category: "Champagne",
        currentPrice: 2500,
        historicalPrices: [1900, 2100, 2200, 2400, 2500],
        rarityScore: "96/100",
        provenance: ["Épernay Release", "Hong Kong Storage", "Vintology Vault"]
    },
    {
        id: "vint-03",
        name: "Masseto Toscana 2015",
        category: "Tuscan Merlot",
        currentPrice: 1100,
        historicalPrices: [850, 920, 990, 1050, 1100],
        rarityScore: "94/100",
        provenance: ["Bolgheri Estate", "Milan Collection", "Vintology Vault"]
    }
];

// This makes the data safely accessible to all our other scripts
window.WINE_VAULT = WINE_VAULT;