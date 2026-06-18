const wineInventory = [
    { id: "1", name: "Château Lafite Rothschild", year: 1982, region: "Pauillac, Bordeaux", price: 9900, image: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "2", name: "Krug Clos d'Ambonnay", year: 1996, region: "Champagne", price: 3715, image: "https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "3", name: "Tenuta San Guido Sassicaia", year: 1985, region: "Tuscany", price: 3150, image: "https://images.pexels.com/photos/2912196/pexels-photo-2912196.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "4", name: "Dom Pérignon P2 Plénitude", year: 2004, region: "Champagne", price: 550, image: "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "5", name: "Château d'Yquem", year: 2001, region: "Sauternes, Bordeaux", price: 850, image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "6", name: "Opus One Proprietary Red", year: 2018, region: "Napa Valley", price: 420, image: "https://images.pexels.com/photos/1545529/pexels-photo-1545529.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "7", name: "Penfolds Grange G4", year: 2016, region: "South Australia", price: 3200, image: "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "8", name: "Vega Sicilia Unico", year: 2010, region: "Ribera del Duero", price: 490, image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "9", name: "Screaming Eagle Cabernet", year: 2015, region: "Napa Valley", price: 4600, image: "https://images.pexels.com/photos/2308939/pexels-photo-2308939.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "10", name: "Château Margaux Grand Vin", year: 1996, region: "Margaux, Bordeaux", price: 1250, image: "https://images.pexels.com/photos/2042214/pexels-photo-2042214.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "11", name: "Louis Roederer Cristal Rosé", year: 2012, region: "Champagne", price: 620, image: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "12", name: "Masseto Toscana IGT", year: 2015, region: "Tuscany", price: 950, image: "https://images.pexels.com/photos/1479706/pexels-photo-1479706.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "13", name: "Domaine de la Romanée-Conti", year: 2010, region: "Burgundy", price: 18500, image: "https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "14", name: "Château Mouton Rothschild", year: 2000, region: "Pauillac, Bordeaux", price: 2400, image: "https://images.pexels.com/photos/2684160/pexels-photo-2684160.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "15", name: "Salon Le Mesnil Blanc de Blancs", year: 2002, region: "Champagne", price: 1100, image: "https://images.pexels.com/photos/8455216/pexels-photo-8455216.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "16", name: "Harlan Estate Red", year: 2016, region: "Napa Valley", price: 1350, image: "https://images.pexels.com/photos/5947113/pexels-photo-5947113.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "17", name: "Petrus Pomerol", year: 2005, region: "Pomerol, Bordeaux", price: 4800, image: "https://images.pexels.com/photos/12132410/pexels-photo-12132410.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "18", name: "Cheval Blanc", year: 1990, region: "Saint-Émilion, Bordeaux", price: 1650, image: "https://images.pexels.com/photos/6006154/pexels-photo-6006154.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "19", name: "Biondi-Santi Brunello Riserva", year: 2012, region: "Tuscany", price: 580, image: "https://images.pexels.com/photos/8455122/pexels-photo-8455122.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: "20", name: "Egon Müller Scharzhofberger", year: 2018, region: "Mosel", price: 1150, image: "https://images.pexels.com/photos/5137072/pexels-photo-5137072.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

window.wineInventory = wineInventory;

function renderInventoryGrid() {
    const container = document.getElementById("productGridContainer");
    if (!container) return;

    container.innerHTML = wineInventory.map(wine => `
        <!-- Card triggers details page wrapper view on tap -->
        <div class="product-card" onclick="launchProductProfile('${wine.id}')">
            <div class="product-image-container">
                <img src="${wine.image}" alt="${wine.name}">
            </div>
            <h4>${wine.name}</h4>
            <p class="product-meta">Vintage: ${wine.year} | ${wine.region}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
                <p class="product-price">$${wine.price.toLocaleString()} USD</p>
                
                <!-- stopPropagation prevents button click event from bubbling up and opening the profile twice -->
                <button class="btn" 
                        onclick="event.stopPropagation(); addToCart('${wine.id}')" 
                        style="width: auto; 
                               background: transparent; 
                               border: 1px solid var(--accent-gold); 
                               color: var(--text-primary); 
                               padding: 10px 20px; 
                               font-family: var(--font-sans); 
                               font-size: 10px; 
                               font-weight: 500;
                               letter-spacing: 2px; 
                               text-transform: uppercase; 
                               cursor: pointer; 
                               transition: all 0.3s ease;"
                        onmouseover="this.style.backgroundColor='var(--accent-gold)'; this.style.color='#000000';"
                        onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text-primary)';">
                    ACQUIRE ASSET
                </button>
            </div>
        </div>
    `).join('');
}

function launchProductProfile(id) {
    const wine = wineInventory.find(w => w.id === id);
    if (!wine) return;

    // Optional dynamic data extensions for premium depth
    const investmentScore = wine.price > 5000 ? "99/100 (Investment Grade)" : "97/100 (High Allocation)";
    const availability = wine.price > 4000 ? "Vault Restricted (1 of 3 Available)" : "Highly Allocated Asset";
    const structuralProfile = wine.name.includes("Château") || wine.name.includes("Tenuta") || wine.name.includes("Screaming") 
        ? "Deep ruby crimson, structured tannins, refined oak architecture." 
        : "Brilliant gold, persistent effervescence, complex brioche and mineral tension.";

    document.getElementById("productGridContainer").style.display = "none";
    document.getElementById("vaultTitle").style.display = "none";
    
    const detailPanel = document.getElementById("activeDetailView");
    detailPanel.style.display = "block";
    detailPanel.style.maxWidth = "1200px";
    detailPanel.style.margin = "0 auto";
    detailPanel.style.padding = "40px 20px";

    detailPanel.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 60px; align-items: start;">
            <div style="background-color: var(--bg-obsidian); border: 1px solid var(--border-subtle); padding: 40px; text-align: center;">
                <img src="${wine.image}" alt="${wine.name}" style="max-width: 100%; max-height: 500px; object-fit: contain;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 24px; text-align: left;">
                <a href="#" onclick="closeProductProfile(); return false;" style="color: var(--accent-gold); text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">← Return to Vault</a>
                <div>
                    <div style="font-size: 11px; letter-spacing: 3px; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 8px;">✦ Verified Provenance Asset</div>
                    <h1 style="font-family: var(--font-serif); font-size: 36px; letter-spacing: 2px; line-height: 1.2; margin: 0 0 8px 0;">${wine.name}</h1>
                    <div style="font-family: var(--font-serif); font-size: 20px; color: var(--text-muted);">Vintage ${wine.year}</div>
                </div>
                
                <!-- EXPANDED METADATA TABLE CONTAINER -->
                <div style="border-top: 1px solid var(--border-subtle); padding-top: 8px;">
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; letter-spacing: 1px;">
                        <span style="color: var(--text-muted); text-transform: uppercase;">Territory</span>
                        <span style="color: var(--text-primary); font-weight: 400;">${wine.region}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; letter-spacing: 1px;">
                        <span style="color: var(--text-muted); text-transform: uppercase;">Critic Appraisal</span>
                        <span style="color: var(--accent-gold); font-weight: 500;">${investmentScore}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; letter-spacing: 1px;">
                        <span style="color: var(--text-muted); text-transform: uppercase;">Allocation Status</span>
                        <span style="color: var(--text-primary); font-weight: 400;">${availability}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 12px; letter-spacing: 1px;">
                        <span style="color: var(--text-muted); text-transform: uppercase;">Structural Profile</span>
                        <span style="color: var(--text-muted); font-weight: 300; font-style: italic; max-width: 60%; text-align: right;">${structuralProfile}</span>
                    </div>
                </div>

                <!-- ENRICHED NARRATIVE DESCRIPTION AREA -->
                <div style="margin: 8px 0; display: flex; flex-direction: column; gap: 14px;">
                    <p style="font-size: 14px; line-height: 1.8; color: var(--text-primary); font-weight: 300; margin: 0;">
                        An extraordinary monument of viticulture preserved inside our regulated asset vault ecosystem. This historic release showcases remarkable structural resilience, pristine aromatic development, and impeccable cellaring lineage.
                    </p>
                    <p style="font-size: 13px; line-height: 1.7; color: var(--text-muted); font-weight: 300; margin: 0;">
                        Acquisition establishes physical deed assignment. Storage maintains exact temperature equilibrium ($12^\circ\text{C}$ to $14^\circ\text{C}$ at $65\%$ relative humidity) with continuous security telemetry.
                    </p>
                </div>
                
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px; border-top: 1px solid var(--border-subtle); padding-top: 24px;">
                    <div style="font-family: var(--font-serif); font-size: 24px; color: var(--accent-gold); font-weight: 400;">$${wine.price.toLocaleString()} USD</div>
                    <button class="btn" onclick="addToCart('${wine.id}')" style="width: auto; padding: 16px 36px; background-color: transparent; border: 1px solid var(--accent-gold); color: var(--text-primary); cursor: pointer; text-transform: uppercase; font-size: 11px; letter-spacing: 2px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='var(--accent-gold)'; this.style.color='#000000';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--text-primary)';">ACQUIRE ASSET</button>
                </div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeProductProfile() {
    document.getElementById("activeDetailView").style.display = "none";
    document.getElementById("vaultTitle").style.display = "block";
    document.getElementById("productGridContainer").style.display = "grid";
}

// Export functions to global scope
window.launchProductProfile = launchProductProfile;
window.closeProductProfile = closeProductProfile;

document.addEventListener("DOMContentLoaded", renderInventoryGrid);